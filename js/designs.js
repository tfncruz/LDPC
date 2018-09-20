jQuery(document).ready(function() {

	var $root = $('html, body');

	var $main_nav = $('.nav');

	/*
	*
	* animate anchor links smoothly
	*
	*/
	$main_nav.click(function () {
		$root.animate({ scrollTop: $( $.attr(this, 'href') ).offset().top }, 500);
	    return false;
	});
});