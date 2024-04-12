from django.urls import path, include
from rest_framework import routers
from .views import EventCategoryViewSet, EventViewSet, EventRegisteredUserViewSet, EventReviewViewSet
from typing import List

router = routers.DefaultRouter()
router.register(r'event_categories', EventCategoryViewSet)
router.register(r'events', EventViewSet)
router.register(r'event_registered_users', EventRegisteredUserViewSet)
router.register(r'event_reviews', EventReviewViewSet)

urlpatterns: List[str] = [
    path('', include(router.urls)),
]
