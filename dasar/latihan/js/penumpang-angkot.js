var penumpang = [];
var ulangi = true;
var tambahPenumpang = function(namaPenumpang, penumpang) {
	// jika angkot kosong
	if ( penumpang.length == 0 ) {
		// tambah penumpang di awal array
		penumpang.push(namaPenumpang);
		// kembalikan isi array dan keluar dari function
		return penumpang;
	// else
	} else {
		// telusuri seluruh kursi dari awal
		for ( var i = 0; i < penumpang.length; i++ ) {
			// jika ada kursi kosong
			if ( penumpang[i] == undefined ) {
				// tambah penumpang di kursi tersebut
				penumpang[i] = namaPenumpang;
				// kembalikan isi array & keluar dari function
				return penumpang;
			// jika sudah ada nama yang sama
			} else if ( penumpang[i] == namaPenumpang ) {
				// tampilkan pesan kesalahannya
				console.log( namaPenumpang + 'sudah ada didalam angkot.' );
				// kembalikan isi array & keluar dari function
				return penumpang;
			// jika seluruh kursi terisi
			} else if ( i == penumpang.length - 1 ) {
				// tambah penumpang di akhir array
				penumpang.push(namaPenumpang);
				// kembalikan isi array & keluar dari function
				return penumpang;
			}
		}
	}
}

var hapusPenumpang = function(namaPenumpang, penumpang) {
	if ( penumpang.length == 0 ) {
		console.log( namaPenumpang + ' tidak ada, angkot sudah kosong.');
		return penumpang;
	} else {
		for ( var i = 0; i < penumpang.length; i++ ) {
			if ( penumpang[i] == namaPenumpang ) {
				penumpang[i] == undefined;
				return penumpang;
			} else if ( i == penumpang.length - 1 ) {
				console.log( namaPenumpang + 'tidak ada didalam angkot.');
				return penumpang;
			}
		}
	}
	return penumpang;
}