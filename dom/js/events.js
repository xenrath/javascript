// onClick

const p3 = document.querySelector('.p3');

function ubahWarnaP2(){
	p2.style.backgroundColor = 'lightblue';
}

function ubahWarnaP3(){
	p3.style.backgroundColor = 'lightblue';
}

const p2 = document.querySelector('.p2');
p2.onclick = ubahWarnaP2;

// Menambahkan item baru

const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function(){
	// alert('ok');
	const ul = document.querySelector('section#b ul');
	const liBaru = document.createElement('li');
	const teksLiBaru = document.createTextNode('item baru');
	liBaru.appendChild(teksLiBaru);
	ul.appendChild(liBaru);
});

const h1 = document.querySelector('.h1');
h1.addEventListener('dblclick', function(){
	h1.style.backgroundColor = 'lightblue';
});

const h3 = document.querySelector('.h3');
h3.addEventListener('mouseenter', function(){
	h3.style.backgroundColor = 'lightblue';
});
h3.addEventListener('mouseleave', function(){
	h3.style.backgroundColor = 'lightgreen';
});