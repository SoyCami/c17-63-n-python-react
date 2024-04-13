from rest_framework import permissions


class IsOrganizerUser(permissions.BasePermission):
    message = "Solo los organizadores pueden realizar esta acción."

    def has_permission(self, request, view):
        return request.user.groups.filter(name="Organizer").exists() or request.user.is_superuser


class IsCostumerUser(permissions.BasePermission):
    message = "Solo los usuarios pueden realizar esta acción."

    def has_permission(self, request, view):
        return request.user.groups.filter(name="Costumer").exists() or request.user.is_superuser
