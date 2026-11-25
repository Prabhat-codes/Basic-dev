from django.contrib import admin
from django.urls import include, path
from django.views.generic import RedirectView

urlpatterns = [
    path('', RedirectView.as_view(url='first/connection/')),
    path('admin/', admin.site.urls),
    path('first/', include('first.urls')),
]
