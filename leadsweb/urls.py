from django.urls import path
from leadsweb import views


urlpatterns = [
    path('', views.start,name='start'),
]