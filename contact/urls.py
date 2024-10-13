from django.shortcuts import render
from django.urls import path
from . import views  # Import the views from the contact app


urlpatterns = [
    path('', views.contact_view, name='contact'),  # URL for the contact form
    
]
