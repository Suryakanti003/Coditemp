var seq=" "+"a"+"b"+"c"+"d"+"e"+"f"+"g"+"h"+"i"+"j"+"k"+"l"+"m"+"n"+"o"+"p"+"q"+"r"+"s"+"t"+"u"+"v"+"w"+"x"+"y"+"z"+"A"+"B"+"C"+
"D"+"E"+"F"+"G"+"H"+"I"+"J"+"K"+"L"+"M"+"N"+"O"+"P"+"Q"+"S"+"T"+"U"+"V"+"W"+"X"+"Y"+"Z"+"1"+"2"+"3"+"4"+"5"+"6"+"7"+"8"+"9"+"0"+
"!"+"@"+"#"+"$"+"%"+"^"+"&"+"*"+"("+")"+"-"+"="+"_"+"+"+"~"+"`"+","+"."+"/"+"?"+";"+":"+"<"+">"+"["+"]"+"{"+"}"+"'"+""";
const code1=
  "◓"+"।"+"॰"+"ꣲ"+"ॽ"+"॥"+"ऽ"+"ꣳ"+"ᳩ"+"ॐ"+"ᳪ"+"अ"+"ई"+"ऋ"+"ॡ"+"आ"+"उ"+"ॠ"+"ए"+"इ"+"ऊ"+"ऌ"+"ऐ"+"ओ"+"ॶ"+"ऒ"+"ॲ"+"ऄ"+"औ"+
  "ॵ"+"ऍ"+"ॴ"+"ऑ"+"ऎ"+"क"+"ख़"+"ॻ"+"च"+"ज़"+"झ"+"ठ"+"ॾ"+"ढ"+"ख"+"ग़"+"ङ"+"ज"+"ॼ"+"ट"+"ड़"+"ढ़"+"ण"+"द"+"ऩ"+"फ़"+"भ"+"य़"+"ऱ"+
  "ऴ"+"त"+"ध"+"प"+"ब"+"म"+"ॺ"+"ल"+"व"+"थ"+"न"+"फ"+"ॿ"+"य"+"र"+"ळ"+"श"+"ष"+"०"+"३"+"६"+"९"+"स"+"१"+"४"+"७"+"ह"+"२"+"५"+"८";
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
