const slides = document.querySelectorAll('.slides img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

const designTitle = document.querySelector('#design-title');
const designPrice = document.querySelector('#design-price');
const designDesc = document.querySelector('.design-desc');

/* Initializes the index for the images and the var that for the interval */
let slideIndex = 0;
let intervalId = null;

// The slider only starts once all the content is loaded
document.addEventListener('DOMContentLoaded', initializeSlider);

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

function initializeSlider() {
	// Only starts the slider if there are more than one image
	if (slides.length > 0) {
		slides[slideIndex].classList.add('displaySlide');
		intervalId = setInterval(nextSlide, 5000);
	}
}

function showSlide(index) {
	// If the image index is equal or higher than the amount of images there is or lower than zero, restarts the slider
	if (index >= slides.length) {
		slideIndex = 0;
	} else if (index < 0) {
		slideIndex = slides.length - 1;
	}
	// Hides every image on the slider
	slides.forEach((slide) => {
		slide.classList.remove('displaySlide');
	});
	// But shows the one that corresponds to the index
	slides[slideIndex].classList.add('displaySlide');
	switch (slideIndex) {
		case 0:
			designTitle.textContent = 'Uñas diseño 1';
			designPrice.textContent = '$50';
			designDesc.textContent =
				'Diseño 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nulla ducimus sint molestiae aperiam labore corporis debitis id ipsa provident.';
			break;
		case 1:
			designTitle.textContent = 'Uñas diseño 2';
			designPrice.textContent = '$125';
			designDesc.textContent =
				'Diseño 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nulla ducimus sint molestiae aperiam labore corporis debitis id ipsa provident.';
			break;
		case 2:
			designTitle.textContent = 'Uñas diseño 3';
			designPrice.textContent = '$100';
			designDesc.textContent =
				'Diseño 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nulla ducimus sint molestiae aperiam labore corporis debitis id ipsa provident.';
			break;

		default:
			break;
	}
}

function prevSlide() {
	// Restarts the interval so the image doesn't change abruptly
	clearInterval(intervalId);
	// shows the previous image
	slideIndex--;
	showSlide(slideIndex);
}

function nextSlide() {
	// Shows the next image
	slideIndex++;
	showSlide(slideIndex);
}
