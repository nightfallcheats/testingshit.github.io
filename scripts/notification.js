document.addEventListener('DOMContentLoaded', function() {
    // Get references to the elements
    const audio = document.getElementById('audio');
    const fadeContainer = document.getElementById('fadeContainer');

    // Add event listener for the 'copy' event
    document.addEventListener('copy', function(event) {
        // Check if there is any text selected
        if (window.getSelection().toString()) {
            // Play the audio
            copy.play();

            // Show the fade container with a fade-in effect
            fadeContainer.classList.remove('fade-out');
            fadeContainer.classList.add('fade-in');
            
            // Hide the fade container with a fade-out effect after 3 seconds (audio duration or any custom duration)
            setTimeout(() => {
                fadeContainer.classList.remove('fade-in');
                fadeContainer.classList.add('fade-out');
            }, 3000);  // This time matches the duration of the visible notification
        }
    });
});
