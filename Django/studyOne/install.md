# Create environment run project

```bash
python -m venv venv
```
# Activate Virtual Environment

```bash
venv\Scripts\activate

```

# Install django

```bash

pip install django

```

# Check django version

```bash

django-admin --version

```

# Create project

```bash

django-admin startproject myproject

```

# Run server

```bash 
cd myproject
python manage.py runserver

```

# Create app

```bash 
python manage.py startapp blog

```

# Main Points


1. {% load static %} is used to load the static files in Django templates. It allows you to use the "{% static %}"
 template tag to reference static files like CSS, JavaScript, and images.

2. The "{% extends 'blog/base.html' %}" tag is used to indicate that this template "(index.html or detail.html)" is 
extending the base template (base.html). This means that the content defined in the "{% block content %}" section 
of the base template will be replaced by the content defined in the "{% block content %}" section of the child 
templates (index.html and detail.html).

3. The "{% block content %}" and "{% endblock %}" tags define a block of content that can be overridden in child 
templates. In this case, the content block is defined in the base template and is filled with specific content
in the index.html and detail.html templates.

# Migration

## Creates migration files

```bash

python .\manage.py makemigrations

```

## Applies the migrations to the database

```base

python .\manage.py migrate

```

### output:

```bash

(venv) PS C:\Users\MT066\Desktop\Study\Django\studyOne\myapp> python .\manage.py makemigrations
Migrations for 'blog':
  blog\migrations\0001_initial.py
    + Create model Post

(venv) PS C:\Users\MT066\Desktop\Study\Django\studyOne\myapp> python .\manage.py migrate   
Operations to perform:
  Apply all migrations: admin, auth, blog, contenttypes, sessions
Running migrations:
  Applying contenttypes.0001_initial... OK
  Applying auth.0001_initial... OK
  Applying admin.0001_initial... OK
  Applying admin.0002_logentry_remove_auto_add... OK
  Applying admin.0003_logentry_add_action_flag_choices... OK
  Applying contenttypes.0002_remove_content_type_name... OK
  Applying auth.0002_alter_permission_name_max_length... OK
  Applying auth.0003_alter_user_email_max_length... OK
  Applying auth.0004_alter_user_username_opts... OK
  Applying auth.0005_alter_user_last_login_null... OK
  Applying auth.0006_require_contenttypes_0002... OK
  Applying auth.0007_alter_validators_add_error_messages... OK
  Applying auth.0008_alter_user_username_max_length... OK
  Applying auth.0009_alter_user_last_name_max_length... OK
  Applying auth.0010_alter_group_name_max_length... OK
  Applying auth.0011_update_proxy_permissions... OK
  Applying auth.0012_alter_user_first_name_max_length... OK
  Applying blog.0001_initial... OK
  Applying sessions.0001_initial... OK

  ```


# Delete all data in the model

```bash

python .\manage.py flush 

``` 

# Pagination

```bash 

pip install django-pagination

```

# Django Admin Panel

```base

python .\manage.py createsuperuser

```
## You can log in here

http://127.0.0.1:8000/admin/