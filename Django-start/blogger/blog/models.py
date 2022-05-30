from django.db import models

# Create your models here.
from django import forms
class BlogPost(models.Model):
    title=models.CharField()
    body=models.TextField()
    timestamp=models.DateTimeField()
    class Meta:
        ordering=('-timestamp',)
        app_label='BlogPost'
class BlogPostForm(forms.ModelForm):
    class Meta:
        model=BlogPost
        exclude=('timestamp',)
        