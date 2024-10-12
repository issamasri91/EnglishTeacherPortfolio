from django.contrib import admin
from .models import Page  # Import your model(s)

# Register your models here
@admin.register(Page)  # Replace 'Page' with the name of your model
class PageAdmin(admin.ModelAdmin):
    list_display = ('title', 'content')  # Customize this with your model's fields

# If you have other models, you can register them similarly

