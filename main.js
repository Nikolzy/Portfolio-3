


$(document).ready(function() {

	let nav = $('#nav');
	let navToggle = $('#navToggle');

	//  Nav Toggle
	navToggle.on('click', (event)=> {
		event.preventDefault();

		nav.toggleClass('show').slideToggle(500);
	})


	// Smooth scroll

	$('[data-scroll]').on('click', function (event) {
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;

		nav.removeClass('show');

		$('html, body').animate({
			scrollTop: elementOffset 
		}, 800);
	});

	// Gallery Sort

	$('[name="button"]').on('click', function (e) {
		e.preventDefault();
		let id = this.id;
		let get_current = $('.works__item.' + id);

		$('.works__item').not(get_current).hide(500);
		get_current.show(500);


		// Can be deleted if u want to make 
		// "load button" in sub memu choice
		$('#button__show').hide(500); 
	})

	// Gallery SHOW_ALL and HIDE "load more" button

	$('#all').on('click', function () {
		$('.works__item').show(500);
		$('#button__show').hide(500);
	})


	// "Load More" button

	$('#button__show').on('click', function() {
		$('.hidden').show(500);

		let get__hidden = $('.hidden').is(":hidden");
		console.log(get__hidden);

		if (get__hidden === false) {
			$('#button__show').hide(500);
		}
	})


	// Show blog paragraph
	$('.btn--blog-1').on('click', function (e) {
		e.preventDefault();
		$('.blog__hidden_1').show(700);
		$('.button__blog_1').hide(800);
	})

	$('.btn--blog-2').on('click', function (e) {
		e.preventDefault();
		$('.blog__hidden_2').show(700);
		$('.button__blog_2').hide(800);
	})



	// SLick slider
	let slider = $('#clients__quotes');

	slider.slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  fade: true,
	  arrows: false,
	  dots: true
	});
	
});