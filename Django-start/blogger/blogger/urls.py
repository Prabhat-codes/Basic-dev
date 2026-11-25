from django.contrib import admin
from django.urls import include, path
from django.views.generic import RedirectView

urlpatterns = [
    path('', RedirectView.as_view(url='blog/')),
    path('admin/', admin.site.urls),
    path('blog/', include('blog.urls')),
]
