from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import UserViewSet

router = DefaultRouter()
router.register(r"user", UserViewSet, "users")

urlpatterns = [
    path("users/", include(router.urls)),
]
