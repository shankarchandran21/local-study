from django import forms
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

class CommentForm(forms.Form):
    name = forms.CharField(label="Name", max_length=100,required=True)
    email = forms.EmailField(label="Email", required=True)
    message = forms.CharField(label="Message", widget=forms.Textarea, required=True)

class RegisterForm(forms.ModelForm):
    username = forms.CharField(label="Username", max_length=150, required=True)
    email = forms.EmailField(label="Email", required=True)
    password = forms.CharField(label="Password", widget=forms.PasswordInput, required=True)
    confirm_password = forms.CharField(label="Confirm Password", widget=forms.PasswordInput, required=True)

    def clean(self):
        cleaned_data = super().clean()
        password = cleaned_data.get("password")
        confirm_password = cleaned_data.get("confirm_password")
        email = cleaned_data.get("email")

        if email and not email.endswith('@gmail.com'):
            self.add_error('email', "Email must be from the domain '@example.com'.")


        if password and confirm_password and password != confirm_password:
            self.add_error('confirm_password', "Passwords do not match.")

    class Meta:
        model = User
        fields = ['username', 'email', 'password']


class LoginForm(forms.Form):
    username = forms.CharField(label="Username", max_length=150, required=True)
    password = forms.CharField(label="Password", widget=forms.PasswordInput, required=True)

    def clean(self):
        cleaned_data = super().clean()
        username = cleaned_data.get("username")
        password = cleaned_data.get("password")

        if username and password :
            user = authenticate(username=username,password=password)

            if user is None :
                raise forms.ValidationError("Invalid username and password")        
