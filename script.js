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

// --- Custom Cursor ---
const cursor = document.querySelector('.cursor');
if (window.matchMedia("(pointer: fine)").matches) {
    document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: "+(e.pageY - scrollY)+"px; left: "+e.pageX+"px;")
    });
    document.querySelectorAll('a, button, .hamburger').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('grow'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('grow'));
    });
}


// --- Scroll Animations with GSAP ---
gsap.registerPlugin(ScrollTrigger);
// Animate sections
document.querySelectorAll('.content-section').forEach(section => {
    gsap.from(section.querySelectorAll('.section-container > *'), {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
    });
});
// Animate hero on load
gsap.from('.anim-on-load', {
    opacity: 0,
    y: 40,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
    delay: 0.5
});


// --- 3D Tilt Effect for Project Cards ---
const tiltElements = document.querySelectorAll("[data-tilt]");
const tiltConfig = {
    max: 10,
    speed: 400,
    glare: true,
    "max-glare": 0.5,
    perspective: 1000
};
const initTilt = (e) => {
    const card = e.currentTarget;
    const { width, height, left, top } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rotateX = (tiltConfig.max / (height / 2)) * (y - height / 2);
    const rotateY = -(tiltConfig.max / (width / 2)) * (x - width / 2);

    card.style.transform = `perspective(${tiltConfig.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
};
const resetTilt = (e) => {
    e.currentTarget.style.transform = `perspective(${tiltConfig.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
};
tiltElements.forEach(el => {
    el.addEventListener("mousemove", initTilt);
    el.addEventListener("mouseleave", resetTilt);
});