from django import forms
class LoginForm(forms.Form):
    username = forms.CharField(max_length = 100)
    number= forms.IntegerField(widget= forms.NumberInput())