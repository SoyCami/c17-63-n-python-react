from django.core.exceptions import ObjectDoesNotExist
from django.db.models import Q
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.exceptions import PermissionDenied
from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.response import Response

from .models import Event, EventCategory, EventRegisteredUser, EventReview, Interests
from ..base.permissions import IsCustomerUser, IsOrganizerUser
from .serializers import (
    EventCategorySerializer,
    EventRegisteredUserSerializer,
    EventRegisteredUserWriteSerializer,
    EventReviewSerializer,
    EventReviewWriteSerializer,
    EventSerializer,
    EventWriteSerializer,
    InterestsSerializer,
    InterestsWriteSerializer,
)


class EventCategoryViewSet(viewsets.ModelViewSet):
    queryset = EventCategory.objects.all()
    serializer_class = EventCategorySerializer

    def get_permissions(self):
        # check the action and return the permission class accordingly
        if self.action in ["create", "update", "partial_update", "destroy"]:
            return [
                IsAuthenticated(),
                IsOrganizerUser(),
            ]
        return [
            IsAuthenticatedOrReadOnly(),
        ]


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    parser_classes = (MultiPartParser, FormParser)

    def get_permissions(self):
        if self.action in ["create", "update", "partial_update", "destroy"]:
            return [
                IsAuthenticated(),
                IsOrganizerUser(),
            ]
        elif self.action == "list_by_interests":
            return [IsAuthenticated(), IsCustomerUser()]
        return [
            IsAuthenticatedOrReadOnly(),
        ]

    def get_serializer_class(self):
        if self.action in ["create", "update", "partial_update"]:
            return EventWriteSerializer
        return EventSerializer

    def perform_create(self, serializer):
        serializer.save(event_organizer=self.request.user)

    def update(self, request, *args, **kwargs):
        event = self.get_object()
        if request.user.is_superuser or event.event_organizer == request.user:
            return super().update(request, *args, **kwargs)
        else:
            raise PermissionDenied("Solo el organizador puede editar este evento.")

    def destroy(self, request, *args, **kwargs):
        event = self.get_object()
        if request.user.is_superuser or event.event_organizer == request.user:
            return super().destroy(request, *args, **kwargs)
        else:
            raise PermissionDenied("Solo el organizador puede eliminar este evento.")

    @action(detail=False, methods=["get"])
    def list_by_interests(self, request):
        try:
            user_interests = request.user.interests
        except ObjectDoesNotExist as e:
            print(e)
            queryset = Event.objects.all()
            serializer = EventSerializer(queryset, many=True)
            return Response(serializer.data)

        queryset = Event.objects.filter(
            Q(event_category=user_interests.interest_1) | Q(event_category=user_interests.interest_2) |
            Q(event_category=user_interests.interest_3)
        )

        serializer = EventSerializer(queryset, many=True)
        return Response(serializer.data)


class EventRegisteredUserViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = EventRegisteredUser.objects.all()

    def get_serializer_class(self):
        if self.action in ["create", "update", "partial_update"]:
            return EventRegisteredUserWriteSerializer
        return EventRegisteredUserSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def update(self, request, *args, **kwargs):
        user = self.get_object()
        if user.user == request.user:
            return super().update(request, *args, **kwargs)
        else:
            raise PermissionDenied("Solo el autor puede editar esta inscripción.")

    def destroy(self, request, *args, **kwargs):
        user = self.get_object()
        if request.user.is_superuser or user.user == request.user:
            return super().destroy(request, *args, **kwargs)
        else:
            raise PermissionDenied("Solo el autor puede eliminar esta inscripción.")


class EventReviewViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = EventReview.objects.all()
    serializer_class = EventReviewSerializer

    def get_serializer_class(self):
        if self.action in ["create", "update", "partial_update"]:
            return EventReviewWriteSerializer
        return EventReviewSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def update(self, request, *args, **kwargs):
        review = self.get_object()
        if review.user == request.user:
            return super().update(request, *args, **kwargs)
        else:
            raise PermissionDenied("Solo el autor puede editar esta reseña.")

    def destroy(self, request, *args, **kwargs):
        review = self.get_object()
        if request.user.is_superuser or review.user == request.user:
            return super().destroy(request, *args, **kwargs)
        else:
            raise PermissionDenied("Solo el autor puede eliminar esta reseña.")


class InterestsViewSet(viewsets.ModelViewSet):
    queryset = Interests.objects.all()
    serializer_class = InterestsSerializer
    permission_classes = [IsCustomerUser]

    def get_serializer_class(self):
        if self.action in ["create", "update", "partial_update"]:
            return InterestsWriteSerializer
        return InterestsSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def update(self, request, *args, **kwargs):
        user = self.get_object()
        if user.user == request.user:
            return super().update(request, *args, **kwargs)
        else:
            raise PermissionDenied("Solo el usuario puede editar sus intereses.")

    def destroy(self, request, *args, **kwargs):
        user = self.get_object()
        if request.user.is_superuser or user.user == request.user:
            return super().destroy(request, *args, **kwargs)
        else:
            raise PermissionDenied("Solo el usuario puede eliminar sus intereses.")
