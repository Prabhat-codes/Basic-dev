from django.shortcuts import render

from .forms import RegForm


def index(request):
    form = RegForm(request.POST or None)
    context = {'form': form}
    if form.is_valid():
        context = {'form': RegForm(), 'thanks': form.cleaned_data['name']}
    return render(request, 'base.html', context)
