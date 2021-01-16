// Destructuring Variable / Assignment

// Destructuring Array 
// const perkenalan = ['Halo', 'nama', 'saya', 'Saiful Labib'];
// const salam = perkenalan[0];
// const nama = perkenalan[3];
// const [salam, satu, dua, nama] = perkenalan;
// skipping items
// const [salam, , , nama] = perkenalan;
// console.log(salam);

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba(){
//     return [1, 2];
// }
// const a = coba();
// console.log(a[0]);
// const [a, b] = coba();
// console.log(a);

// Rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5]; // 1 masuk ke a, lainnya ke values
// console.log(a);
// console.log(values);

// Destructuring Object
// const mhs = {
//     nama: 'Saiful Labib',
//     umur: 33
// }
// const {nama, umur} = mhs;
// console.log(nama);

// Assignment tanpa deklarasi object
// ({nama, umur} = {
//     nama: 'Saiful Labib',
//     umur: 33
// });
// console.log(nama);

// Assign ke variable baru
// const mhs = {
//     nama: 'Saiful Labib',
//     umur: 33
// }
// const {nama: n, umur: u} = mhs;
// console.log(n);

// Memberikan Default Value
// const mhs = {
//     nama: 'Saiful Labib',
//     umur: 33,
//     email: 'saiful@gmail.com' // jika ada akan menggunakan email ini
// }
// const {nama, umur, email = 'email@default.com'} = mhs; // jika email kosong menggunakan email ini
// console.log(nama);

// Memberi nilai default + assign ke variable baru
// const mhs = {
//     nama: 'Saiful Labib',
//     umur: 33,
//     email: 'saiful@gmail.com'
// }
// const {nama: n, umur: u, email: e = 'email@default.com'} = mhs;
// console.log(e);

// Rest parameter
// const mhs = {
//     nama: 'Saiful Labib',
//     umur: 33,
//     email: 'saiful@gmail.com'
// }
// const {nama, ...value} = mhs;
// console.log(value);

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
// const mhs = {
//     id: 123,
//     nama: 'Saiful Labib',
//     umur: 33,
//     email: 'saiful@gmail.com'
// }
// function getIdMhs(mhs){
//     return mhs.id;
// }
// function getIdMhs({ id }){ // hanya id yang dapat muncul
//     return id;
// }
// console.log(getIdMhs(mhs));

// Destructuring Function

// Destructuring
// function penjumlahanPerkalian(a, b){
//     return [a + b, a * b];
// }
// const jumlah = penjumlahanPerkalian(2, 3);
// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// function kalkulasi(a, b){
//     return [a + b, a - b, a * b, a / b];
// }
// const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2, 3); // bagi tidak ada apabila function bagi dihapus
// console.log(kurang);

// Menggunakan Object
function kalkulasi(a, b){
    return {
        tambah: a + b,
        kurang: a - b,
        kali: a * b,
        bagi: a / b
    }
}
const {bagi, tambah, kali, kurang} = kalkulasi(2, 3); // tanpa melihat urutan
console.log(kurang);

// Destructuring function arguments
const mhs1 = {
    nama: 'Saiful Labib', 
    umur: 20,
    email: 'xenrath89@gmail.com',
    nilai: {
        tugas: 80,
        uts: 85,
        uas: 75
    }
}
// Cara 1
// function cetakMhs(nama, umur){
//     return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// }
// console.log(cetakMhs(mhs1.nama, mhs1.umur));
// Cara 2
// function cetakMhs(mhs){
//     return `Halo, nama saya ${mhs.nama}, saya ${mhs.umur} tahun.`;
// }
// console.log(cetakMhs(mhs1.nama, mhs1.umur));
// Cara 3
function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }){
    return `Halo, nama saya ${nama}, saya ${umur} tahun, dan nilai uas saya adalah ${uas}`;
}
console.log(cetakMhs(mhs1));
