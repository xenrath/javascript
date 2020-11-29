var penumpang=['refan','fernando'];
var ulangi=true;
 var tambahPenumpang= function (nama,penumpang){
  if(penumpang==""){
   penumpang.unshift(nama);
   console.log('Penumpang pertama dengan nama '+nama+' berhasil ditambahkan')
  }else{
   var temukan=penumpang.find(function(x){
     return x==nama;
    });
   //console.log(temukan);
   if  (nama==temukan){
     console.log('Penumpang dengan nama '+nama+' tersedia'); 
   }else {
    var hasil="";
    for(var i=0;i<penumpang.length;i++){
     if(hasil=="berhasil"){
      penumpang[i]=penumpang[i];
     }else if(penumpang[i]=='udenfined'){
      var hasil="berhasil";
      penumpang[i]=nama;
     }
    }
    if(hasil!="berhasil"){
     penumpang.push(nama); 
    }
    console.log('Penumpang dengan nama '+nama+' berhasil ditambahkan');
   }

  }
  console.log('jumlah penumpang ada '+penumpang.length+' yaitu :'+penumpang.join(','));
 }

 var hapusPenumpang = function (nama,penumpang){
  var hasil="";
  var index=0;
  for(var i=0;i<penumpang.length;i++){
   if(penumpang[i]==nama){
    hasil="berhasil";
    penumpang[i]='udenfined';
   }
  }
  if (hasil=="berhasil"){
   console.log('Penumpang dengan nama '+nama+' telah keluar dari angkot');
  }else{
   console.log('tidak menenumkan penumpang dengan nama '+nama);
  }
   
  console.log('Penumpang yang tersedia saat ini : '+penumpang.join(','));
 }
 
 

while(ulangi){
 var pil=prompt('Ketik 1 memasukan penumpang, ketik 2 turunin penumpang : ');
 switch (pil){
  case '1':
   var nama=prompt('Nama Penumpang Masuk:');
   tambahPenumpang(nama,penumpang);
  break; 
  case '2':
   var nama=prompt('Nama Penumpang Turun:');
   hapusPenumpang(nama,penumpang);
  break; 
 }
 ulangi=confirm('ulangi aplikasi ?: ');
}