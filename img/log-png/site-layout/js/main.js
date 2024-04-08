(function ($) {
	$('.owl-carousel-Explorers').owlCarousel({
		loop:true,
		lazyLoad:true,
		margin:0,
		autoplay:true,
		autoplayTimeout:5000,
		smartSpeed: 2000,
		touchDrag  : true,
		mouseDrag  : true,
		dots: false,
		nav: false,
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

	$('.owl-carousel-Explorers').owlCarousel({
		loop:true,
		lazyLoad:true,
		margin:15,
		autoplay:true,
		autoplayTimeout:5000,
		smartSpeed: 2000,
		touchDrag  : true,
		mouseDrag  : true,
		dots: false,
		nav: true,
		responsiveClass:true,
		responsive:{
			1366:{
				items:3,
			},
			1024:{
				items:3,
			},
			640:{
				items:2,
			},
			0:{
				items:1,
			}
		}
	})

	
})(jQuery);
