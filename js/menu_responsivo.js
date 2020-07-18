$(function() {

    $(".menu-mobile").click(function() {
        $('.menu-mobile').find('ul').slideToggle();
    });


    $('nav li').click(function(){
		var href = $(this).attr('li');
		var offSetTop = $(href).offset().top;
		$('html, body').animate({'scrollTop':offSetTop});

		return false;
	});

	$('nav li a').click(function(){
    	if($('nav li a').css('color','#13e8ef'))
           $(this).css('color','#489596') 
		
	});

	$('nav.menu-mobile i').click(function() {
                var el = $(this).parent().find('ul')
                if (el.is(':visible') == false) {
                    el.fadeIn();
                } else {
                    el.fadeOut();
                }

            })

});

