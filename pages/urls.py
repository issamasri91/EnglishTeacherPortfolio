from django.urls import path

from pages import admin, views

urlpatterns = [
    path('', views.home, name='index'),  # Example path
    # Add other URL patterns here
]