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

$('input').on('keyup', function(){
	$('.keterangan').each(function(){
		if ($(this).find('.banyaknya').val() != ''){
			$(this).css({
				'background': 'aqua'
			})
		} else {
			$(this).css({
				'background': 'transparent'
			})
		}
	})
})