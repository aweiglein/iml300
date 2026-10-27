

const memoryLines = document.querySelectorAll("p.fade, h1.fade");
const nextLink = document.querySelector("a.fade");

let currentLine = 0;

function playLineSound(line) {
  const soundFile = line.dataset.sound;

  if (soundFile) {
    const sound = new Audio(soundFile);

    sound.play().catch(function(error) {
      console.log("hmmm...the sound isn't playing", error);
    });
  }
}

if (memoryLines.length > 0) {
  setTimeout(function() {
    memoryLines[0].classList.add("visible");
  }, 100);
}

if (nextLink) {
  nextLink.addEventListener("click", function(event) {

    if (currentLine < memoryLines.length - 1) {
      event.preventDefault();

      memoryLines[currentLine].classList.remove("visible");
      memoryLines[currentLine].classList.add("dimmed");

      currentLine++;

      memoryLines[currentLine].classList.add("visible");

      playLineSound(memoryLines[currentLine]);

    } else if (document.getElementById("readAgain")) {
      event.preventDefault();

      nextLink.style.display = "none";

      const readAgain = document.getElementById("readAgain");

      readAgain.style.display = "inline-block";

      setTimeout(function() {
        readAgain.classList.add("visible");
      }, 50);
    }

  });
}
