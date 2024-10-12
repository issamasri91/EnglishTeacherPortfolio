

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




//***this script send me the email from contact me* */
const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Form submitted successfully";
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});

