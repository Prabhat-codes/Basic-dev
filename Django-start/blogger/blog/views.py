from django.shortcuts import redirect, render
from django.utils import timezone

from .models import BlogPost, BlogPostForm


def archive(request, form=None):
    posts = BlogPost.objects.all()[:10]
    context = {'posts': posts, 'form': form or BlogPostForm()}
    return render(request, 'archive.html', context)


def create_blogpost(request):
    if request.method == 'POST':
        form = BlogPostForm(request.POST)
        if not form.is_valid():
            return archive(request, form)
        post = form.save(commit=False)
        post.timestamp = timezone.now()
        post.save()
    return redirect('archive')
