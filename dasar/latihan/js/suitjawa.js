// Perulangan pertanyaan
var tanya = true;
while ( tanya ) {

	// Menangkap pilihan Player
	var p = prompt('Pilih salah satu : gajah, semut, orang');

	// Menangkap pilihan Computer
	// Membangkitkan bilangan random
	var comp = Math.random();

	if ( comp < 0.34 ) {
		comp = 'gajah';
	} else if ( comp >= 0.34 && comp <= 0.67 ) {
		comp = 'orang';
	} else {
		comp = 'semut';
	}

	// Menentukan rules
	var hasil = '';
	if ( p == comp ) {
		hasil = 'SERI!';
	} else if ( p == 'gajah' ) {
		if ( comp == 'semut' ) {
			hasil = 'KALAH!';
		} else {
			hasil = 'MENANG';
		}
	} else if ( p == 'semut' ) {
		hasil = ( comp == 'orang' ) ? 'KALAH!' : 'MENANG!';
	} else if ( p == 'orang' ) {
		hasil = ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
	} else {
		hasil = 'Harap masukan pilihan dengan benar';
	}

	// Tampilkan hasilnya
	alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya Kamu ' + hasil);

	tanya = confirm('Ingin bermain lagi?');

}

alert('Terima kasih sudah bermain.');