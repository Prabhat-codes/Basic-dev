from django import forms


class LoginForm(forms.Form):
    username = forms.CharField(max_length=100)
    contact_num = forms.IntegerField(label='Contact number', min_value=0)
