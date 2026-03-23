from django.urls import path
from . import views

app_name = 'blog'

urlpatterns =[
    path('', views.index, name='index'),
    path('post/<str:slug>/', views.detail, name='detail'),
    path('old-url/', views.old_url_redirect, name='old_url_redirect'),
    path('new-url/', views.new_url, name='new_url'),
    path('contact/', views.contact, name='contact'),
    path('about/', views.about, name='about'),
    path("register/", views.register, name="register"),
    path("login/", views.login, name="login"),
    path("dashboard/",views.dashboard,name="dashboard")
]