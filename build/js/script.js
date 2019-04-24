$(document).ready(function () {
	$('.slider-items').slick(
		// 	{
		//   setting-name: setting-value
		// }
		{
			slidesToShow: 3,
			centerPadding: '0px',
			// autoplay: true,
			centerMode: true,
			prevArrow: $('slider-prev'),
			nextArrow: $('slider-next')
		}
	);
});

$('.slider-prev').on('click', function () {
	$('.slider-items').slick('slickPrev');
});

$('.slider-next').on('click', function () {
	$('.slider-items').slick('slickNext');
});