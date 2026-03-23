from django.contrib import admin

from blog.models import AboutUs, Post, Category

# Register your models here.



class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'content')
    search_fields = ('title', 'content')
    list_filter = ('created_at', 'category')

admin.site.register(Post, PostAdmin)
admin.site.register(Category)
admin.site.register(AboutUs)