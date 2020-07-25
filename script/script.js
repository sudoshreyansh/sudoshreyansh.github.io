let hamburger = document.getElementsByClassName('hamburger')[0];
let navigationWrapper = document.getElementsByClassName('navigation-wrapper')[0];
hamburger.addEventListener('click', toggleMenu);

function toggleMenu(event) {
    if ( navigationWrapper.classList.contains('active')) {
        navigationWrapper.classList.remove('active');
    } else {
        navigationWrapper.classList.add('active');
    }
}