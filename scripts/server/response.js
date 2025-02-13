fetch('https://rentry.co/SERVERHOSHI') // Replace with your server's URL
.then(response => {
    let message = "";
    let color = "";

    if (response.ok) {
        message = "Server is Online";
        color = "green";
    } else {
        message = "❌ Server is Offline (Status: " + response.status + ")";
        color = "red";
    }

    // Create and style a new paragraph
    let statusParagraph = document.createElement("p");
    statusParagraph.innerText = message;
    statusParagraph.style.color = color;
    statusParagraph.style.fontSize = "30px";  // Set font size
    statusParagraph.style.fontFamily = "heading";  // Set font
    statusParagraph.style.fontWeight = "bold"; // Optional: Make text bold

    document.getElementById("status-container").appendChild(statusParagraph);
})
.catch(error => {
    let errorMessage = "Error connecting to server!";
    console.error('There was an error:', error);

    let errorParagraph = document.createElement("p");
    errorParagraph.innerText = errorMessage;
    errorParagraph.style.color = "orange";
    errorParagraph.style.fontSize = "30px"; 
    errorParagraph.style.fontFamily = "heading";  
    errorParagraph.style.fontWeight = "bold";

    document.getElementById("status-container").appendChild(errorParagraph);
});
