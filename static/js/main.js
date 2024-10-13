

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


//firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgLmnai5S8uyDEJ4MfZmTT3dScq5P6mQE",
  authDomain: "portfolio-d1697.firebaseapp.com",
  projectId: "portfolio-d1697",
  storageBucket: "portfolio-d1697.appspot.com",
  messagingSenderId: "858836293201",
  appId: "1:858836293201:web:ea70a1cb88be8d8c1fca70",
  measurementId: "G-DGM5S3DJ1X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
