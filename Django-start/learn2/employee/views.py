from django.shortcuts import render
from django.http import HttpResponse
from datetime import date 
import calendar
from calendar import HTMLCalendar

def index(request,year, month):
    year=int(year)
    month=int(month)
    if year<1900 or year>2009: year = date.today().year
    month_name=calendar.month_name[month]
    title="MY Event Calendar - %s %s" %(month_name, year)
    cal=HTMLCalendar().formatmonth(year,month)
    

    # return HttpResponse("<h1>%s</h1><br><p>%s<br></p>"%(title,cal))
    return render(request,'calendar.html',{'title':title,'cal':cal})

def base(request):
    return render(request,'employeeform.html')