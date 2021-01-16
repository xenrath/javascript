// for of

// looping array
// const mhs = ['Saiful', 'Labib', 'Marzuqi'];
// Cara 1
// for ( let i = 0; i < mhs.length; i++ ){
//     console.log(mhs[i]);
// }
// Cara 2
// mhs.forEach(m => console.log(m));
// Cara 3
// for ( const m of mhs ){
//     console.log(m);
// }

// looping string (tidak bisa menggunakan forEach)
// const nama = 'Saiful';
// for ( const n of nama ){
//     console.log(n);
// }
// const mhs = ['Saiful', 'Labib', 'Marzuqi'];
// mhs.forEach((m, i) => {
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// });
// for ( const [i, m] of mhs.entries() ){
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }

// NodeList
// const liNama = document.querySelectorAll('.nama');
// console.log(liNama);
// liNama.forEach(n => console.log(n.textContent));
// for( n of liNama ){
//     console.log(n.innerHTML);
// }

// arguments
// function jumlahkanAngka(){
    // return arguments.reduce((a, i) => a + i); // tidak bisa karna bukan array
    // arguments.forEach(a => jumlah += a); // tidak bisa karna bukan array
//     let jumlah = 0;
//     for (a of arguments){
//         jumlah += a;
//     }
//     return jumlah;
// }
// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// for..in
// looping properti
const mhs = {
    nama: 'Saiful Labib',
    umur: 20,
    email: 'xenrath89@gmail.com'
}
for(m in mhs){
    console.log(m);
}
for(m in mhs){
    console.log(mhs[m]);
}