from rest_framework import serializers

from .models import Store


class StoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Store
        fields = ["id", "name", "description", "address", "phone", "email", "website", "category", "user"]
        extra_kwargs = {"user": {"read_only": True}}
