$('.bukan-input').each(function(){
	var cleave = new Cleave(this, {
		prefix: 'Rp ',
	    numeral: true,
	    delimiter: '.',
	    numeralThousandsGroupStyle: 'thousand'
	});
	$(this).width($(this).parent().width())
})

$('.grid').imagesLoaded( function() {
	$('.grid').masonry({
		// options
		itemSelector: '.grid-item',
		// columnWidth: 50
	});
});

// $('.keterangan').css({
// 	'padding-left': '10px',
// 	'padding-right': '10px'
// })