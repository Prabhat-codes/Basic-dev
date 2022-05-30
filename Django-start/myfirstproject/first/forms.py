# from django import forms
# class RegForm(forms.Form):
#     title=forms.CharField()
#     description=forms.CharField()
#     views=forms.IntegerField()
#     available=forms.BooleanField()


from django import forms

class RegForm(forms.Form):
    name = forms.CharField(widget=forms.TextInput)
    url = forms.URLField(widget=forms.Textarea)
    comment = forms.CharField(widget=forms.Textarea)