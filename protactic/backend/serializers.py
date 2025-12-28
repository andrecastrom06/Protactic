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