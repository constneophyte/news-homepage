const hamMenu = document.querySelector('.hamburgerMenu');
const offScreen = document.querySelector('.offScreen');
const body = document.querySelector('body');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreen.classList.toggle('active');
    body.classList.toggle('active');
});