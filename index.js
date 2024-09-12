let menuBtn = document.querySelector('.menu-btn');
let menuImg = document.querySelector('.menu-img');

let menu = document.querySelector('.menu');
let overlay = document.querySelector('.overlay');

menuBtn.addEventListener('click', function toggleMenu() {
	// Changes between images depending on the state of the menu
	if (!menuImg.classList.contains('active')) {
		menuImg.src = 'images\\icons\\close.svg';
	} else {
		menuImg.src = 'images\\icons\\menu-icon.png';
	}

	document.body.classList.toggle('stop-scrolling');

	menu.classList.toggle('active');
	menuImg.classList.toggle('active');

	overlay.classList.toggle('active');
});
