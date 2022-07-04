const NAVIGATION_ELEMENT = document.getElementById('js--navigation');
const TOGGLE_BAR_ELEMENT = document.getElementById('js--toggle-bar');

function toggleNavigation() {
    NAVIGATION_ELEMENT.classList.toggle('active');
}

TOGGLE_BAR_ELEMENT.addEventListener('click', toggleNavigation);
