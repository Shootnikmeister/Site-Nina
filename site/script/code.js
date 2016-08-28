$(document).ready(function(){

	
	$("#menu").click(function() {
  $( ".nav" ).toggle();
});
	
$('.slickMain').slick({
	slidesToShow: 1,
});
	
$('.desSlick').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 3,
  slidesToScroll: 1,
	});
	
	
	
	
});

