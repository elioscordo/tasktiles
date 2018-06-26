from rest_framework import generics
from tile.models import *
from tile.serializers import *


class TileList(generics.ListCreateAPIView):
    serializer_class = TileSerializer

    def get_queryset(self):
        query = Tile.objects.all()
        filter_from = self.request.query_params.get('from')
        filter_to = self.request.query_params.get('to')
        filter_status = self.request.query_params.get('status')
        if filter_from:
            query = query.filter(launch__gte=filter_from)
        if filter_to:
            query = query.filter(launch__lte=filter_to)
        if filter_status:
            query = query.filter(status=filter_status)
        return query


class TileDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TileSerializer

    def get_object(self):
        return Tile.objects.get(id=self.kwargs["id"])


class TaskList(generics.ListCreateAPIView):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()


class TaskDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def get_object(self):
        return Task.objects.get(id=self.kwargs["id"])


