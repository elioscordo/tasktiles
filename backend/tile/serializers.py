from rest_framework import serializers
from tile.models import *


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'


class TileSerializer(serializers.ModelSerializer):
    task_set = TaskSerializer(many=True, required=False, read_only=True)

    class Meta:
        model = Tile
        fields = '__all__'
