from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Store
from .serializers import StoreSerializer


# Create your views here.
class StoreViewSet(viewsets.ModelViewSet):
    serializer_class = StoreSerializer
