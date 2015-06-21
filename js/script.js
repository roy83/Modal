(function(){

	function openModal(){
		$( '.modal' ).addClass( 'isOpen' );
	}

	function closeModal(){
		$( '.modal' ).removeClass( 'isOpen' );
	}
	
	$( '.wrapper' ).on( 'click', 'button', openModal );

	$( '.close' ).on( 'click', closeModal );

	$( '.modal' ).on( 'click', function( e ) {
		if ( e.target === this ) closeModal();
	});
	
})();