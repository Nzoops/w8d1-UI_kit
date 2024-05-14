// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Fetch the navbar.html content
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            // Insert the navbar content into the placeholder div
            document.getElementById('navbar-placeholder').innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", function() {
    // Fetch the footer.html content
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            // Insert the footer content into the placeholder div
            document.getElementById('footer-placeholder').innerHTML = data;
        });
});
