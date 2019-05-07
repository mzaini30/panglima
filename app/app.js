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

hitung = function(){

}

$('input').on('keyup', function(){
	$('.keterangan').each(function(){
		if ($(this).find('.banyaknya').val() != ''){
			// ini kalau banyaknya diisi
			$(this).addClass('ini-dihitung')
			hitung()
			// $(this).css({
			// 	'background': 'aqua'
			// })
		} else {
			// ini kalau banyaknya kosong
			$(this).removeClass('ini-dihitung')
			hitung()
			// $(this).css({
			// 	'background': 'transparent'
			// })
		}
	})
})