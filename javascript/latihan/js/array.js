var nama = ["Saiful", "Labib", "Marzuqi", "Hidayat"];

for ( var i = 0; i < nama.length; i++ ) {
	console.log('Nama ke-' + (i+1) + ' : ' + nama[i] );
}

// Method pada array
// 1. join (menjadikan nilai berurutan (default ',') dan digunakan untuk banyak array)
// console.log(nama.join(' - ')); 

// 2. push & pop
nama.push("Yani", "Mulyani"); // Menambahkan nilai baru
nama.pop(); // Menghapus nilai paling belakang
// console.log(nama.join(' - '));

// 3. unshift & shift
nama.unshift('Muhamad'); // Menambahkan nilai di awal 
nama.shift(); // Menghapus nilai paling awal
// console.log(nama.join(' - '));

// 4. splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
nama.splice(2, 2, "Sayang", "Sama");
// console.log(nama.join(' - '));

// 5. slice(awal, akhir)
var nama1 = nama.slice(1,5); // Menghasilkan array baru
// console.log(nama1.join(' - '));

// 6. forEach
var angka = [1,4,2,11,9,3,20,5,6,7,8];

angka.forEach(function(e){
	console.log(e);
});

nama.forEach(function(e, i){
	console.log('Nama ke-' + (i+1) + ' : ' + e);
});

// 7. map
var angka1 = angka.map(function(e){ // Mengembalikan array
	return e * 2;
});

console.log(angka1.join(' - '));

// 8. sort (mengurutkan berdasarkan karakter);
angka.sort();
console.log(angka.join(' - '));

angka.sort(function(a,b){ // Mengurutkan berdasarkan urutan
	return a-b;
});

console.log(angka.join(' - ')); 

// 9. filter
var angka1 = angka.filter(function(e){ // Bisa menemukan banyak nilai
	return e > 5;
});

console.log(angka1.join(' - '));

// 10. find
var angka1 = angka.find(function(e){ // Hanya menemukan 1 nilai
	return e > 5;
});

console.log(angka1);