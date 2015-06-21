(function(){

	function openModal(){
		$( '.modal' ).addClass( 'isOpen' ).delay( 200 ).queue(function(){
			$(this)
				.css({
					'opacity': 1,
					'transition': 'opacity 500ms ease-in-out'
				})
				.find('.box')
				.css({
					'margin': '-160px 0 0 -300px',
					'transition': 'margin 500ms ease-in-out'
				})
				.dequeue();
		});
	}

	function closeModal(){
		$( '.modal' ).css({
				'opacity': 0,
				'transition': 'opacity 1000ms ease-in-out'
			})
			.find('.box')
			.css({
				'margin': '-460px 0 0 -300px',
				'transition': 'margin 1000ms ease-in-out'
			})
			.delay( 1000 ).queue(function(){
				$( '.modal' ).removeClass( 'isOpen' ).dequeue();
			});
	}
	
	$( '.wrapper' ).on( 'click', 'button', openModal );

	$( '.close' ).on( 'click', closeModal );

	$( '.modal' ).on( 'click', function( e ) {
		if ( e.target === this ) closeModal();
	});
	
})();