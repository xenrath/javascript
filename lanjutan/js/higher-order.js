// Contoh 1
// function kerjakanTugas(matakuliah, selesai){
// 	console.log(`Mulai mengerjakan tugas ${matakuliah}`);
// 	selesai();
// }

// function selesai(){
// 	alert('Selesai mengerjakan tugas!');
// }

// kerjakanTugas('Pemrograman Web', selesai);

// Contoh 2
let total = 0, count = 1;
while (count <= 10){
	total += count;
	count += 1;
}
console.log(total);

// vs

// console.log(sum(range(1, 10)));

// Contoh 3
// for(let i = 0; i < 10; i++){
// 	console.log(i);
// }

// vs

// function repeatLog(n){
// 	for(let i = 0; i < n; i++){
// 		console.log(i);
// 	}
// }

// repeatLog(100);

// vs

function repeat(n, action){
	for (let i = 0; i < n; i++){
		action(i);
	}
}

repeat(10, console.log);
repeat(3, alert);