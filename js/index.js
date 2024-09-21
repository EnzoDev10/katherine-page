let menuBtn = document.querySelector('.menu-btn');
let openImg = document.querySelector('#open-img');
let closeImg = document.querySelector('#close-img');

let menu = document.querySelector('.menu');
let overlay = document.querySelector('.overlay');

let openIconSrc;
let closeIconSrc;

function openMenu() {
	openImg.classList.toggle('active');
	closeImg.classList.toggle('active');

	menu.classList.add('active');

	document.body.classList.toggle('stop-scrolling');
	overlay.classList.add('active');
}

function closeMenu() {
	openImg.classList.toggle('active');
	closeImg.classList.toggle('active');

	menu.classList.remove('active');

	document.body.classList.remove('stop-scrolling');
	overlay.classList.remove('active');
}

menuBtn.addEventListener('click', () => {
	// Changes between images depending on the state of the menu
	if (openImg.classList.contains('active')) {
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
