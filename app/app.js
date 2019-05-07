$('.bukan-input').each(function(){
	var cleave = new Cleave(this, {
		prefix: 'Rp ',
	    numeral: true,
	    numeralThousandsGroupStyle: 'thousand'
	});
})

$('.grid').imagesLoaded( function() {
	$('.grid').masonry({
		// options
		itemSelector: '.grid-item',
		// columnWidth: 50
	});
});