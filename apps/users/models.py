from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models

USER_TYPE = (("1", "CUSTOMER"), ("2", "SELLER"), ("3", "ORGANIZER"))


class CustomUserManager(BaseUserManager):

    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        email = email.lower()
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        user = self.create_user(email, password=password, **extra_fields)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser, PermissionsMixin):
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(blank=True, null=True, editable=False)

    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField("Is Staff", default=False)

    user_type = models.CharField(default="1", choices=USER_TYPE, max_length=1)
    name = models.CharField("Nombres", max_length=200)
    last_name = models.CharField("Apellidos", max_length=50)
    email = models.EmailField("Email", max_length=255, unique=True, db_index=True)
    username = models.CharField("Username", max_length=255, unique=True, db_index=True)
    phone = models.CharField("Phone", max_length=20, blank=True, null=True)
    event_picture = models.ImageField(upload_to="profiles/")
    last_seen = models.DateTimeField(blank=True, null=True)
    objects = CustomUserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["name", "last_name"]

    def __str__(self):
        return self.email

    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"
