;document.addEventListener("DOMContentLoaded", function() {


});

$(document).ready(function() {
	Revealator.effects_padding = '-250';
	var currentPage = $('body').attr('class');
	console.log(currentPage);


	setTimeout(function(){
		$('body').addClass('body_loaded');
		$('body').removeClass('blured');
		$(window).scrollTop(0);
	}, 500);
	setTimeout(function(){
		$(window).scrollTop(0);
	}, 1000);

	if (window.location.href.indexOf("#menu-section") > -1) {
		console.log('меню');
		setTimeout(function(){
			$('html , body').animate({
				scrollTop: $('[name="menu-section"]').offset().top + 300
			}, 800);
			return false;
		}, 2000);
	} else if (window.location.href.indexOf("#sub-form__link") > -1) {
		console.log('подписка');
		hashLink = window.location.href.indexOf();
		console.log(hashLink);
		setTimeout(function(){
			$('html , body').animate({
				scrollTop: $('[name="sub-form__link"]').offset().top + 300
			}, 800);
			return false;
		}, 2000);
	}

	var hashLink = window.location.href.indexOf();
	function scrollToElement(){
		hashLink = window.location.href.indexOf() + 200;
		console.log(hashLink);
		setTimeout(function(){
			$('html , body').animate({
				scrollTop: $('[name="sub-form__link"]').offset().top
			}, 800);
			return false;
		}, 2000);
	}


	var siteHeaderScrolled = 0;
	var currentScroll = 0;
	$(window).on('scroll' , function(){
		if ($('body').hasClass('mainpage')) {
			if ($('body').hasClass('body_watch-video-btn-pressed')) {
				videoPopup();
			}
			if ($(this).scrollTop() > 300) {
				if (siteHeaderScrolled == 0) {
					$('.advantages').addClass('advantages_scrolled');
					currentScroll = $(this).scrollTop();
					$(window).animate({'scrollTop' : 1200} , 200);
					return false; 
					setTimeout(function(){
						siteHeaderScrolled = 1;
					} , 500);
				}
			} else {
				$('.advantages').removeClass('advantages_scrolled');
				$('body').scrollTop(0);
				setTimeout(function(){
					$('.right-copyright').removeClass('right-copyright_loaded');
				}, 1000);	
				setTimeout(function(){siteHeaderScrolled = 0;} , 500);
			}
		}
		
	});

	$('body').on('click' , '.superset__label' , function(){
		$('.superset__label.b').removeClass('b');
		$(this).addClass('b');
	});

	var owl = $('.team-section-carousel');
	$('body').on('click' , '.team-section__owl-btn_prev' , function(){
		$('.team-section-carousel').trigger('prev.owl.carousel' , [1000]);
	});
	$('body').on('click' , '.team-section__owl-btn_next' , function(){
		$('.team-section-carousel').trigger('next.owl.carousel' , [1000]);
	});

	$('body').on('click' , '.mobile-app-carousel__owl-btn_prev' , function(){
		$('.mobile-app-carousel').trigger('prev.owl.carousel' , [1000]);
	});
	$('body').on('click' , '.mobile-app-carousel__owl-btn_next' , function(){
		$('.mobile-app-carousel').trigger('next.owl.carousel' , [1000]);
	});

	$('body').on('click','.site-footer__up-btn',function(){
		$('html, body').animate({
			scrollTop: 1
		}, 1000);
		return false;
	});

	// $('.site-footer__up-btn').mouseenter(function(){
	// 	$(this).addClass('hover');
	// });
	// $('.site-footer__up-btn').mouseout(function(){
	// 	$(this).removeClass('hover');
	// });

	$('[data-fancybox]').fancybox({
		youtube : {
			controls : 0,
			showinfo : 0
		},
		vimeo : {
			color : 'f00'
		}
	});
	function redirectPage() {
		window.location = linkLocation;
	}
	$('a:not([data-this-page])').click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$('body').addClass('body_loading');		
		setTimeout(function(){
			redirectPage();
		}, 1000);

		if($(this).attr('target') == 'new'){
			window.open(evt.target.href, '_blank');
			return false;
		}
	});
	$('html').on('click' , function(){
		if($('body').hasClass('body_watch-video-btn-pressed')) {
			console.log('закрываю видос');
			videoPopup();
		}
	});
	$('body').on('click' , '.watch-video-btn' , function(){
		setTimeout(function(){
			videoPopup();
		}, 100);
	});
	$('body').on('click' , '.video__placeholder.empty' , function(){
		$(this).removeClass('empty');
		$('.video__placeholder img').fadeOut(300);
		$('.video__iframe')[0].play();
	});

	function videoPopup() {
		if($('body').hasClass('body_watch-video-btn-pressed')) {
			$('.watch-video-btn_pressed').fadeOut(800);
			setTimeout(function(){
				$('.watch-video-btn_pressed').remove();
			}, 800);
		} else {
			$('.site-header__col').append('<a data-this-page class="watch-video-btn watch-video-btn_pressed"><iframe src="video.html" frameborder="0"></iframe></a>');
		}
		$('body').toggleClass('body_watch-video-btn-pressed');
	}

	var tagCarouselWidth = 0;
	setTimeout(function(){
		$('.tag-carousel__item').each(function(){
			currentTagCarouselItem = $(this);
			tagCarouselWidth = tagCarouselWidth + $(this).width();
			console.log(tagCarouselWidth);
		});

		$('.tag-carousel').append('<style>@-webkit-keyframes tag-carousel {from{-webkit-transform: translateX(0);-ms-transform: translateX(0);-o-transform: translateX(0);transform: translateX(0);}to{-webkit-transform: translateX(-' + tagCarouselWidth/3 +'px);-ms-transform: translateX(-' + tagCarouselWidth/3 +'px);-o-transform: translateX(-' + tagCarouselWidth/3 +'px);transform: translateX(-' + tagCarouselWidth/3 +'px);}} @keyframes tag-carousel {from{-webkit-transform: translateX(0);-ms-transform: translateX(0);-o-transform: translateX(0);transform: translateX(0);}to{-webkit-transform: translateX(-' + tagCarouselWidth/3 +'px);-ms-transform: translateX(-' + tagCarouselWidth/3 +'px);-o-transform: translateX(-' + tagCarouselWidth/3 +'px);transform: translateX(-' + tagCarouselWidth/3 +'px);}} .tag-carousel__item{-webkit-animation: tag-carousel 10s linear infinite;animation: tag-carousel 10s linear infinite;}</style>')
	}, 2000);

	$('.review-carousel').owlCarousel({
		loop: false,
		nav: true,
		dots:true,
		autoHeight: true,
		responsive: {
			0: { 
				items: 1
			},
			992: {
				items: 2
			}
		}
	});
	$('.mobile-app-carousel').owlCarousel({
		items: 1,
		loop: true,
		nav: false,
		dots: false,
		autoHeight: true,
		animateOut: 'blurOut',
		animateIn: 'blurIn'
	});
	$('.team-section-carousel').owlCarousel({
		items: 1,
		loop: true,
		nav: false,
		dots: true,
		responsive: {
			0: {
				stagePadding: 15
			},
			992: {
				stagePadding: 0
			}
		}
	});
	$('.faq-carousel').owlCarousel({
		items: 1,
		loop: true,
		nav: false,
		dots: true,
		stagePadding: 20,
		margin: 10
	});
	$('.ingredient-carousel').owlCarousel({
		items: 1,
		loop: true,
		nav: false,
		dots: true

	});

	$('body').on('click' , '.faq__item' , function(){
		$(this).toggleClass('active');
	});


	$('[name="sex"]').change(function() {
		$('.sub-form').removeClass('M').removeClass('J').addClass($('[name="sex"]:checked').val());
		$('.sub-form-section').removeClass('M').removeClass('J').addClass($('[name="sex"]:checked').val());
	});

});