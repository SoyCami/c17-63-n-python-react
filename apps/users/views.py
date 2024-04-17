from drf_spectacular.types import OpenApiTypes
from drf_spectacular.utils import OpenApiParameter, extend_schema
from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from .models import User
from .serializers import LoginUserSerializer, RecoverPasswordSerializer, UpdateProfileSerializer, UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @extend_schema(description="Endpoint para el registro de un nuevo usuario", responses={201: UserSerializer})
    @action(methods=["POST"], detail=False)
    def register(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @extend_schema(
        description="Endpoint para el login de un usuario",
        request=LoginUserSerializer,
        responses={200: UserSerializer},
    )
    @action(methods=["POST"], detail=False)
    def login(self, request):
        serializer = LoginUserSerializer(data=request.data)

        if serializer.is_valid():
            user = serializer.validated_data["user"]
            token, _ = Token.objects.get_or_create(user=user)
            serializer = UserSerializer(user)
            return Response({"data": serializer.data, "token": token.key}, status=status.HTTP_200_OK)

        return Response({"message": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)

    # TODO
    @extend_schema(description="Endpoint para el logout de un usuario", responses={200 | 500: None})
    @action(methods=["POST"], detail=False, permission_classes=[IsAuthenticated])
    def logout(self, request):
        try:
            # Delete the user's token to logout
            request.user.auth_token.delete()
            return Response(status=status.HTTP_200_OK)
        except Exception:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    @extend_schema(
        description="Endpoint para recuperar la contraseña de un usuario",
        request=RecoverPasswordSerializer,
        responses={204: None}
    )
    @action(methods=["POST"], detail=False)
    def recover_password(self, request):
        user = User.objects.filter(email=request.data["email"]).first()
        new_serializer = RecoverPasswordSerializer(user, data=request.data)
        if new_serializer.is_valid(raise_exception=True):
            new_serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)

        return Response(new_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # TODO
    @action(methods=["PUT"], detail=False)
    def update_profile(self, request):
        user = User.objects.get(id=request.data["id"])
        serializer = UpdateProfileSerializer(user, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @extend_schema(
        description="Endpoint para consulta de un email",
        parameters=[
            OpenApiParameter("email", OpenApiTypes.EMAIL, OpenApiParameter.QUERY),
        ],
        responses={200 | 401: None}
    )
    @action(methods=["GET"], detail=False)
    def query_email(self, request):
        email = request.query_params["email"]
        user = User.objects.filter(email=email).exists()
        if user:
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_404_NOT_FOUND)

    @extend_schema(
        "Endpoint para consulta de un username",
        parameters=[
            OpenApiParameter("username", OpenApiTypes.STR, OpenApiParameter.QUERY),
        ],
        responses={200 | 401: None}
    )
    @action(methods=["GET"], detail=False)
    def query_username(self, request):
        username = request.query_params["username"]
        user = User.objects.filter(username=username).exists()
        if user:
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_404_NOT_FOUND)
