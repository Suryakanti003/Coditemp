const code1=[
    "◒","।","ऋ","॥","ऽ","ꣳ","ᳩ","ॐ","ᳪ","अ","ॽ","ई","ऐ","ऌ","इ","उ","ऊ","ए","ॠ","आ","ॡ","१","ॿ","७","६","य","४","ক","খা","ঙ"
  ];
  var seq=" "+"a"+"b"+"c"+"d"+"e"+"f"+"g"+"h"+"i"+"j"+"k"+"l"+"m"+"n"+"o"+"p"+"q"+"r"+"s"+"t"+"u"+"v"+"w"+"x"+"y"+"z"+"9"+"2"+"4";
var password="GOD IS GREAT";
var outputen;
var outputde
function encode(a) {
//var num=0;
outputen=a;
for (let num=0; num < seq.length; num++) {
   outputen=outputen.replaceAll(seq[num], code1[num]);
   //console.log(seq[num]+ code1[num]);
  }
setTimeout(function(){ 
    
}, 100);
}
function decode(b){
  outputde=b;
  for (let num=0; num < seq.length; num++) {
     outputde=outputde.replaceAll( code1[num],seq[num]);
     //console.log(seq[num]+ code1[num]);
    }
  setTimeout(function(){ 

  }, 100);
}
