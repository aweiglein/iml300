import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDApgfQYeVCqkQuvgO-1hSnnxvYlMEZGpc",
    authDomain: "iml300-project3-609d6.firebaseapp.com",
    databaseURL: "https://iml300-project3-609d6-default-rtdb.firebaseio.com",
    projectId: "iml300-project3-609d6",
    storageBucket: "iml300-project3-609d6.firebasestorage.app",
    messagingSenderId: "483208001205",
    appId: "1:483208001205:web:551005a07af6c4a38970fc"
  };

const app = initializeApp(firebaseConfig);AbortController;

const database = getDatabase(app);

console.log("Firebase database initialized!", database);

console.log("hello!")

const submitButton = document.getElementById("submitAdvice");
const adviceInput = document.getElementById("adviceInput");

submitButton.addEventListener("click", function() {
const response = adviceInput.value;
    
    alert(response);
});

