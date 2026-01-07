from rest_framework import serializers

class NavItemSerializer(serializers.Serializer):
    key = serializers.CharField()
    label = serializers.CharField()
    path = serializers.CharField()
    icon = serializers.CharField()

class NavResponseSerializer(serializers.Serializer):
    user = serializers.DictField()
    items = NavItemSerializer(many=True)

from .models import Clube

class ClubeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clube
        fields = '__all__'

from .models import Jogador

class JogadorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jogador
        fields = '__all__'
    
from .models import Competicao

class CompeticaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Competicao
        fields = '__all__'