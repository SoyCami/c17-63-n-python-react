from typing import List

from django.urls import include, path
from rest_framework import routers

from .views import EventCategoryViewSet, EventRegisteredUserViewSet, EventReviewViewSet, EventViewSet, InterestsViewSet

router = routers.DefaultRouter()
router.register(r"event_categories", EventCategoryViewSet)
router.register(r"events", EventViewSet)
router.register(r"event_registered_users", EventRegisteredUserViewSet)
router.register(r"event_reviews", EventReviewViewSet)
router.register(r"user_interests", InterestsViewSet)

urlpatterns: List[str] = [
    path("", include(router.urls)),
]
