const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >= 3
// for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
// 	if (angka[i] >= 3) {
// 		newAngka.push(angka[i]);
// 	}
// }
// console.log(newAngka);

// filter
// const newAngka = angka.filter(function(a){ // normal
// 	return a >= 3;
// });
// const newAngka = angka.filter(a => a >= 3); // arrow function
// console.log(newAngka);

// map
// kalikan semua angka dengan 2
// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);

// Reduce
// jumlahkan seluruh elemen pada array
// -1, 8, 9, 1, 4, -5, -4, 3, 2, 9
// const newAngka = angka.reduce((accumulator, currentValue) => 
// 	accumulator + currentValue, 5); // angka 5 dapat dihilangkan dan menjadi 0
// console.log(newAngka);

// Method Chaining
// cari angka > 5
// kali 3
// jumlahkan
const hasil = angka.filter(a => a > 5) // 8,9,9
	.map(a => a * 3) // 24,27,27
	.reduce((acc, cur) => acc + cur); // 78
console.log(hasil);