let menuBtn = document.querySelector('.menu-btn');
let closeBtn = document.querySelector('.close-btn')
let menu = document.querySelector('.menu')

function toggleMenu() {
    menu.classList.toggle('active')
}

menuBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);
