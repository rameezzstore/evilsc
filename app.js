// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACR43ZfGQ3NMkuMXo1ux0FBLxSlYfilmQ",
  authDomain: "evil-e578d.firebaseapp.com",
  databaseURL: "https://evil-e578d-default-rtdb.firebaseio.com",
  projectId: "evil-e578d",
  storageBucket: "evil-e578d.appspot.com",
  messagingSenderId: "1028449015896",
  appId: "1:1028449015896:web:cc93572d6dea587fc6d22d",
  measurementId: "G-GQKVH9WBQ1"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

// Function to update the number in the number box with fade-in animation
function updateNumber(number) {
    const numberBox = document.getElementById('numberBox');
    numberBox.innerText = number;
    numberBox.classList.remove('fadeIn'); // Remove fadeIn class
    void numberBox.offsetWidth; // Trigger reflow
    numberBox.classList.add('fadeIn'); // Add fadeIn class to apply animation
}

// Function to show a popup notification
function showPopup(message, isSuccess) {
    if (isSuccess) {
        alert('Success: ' + message);
    } else {
        alert('Error: ' + message);
    }
}

// Your other JavaScript code
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Logged in successfully
            showPopup('Login successful', true);
            console.log("Logged in successfully");
        })
        .catch((error) => {
            // Login failed
            showPopup('Email/password incorrect', false);
            console.error(error.message);
        });
}

function startGame() {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    updateNumber(randomNumber);
}

function resetGame() {
    updateNumber('');
}
