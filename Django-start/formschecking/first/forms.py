from django import forms


class LoginForm(forms.Form):
    username = forms.CharField(max_length=100)
    cgpa = forms.DecimalField(label='CGPA', min_value=0, max_value=10, decimal_places=2)
