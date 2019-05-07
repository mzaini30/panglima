$('.bukan-input').each(function(){
	var cleave = new Cleave(this, {
		prefix: 'Rp ',
	    numeral: true,
	    numeralThousandsGroupStyle: 'thousand'
	});
	$(this).width($(this).width() - 20)
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