$(document).ready(function(){

	$('.slider-thumb').slick({
		autoplay: false,
		vertical: true,
		verticalSwiping: true,
		infinite: true,
		focusOnSelect: true,
		slidesPerRow: 1,
		slidesToShow: 6,
		asNavFor: '.slider-preview',
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-up slick_corect_market"></i></button>', //
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-down"></i></button>', //
		responsive: [
			{
				breakpoint: 768,
				settings: {
					vertical: false,
					slidesPerRow: 3,
					slidesToShow: 3
				}
			},
			{
				breakpoint: 479,
				settings: {
					vertical: false, //из-за этого свойства ошибка
					slidesPerRow: 1,
					slidesToShow: 1
				}
			},
		]
	});

	$('.slider-preview').slick({
		autoplay: false,
		vertical: true,
		infinite: true,
		slidesPerRow: 1,
		slidesToShow: 1,
		asNavFor: '.slider-thumb',
		arrows: false,
		draggable: false,
		responsive: [
			{
				breakpoint: 992
			},
			{
				breakpoint: 767,
				settings: {
					vertical: false,
					fade: true,
				}
			}
		]
	});
});
