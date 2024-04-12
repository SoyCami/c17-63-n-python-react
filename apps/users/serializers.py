from rest_framework import serializers

from apps.users.models import User


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ["id", "email", "name", "last_name", "phone", "password", "user_type", "username"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User(**validated_data)
        user.set_password(validated_data["password"])
        user.save()
        return user


class ChangePasswordSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    re_password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ["id", "password", "re_password"]

    def validate(self, attrs):
        if attrs["password"] != attrs["re_password"]:
            raise serializers.ValidationError("Passwords do not match")
        return attrs

    def update(self, instance, validated_data):
        del validated_data["re_password"]
        instance.set_password(validated_data["password"])
        instance.save()
        return instance


class UpdateProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ["id", "name", "last_name", "phone"]
