// Hover Sound Effect Script

// Sound files
const hoverSound = new Audio("https://new.systemspace.network/res/audio/sfx/hover.ogg"); // Replace with actual path
const leaveSound = new Audio("https://new.systemspace.network/res/audio/sfx/mouseleave.ogg"); // Replace with actual path
const pressSound = new Audio("https://new.systemspace.network/res/audio/sfx/click.ogg");

// Function to play sound (ensures it doesn't overlap)
function playSound(audio) {
  audio.currentTime = 0; // Restart audio
  audio.play().catch((e) => console.warn("Audio play prevented:", e)); // Catch autoplay restrictions
}

// List of important elements
const interactiveElements = ["button", "a", "input", "select", "textarea", "button-big"];

// Function to add event listeners to all interactive elements
function addHoverSounds() {
  interactiveElements.forEach((selector) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.addEventListener("mouseenter", () => playSound(hoverSound));
      element.addEventListener("mouseleave", () => playSound(leaveSound));
      element.addEventListener("mousedown", () => playSound(pressSound)); // Play sound when pressed
    });
  });
}

// Run function when DOM is loaded
document.addEventListener("DOMContentLoaded", addHoverSounds);
