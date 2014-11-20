	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
		<script src="js/jquery.cbpFWSlider.min.js"></script>
		<script>
			$( function() {
				$( '#cbp-fwslider' ).cbpFWSlider();
			} );
		</script>
		
		
		
		
		var theButton =$('.piece-1');
var header = $('.heading');


var buttonClickHandler = function () {
	var currentState = header.attr('data-state');
	
	if (currentState == 'active') {
		header.attr('data-state', 'inactive');
	
	} else {
	
		header.attr('data-state','active');
	}	
};

theButton.on('click', buttonClickHandler);
