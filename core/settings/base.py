import os
import sys
from pathlib import Path
from typing import List

# from django.apps import AppConfig
from dotenv import load_dotenv

# AppConfig.default = False
# Build paths inside the project like this: BASE_DIR / "subdir".
BASE_DIR = Path(__file__).resolve().parent.parent

# Append the path of the "apps" folder to sys.path so that the apps can be imported correctly.
APPS_DIR = os.path.abspath(os.path.join(BASE_DIR, os.pardir, "apps"))
sys.path.append(str(APPS_DIR))

load_dotenv(dotenv_path=BASE_DIR.parent.joinpath(".env"))


def getenv(name: str, default=None):
    if default is None and name not in os.environ:
        raise ValueError(f"Missing environment variable: {name}")

    return os.getenv(name, default)


SECRET_KEY = getenv("DJANGO_SECRET_KEY")

ALLOWED_HOSTS = ["*"]

# Application definition
DEFAULT_APPS: List[str] = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
]

LOCAL_APPS: List[str] = [
    "events.apps.EventsConfig",
    "users.apps.UsersConfig",
    "stores.apps.StoresConfig",
]

THIRD_PARTY_APPS: List[str] = [
    "rest_framework",
    "rest_framework.authtoken",
    "corsheaders",
    "drf_spectacular",
]

INSTALLED_APPS: List[str] = DEFAULT_APPS + LOCAL_APPS + THIRD_PARTY_APPS

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "corsheaders.middleware.CorsMiddleware",
]

ROOT_URLCONF = "core.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [BASE_DIR / "templates"],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "core.wsgi.application"
# Database
# https://docs.djangoproject.com/en/5.0/ref/settings/#databases

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql_psycopg2",
        "NAME": getenv("DJANGO_DATABASE_NAME", "db_name"),
        "USER": getenv("DJANGO_DATABASE_USER", "db_user"),
        "PASSWORD": getenv("DJANGO_DATABASE_PASSWORD", "123456"),
        "HOST": getenv("DJANGO_DATABASE_HOST", "database"),
        "PORT": getenv("DJANGO_DATABASE_PORT", "5432"),
    }
}

# Password validation
# https://docs.djangoproject.com/en/5.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]

# USER FIELD
AUTH_USER_MODEL = "users.User"

CORS_ALLOW_ALL_ORIGINS = True
# Internationalization
# https://docs.djangoproject.com/en/5.0/topics/i18n/

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

STATIC_URL = "static/"
STATIC_ROOT = "static"

MEDIA_ROOT = os.path.join(BASE_DIR, "media")
MEDIA_URL = "/media/"

# Default primary key field type
# https://docs.djangoproject.com/en/5.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

REST_FRAMEWORK = {
    "DEFAULT_SCHEMA_CLASS": "drf_spectacular.openapi.AutoSchema",
    "DEFAULT_AUTHENTICATION_CLASSES": ["rest_framework.authentication.TokenAuthentication"],
}

SPECTACULAR_SETTINGS = {
    "TITLE": "CORE BACKEND API",
    "DESCRIPTION": "ENGINE BEHIND OUR SYSTEM",
    "VERSION": "0.1.0",
    "SERVE_INCLUDE_SCHEMA": False,
    "SCHEMA_PATH_PREFIX": "/api/v1/",
    "SWAGGER_UI_SETTINGS": {
        "deepLinking": True,
        # "displayOperationId": True,
    },
}
