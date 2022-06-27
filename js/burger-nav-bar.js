const button = document.querySelector('.hamburger-menu');
const navBar = document.querySelector('.nav-bar');

function DisplayMenu(){
    navBar.classList.toggle('show');
}

button.addEventListener('click', DisplayMenu);