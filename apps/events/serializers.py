from rest_framework import serializers

from .models import Event, EventCategory, EventRegisteredUser, EventReview, Interests


class EventCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = EventCategory
        fields = "__all__"


class InterestsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Interests
        fields = "__all__"


class InterestsWriteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Interests
        exclude = ["user"]


class EventSerializer(serializers.ModelSerializer):

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
