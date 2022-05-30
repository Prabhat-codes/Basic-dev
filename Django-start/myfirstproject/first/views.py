from django.shortcuts import render
from django.http import HttpResponse
from .forms import RegForm
def index(request):
    context={}
    form=RegForm(request.POST or None)
    context['form']=form
    return render(request,'base.html',context)

# Create your views here.
