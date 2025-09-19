// --- Mobile Menu ---
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// --- Particles.js Background ---
particlesJS({ "particles": { "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle" }, "opacity": { "value": 0.5, "random": true }, "size": { "value": 3, "random": true }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 6, "direction": "none", "out_mode": "out" } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" } }, "modes": { "repulse": { "distance": 100 }, "push": { "particles_nb": 4 } } }, "retina_detect": true });

// --- GSAP & Interactivity ---
gsap.registerPlugin(ScrollTrigger);
if (window.match-media("(pointer: fine)").matches) {
    // Blob Cursor Effect
    const blobCursor = document.querySelector('.blob-cursor');
    window.addEventListener('mousemove', (e) => {
        gsap.to(blobCursor, { duration: 0.5, x: e.clientX, y: e.clientY, ease: "power2.out" });
    });
    
    document.querySelectorAll('a, button, .hamburger, .grid-card').forEach(el => {
        el.addEventListener('mouseenter', () => blobCursor.classList.add('hovered'));
        el.addEventListener('mouseleave', () => blobCursor.classList.remove('hovered'));
    });
}

// --- ANIMATIONS ---

// 1. "Bouncing" Hero Text Animation
const heroTitle = document.querySelector('.hero-title');
const chars = heroTitle.textContent.split('');
heroTitle.innerHTML = '';
chars.forEach(char => {
    heroTitle.innerHTML += `<span>${char === ' ' ? '&nbsp;' : char}</span>`;
});

gsap.from(heroTitle.children, {
    y: -100,
    opacity: 0,
    duration: 1.5,
    ease: "bounce.out",
    stagger: 0.05,
    delay: 0.5
});

gsap.from(".hero-subtitle, .hero-cta", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
    delay: 4 // Delay until after the main title animation
});


// 2. Reliable Staggered Animation for All Other Cards
const sectionsToAnimate = document.querySelectorAll("#services, #why-me, #work, #testimonials");
sectionsToAnimate.forEach(section => {
    const cards = section.querySelectorAll(".grid-card, .testimonial-card");
    gsap.from(cards, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
        },
        opacity: 50,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2
    });
});