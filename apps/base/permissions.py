from rest_framework import permissions


class IsOrganizerUser(permissions.BasePermission):
    message = "Solo los organizadores pueden realizar esta acción."

    def has_permission(self, request, view):
        return request.user.groups.filter(name="Organizer").exists() or request.user.is_superuser


class IsCustomerUser(permissions.BasePermission):
    message = "Solo los usuarios pueden realizar esta acción."

    def has_permission(self, request, view):
        return request.user.groups.filter(name="Customer").exists() or request.user.is_superuser
