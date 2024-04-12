from django.db.models.signals import post_migrate
from django.dispatch import receiver
from django.contrib.auth.models import Group

@receiver(post_migrate)
def create_user_groups(sender, **kwargs):
    try:
        Group.objects.get_or_create(name='Customer')
        Group.objects.get_or_create(name='Seller')
        Group.objects.get_or_create(name='Organizer')
    except:
        pass
