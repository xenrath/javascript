// Contoh 1
// function init(){
// 	let nama = 'Labib'; // local variable
// 	function tampilNama(){ // inner function (closure*)
// 		console.log(nama); // akses ke parent variable
// 	}

// 	tampilNama();
// }

// init();

// Contoh 2 - Function Factories
// function init(){
// 	// let nama = 'Labib'; // local variable
// 	function tampilNama(nama){ // inner function (closure*)
// 		console.log(nama); // akses ke parent variable
// 	}

// 	return tampilNama;
// }

// let panggilNama = init();
// panggilNama('Labib');


// Contoh 3 - Anonymous Function
// function init(){
// 	// let nama = 'Labib'; // local variable
// 	return function(nama){ // inner function (closure*)
// 		console.log(nama); // akses ke parent variable
// 	}
// }

// let panggilNama = init();
// panggilNama('Saiful');
// panggilNama('Labib');

// // Contoh 4
// function ucapkanSalam(waktu){
// 	return function(nama){
// 		console.log(`Halo ${nama}, Salamat ${waktu}, Semoga harimu menyenangkan!`);
// 	}
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// selamatPagi('Saiful');
// selamatSiang('Labib');
// selamatMalam('Marzuqi');

let add = (function(){
	let counter = 0;
	return function(){
		return ++counter;
	}
})();

counter = 100; // tidak akan terpengaruh dengan ini

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());