document.addEventListener("DOMContentLoaded", function(){ 				window.addEventListener( 'DOMContentLoaded', () => {
					const blockScope = document.querySelector( '.uagb-block-3be0d1b9' );
					if ( ! blockScope ) {
						return;
					}

					const anchorElement = blockScope.querySelector('a');
					if (!anchorElement) {
						return;
					} 

					 
					blockScope.addEventListener('keydown', (event) => {
						if ( 13 === event.keyCode || 32 === event.keyCode ) {
							event.preventDefault();
							 
							anchorElement.click();	
						}
					} );
				} );
			window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-0dd1852b' );
});
 });