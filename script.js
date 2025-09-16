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

// --- GSAP & Interactivity ---
gsap.registerPlugin(ScrollTrigger);
if (window.matchMedia("(pointer: fine)").matches) {
    // NEW: Blob Cursor Effect
    const blobCursor = document.querySelector('.blob-cursor');
    window.addEventListener('mousemove', (e) => {
        gsap.to(blobCursor, {
            duration: 0.5,
            x: e.clientX,
            y: e.clientY,
            ease: "power2.out"
        });
    });
    
    document.querySelectorAll('a, button, .hamburger, .grid-card').forEach(el => {
        el.addEventListener('mouseenter', () => blobCursor.classList.add('hovered'));
        el.addEventListener('mouseleave', () => blobCursor.classList.remove('hovered'));
    });

    // Animate sections with ScrollTrigger
    document.querySelectorAll('.content-section').forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: "power3.out"
        });
    });
}