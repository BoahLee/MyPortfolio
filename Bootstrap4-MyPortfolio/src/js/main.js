
/* Main js file */

(function ($) {
    "use strict";
    $(document).ready(function(){    	

		
/*=====================================================
        Navbar Scroll
=====================================================*/
 
	$(window).on('scroll', function() {
            if ($(".navbar").offset().top > 100) {
                $(".navbar").addClass("nav-scroll");
              } else {
                  $(".navbar").removeClass("nav-scroll");
              }
        });
		
		
		
	$('.navbar-collapse a').on('click',function(){
            $(".navbar-collapse").collapse('hide');
        });	

	  
	$(function() {
            $('a.nav-link').on('click', function(event) {
                var anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $(anchor.attr('href')).offset().top - 0}, 1000);
                    event.preventDefault();
               });
        });
		
/*===================================================
         scrollspy
====================================================*/	
		
	$('body').scrollspy({target: ".navbar", offset: 79});	
	
	

// /*=================================================
//         magnificPopup
// ==================================================*/	
//     $('.popup').magnificPopup({ type: 'image'});

/*=================================================
        counterUp
// =================================================*/	
// 	$('.num').counterUp({
//         delay: 10,
//         time: 800
//     });	

/*=================================================
        button Back to top
=================================================*/	
  		
        var offset = 250;
        var duration = 300;
        $(window).on("scroll",function () {

        if ($(window).scrollTop() > offset) { 
	    $(".back-to-top").fadeIn(duration);
        } else {
	    $(".back-to-top").fadeOut(duration);;
        }
        });

	$('.back-to-top').on('click',function(event){
            event.preventDefault();
            jQuery('html, body').animate({scrollTop: 0}, duration);
            return false;
        })	
		 

/*======================================================
        Prealoder
======================================================*/
		
	$(window).on("load",function (){
  	   $('.loading').delay(350).fadeOut(500);
      
	});
            
/*===================================================
   resize background image for mobile
===================================================*/ 	
	
	//$("#home").height($(window).height());
   
	
/*======================================================
        Testimonial
======================================================*/

//  $('.testimonial').owlCarousel({
//     loop:true,
//     margin:10,
//     responsiveClass:true,
// 	pagination: true,
//         navigation : false,
//         slideSpeed : 2500,
// 		stopOnHover: true,
//     	autoPlay: 4000,
//     	singleItem:false,
//         itemsMobile : [768,1],
//         itemsDesktopSmall : [991,1],
// 		 itemsDesktop : [1000,1],
//         items: 1,
	
// })

/*===============================================
        End
================================================*/
	
});
}(jQuery));

