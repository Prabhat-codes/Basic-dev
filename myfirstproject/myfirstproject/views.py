from django.http import HttpResponse


def index(request):
    return HttpResponse('Hello world, here there. <a href="first/">Next page</a>')
