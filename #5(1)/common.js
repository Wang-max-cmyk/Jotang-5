document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.HamburgerMenu');
    const navUl = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        navUl.classList.toggle('show');
    });
});