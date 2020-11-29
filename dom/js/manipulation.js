// DOM Manipulation

// innerHTML
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Xenrath</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = '<div><p>paragraf 1</p></div>';

// style
// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';

// setAttribute
const judul = document.getElementsByTagName('h1')[0];
judul.setAttribute('name', 'judul');

// classList
const p2 = document.querySelector('.p2');

// Membuat elemen baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');
// Simpan tulisan kedalam paragraf
pBaru.appendChild(teksPBaru);
// Simpan pBaru diakhir Section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

// Contoh lain
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

// Menghapus
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// Mengganti
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru !');

h2Baru.appendChild(teksH2Baru);
sectionB.replaceChild(h2Baru, p4);