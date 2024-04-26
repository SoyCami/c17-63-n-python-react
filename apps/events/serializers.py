from rest_framework import serializers
from users.serializers import UserSerializer

from .models import Event, EventCategory, EventRegisteredUser, EventReview, Interests


class EventCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = EventCategory
        exclude = ["created_at", "updated_at", "deleted_at"]


class InterestsSerializer(serializers.ModelSerializer):
    interest_1 = EventCategorySerializer(read_only=True)
    interest_2 = EventCategorySerializer(read_only=True)
    interest_3 = EventCategorySerializer(read_only=True)

    class Meta:
        model = Interests
        fields = "__all__"


class InterestsWriteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Interests
        exclude = ["user"]


class EventSerializer(serializers.ModelSerializer):
    event_organizer = UserSerializer(read_only=True)
    event_category = EventCategorySerializer(read_only=True)

    class Meta:
        model = Event
        fields = "__all__"


class EventWriteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Event
        exclude = ["event_organizer"]


class EventRegisteredUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = EventRegisteredUser
        fields = "__all__"


class EventRegisteredUserWriteSerializer(serializers.ModelSerializer):

    class Meta:
        model = EventRegisteredUser
        exclude = ["user"]


class EventReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = EventReview
        fields = "__all__"


class EventReviewWriteSerializer(serializers.ModelSerializer):

    class Meta:
        model = EventReview
        exclude = ["user"]
