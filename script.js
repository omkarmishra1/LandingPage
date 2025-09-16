document.addEventListener('DOMContentLoaded', () => {

    // --- Custom Cursor Logic ---
    const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (!isTouchDevice()) {
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');

        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
            gsap.to(cursorOutline, { duration: 0.3, left: `${posX}px`, top: `${posY}px` });
        });

        const linksAndButtons = document.querySelectorAll('a, .hamburger, .project-card');
        linksAndButtons.forEach(el => {
            el.addEventListener('mouseenter', () => {
                gsap.to(cursorOutline, { duration: 0.3, scale: 1.7, backgroundColor: 'rgba(0, 242, 234, 0.4)' });
            });
            el.addEventListener('mouseleave', () => {
                gsap.to(cursorOutline, { duration: 0.3, scale: 1, backgroundColor: 'rgba(0, 242, 234, 0.2)' });
            });
        });
    }

    // --- Magnetic Button Logic ---
    const magneticButton = document.querySelector('.magnetic-button');
    if (magneticButton && !isTouchDevice()) {
        magneticButton.addEventListener('mousemove', (e) => {
            const rect = magneticButton.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            gsap.to(magneticButton, { duration: 0.3, x: x * 0.2, y: y * 0.2, scale: 1.1 });
        });
        magneticButton.addEventListener('mouseleave', () => {
            gsap.to(magneticButton, { duration: 0.3, x: 0, y: 0, scale: 1 });
        });
    }

    // --- Hero Title Text Animation ---
    const heroTitle = document.querySelector('.hero-title');
    const titleText = "Digital Experiences That Resonate";
    heroTitle.textContent = "";
    titleText.split('').forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char;
        if (char === ' ') span.innerHTML = '&nbsp;';
        heroTitle.appendChild(span);
    });
    gsap.fromTo(heroTitle.children, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.03, ease: "power2.out" });

    // --- Mobile Navigation Menu ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });
});