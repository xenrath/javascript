var s = '';

for (var i = 1; i <= 10; i++) {
	for (var j = 0; j < i; j++){
		s+= '*';
	}
	s+= '\n';
}
console.log(s);

var t = '';

for (var k = 10; k > 0; k--) {
	for (var l = 1; l <= k; l++){
		t+= '*';
	}
	t+= '\n';
}
console.log(t);