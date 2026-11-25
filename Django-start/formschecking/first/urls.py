from django.urls import path

from . import views

urlpatterns = [
    path('connection/', views.form_view, name='formView'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
]
