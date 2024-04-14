from django.db import models
from django.utils import timezone


class BaseQuerySet(models.QuerySet):

    def delete(self):
        # set to soft deletion
        return super(BaseQuerySet, self).update(deleted_at=timezone.now())

    def force_delete(self):
        # makes hard deletion
        return super(BaseQuerySet, self).delete()

    def trashed(self):
        # Queryset only for deleted items
        return self.exclude(deleted_at=None)


class BaseManager(models.Manager):

    def __init__(self, *args, **kwargs):
        self.with_trashed = kwargs.pop("with_trashed", False)
        self.only_trashed = kwargs.pop("only_trashed", False)
        super(BaseManager, self).__init__(*args, **kwargs)

    def get_queryset(self):
        if self.only_trashed:
            return BaseQuerySet(self.model).exclude(deleted_at=None)
        if not self.with_trashed:
            return BaseQuerySet(self.model).filter(deleted_at=None)
        return BaseQuerySet(self.model)

    def force_delete(self):
        return self.get_queryset().force_delete()

    def deleted_queryset(self):
        return BaseQuerySet(self.model).exclude(deleted_at__isnull=True)

    def complete_queryset(self):
        return BaseQuerySet(self.model).all()


class BaseModel(models.Model):
    objects = BaseManager()
    all_objects = BaseManager(with_trashed=True, only_trashed=False)
    trashed_objects = BaseManager(only_trashed=True, with_trashed=False)

    # attributes
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(blank=True, null=True, editable=False)

    def delete(self, using=None, keep_parents=False):
        self.deleted_at = timezone.now()
        self.save(using=using)

    def force_delete(self, using=None, keep_parents=False):
        super(BaseModel, self).delete(using=using, keep_parents=keep_parents)

    def is_trashed(self):
        return self.deleted_at is not None

    def restore(self):
        self.deleted_at = None
        return self.save()

    class Meta:
        abstract = True
