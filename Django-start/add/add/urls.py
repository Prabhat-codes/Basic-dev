from django.contrib import admin
from django.urls import include, path
from django.views.generic import RedirectView

urlpatterns = [
    path('', RedirectView.as_view(url='number/2/3/')),
    path('admin/', admin.site.urls),
    path('number/', include('numberadd.urls')),
]
