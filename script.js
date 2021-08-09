var seq=" "+"a"+"b"+"c"+"d"+"e"+"f"+"g"+"h"+"i"+"j"+"k"+"l"+"m"+"n"+"o"+"p"+"q"+"r"+"s"+"t"+"u"+"v"+"w"+"x"+"y"+"z"+"9"+"2"+"4";
const code1=[
  "◒","।","ऋ","॥","ऽ","ꣳ","ᳩ","ॐ","ᳪ","अ"," ","ई","ऐ","ऌ","इ","उ","ऊ","ए","ॠ","आ","ॡ","१","ॿ","७","६","य","४","ক","খা","ঙ"
];
var password="GOD IS GREAT";
var output;
function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}
function encodet() {
//var num=0;
var inpv=document.getElementById("inptext").value;
output=inpv;
for (let num=0; num < seq.length; num++) {
   output=output.replaceAll(seq[num], code1[num]);
   //console.log(seq[num]+ code1[num]);
  }
setTimeout(function(){ 
    document.getElementById("out").innerHTML=output;
  copyToClipboard(output);
}, 100);
}
function decodet(){
  var inpv2=document.getElementById("inptext2").value;
  output=inpv2;
  for (let num=0; num < seq.length; num++) {
     output=output.replaceAll( code1[num],seq[num]);
     //console.log(seq[num]+ code1[num]);
    }
  setTimeout(function(){ 
      document.getElementById("out2").innerHTML=output;
     copyToClipboard(output);
  }, 100);
}
