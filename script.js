// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a nav link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animation for elements
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

// Observe all sections for scroll animations
document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
});

document.getElementById("contact-form").addEventListener("submit", async function(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            document.getElementById("form-status").textContent = "Message sent successfully!";
            document.getElementById("form-status").style.display = "block";
            form.reset();
        } else {
            document.getElementById("form-status").textContent = "Failed to send message. Try again!";
            document.getElementById("form-status").style.display = "block";
            document.getElementById("form-status").style.color = "red";
        }
    } catch (error) {
        document.getElementById("form-status").textContent = "An error occurred!";
        document.getElementById("form-status").style.display = "block";
        document.getElementById("form-status").style.color = "red";
    }
});
