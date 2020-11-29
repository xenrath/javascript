var angka = prompt('Masukan angka : ');

if (angka % 2 == 0) {
	alert('Angka ' + angka + ' adalah bilangan GENAP');
} else if (angka % 2 == 1) {
	alert('Angka ' + angka + ' adalah bilangan GANJIL');
} else {
	alert('Maaf yang Anda masukan BUKAN angka');
}