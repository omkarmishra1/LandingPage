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
particlesJS({
    "particles": {
        "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#ffffff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5, "random": true },
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.2, "width": 1 },
        "move": { "enable": true, "speed": 1, "direction": "none", "out_mode": "out" }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" } },
        "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 0.5 } }, "push": { "particles_nb": 4 } }
    },
    "retina_detect": true
});

// --- GSAP & Interactivity (Desktop Only) ---
if (window.matchMedia("(pointer: fine)").matches) {
    // Spotlight Cursor
    const spotlight = document.querySelector('.spotlight');
    window.addEventListener('mousemove', e => {
        gsap.to(spotlight, {
            duration: 0.5,
            x: e.clientX,
            y: e.clientY,
            ease: "power2.out"
        });
    });

    // Magnetic Elements
    const magneticElements = document.querySelectorAll('.magnetic');
    magneticElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            gsap.to(el, { duration: 0.3, x: x * 0.2, y: y * 0.2, scale: 1.1 });
        });
        el.addEventListener('mouseleave', () => {
            gsap.to(el, { duration: 0.3, x: 0, y: 0, scale: 1 });
        });
    });

    // Animated Text on Hover
    document.querySelectorAll('.anim-text').forEach(el => {
        const text = el.textContent;
        el.innerHTML = '';
        text.split('').forEach(char => {
            const span = document.createElement('span');
            span.textContent = char;
            if(char === ' ') span.style.width = '1rem';
            el.appendChild(span);
        });

        gsap.from(el.children, {
            y: 40,
            opacity: 0,
            duration: 0.5,
            stagger: { amount: 0.5 },
            scrollTrigger: { trigger: el, start: "top 85%" }
        });
    });
}