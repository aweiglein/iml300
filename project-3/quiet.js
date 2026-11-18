const scenes = [
    
    "Scene 1: The kitchen at night.",
    "Scene 2: My dad telling me to hide my makeup."
    
    ];

let currentScene = 0;

const scene = document.getElementById("scene");
const nextButton = document.getElementById("nextScene");
nextButton.addEventListener("click", function() {

currentScene++;

    
    if (currentScene >= scenes.length) {
        currentScene = 0;
    }
    
    scene.textContent = scenes[currentScene];
        });