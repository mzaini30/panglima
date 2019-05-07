mainkan_cleave = function(){
	$('.bukan-input').each(function(){
		var cleave = new Cleave(this, {
			prefix: 'Rp ',
		    numeral: true,
		    delimiter: '.',
		    numeralThousandsGroupStyle: 'thousand'
		});
		$(this).width($(this).parent().width())
	})
}
mainkan_cleave()

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
	data_pembelian = []
	$('.ini-dihitung').each(function(){
		// data_pembelian.push(1)
		data_pembelian.push({
			'nama': $(this).find('.judul').html(),
			'harga': $(this).find('.harga').attr('data-harga'),
			'banyaknya': $(this).find('.banyaknya').val()
		})
		// console.log(data_pembelian)
		hasil = 0
		for (n in data_pembelian){
			hasil += (parseInt(data_pembelian[n].harga) * parseInt(data_pembelian[n].banyaknya))
		}
		$('.jumlah-semua').val(hasil)
		$('.jumlah-semua').each(function(){
			var cleave = new Cleave(this, {
				prefix: 'Rp ',
			    numeral: true,
			    delimiter: '.',
			    numeralThousandsGroupStyle: 'thousand'
			});
			// $(this).width($(this).parent().width())
			// $(this).css({
			// 	'float': 'left'
			// })
		})
		teks_whatsapp = ''
		teks_whatsapp += 'https://wa.me/6281545143654?text=Assalamualaikum.%20Saya%20mau%20pesan:%0A'
		for (n in data_pembelian){
			barang = data_pembelian[n].nama
			barang = barang.replace(/ /g, '%20').replace(/:/g, '%3A')
			teks_whatsapp += '-%20' + barang + ' (' + data_pembelian[n].banyaknya + ') %0A'
			// teks_whatsapp += '-%20' + (data_pembelian[n].nama).replace()
		}
		$('.pesan').attr('href', teks_whatsapp)
		// mainkan_cleave()
		// console.log(hasil)
	})
}

$('input').on('keyup', function(){
	$('.keterangan').each(function(){
		if ($(this).find('.banyaknya').val() != ''){
			// ini kalau banyaknya diisi
			$(this).addClass('ini-dihitung')
			$(this).parent().addClass('blok')
			hitung()
			// $(this).css({
			// 	'background': 'aqua'
			// })
		} else {
			// ini kalau banyaknya kosong
			$(this).removeClass('ini-dihitung')
			$(this).parent().removeClass('blok')
			hitung()
			// $(this).css({
			// 	'background': 'transparent'
			// })
		}
	})
})