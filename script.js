document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Interface Navigation Controller ---
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navAnchors = document.querySelectorAll('.nav-links a');

    const toggleMenu = () => {
        navLinks.classList.toggle('open');
        const spans = mobileToggle.querySelectorAll('span');
        if(navLinks.classList.contains('open')) {
            spans[0].style.transform = 'translateY(5px) rotate(45deg)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'translateY(-5px) rotate(-45deg)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    };

    mobileToggle.addEventListener('click', toggleMenu);
    
    navAnchors.forEach(anchor => {
        anchor.addEventListener('click', () => {
            if(navLinks.classList.contains('open')) {
                toggleMenu();
            }
        });
    });
});