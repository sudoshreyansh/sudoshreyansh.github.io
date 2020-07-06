let hamburger = document.getElementsByClassName('menu-hamburger_wrapper')[0];
hamburger.addEventListener('click', toggleMenu);

function toggleMenu(event) {
    if ( hamburger.classList.contains('pressed') ) {
        hamburger.classList.remove('pressed');
    } else {
        hamburger.classList.add('pressed');
    }
}