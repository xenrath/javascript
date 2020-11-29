function jumlahVolumeDuaKubus (a, b) {
		
	var total, volumeA, volumeB;

	volumeA = a * a * a;
	volumeB = b * b * b;
	total = volumeA + volumeB;

	return total;

}

var tanya = true;
while ( tanya ) {

	var a = prompt('Masukan Sisi Kubus A : ');
	var b = prompt('Masukan Sisi Kubus B : ');

	alert(jumlahVolumeDuaKubus(a, b));

	tanya = confirm('Ingin menghitung lagi?');

}