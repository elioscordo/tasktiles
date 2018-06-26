from django.conf.urls import url, include

urlpatterns = [
    url(r'^api/tiles/', include('tile.urls')),
]
