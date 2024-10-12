from django.urls import path

from pages import admin, views

urlpatterns = [
    path('', views.home, name='home'),  # Example path
    # Add other URL patterns here
]