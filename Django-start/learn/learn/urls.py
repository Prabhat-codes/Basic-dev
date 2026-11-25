from django.contrib import admin
from django.urls import include, path
from django.views.generic import RedirectView

urlpatterns = [
    path('', RedirectView.as_view(url='form/')),
    path('admin/', admin.site.urls),
    path('form/', include('form.urls')),
    path('check/', include('check.urls')),
]
