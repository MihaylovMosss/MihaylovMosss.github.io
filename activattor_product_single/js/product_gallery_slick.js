$(document).ready(function(){

	$('.slider-thumb').slick({
		autoplay: false,
		vertical: true,
		infinite: true,
		verticalSwiping: true,
		slidesPerRow: 1,
		slidesToShow: 6,
		asNavFor: '.slider-preview',
		focusOnSelect: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-up slick_corect_market"></i></button>', //
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-down"></i></button>', //
		responsive: [
			{
				breakpoint: 767,
				settings: {
					vertical: false,
				}
			},
			{
				breakpoint: 479,
				settings: {
					vertical: false,
					slidesPerRow: 3,
					slidesToShow: 3,
				}
			},
		]
	});

	//$('.slider-preview').slick({
	$(".slider-preview").not('.slick-initialized').slick({
		autoplay: true,
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
			},
		]
	});
});
