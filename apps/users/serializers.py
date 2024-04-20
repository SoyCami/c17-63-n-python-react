from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from rest_framework import serializers

from .models import User
from .utils.gen_words import generate_random_username


class UserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(required=False)
    has_selected_categories = serializers.BooleanField(read_only=True, required=False)

    class Meta:
        model = User
        fields = [
            "id", "email", "name", "last_name", "phone", "password", "user_type", "username", "has_selected_categories"
        ]
        extra_kwargs = {"password": {"write_only": True}, "user_type": {"read_only": True}}

    def create(self, validated_data):
        user = User(**validated_data)
        if not user.username:
            user.username = generate_random_username()
        user.set_password(validated_data["password"])
        user.save()
        return user


class RecoverPasswordSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(write_only=True)
    password = serializers.CharField(write_only=True)
    re_password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ["id", "email", "password", "re_password"]

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
        fields = "__all__"


class LoginUserSerializer(serializers.ModelSerializer):
    email = serializers.CharField(write_only=True)
    password = serializers.CharField(write_only=True)
    user_type = serializers.CharField(read_only=True)
    username = serializers.CharField(read_only=True)
    name = serializers.CharField(read_only=True)
    last_name = serializers.CharField(read_only=True)
    phone = serializers.CharField(read_only=True)

    def validate(self, data):
        email_or_username: str = data.get("email").lower()
        password: str = data.get("password")

        if email_or_username and password:
            try:
                validate_email(email_or_username)
                user: User = User.objects.filter(email=email_or_username).first()
            except ValidationError:
                user: User = User.objects.filter(username=email_or_username).first()

            if user and user.check_password(password):
                data["user"] = user
                return data

            raise serializers.ValidationError("Invalid Credentials")

        raise serializers.ValidationError("Credentials are required")

    class Meta:
        model = User
        fields = ["id", "email", "name", "last_name", "phone", "password", "user_type", "username"]
        extra_kwargs = {"id": {"read_only": True}}
