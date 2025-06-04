from rest_framework import serializers
from .models import Desmatamento

class DesmatamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Desmatamento
        fields = '__all__'