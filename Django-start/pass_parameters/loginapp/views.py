from django.shortcuts import render

from .forms import LoginForm


def index(request):
    form = LoginForm(request.POST or None)
    if form.is_valid():
        return render(request, "loggedin.html", form.cleaned_data)
    return render(request, "base.html", {'form': form})
