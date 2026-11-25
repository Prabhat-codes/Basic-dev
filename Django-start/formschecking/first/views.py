from django.shortcuts import redirect, render

from .forms import LoginForm


def form_view(request):
    if 'username' in request.session:
        return render(request, 'loggedin.html', {'username': request.session['username']})
    return render(request, 'login.html', {'form': LoginForm()})


def login(request):
    form = LoginForm(request.POST or None)
    if form.is_valid():
        request.session['username'] = form.cleaned_data['username']
        return redirect('formView')
    return render(request, 'login.html', {'form': form})


def logout(request):
    request.session.pop('username', None)
    return render(request, 'loggedout.html')
