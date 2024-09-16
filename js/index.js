let menuBtn = document.querySelector('.menu-btn');
let menuImg = document.querySelector('.menu-img');

let menu = document.querySelector('.menu');
let overlay = document.querySelector('.overlay');

function openMenu() {
	menuImg.src = '..\\images\\icons\\close.svg';
	menu.classList.add('active');
	menuImg.classList.add('active');

	document.body.classList.toggle('stop-scrolling');
	overlay.classList.add('active');
}

function closeMenu() {
	menuImg.src = '..\\images\\icons\\menu-icon.png';

	menu.classList.remove('active');
	menuImg.classList.remove('active');

	document.body.classList.remove('stop-scrolling');
	overlay.classList.remove('active');
}

menuBtn.addEventListener('click', () => {
	// Changes between images depending on the state of the menu
	if (!menuImg.classList.contains('active')) {
		openMenu();
	} else {
		closeMenu();
	}
});

/* If the user presses "Esc" and the modal is open, it closes it */
document.addEventListener('keydown', function (e) {
	if (e.key === 'Escape' && menu.classList.contains('active')) {
		closeMenu();
	}
});
