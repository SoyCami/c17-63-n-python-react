from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import StoreViewSet

router = DefaultRouter()
router.register(r"user", StoreViewSet, "users")

urlpatterns = [
    path("stores/", include(router.urls)),
]
