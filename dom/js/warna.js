const button = document.getElementsByTagName('button')[0];
const tUbahWarna = document.getElementById('tUbahWarna');

// document.body
// const body = document.getElementsByTagName('body')[0];

tUbahWarna.onclick = function(){
	// document.body.style.backgroundColor = 'lightblue';
	// document.body.setAttribute('class', 'biru-muda'); // menambahkan class
	document.body.classList.toggle('biru-muda');
}

// function ubahWarnaButton(){
// 	body.style.backgroundColor = 'lightblue';
// }

const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');

tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function(){
	const r = Math.round(Math.random() * 255 + 0);
	const g = Math.round(Math.random() * 255 + 0);
	const b = Math.round(Math.random() * 255 + 0);
	console.log(r);
	console.log(g);
	console.log(b);
	document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
});


// Membuat range warna
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function(){
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});

sHijau.addEventListener('input', function(){
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});

sBiru.addEventListener('input', function(){
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});

document.body.addEventListener('mousemove', function(event){
	// posisi mousemove
	// console.log(event.clientX);
	// ukuran browser
	// console.log(window.innerWidth);
	const xPos = Math.round((event.clientX / window.innerWidth) * 255);
	const yPos = Math.round((event.clientY / window.innerHeight) * 255);
	document.body.style.backgroundColor = 'rgb('+ xPos +', '+ yPos +', 100)';
});