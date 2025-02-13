// URL of the .txt file
const fileUrl = "https://theprojectofficial.github.io/testingpurposes.github.io/index.html";

// Function to check the text
function checkText() {
  // Get the text from the input field
  const inputText = document.getElementById("inputText").value.trim();

  if (!inputText) {
    document.getElementById("result").innerText = "Please enter some text.";
    return;
  }

  // Fetch the .txt file from the URL
  fetch(fileUrl)
    .then(response => response.text())
    .then(fileContent => {
      // Check if the input text matches the file content
      if (fileContent.includes(inputText)) {
        document.getElementById("result").innerText = "Text matched!";
        document.getElementById("result").style.color = "green";
      } else {
        document.getElementById("result").innerText = "Text not found.";
        document.getElementById("result").style.color = "red";
      }
    })
    .catch(error => {
      document.getElementById("result").innerText = "Error fetching file.";
      document.getElementById("result").style.color = "red";
    });
}