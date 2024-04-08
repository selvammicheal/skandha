(function ($) {
	$('.owl-carousel-gallery').owlCarousel({
		loop:true,
		lazyLoad:true,
		margin:10,
		autoplay:true,
		autoplayTimeout:5000,
		smartSpeed: 2000,
		touchDrag  : true,
		mouseDrag  : true,
		dots: true,
		nav: true,
		responsiveClass:true,
		responsive:{
			1366:{
				items:3,
			},
			1024:{
				items:3,
			},
			760:{
				items:3,
			},
			750:{
				items:2,
			},
			0:{
				items:1,
			}
		}
	})

	$('.owl-carousel-banner').owlCarousel({
		loop:true,
		lazyLoad:true,
		margin:0,
		autoplay:true,
		autoplayTimeout:5000,
		smartSpeed: 2000,
		touchDrag  : true,
		mouseDrag  : true,
		dots: true,
		nav: true,
		responsiveClass:true,
		responsive:{
			1366:{
				items:1,
			},
			1024:{
				items:1,
			},
			640:{
				items:1,
			},
			0:{
				items:1,
			}
		}
	})

	
})(jQuery);
