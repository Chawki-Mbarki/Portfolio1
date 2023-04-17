// the displayNavigation function will toggle the Display-nav class showing/hiding the nav element
function displayNavigation() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('display-nav');
}

const menu = document.querySelector('.menu');
const xmark = document.querySelector('.xmark');
const navLinks = document.querySelectorAll('.nav-link');
menu.addEventListener('click', displayNavigation);
xmark.addEventListener('click', displayNavigation);

for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener('click', displayNavigation);
}
