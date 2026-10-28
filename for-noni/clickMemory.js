
const memoryLines = document.querySelectorAll("p.fade, h1.fade");
const nextLink = document.querySelector("a.fade");

let currentLine = 0;
let activeSounds = [];
let isLeaving = false;


function playLineSound(line) {
  const soundFile = line.dataset.sound;

 if (!soundFile) return;

// Prevent the same line from starting its audio twice.
if (line.dataset.soundPlayed === "true") return;
line.dataset.soundPlayed = "true";

const sound = new Audio(soundFile);
  sound.volume = 0;

  activeSounds.push(sound);

  sound.addEventListener("ended", function() {
    activeSounds = activeSounds.filter(s => s !== sound);
  });

sound.play().then(function() {
    let volume = 0;

    const fadeIn = setInterval(function() {
      if (isLeaving || sound.paused) {
        clearInterval(fadeIn);
        return;
      }

      volume = Math.min(volume + 0.05, 1);
      sound.volume = volume;

      if (volume >= 1) {
        clearInterval(fadeIn);
      }
    }, 50);

  }).catch(function(error) {
    console.log("Audio couldn't play:", error);
    activeSounds = activeSounds.filter(s => s !== sound);
  });
}


function fadeOutAndNavigate(destination) {
    if (isLeaving) return;
  isLeaving = true;

  const sounds = activeSounds.filter(sound => !sound.paused && !sound.ended);

  if (sounds.length === 0) {
    window.location.href = destination;
    return;
  }

  const startingVolumes = sounds.map(sound => sound.volume);
  let step = 0;
  const totalSteps = 20;

  const fadeOut = setInterval(function() {
    step++;

    sounds.forEach(function(sound, index) {
      sound.volume = Math.max(
        0,
        startingVolumes[index] * (1 - step / totalSteps)
      );
    });

    if (step >= totalSteps) {
      clearInterval(fadeOut);

      sounds.forEach(function(sound) {
        sound.pause();
      });

      window.location.href = destination;
    }
  }, 50);
}


const openingHasSound =
  memoryLines.length > 0 && !!memoryLines[0].dataset.sound;


if (memoryLines.length > 0 && !openingHasSound) {
  setTimeout(function() {
    memoryLines[0].classList.add("visible");
  }, 100);
}


if (nextLink) {
  nextLink.addEventListener("click", function(event) {
    event.preventDefault();

    nextLink.querySelector(".nextImage")?.classList.add("clicked");
    
    if (isLeaving) return;

   
    if (openingHasSound && !memoryLines[0].classList.contains("visible")) {
      playLineSound(memoryLines[0]);
      memoryLines[0].classList.add("visible");
      return;
    }

   
    if (currentLine < memoryLines.length - 1) {
      memoryLines[currentLine].classList.remove("visible");
      memoryLines[currentLine].classList.add("dimmed");

      currentLine++;

      memoryLines[currentLine].classList.add("visible");
      playLineSound(memoryLines[currentLine]);

    } else if (document.getElementById("readAgain")) {

      nextLink.style.display = "none";

      const readAgain = document.getElementById("readAgain");
      readAgain.style.display = "inline-block";

      setTimeout(function() {
        readAgain.classList.add("visible");
      }, 50);

    } else {
      
      fadeOutAndNavigate(nextLink.href);
    }
  });
}


const readAgain = document.getElementById("readAgain");

if (readAgain) {
  readAgain.addEventListener("click", function(event) {
    event.preventDefault();
    fadeOutAndNavigate(readAgain.href);
  });
}

