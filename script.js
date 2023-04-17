function displayNavigation() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('displayNav');
}

const menu = document.querySelector('.menu');
menu.addEventListener('click', displayNavigation);