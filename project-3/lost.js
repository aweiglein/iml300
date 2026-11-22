import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";

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

const responsesRef = ref(database, "responses");

console.log("Firebase database initialized!", database);

console.log("hello!")

const submitButton = document.getElementById("submitAdvice");
const adviceInput = document.getElementById("adviceInput");

submitButton.addEventListener("click", async function() {
const response = adviceInput.value.trim();

    if (response === "") {
        alert("pressed enter with no writing...?");
        return;
        
    }
    
    try {
        await push(responsesRef, {
            text: response
        });
        
    alert("your response was saved!");
        adviceInput.value = "";
        
    } catch (error) {
        console.error("hmm... there was an error saving your response:", error)
        alert("something went wrong. hamsters are spinning in their wheels to fix it.");

    }
    
});