from django.shortcuts import render
from .models import Page 

# Create your views here.
def home(request):
    return render(request, 'pages/index.html')  # Ensure the template path is correct
