from django.shortcuts import render
from rest_framework import viewsets
from .models import Desmatamento
from .serializers import DesmatamentoSerializer

class DesmatamentoViewSet(viewsets.ModelViewSet):
    queryset = Desmatamento.objects.all()
    serializer_class = DesmatamentoSerializer