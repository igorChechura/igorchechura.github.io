/* slider */

function showSlider() {
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
} // end slider

showSlider();


/* modal contact us */

function toggleModal() {

	var contactUsLink = document.querySelector('.contact-us-link');
	var modalContact = document.querySelector('.modal-contact');
	var modalOverlay = document.querySelector('.modal-overlay');
	var modalClose = document.querySelector('.modal-close');

	var form = document.querySelector('.contact-form');
	var inputName = document.querySelector('[name=name]');
	var inputEmail = document.querySelector('[name=email]');
	var textareaText = document.querySelector('[name=text]');

	function modalShow(evt) {
		evt.preventDefault();
		modalContact.classList.add('modal-show');
		modalOverlay.classList.add('overlay-show');
	}

	function validateForm(evt) {
		if(!inputName.value || !inputEmail.value || !textareaText.value) {
			evt.preventDefault();

			modalContact.classList.remove('modal-error');
			modalContact.offsetWidth = modalContact.offsetWidth;
			modalContact.classList.add('modal-error');

			if(!inputName.value) {
				inputName.classList.add('input-invalid');
			}
			if(!inputEmail.value) {
				inputEmail.classList.add('input-invalid');
			}
			if(!textareaText.value) {
				textareaText.classList.add('input-invalid');
			}			
		}
	}

	function validateInput(evt) {
		if(this.value) {
			if(this.classList.contains('input-invalid')) {
				this.classList.remove('input-invalid')
			}
		}
	}

	function modalHide(evt) {
		evt.preventDefault();
		modalContact.classList.remove('modal-show');
		modalOverlay.classList.remove('overlay-show');
		modalContact.classList.remove('modal-error');

		inputName.classList.remove('input-invalid');
		inputEmail.classList.remove('input-invalid');
		textareaText.classList.remove('input-invalid');
	}

	contactUsLink.addEventListener('click', modalShow);

	inputName.addEventListener('blur', validateInput);
	inputEmail.addEventListener('blur', validateInput);
	textareaText.addEventListener('blur', validateInput);

	form.addEventListener('submit', validateForm)

	modalOverlay.addEventListener('click', modalHide);
	modalClose.addEventListener('click', modalHide);

} // end toggleModal

toggleModal();

/* product card animation */

var catalogItem = document.querySelectorAll('.catalog-item');
var catalogItemLink = document.querySelectorAll('.catalog-item .catalog-item-link');
var catalogItemButton = document.querySelectorAll('.catalog-item .catalog-item-button');
var catalogItemBuy = document.querySelectorAll('.catalog-item .catalog-item-buy');

for (let i = 0; i < catalogItem.length; i++) {
	catalogItem[i].hasFocus = false;

	catalogItemBuy[i].classList.add('visually-hidden');

	catalogItem[i].addEventListener('mouseenter', function(evt){
		var catalogItemBuy = this.querySelector('.catalog-item-buy');
		catalogItemBuy.classList.remove('visually-hidden');
	});

	catalogItemLink[i].addEventListener('focus', function(evt){
		var catalogItemBuy = catalogItem[i].querySelector('.catalog-item-buy');
		catalogItemBuy.classList.remove('visually-hidden');
		catalogItem[i].hasFocus = true;
	});

	catalogItemLink[i].addEventListener('blur', function(evt){
		var catalogItemBuy = catalogItem[i].querySelector('.catalog-item-buy');
		catalogItemBuy.classList.add('visually-hidden');
		catalogItem[i].hasFocus = false;
	});

	catalogItemButton[i].addEventListener('focus', function(evt){
		var catalogItemBuy = catalogItem[i].querySelector('.catalog-item-buy');
		catalogItemBuy.classList.remove('visually-hidden');
		catalogItem[i].hasFocus = true;
	});

	catalogItemButton[i].addEventListener('blur', function(evt){
		var catalogItemBuy = catalogItem[i].querySelector('.catalog-item-buy');
		catalogItemBuy.classList.add('visually-hidden');
		catalogItem[i].hasFocus = false;
	});

	catalogItem[i].addEventListener('mouseleave', function(evt){
		var catalogItemBuy = this.querySelector('.catalog-item-buy');
		if(!catalogItem[i].hasFocus) {
			catalogItemBuy.classList.add('visually-hidden');
		}		
	});
}