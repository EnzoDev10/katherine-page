let menuBtn = document.querySelector('.menu-btn');
let menuImg = document.querySelector('.menu-img');

let menu = document.querySelector('.menu');
let overlay = document.querySelector('.overlay');

let openIconSrc;
let closeIconSrc;

function openMenu() {
	if (window.location.pathname === '/index.html') {
		closeIconSrc = 'images\\icons\\close.svg';
	} else {
		closeIconSrc = '..\\images\\icons\\close.svg';
	}

	openIconSrc = menuImg.src;
	menuImg.src = closeIconSrc;
	menu.classList.add('active');
	menuImg.classList.add('active');

	document.body.classList.toggle('stop-scrolling');
	overlay.classList.add('active');
}

function closeMenu() {
	menuImg.src = openIconSrc;
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
