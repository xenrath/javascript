// Cara untuk membuat Object pada Javascript
// 1. Object Literal - tidak efektif untuk object yang banyak
// let mahasiswa = {
// 	nama : 'Saiful',
// 	energi : 10,
// 	makan : function(porsi){
// 		this.energi = this.energi + porsi;
// 		console.log(`Halo ${this.nama}, Selamat Makan`);
// 	}
// }

// 2. Function Declaration -
// function Mahasiswa(nama, energi){
// 	let mahasiswa = {};
// 	mahasiswa.nama = nama;
// 	mahasiswa.energi = energi;
// 	mahasiswa.makan = function(porsi){
// 		this.energi += porsi;
// 		console.log(`Halo ${this.nama}, Selamat Makan!`);
// 	}	

// 	mahasiswa.main = function(jam){
// 		this.energi -= jam;
// 		console.log(`Halo ${this.nama}, Selamat Bermain!`);
// 	}

// 	return mahasiswa;
// }

// let saiful = Mahasiswa('Saiful', 10);
// let labib = Mahasiswa('Labib', 15);

// 3. Constructor Function
// keyword new
// function Mahasiswa(nama, energi){
// 	this.nama = nama;
// 	this.energi = energi;
// 	this.makan = function(porsi){
// 		this.energi += porsi;
// 		console.log(`Halo ${this.nama}, Selamat Makan!`);
// 	}	

// 	this.main = function(jam){
// 		this.energi -= jam;
// 		console.log(`Halo ${this.nama}, Selamat Bermain!`);
// 	}

// }

// let labib = new Mahasiswa('Labib', 10);

// 4. Object.create
// const methodMahasiswa = {
// 	makan : function(porsi){
// 		this.energi += porsi;
// 		console.log(`Halo ${this.nama}, Selamat Makan!`);
// 	},

// 	main : function(jam){
// 		this.energi -= jam;
// 		console.log(`Halo ${this.nama}, Selamat Bermain!`);
// 	},

// 	tidur : function(jam){
// 		this.energi += jam * 2;
// 		console.log(`Halo ${this.nama}, Selamat Tidur!`);
// 	}
// }

// function Mahasiswa(nama, energi){
// 	let mahasiswa = Object.create(methodMahasiswa);
// 	mahasiswa.nama = nama;
// 	mahasiswa.energi = energi;

// 	return mahasiswa;
// }

// let saiful = Mahasiswa('Saiful', 10);
// let labib = Mahasiswa('Labib', 15);

// 5. Prototype
// function Mahasiswa(nama, energi){
// 	this.nama = nama;
// 	this.energi = energi;
// }

// Mahasiswa.prototype.makan = function(porsi){
// 	this.energi += porsi;
// 	return `Halo ${this.nama}, Selamat Makan!`;
// }

// Mahasiswa.prototype.main = function(jam){
// 	this.energi -= jam;
// 	return `Halo ${this.nama}, Selamat Main!`;
// }

// Mahasiswa.prototype.tidur = function(jam){
// 	this.energi += jam * 2;
// 	return `Halo ${this.nama}, Selamat Tidur!`;
// }

// let labib = new Mahasiswa('Labib', 10);

// Versi Class
class Mahasiswa {
	constructor(nama, energi){
		this.nama = nama;
		this.energi = energi;
	}

	makan (porsi){
		this.energi += porsi;
		return `Halo ${this.nama}, Selamat Makan!`;
	}

	main (jam){
		this.energi -= jam;
		return `Halo ${this.nama}, Selamat Main!`;
	}

	tidur (jam){
		this.energi += jam * 2;
		return `Halo ${this.nama}, Selamat Tidur!`;
	}
}

let labib = new Mahasiswa('Labib', 15);