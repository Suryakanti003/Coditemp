var seq=" "+"a"+"b"+"c"+"d"+"e"+"f"+"g"+"h"+"i"+"j"+"k"+"l"+"m"+"n"+"o"+"p"+"q"+"r"+"s"+"t"+"u"+"v"+"w"+"x"+"y"+"z"+"9"+"2"+"4";
var password="GOD IS GREAT";
var output;
function encode() {
//var num=0;
var inpv=document.getElementById("inptext").value;
output=inpv;
for (let num=0; num < seq.length; num++) {
   output=output.replaceAll(seq[num], code1[num]);
   //console.log(seq[num]+ code1[num]);
  }
setTimeout(function(){ 
    document.getElementById("out").innerHTML=output;
}, 100);
}
function decode(){
  var inpv2=document.getElementById("inptext2").value;
  output=inpv2;
  for (let num=0; num < seq.length; num++) {
     output=output.replaceAll( code1[num],seq[num]);
     //console.log(seq[num]+ code1[num]);
    }
  setTimeout(function(){ 
      document.getElementById("out2").innerHTML=output;
  }, 100);
}