// Mobile hamburger menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('open');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('open');
            });
        });
    }

    // Active nav link highlighting based on scroll
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.navbar__links a[href^="#"]');

    function highlightNav() {
        const scrollY = window.scrollY + 100;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            if (scrollY >= top && scrollY < top + height) {
                navItems.forEach(a => a.classList.remove('active'));
                const active = document.querySelector(`.navbar__links a[href="#${id}"]`);
                if (active) active.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNav);
});
