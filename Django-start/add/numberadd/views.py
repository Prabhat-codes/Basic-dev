from django.shortcuts import render


def index(request, num1, num2):
    context = {'num1': num1, 'num2': num2, 'sum': num1 + num2}
    return render(request, "addition.html", context)
