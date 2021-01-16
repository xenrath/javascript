// Membuat Object

// Object Literal
var mhs1 = {
	nama : "Saiful Labib",
	umur : 20,
	ips : [3.91, 3.80, 3.40, 3.56, 3.27, 3.44],
	alamat : {
		jalan : "Jl. ABC No. 123",
		kota : "Tegal",
		provinsi : "Jawa Tengah"
	}
};

var mhs2 = {
	nama : "Marzuqi Hidayat",
	umur : 21,
	ips : [3.21, 3.70, 2.80, 3.98, 3.39, 3.76],
	alamat : {
		jalan : "Jl. 123 No. 234",
		kota : "Semarang",
		provinsi : "Jawa Tengah"
	}
};

// Function Declaration
function ObjectMahasiswa(nama, nim, email, jurusan){
	var mhs = {};
	mhs.nama = nama;
	mhs.nim = nim;
	mhs.email = email;
	mhs.jurusan = jurusan;
	return mhs;
}

mhs3 = ObjectMahasiswa('Saiful', '17090144', 'saiful@gmail.com', 'Teknik Informatika');

// Constructor
function Mahasiswa (nama, nim, email, jurusan) {
	this.nama = nama;
	this.nim = nim;
	this.email = email;
	this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa('Labib', '17090144', 'labib@gmail.com', 'Teknik Informatika');