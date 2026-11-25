from django.shortcuts import render


def index(request):
    context = {'name': request.POST.get('name'), 'email': request.POST.get('email')}
    return render(request, 'studentform.html', context)
