// IMAGE SLIDER
// agarra todas las ímagenes
const slides = document.querySelectorAll('.slides img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
/* Inicializa el index de las imagenes y el de los intervalos */
let slideIndex = 0;
let intervalId = null;

// comienza el slider una vez que todo el contenido cargo
document.addEventListener('DOMContentLoaded', initializeSlider);

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Buscar explicacion de esto
function initializeSlider() {
	// Si hay por lo menos dos imagenes, comienza el slider
	if (slides.length > 0) {
		slides[slideIndex].classList.add('displaySlide');
		/* cambia las imagenes cada 2 segundos */
		intervalId = setInterval(nextSlide, 5000);
	}
}

function showSlide(index) {
	// si el index se vuelve igual o mayor al index de la ultima imagen o menor a cero, se reinicia
	if (index >= slides.length) {
		slideIndex = 0;
	} else if (index < 0) {
		slideIndex = slides.length - 1;
	}
	// oculta todas las imagenes que no tengan el index
	slides.forEach((slide) => {
		slide.classList.remove('displaySlide');
	});
	// Muestra la imagen del index
	slides[slideIndex].classList.add('displaySlide');
}

function prevSlide() {
	//reinicia el intervalo
	clearInterval(intervalId);
	// elige la anterior imagen y la muestra
	slideIndex--;
	showSlide(slideIndex);
}

function nextSlide() {
	// elige la siguiente imagen y la muestra
	slideIndex++;
	showSlide(slideIndex);
}
