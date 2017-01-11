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

	$('#az-modal').click(function(){
		$('#az-popup').modal('show');
		// alert(1);
		return false;
	});

	$('.az-close').click(function(){
		$('#az-popup').modal('hide');
		return false;
	});


	// Custom JS

});
