const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
})

navClose.addEventListener('click', () => {
    navMenu.classList.remove('show');
})

const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));