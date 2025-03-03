// Change navbar background on scroll
window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Toggle Mobile Menu
function toggleMenu() {
    let navLinks = document.querySelector(".nav-links");
    if (navLinks.classList.contains("active")) {
        navLinks.classList.add("inactive");
        setTimeout(() => {
            navLinks.classList.remove("active");
            navLinks.classList.remove("inactive");
        }, 400);
    } else {
        navLinks.classList.add("active");
    }
}

// Close Menu when clicking outside or on a link
document.addEventListener("click", function(event) {
    let navLinks = document.querySelector(".nav-links");
    let menuIcon = document.querySelector(".menu-icon");

    if (navLinks.classList.contains("active") && !navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
        toggleMenu();
    }
});

// Smooth Scrolling Function
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    // Close menu on mobile after clicking a link
    if (window.innerWidth <= 768) {
        toggleMenu();
    }
}

// Navbar Active Indicator
const sections = document.querySelectorAll(".section");
const navItems = document.querySelectorAll(".nav-item");
const navIndicator = document.createElement("div");
navIndicator.classList.add("nav-indicator");
document.querySelector(".nav-links").appendChild(navIndicator);

function updateIndicator() {
    let scrollPosition = window.scrollY;
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - 50;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const activeItem = navItems[index];
            const itemRect = activeItem.getBoundingClientRect();
            const navRect = document.querySelector(".nav-links").getBoundingClientRect();

            navIndicator.style.width = `${itemRect.width}px`;
            navIndicator.style.height = `${itemRect.height}px`;
            navIndicator.style.left = `${itemRect.left - navRect.left}px`;
            navIndicator.style.top = `${itemRect.top - navRect.top}px`;
        }
    });
}

window.addEventListener("scroll", updateIndicator);
window.addEventListener("resize", updateIndicator);
updateIndicator();
