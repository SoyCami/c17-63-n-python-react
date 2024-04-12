from rest_framework import serializers
from .models import Event, EventCategory, EventRegisteredUser, EventReview

class EventCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = EventCategory
        fields = '__all__'

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        exclude = ['event_organizer']

class EventRegisteredUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventRegisteredUser
        exclude = ['user']

class EventReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventReview
        exclude =['user','date']