from django.conf.urls import url
from tile.views import *

urlpatterns = [
    url(r'^tiles$', TileList.as_view()),
    url(r'^tile/(?P<id>.+)$', TileDetail.as_view()),
    url(r'^tasks$', TaskList.as_view()),
    url(r'^task/(?P<id>.+)$', TaskDetail.as_view()),
]
