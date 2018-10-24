var featuresSliderButtons = document.querySelectorAll('.features-slider-button');
var featuresItems = document.querySelectorAll('.features-item');

function changeSlide(evt) {
	evt.preventDefault();
	for (var j = 0; j < featuresSliderButtons.length; j++) {
		featuresSliderButtons[j].classList.remove('active');
	}
	this.classList.add('active');
	
	for (var r = 0; r < featuresItems.length; r++) {
		featuresItems[r].classList.add('visually-hidden');
		if(featuresSliderButtons[r].classList.contains('active')) {
			featuresItems[r].classList.remove('visually-hidden');
		}
	}
}

for (var i = 0; i < featuresSliderButtons.length; i++) {
	featuresSliderButtons[i].addEventListener('click', changeSlide);
}