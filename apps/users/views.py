from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import User
from .serializers import ChangePasswordSerializer, UpdateProfileSerializer, UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @action(methods=["POST"], detail=False)
    def register(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(methods=["POST"], detail=False)
    def login(self, request):
        email: str = request.data["email"].lower()
        user: User = User.objects.filter(email=email).first()

        if user and user.check_password(request.data["password"]):
            serializer = UserSerializer(user)
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response({"message": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)

    @action(methods=["POST"], detail=False)
    def logout(self, request):
        pass

    @action(methods=["POST"], detail=False)
    def change_password(self, request):
        user = User.objects.get(id=request.data["id"])
        new_serializer = ChangePasswordSerializer(user, data=request.data)
        if new_serializer.is_valid(raise_exception=True):
            new_serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)

        return Response(new_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(methods=["PUT"], detail=False)
    def update_profile(self, request):
        user = User.objects.get(id=request.data["id"])
        serializer = UpdateProfileSerializer(user, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
