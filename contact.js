// contact.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const responseMessage = document.getElementById('responseMessage');

    // Handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent actual form submission

        // Validate form
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            responseMessage.textContent = 'All fields are required!';
            responseMessage.style.color = 'red';
            return;
        }

        if (!validateEmail(email)) {
            responseMessage.textContent = 'Please enter a valid email address.';
            responseMessage.style.color = 'red';
            return;
        }

        // Simulate form submission success
        responseMessage.textContent = 'Thank you for your message! We will get back to you soon.';
        responseMessage.style.color = 'green';

        // Clear the form
        form.reset();
    });

    
   
});
