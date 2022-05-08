from django.shortcuts import render
def index(request,num1,num2):
    n1=int(num1)
    n2=int(num2)
    sum=n1+n2
    return render(request, "addition.html",{'sum':sum})
# Create your views here.
