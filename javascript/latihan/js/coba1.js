var penumpang = [];
var ulangi = true;
var tambahPenumpang = function (namaPenumpang,penumpang) {
	if (penumpang.length == 0) {
		penumpang.unshift(namaPenumpang);
		console.log('Penumpang pertama dengan nama ' + namaPenumpang + ' telah masuk kedalam angkot.');
		return penumpang;
	} else {
		var cariPenumpang = penumpang.find(function(e){
			return e == namaPenumpang;
		})

		if ( namaPenumpang == cariPenumpang ) {
			console.log('Penumpang dengan nama ' + ' ada.');
			return penumpang;
		} else if (  ) {

		}
	}
}