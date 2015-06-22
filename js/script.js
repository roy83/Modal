(function(){

	var modal = $('.modal'),
		box = $('.box'),
		ww, marginValueForOpen, marginValueForClose;

	setValue();
	$( window ).on( 'resize', setValue );

	function setValue(){
		ww = $(window).width();
		marginValueForOpen = ( ww < 670 ) ? {'margin': 0} : {'margin': '-160px 0 0 -300px'},
		marginValueForClose = ( ww < 670 ) ? {'margin': 0} : {'margin': '-460px 0 0 -300px'};
		if ( modal.hasClass('isOpen') ) {
			box.css('margin', ( ww < 670 ) ? 0 : '-160px 0 0 -300px');
		}
	}

	function openModal(){
		modal.addClass( 'isOpen' )
			.delay( 200 ).queue(function(){
				$(this).css({
						'opacity': 1,
				}).find(box).css(marginValueForOpen).dequeue();
			});
	}

	function closeModal(){
		modal.css({
			'opacity': 0,
		}).find(box).css(marginValueForClose)
		.delay( 500 ).queue(function(){
			modal.removeClass( 'isOpen' ).dequeue();
		});
	}
	
	$( '.wrapper' ).on( 'click', 'button', openModal );

	$( '.close' ).on( 'click', closeModal );

	modal.on( 'click', function( e ) {
		if ( e.target === this ) closeModal();
	});
	
})();