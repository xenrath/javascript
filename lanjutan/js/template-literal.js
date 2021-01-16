// Template Literal atau Template String
const nama = 'Labib';
const umur = 20;
console.log(`Halo nama saya ${nama}, dan saya ${umur} tahun.`);

// Embeded Expressions
// console.log(`${1 + 1}`);
// console.log(`${alert('halo!')}`);
const x = 11;
console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

// HTML Fragments
// const mhs = {
// 	nama: 'Saiful Labib',
// 	umur: 20,
// 	nim: '17090144',
// 	email: 'xenrath89@gmail.com'
// };
// const el = `<div class="mhs">
// 	<h2>${mhs.nama}</h2>
// 	<span class="nim">${mhs.nim}</span>
// </div>`;
// document.body.innerHTML = el;

// Looping
// const mhs = [
// 	{
// 		nama: 'Saiful Labib',
// 		email: 'saiful@gmail.com'
// 	},
// 	{
// 		nama: 'Labib Marzuqi',
// 		email: 'labib@gmail.com'
// 	},
// 	{
// 		nama: 'Marzuqi Hidayat',
// 		email: 'marzuqi@gmail.com'
// 	}
// ];
// const el = `<div class="mhs">
// ${mhs.map(m => `<ul>
// <li>${m.nama}</li>
// <li>${m.email}</li>
// </ul>`).join('')}
// </div>`;
// document.body.innerHTML = el;

// Conditionals
// ternary
// const lagu = {
// 	judul: 'Tetap dalam Jiwa',
// 	penyanyi: 'Isyana Sarasvati',
// 	feat: 'Labib'
// }

// const el = `<div class="lagu">
// 	<ul>
// 		<li>${lagu.penyanyi}</li>
// 		<li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
// 	</ul>
// </div>`;
// document.body.innerHTML = el;

// 4. Nested
// HTML Fragments Bersarang
const mhs = {
	nama: 'Labib',
	semester: 5,
	mataKuliah: [
		'Rekayasa Web',
		'Analisis dan Perancangan Sistem Informasi',
		'Pemrograman Sistem Interaktif',
		'Perancangan Sistem Berorientasi Object'
	]
};
function cetakMataKuliah(mataKuliah){
	return `
	<ol>
		${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
	</ol>`;
}
const el = `<div class="mhs">
	<h2>${mhs.nama}</h2>
	<span class="semester">Semester : ${mhs.semester}</span>
	<h4>Mata Kuliah : </h4>
	${cetakMataKuliah(mhs.mataKuliah)}
</div>`;
document.body.innerHTML = el;