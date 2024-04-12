from rest_framework import viewsets
from .models import EventCategory, Event, EventRegisteredUser, EventReview
from .serializers import EventCategorySerializer, EventSerializer, EventRegisteredUserSerializer, EventReviewSerializer
from rest_framework.permissions import IsAuthenticated, DjangoModelPermissions
from rest_framework.exceptions import PermissionDenied
from rest_framework import permissions

# Permissions
class IsOrganizerUser(permissions.BasePermission):
    message = 'Solo los organizadores pueden realizar esta acción.'

    def has_permission(self, request, view):
        return request.user.groups.filter(name='Organizer').exists() or request.user.is_superuser


# Views

class EventCategoryViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated, IsOrganizerUser]
    queryset = EventCategory.objects.all()
    serializer_class = EventCategorySerializer


class EventViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    def get_permissions(self):
        if self.action in ['create', 'update', 'destroy']:
            return [permission() for permission in [IsAuthenticated, IsOrganizerUser]]
        else:
            return [permission() for permission in [IsAuthenticated]]
    
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


class EventRegisteredUserViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = EventRegisteredUser.objects.all()
    serializer_class = EventRegisteredUserSerializer

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
    permission_classes = [IsAuthenticated]
    queryset = EventReview.objects.all()
    serializer_class = EventReviewSerializer

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
   