// Membuat Object

// Cara 1 - Function Declaration
function halo(){
	console.log(this);
	console.log('Halo 1');
}
this.halo();
// this mengembalikan object Global

// Cara 2 - Object Literal
var obj = {nama : 'Saiful'};
obj.halo = function(){
	console.log(this);
	console.log('Halo 2');
}
obj.halo();
// this mengembalikan object yang bersangkutan

// Cara 3 - Constructor
function Halo(){
	console.log(this);
	console.log('Halo 3');
}
var obj1 = new Halo();
var obj2 = new Halo();
// this mengembalikan object yang baru dibuat