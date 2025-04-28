const menuButton = document.querySelector('.menu-button');
const menuOverlay = document.querySelector('.menu-overlay');
let isMenuOpen = false;

menuButton.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    menuOverlay.classList.toggle('open', isMenuOpen);
    menuButton.textContent = isMenuOpen ? 'CLOSE' : 'MENU';
});