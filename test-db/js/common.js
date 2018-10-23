$(function() {

	// Close top-banner
	$('.close').click(function(){
		$('.top-banner').fadeOut();
	});
	
	// Search-panel
	$('.search').click(function(){
		$('.search-panel').toggleClass('show-search');
	});
	
	// Menu-button
	$('.menu-button').click(function(){
		$(this).toggleClass('is-active');
		$('.menu').toggleClass('menu-active');
	});
	
	// Owl-carousel
	$('.owl-carousel').owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		dots: true,
		autoplay: true,
		autoplayTimeout: 7500
	});
	
	
	
	

});
