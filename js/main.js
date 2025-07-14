// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
const header = document.getElementById('header');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('nav-open');
    menuToggle.classList.toggle('active');
});

// Close menu when clicking on a link
const navLinks = nav.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        nav.classList.remove('nav-open');
        menuToggle.classList.remove('active');
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.especialidad-card, .trayectoria-item, .compromiso-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
        nav.classList.remove('nav-open');
        menuToggle.classList.remove('active');
    }
});

// Prevent scroll when mobile menu is open
nav.addEventListener('transitionend', function() {
    if (nav.classList.contains('nav-open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});