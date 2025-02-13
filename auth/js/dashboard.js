document.addEventListener("DOMContentLoaded", function () {
    const userInfo = document.getElementById("user-info");
    const accessDeniedMsg = document.getElementById("access-denied");
    const logoutBtn = document.getElementById("logout");

    // Check if user is logged in
    let sessionEID = localStorage.getItem("session");

    if (!sessionEID) {
        siren.play();
        // No session found, deny access and redirect
        userInfo.classList.add("hidden");
        accessDeniedMsg.classList.remove("hidden");

        setTimeout(() => {
            window.location.href = "login.html"; // Redirect back to login
        }, 2000);
    } else {
        // Show user info
        userInfo.textContent = `Logged in as: ${sessionEID}`;
    }

    // Logout function
    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("session"); // Remove session
        window.location.href = "login.html"; // Redirect to login
    });
});
