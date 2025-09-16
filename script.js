document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        // A simple toggle for the mobile menu would be added here
        // For now, this confirms the script is running
        console.log("Hamburger clicked!");
    });
});