import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDApgfQYeVCqkQuvgO-1hSnnxvYlMEZGpc",
    authDomain: "iml300-project3-609d6.firebaseapp.com",
    databaseURL: "https://iml300-project3-609d6-default-rtdb.firebaseio.com",
    projectId: "iml300-project3-609d6",
    storageBucket: "iml300-project3-609d6.firebasestorage.app",
    messagingSenderId: "483208001205",
    appId: "1:483208001205:web:551005a07af6c4a38970fc"
  };

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

const responsesRef = ref(database, "responses");

const floatingNotes = document.getElementById("floatingNotes");

onChildAdded(responsesRef, function(snapshot) {
    
const data = snapshot.val();
    
const bubble = document.createElement("div");
    
bubble.classList.add("bubble");
    
    const colors = [
        "#fff6fb",
        "#f9f0ff",
        "#f4f8ff",
        "#f6fff2",
        "#ffeef5",
        "#eef7ff"
        
        ];
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    bubble.style.setProperty("--cloud-color", randomColor);

    bubble.innerHTML = `
    <div class="cloud-shape">
    <span class="puff puff1"></span>
    <span class="puff puff2"></span>
    <span class="puff puff3"></span>
    <span class="puff puff4"></span>
    <span class="puff puff5"></span>
    <span class="puff puff6"></span>
    <span class="puff puff7"></span>
    <span class="puff puff8"></span>
    <span class="center"></span>
</div>
<div class="cloud-text">${data.text}</div>
    
`;
    bubble.querySelector(".cloud-text").textContent = data.text;
    
    floatingNotes.appendChild(bubble);
});

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