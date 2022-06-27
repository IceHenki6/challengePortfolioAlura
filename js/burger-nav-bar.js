const navButton = document.querySelector('.hamburger-menu');
const navBar = document.querySelector('#nav-list');

function DisplayMenu(){
    navBar.classList.toggle('show');
}

navButton.addEventListener('click', DisplayMenu);