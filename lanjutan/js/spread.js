// Spread Operator
// memecah iterables menjadi single element

// const mhs = ['Saiful', 'Labib', 'Marzuqi'];
// console.log(...mhs); // pada array
// console.log(...mhs[0]); // pada string

// menggabungkan 2 array
// const mhs = ['Saiful', 'Labib', 'Marzuqi'];
// const dosen = ['Siti', 'Mulyani'];
// const orang = [...mhs, ...dosen];
// const orang = [...mhs, 'Hidayat', ...dosen];
// const orang = mhs.concat(dosen);
// console.log(orang);

// meng-copy array
// const mhs = ['Saiful', 'Labib', 'Marzuqi'];
// const mhs1 = [...mhs]; // membuat variable baru
// mhs1[0] = 'Siti';
// console.log(mhs1);

// menambahkan pada html
// const liMhs = document.querySelectorAll('li');
// const mhs = [];
// for( let i = 0; i < liMhs.length; i++ ){
//     mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);
// const mhs = [...liMhs].map(m => m.textContent); // ubah dulu liMhs menjadi array
// console.log(mhs);

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;