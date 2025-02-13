document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".randomize-color"); // Select all sections with the class 'randomize-color'
    const sectionClasses = ["custom-section-purple", "custom-section-aqua", "custom-section-bluegray", "custom-section-blue", "custom-section-green", "custom-section-general"]; // Available section styles

    // Shuffle the sectionClasses array to randomize the order
    const shuffledClasses = sectionClasses.sort(() => Math.random() - 0.5);

    // Ensure there are enough classes for all sections
    sections.forEach((section, index) => {
        // Apply a unique class to each section from the shuffled array
        section.classList.add(shuffledClasses[index % shuffledClasses.length]);
    });
});




