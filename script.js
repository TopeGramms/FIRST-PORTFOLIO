// toogleMenu
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
// loading
document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");

    // Simulate loading time
    setTimeout(function () {
        loader.style.display = "none";
        content.style.display = "block";
    }, 4000);
    
});
// Messages
function submitMessages() {
    const message1 = document.getElementById('messageInput1').value;
    const message2 = document.getElementById('messageInput2').value;
    const message3 = document.getElementById('messageInput3').value;
    alert(`Messages submitted:\n1. ${message1}\n2. ${message2}\n3. ${message3}`);
    // Add any further processing logic here
}