

//open the form by click button

// Set the phone number and default message (optional)
var phoneNumber = "+212609237034"; // Enter the recipient's phone number (with country code, no spaces or symbols)
var message = "Hello! I would like to get in touch with you."; // Optional pre-filled message

// Get the button


// When the user clicks the button, open WhatsApp with the pre-filled message
 function openWhatsap(){
  // Construct the WhatsApp URL
  let whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
  
  // Open the WhatsApp URL
  window.open(whatsappURL, '_blank');
}


