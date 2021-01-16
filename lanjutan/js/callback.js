// Callback
// Synchronous Callback
// function halo(nama){
//     alert(`Halo, ${nama}`);
// }
// function tampilkanPesan(callback) {
//     const nama = prompt('Masukan nama : ');
//     callback(nama);
// }
// tampilkanPesan(halo);
// tampilkanPesan(nama => alert(`Halo, ${nama}`));

// const mhs = [
//     {
//         "nama": "Saiful Labib",
//         "nim": "1234567",
//         "email": "sl@gmail.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 1
//     },
//     {
//         "nama": "Marzuqi Hidayat",
//         "nim": "2345678",
//         "email": "mh@gmail.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 2
//     },
//     {
//         "nama": "Siti Mulyani",
//         "nim": "3456789",
//         "email": "sm@gmail.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 3
//     }
// ];
// mhs.forEach(m => console.log(m.nama)); // mengambil hanya nama
// console.log('mulai');
// mhs.forEach(m => {
//     for (let i = 0; i < 10000000; i++ ){ // me-looping sembarang agar nama yang ditampilkan lama
//         let date = new Date();
//     }
//     console.log(m.nama)
// });
// console.log('selesai');

// Asynchronous Callback
// function getDataMahasiswa(url, success, error){
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//         if ( xhr.readyState === 4 ) {
//             if ( xhr.status === 200 ) {
//                 success(xhr.response);
//             } else if ( xhr.status === 404 ) {
//                 error();
//             }
//         }
//     }
//     xhr.open('get', url);
//     xhr.send();
// }
// console.log('mulai');
// getDataMahasiswa('json/mahasiswa.json', results => {
    // console.log(JSON.parse(result));
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
// }, () => {
// });
// console.log('selesai');

// JQuery
console.log('mulai');
$.ajax({
    url: 'json/mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: (e) => {
        console.log(e.responseText);
    }
});
console.log('selesai');