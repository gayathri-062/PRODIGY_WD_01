// script.js
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');

    // Handle scroll event to add/remove 'scrolled' class
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Change value as needed
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Optional: Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    navToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
});
