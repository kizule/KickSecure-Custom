/* JS-Button for Scrolling Back to the Top. See [[Dev/mediawiki#Back_To_Top_Button]] */

(function() {
	
	let setup = {
		visibleTimeAfterScroll: 2500,
		scrollToTopTime: 300,
	};

	let button = $(''
		+ '<div id="back-to-top-button">'
		+  '<i class="fas fa-chevron-up"></i>'
		+ '</div>'
	);
	
	let windowIsScrolling = false;
	let intervalHandle;
	
	// Functions
	
	function hideButton() {
		button.animate( { opacity: 0 }, 300, function() {
			button.css( { display: 'none' } );
			windowIsScrolling = false;
		});
	}
	
	// Setup
	
	$(document.body).append(button);
	
	// Events
	
	button.on( 'click', function() {
		$("html, body").animate({ scrollTop: 0 }, setup.scrollToTopTime);
	});
	
	$(window).on('scroll', function() {
		clearInterval( intervalHandle );
		intervalHandle = setTimeout( hideButton, setup.visibleTimeAfterScroll );
		
		if( ! windowIsScrolling ) {
			button.css( { display: 'block', opacity: 0 } );
			button.animate( { opacity: 1 }, 300 );
		}
		
		windowIsScrolling = true;
	});
	
})();

/*
[[Category:MultiWiki]]
*/
