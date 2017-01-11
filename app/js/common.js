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

	$('.az-close2').click(function(){
		$('#az-popup2').modal('hide');
		return false;
	});

	$(".form1").submit(function() { 
        // var tel = $(this).find('input[name="tel"]');
        // var empty = false;
        // if (tel.val() == ""){
        //     empty = true;
        // }
        // if (empty == true){
        //     tel.addClass("error-input");
        //     tel.focus();
        // }else{
            var form_data = $(this).serialize(); 
            $.ajax({
                type: "POST", 
                url: "/sendmessage.php", 
                data: form_data,
                success: function() {
                    // cleanTnakns(this);
                    $('#az-popup').modal('hide');
                    $('#az-popup2').modal('show');
                }
            });
        // }
        return false;
    });
	// Custom JS

});
