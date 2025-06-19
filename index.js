// Mobile Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Reset errors
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    document.getElementById('formMessage').textContent = '';

    // Get values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');

    let isValid = true;

    // Name validation
    if (!name) {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    }

    // Email validation
    if (!email) {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email';
        isValid = false;
    }

    // Message validation
    if (!message) {
        document.getElementById('messageError').textContent = 'Message is required';
        isValid = false;
    } else if (message.length < 10) {
        document.getElementById('messageError').textContent = 'Message should be at least 10 characters';
        isValid = false;
    }

    // If valid, show success message
    if (isValid) {
        formMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
        formMessage.style.color = 'green';
        document.getElementById('contactForm').reset();

        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.textContent = '';
        }, 5000);
    } else {
        formMessage.textContent = 'Please fix the errors above';
        formMessage.style.color = 'red';
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});