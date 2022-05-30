from django.shortcuts import render
from loginapp.forms import LoginForm
# Create your views here.
def index(request):
    username="USERNAME"
    cn="+91"
    if request.method=="POST":
        #Get the posted form
        myloginform=LoginForm(request.POST)
        if myloginform.is_valid():
            username=myloginform.cleaned_data['username']
            cn=myloginform.cleaned_data['contact_num']
    else:
        myloginform=LoginForm()
    context={'username':username,'contact_num':cn}
    
    return render(request,"loggedin.html",context)

