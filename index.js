let menuBtn = document.querySelector('.menu-btn');
let menuImg = document.querySelector('.menu-img');

let menu = document.querySelector('.menu');
let overlay = document.querySelector('.overlay');

function toggleMenu() {
	// Changes between images depending on the state of the menu
	if (!menuImg.classList.contains('active')) {
		menuImg.src = 'images\\close.svg';
	} else {
		menuImg.src = 'images\\menu-icon.png';
	}

	// Temporally disables scrolling on the page
	document.body.classList.toggle('stop-scrolling');

	menu.classList.toggle('active');
	menuImg.classList.toggle('active');

	overlay.classList.toggle('active');
}

menuBtn.addEventListener('click', toggleMenu);
