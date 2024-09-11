let menuBtn = document.querySelector('.menu-btn');
let menuImg = document.querySelector('.menu-img');

let menu = document.querySelector('.menu');
let overlay = document.querySelector('.overlay');

function toggleMenu() {
	// Changes between images depending on the state of the menu
	if (!menuImg.classList.contains('active')) {
		menuImg.src = 'images\\icons\\close.svg';
	} else {
		menuImg.src = 'images\\icons\\menu-icon.png';
	}

	// Temporally disables scrolling on the page
	// Get the current page scroll position
	scrollTop = window.scrollY || document.documentElement.scrollTop;
	(scrollLeft = window.scrollX || document.documentElement.scrollLeft),
		// if any scroll is attempted,
		// set this to the previous value
		(window.onscroll = function () {
			window.scrollTo(scrollLeft, scrollTop);
		});

	function enableScroll() {
		window.onscroll = function () {};
	}
	//document.body.classList.toggle('stop-scrolling');

	menu.classList.toggle('active');
	menuImg.classList.toggle('active');

	overlay.classList.toggle('active');
}

menuBtn.addEventListener('click', toggleMenu);
