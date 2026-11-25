from django.contrib import admin
from django.urls import path
from django.views.generic import RedirectView
from webapp import views

urlpatterns = [
    path('', RedirectView.as_view(url='employees/')),
    path('admin/', admin.site.urls),
    path('employees/', views.employeeList.as_view()),
]
