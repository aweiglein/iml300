console.log("hello!")

const submitButton = document.getElementById("submitAdvice");
const adviceInput = document.getElementById("adviceInput");

submitButton.addEventListener("click", function() {
const response = adviceInput.value;
    
    alert(response);
});

