from django.contrib.auth.models import Group
from django.db.models.signals import post_migrate, post_save
from django.dispatch import receiver

from .models import User


@receiver(post_migrate)
def create_user_groups(sender, **kwargs):
    try:
        Group.objects.get_or_create(name="Customer")
        Group.objects.get_or_create(name="Seller")
        Group.objects.get_or_create(name="Organizer")
    except BaseException:
        pass


@receiver(post_save, sender=User)
def add_user_to_group(sender, instance, created, **kwargs):
    if instance.user_type == "1":  # For customers
        instance.groups.add(Group.objects.get(name="Customer"))

    elif instance.user_type == "2":  # For sellers
        instance.groups.add(Group.objects.get(name="Seller"))

    else:  # For organizers
        instance.groups.add(Group.objects.get(name="Organizer"))
