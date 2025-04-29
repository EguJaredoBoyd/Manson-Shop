document.getElementById("hamburger-menu").addEventListener(
    "click", () => {
        const navLinks = document.getElementById("nav-links");
        navLinks.classList.toggle("show");
        document.getElementById("hambrger-menu").classList.toggle("active");
    }
);