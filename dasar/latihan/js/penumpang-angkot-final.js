function Angkot(supir, tujuan, penumpang, kas){
	this.supir = supir;
	this.tujuan = tujuan;
	this.penumpang = penumpang;
	this.kas = kas;

	this.penumpangNaik = function(namaPenumpang){
		this.penumpang.push(namaPenumpang);
		return this.penumpang;
	}

	this.penumpangTurun = function(namaPenumpang, bayar){
		if (this.penumpang.length == 0) {
			alert('angkot masih kosong.');
			return false;
		}

		for (var i = 0; i < this.penumpang.length; i++) {
			if (this.penumpang[i] == namaPenumpang) {
				this.penumpang[i] = undefined;
				this.kas += bayar;
				return this.penumpang;
			}
		}
	}
}

var angkot1 = new Angkot('Saiful', ['Tegal', 'Slawi'], [], 0);
var angkot2 = new Angkot('Labib', ['Tegal', 'Brebes'], [], 0);