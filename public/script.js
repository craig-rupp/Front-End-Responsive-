$(document).ready(function(){

	//check section waypoint class once reached, sticky nav class added, from vendors waypoints js file
	$('.js--section-features').waypoint(function(direction){
		if(direction == "down"){
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	}, {
	  offset: '65px;'
	});

	//Scroll to Plan from button click class added in header
	$('.js--scroll-to-plans').click(function(){
		$('html, body').animate(
			{scrollTop: $('.js--section-plans').offset().top}, 1800);
	});

	//Scroll quickly to features of meal plans
	$('.js--scroll-to-start').click(function(){
		$('html, body').animate(
			{scrollTop: $('.js--section-features').offset().top}, 500);
	});

	//Navigatoion Scroll css smooth tricks https://css-tricks.com/snippets/jquery/smooth-scrolling/

    $(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

    //Animations on Scroll (Waypoiont)

    $('.js-wp-1').waypoint(function(direction){
    	$('.js-wp-1').addClass('animated fadeInLeft');
    }, {
    	offset : '50%'
    });

    $('.js-wp-2').waypoint(function(direction){
    	$('.js-wp-2').addClass('animated fadeInUp');
    }, {
    	offset : '50%'
    });

    $('.js-wp-3').waypoint(function(direction){
    	$('.js-wp-3').addClass('animated fadeInRight');
    }, {
    	offset : '50%'
    });

    $('.js-wp-4').waypoint(function(direction){
    	$('.js-wp-4').addClass('animated lightSpeedIn');
    }, {
    	offset : '50%'
    });

    $('.js-wp-5').waypoint(function(direction){
    	$('.js-wp-5').addClass('animated pulse');
    }, {
    	offset : '35%'
    });

    //Mobile Navigation

    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }        
    });

});



