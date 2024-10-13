from django.shortcuts import render, redirect
from .models import Contact

def contact_view(request):
    if request.method == 'POST':
        # Retrieve form data from POST request
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        subject = request.POST.get('subject')
        message = request.POST.get('message')

        # Save data to the database
        contact = Contact(name=name, email=email, phone=phone, subject=subject, message=message)
        contact.save()

       
    return render(request, 'includes/contact.html')  # Render the form if the request is GET
