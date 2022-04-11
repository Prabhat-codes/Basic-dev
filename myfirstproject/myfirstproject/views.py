from curses.ascii import HT
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello world,here there")
