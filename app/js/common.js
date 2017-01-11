$(function() {

	$('.az-mobile-menu-click').click(function(){
			$(this).next('.az-drop-menu').toggleClass('active');
			return false;
	});

	$('.owl-carousel').owlCarousel({
		items: 1,
		dots: true,
		margin: 10
	});
	// Custom JS

});
