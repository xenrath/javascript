// Rest Parameter

// function myFunc(a, b, ...myArgs){ // ...myArgs harus berada diakhir
    // return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
    // return myArgs;
// }
// function myFunc(){ // tanpa parameter
    // return Array.from(arguments);
    // return [...arguments];
// }
// console.log(myFunc(1, 2, 3, 4, 5));

// Jumlahkan
// function jumlahkan(...angka){
    // let total = 0;
    // for(const a of angka){
    //     total += a; 
    // }
    // return total;
    // return angka.reduce((a, i) => a + i);
// }
// console.log(jumlahkan(1, 2, 3, 4, 5));

// array destructuring
// const kelompok1 = ['Saiful', 'Labib', 'Marzuqi', 'Hidayat'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);

// object destructuring
// const team = {
//     pm: 'Saiful',
//     frontEnd1: 'Labib',
//     frontEnd2: 'Marzuqi',
//     backEnd: 'Hidayat',
//     ux: 'Siti',
//     devOps: 'Mulyani'
// }
// const {pm, ...myTeam} = team;
// console.log(myTeam);

// filtering
function filterBy(type, ...values){
    return values.filter(v => typeof v === type);
}
console.log(filterBy('boolean', 1, 2, 'Saiful', false, 10, true, 'Labib'));
