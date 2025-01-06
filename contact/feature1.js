document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form field values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate fields
    if (!name) {
        alert('Please enter your name.');
        return;
    }

    if (!email || !validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!message) {
        alert('Please enter your message.');
        return;
    }

    // If all fields are valid
    alert('Thank you for contacting us, ' + name + '! Your message has been submitted.');

    // Optionally, reset the form
    this.reset();
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
