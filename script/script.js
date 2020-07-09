let hamburger = document.getElementsByClassName('menu-hamburger_wrapper')[0];
let navMenu = document.getElementsByClassName('navigation-menu')[0];
hamburger.addEventListener('click', toggleMenu);

function toggleMenu(event) {
    if ( navMenu.classList.contains('active') ) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('pressed');
    } else {
        navMenu.classList.add('active');
        hamburger.classList.add('pressed');
    }
}