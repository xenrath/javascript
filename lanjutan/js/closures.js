// 2.1 Execution Context, Hoisting & Scope
// pythontutor.com

console.log(nama);
var nama = 'Labib';

// Creation Phase pada Global Context
// nama var = undefined
// nama function = fn()
// hoisting - urutan
// window = global object
// this = window

// execution phase
// var nama = 'Labib';
// var umur = 20;

// console.log(sayHello());

// function sayHello(){
// 	return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// }

// function membuat Local Execution Context
// yang didalamnya terdapat Creation dan Execution phase
// window
// arguments
// hoisting

var nama = 'Labib';
var username = '_xenrath';

function cetakURL(username){
	var instagramURL = 'https://instagram.com/';
	return instagramURL + username;
}

console.log(cetakURL(username));

// function a(){
// 	console.log('ini a');

// 	function b(){
// 		console.log('ini b');

// 		function c(){
// 			console.log('ini c');
// 		}

// 		c();
// 	}

// 	b();
// }

// a();

function satu(){
	var nama = 'Labib';
	console.log(nama);
}

function dua(){
	console.log(nama);
}

console.log(nama);
var nama = 'Erik';
satu();
dua('Doddy');
console.log(nama);