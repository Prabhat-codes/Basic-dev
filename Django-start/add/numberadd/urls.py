from django.contrib import admin
from django.urls import re_path,include
from . import views

urlpatterns = [
    re_path(r'^(?P<num1>[0-9]{4})/(?P<num2>0?[1-9]|1[0-2])/',views.index,name='index')
]