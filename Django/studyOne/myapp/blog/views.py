from django.shortcuts import redirect, render
from django.http import Http404, HttpResponse
from django.core.paginator import Paginator
from django.contrib import messages
from .forms import CommentForm, LoginForm, RegisterForm
from django.contrib.auth import authenticate,login as auth_login

from .models import AboutUs, Post


# Create your views here.
def index(req):
    Title = "Latest Posts"
    allPosts = Post.objects.all()  # Assuming you have a Post model defined in models.py
    paginator = Paginator(allPosts, 5)  # Show 5 posts per page
    page_number = req.GET.get('page')
    posts = paginator.get_page(page_number)

    return render(req, 'blog/index.html', {'Title': Title, 'posts': posts})

def detail(req, slug):
    # post = next((post for post in posts if post['id'] == post_id), None)
    try:
      post = Post.objects.get(slug=slug)
      related_post = Post.objects.filter(category=post.category).exclude(pk=post.id)[:2]
    except Post.DoesNotExist:
      raise Http404("Post not found")
    print(post)

    return render(req, 'blog/detail.html', {'post': post, 'related_posts': related_post})



def contact(req):
    if req.method == 'POST':
        name = req.POST.get('name')
        email = req.POST.get('email')
        message = req.POST.get('message')
        ContactForm = CommentForm(req.POST)
        if ContactForm.is_valid():
            # name = ContactForm.cleaned_data['name']
            # email = ContactForm.cleaned_data['email']
            # message = ContactForm.cleaned_data['message']
            print(f"Received contact form submission: Name={name}, Email={email}, Message={message}")
            return render(req, 'blog/contact.html', {'form': ContactForm ,'success_message': 'Your message has been sent successfully.'},)
        else:
            # print("Form is not valid:", ContactForm.errors['email'])
            return render(req, 'blog/contact.html', {'form': ContactForm , 'name': name, 'email': email, 'message': message},)
    return render(req, 'blog/contact.html')

def about(req):
    get_content  = AboutUs.objects.first()
    if get_content:
        content = get_content.content
        return render(req, 'blog/about.html', {'content': content})
    return render(req, 'blog/about.html', {'content': None})


def register(req):
    if req.method == 'POST':
        name = req.POST.get('username')
        email = req.POST.get('email')
        password = req.POST.get('password')
        confirm_password = req.POST.get('confirm_password')
        RegisterForms = RegisterForm(req.POST)

        

        if RegisterForms.is_valid():
            user = RegisterForms.save(commit=False)
            user.set_password(RegisterForms.cleaned_data['password']) # Hash the password before saving
            user.save()
            messages.success(req, 'Your registration has been successful.You can login now.')
            print(f"Received registration form submission: Name={name}, Email={email}, Password={password}, Confirm Password={confirm_password}")
            return redirect("blog:login")
        else:
           
            return render(req, 'blog/register.html', {'form': RegisterForms, 'name': name, 'email': email, 'password': password, 'confirm_password': confirm_password},)
    return render(req, 'blog/register.html')

def login (req):


    if req.method == 'POST':
        name = req.POST.get('username')
        password = req.POST.get('password')
        loginForm = LoginForm(req.POST)

        if loginForm.is_valid():
            username = loginForm.cleaned_data['username']
            password = loginForm.cleaned_data['password']
            user = authenticate(username=username,password=password)

            if user is not None:
                auth_login(req,user)
                return redirect("blog:dashboard")

        else:
            return render(req, 'blog/login.html',{'form': loginForm, 'userName': name, 'password': password}   )
        
    return render(req, 'blog/login.html')

def dashboard(req):
    blog_title = "My post"
    return render(req,'blog/dashboard.html',{"blog_title":"My Post"})










def old_url_redirect(req):
    # give url name for redirect
    return redirect('new_url')

def new_url(req):
    return HttpResponse("This is the new URL.")