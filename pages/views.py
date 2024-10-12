from django.shortcuts import render
from .models import Page 

# Create your views here.
def home(request):
    return render(request, 'base.html')  # Ensure the template path is correct
