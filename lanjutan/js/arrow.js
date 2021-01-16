// Function Expression
// const tampilNama = function(nama){
// 	return `Halo, ${nama}`;
// }
// console.log(tampilNama('Labib'));

// Arrow Function
// Contoh 1
// const tampilNama = (nama) => { return `Halo ${nama}`; }
// console.log('Saiful');

// Contoh 2
// const tampilNama = (nama, waktu) => { 
// 	return `Selamat ${waktu}, ${nama}`;
// }

// console.log(tampilNama('Labib', 'Malam'));

// Contoh 3 - implisit return
// const tampilNama = nama => `Halo ${nama}`;
// console.log('Saiful');

// Contoh 4
// const tampilNama = () => `Hello World`;
// console.log(tampilNama());

// -
// let mahasiswa = ['Saiful', 'Labib', 'Marzuqi', 'Hidayat'];
// let jumlahHuruf = mahasiswa.map(function(nama){
// 	return nama.length;
// });
// console.log(jumlahHuruf);

// Contoh 5
// let jumlahHuruf = mahasiswa.map( nama => nama.length );
// console.log(jumlahHuruf);

// Contoh 6 - yang dikembalikan berupa object
// let jumlahHuruf = mahasiswa.map(nama => ({ nama, jmlHuruf: nama.length })); // nama: nama dapat digabungkan karna sama
// console.table(jumlahHuruf);

// Konsep this pada Arrow Function

// Constructor Function
// const Mahasiswa = function(){
// 	this.nama = 'Labib';
// 	this.umur = 20;
// 	this.sayHello = function(){
// 		console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
// 	}
// }

// const labib = new Mahasiswa();

// Arrow Function - semua function tidak bisa diubah menjadi arrow function kecuali method
// const Mahasiswa = function(){
// 	this.nama = 'Labib';
// 	this.umur = 20;
// 	this.sayHello = () => {
// 		console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
// 	}
// }

// const labib = new Mahasiswa();

// Object Literal - arrow function tidak memiliki konsep this
// const mhs1 = {
// 	nama: 'Labib',
// 	umur: 20,
// 	sayHello: function(){
// 		console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
// 	}
// }

// -
// const Mahasiswa = function(){
// 	this.nama = 'Labib';
// 	this.umur = 20;
// 	this.sayHello = function(){ // function expression
// 		console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
// 	}

// 	setInterval(() => { // function declaration
// 		console.log(this.umur++);
// 	}, 500);
// }

// const labib = new Mahasiswa();

const box = document.querySelector('.box');
box.addEventListener('click', function(){
	let satu = 'size';
	let dua = 'caption';
	
	if (this.classList.contains(satu)) {
		[satu, dua] = [dua, satu];
	}
	
	this.classList.toggle(satu);
	setTimeout(() => {
		this.classList.toggle(dua);
	}, 600);
});