// Function to apply a glitch effect to all elements
function applyGlitchEffect() {
    // Get all elements in the document
    const elements = document.querySelectorAll('*');

    // Loop through all elements and apply the glitch effect
    elements.forEach((element) => {
        element.classList.add('glitch');
    });

    // To add more glitch randomness, you could animate properties like color or opacity
    setInterval(() => {
        elements.forEach((element) => {
            // Randomly toggle opacity for a more glitchy effect
            if (Math.random() < 0.1) {
                const randomOpacity = Math.random();
                element.style.opacity = randomOpacity;
            }
        });
    }, 100);
}

// Initialize glitch effect on page load
window.addEventListener('load', () => {
    applyGlitchEffect();
});
