$(document).ready(function(){
    
   /* OwlCarousel*/
	$('.myCarousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        dots: true,
    });
	
    
    /*ScrollTop*/
   $(window).on("scroll", function(){
       var scroll = $(window).scrollTop();
       
       if(scroll >=50){
           $('.header-sticky').addClass('sticky');
       }else{
           $('.header-sticky').removeClass('sticky')
       }
   });
    
    
    // Page Scroll
	var sections = $('section')
		nav = $('nav[role="navigation"]');

	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - 76
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    	}
	  	});
	});
	nav.find('a').on('click', function () {
	  	var $el = $(this)
	    	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 75
		}, 500);
	  return false;
	});
    
});
function closeNav(){
    document.querySelector(".overlay").style.opacity = "0";
    document.querySelector(".overlay").style.visibility = "hidden";
}
function openNav(){
    document.querySelector(".overlay").style.opacity = "1";
    document.querySelector(".overlay").style.visibility = "visible";
}
