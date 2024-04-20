from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models

USER_TYPE = (("1", "CUSTOMER"), ("2", "SELLER"), ("3", "ORGANIZER"))

GENDER_CHOICES = (("1", "MALE"), ("2", "FEMALE"), ("3", "PREFER NOT TO SAY"))


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
    phone = models.CharField("Phone", max_length=20, null=True)
    age = models.IntegerField("Age", null=True)
    gender = models.CharField("Gender", max_length=10, choices=GENDER_CHOICES, null=True)
    occupation = models.CharField("Occupation", max_length=64, null=True)
    bio = models.TextField("Bio", null=True)
    event_picture = models.ImageField(upload_to="profiles/")
    has_selected_categories = models.BooleanField(default=False)

    # Location information
    country_code = models.CharField("Country Code", max_length=2, null=True)
    country_name = models.CharField("Name", max_length=64, null=True)
    ip_location = models.CharField("Relative IP location", max_length=64, null=True)

    # Social Network Details
    linkedin_url = models.URLField("Linkedin", max_length=255, null=True)
    facebook_url = models.URLField("Facebook", max_length=255, null=True)
    twitter_url = models.URLField("Twitter", max_length=255, null=True)
    instagram_url = models.URLField("Instagram", max_length=255, null=True)
    youtube_url = models.URLField("Youtube", max_length=255, null=True)

    # Permissions on social network details
    allow_show_linkedin_url = models.BooleanField(default=True)
    allow_show_facebook_url = models.BooleanField(default=True)
    allow_show_twitter_url = models.BooleanField(default=True)
    allow_show_instagram_url = models.BooleanField(default=True)
    allow_show_youtube_url = models.BooleanField(default=True)

    #

    last_seen = models.DateTimeField(blank=True, null=True)
    objects = CustomUserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["name", "last_name"]

    def __str__(self):
        return self.email

    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"
