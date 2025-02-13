// Event listener to detect when the page has finished loading
window.addEventListener('load', function () {
    // Set a delay of 2 seconds (2000 milliseconds)
    setTimeout(function () {
      // Hide the loading screen
      document.getElementById('loading-screen').style.display = 'none';
    
      // Show the main content
      document.getElementById('main-content').style.display = 'block';
    }, 500); // Adjust the time (2000ms = 2 seconds)
  });
  
  // Change opacity dynamically (example)
  function changeLoadingScreenOpacity(opacity) {
    document.getElementById('loading-screen').style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
  }
  
  // Example: Change opacity to 50% (0.5) after 1 second
  setTimeout(function () {
    changeLoadingScreenOpacity(1); // Set the opacity to 50%
  }, 10);
  
  