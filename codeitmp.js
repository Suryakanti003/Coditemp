const code1=[
    "◒","।","ऋ","॥","ऽ","ꣳ","ᳩ","ॐ","ᳪ","अ","ॽ","ई","ऐ","ऌ","इ","उ","ऊ","ए","ॠ","आ","ॡ","१","ॿ","७","६","य","४","ক","খা","ঙ"
  ];
  var seq=" "+"a"+"b"+"c"+"d"+"e"+"f"+"g"+"h"+"i"+"j"+"k"+"l"+"m"+"n"+"o"+"p"+"q"+"r"+"s"+"t"+"u"+"v"+"w"+"x"+"y"+"z"+"9"+"2"+"4";
function encode(a) {
for (let num=0; num < seq.length; num++) {
 var outen= a.replaceAll(seq[num], code1[num]);
  }
    setTimeout(function(){ 
    return outen;
}, 100);
}
function decode(b){
  for (let num=0; num < seq.length; num++) {
     var outde= b.replaceAll( code1[num],seq[num]);
    }
   setTimeout(function(){ 
     return outde;
}, 100);  
}
