$('.grid').imagesLoaded( function() {
	$('.grid').masonry({
		// options
		itemSelector: '.grid-item',
		columnWidth: 200
	});
});