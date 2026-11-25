import calendar
from datetime import date

from django.shortcuts import render


def index(request, year, month):
    year = int(year)
    month = int(month)
    if year < 1900 or year > 2099:
        year = date.today().year
    title = "My Event Calendar - %s %s" % (calendar.month_name[month], year)
    cal = calendar.HTMLCalendar().formatmonth(year, month)
    return render(request, 'calendar.html', {'title': title, 'cal': cal})


def base(request):
    context = {'name': request.POST.get('name'), 'email': request.POST.get('email')}
    return render(request, 'employeeform.html', context)
