# forms.py

from django import forms
from .models import Contact  # Import the model you created

class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact  # This tells Django to use the Contact model
        fields = ['name', 'email', 'phone', 'subject', 'message']  # Specify the fields to include in the form
