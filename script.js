function encodet() {
var inpv =document.getElementById("inptext").value;
   var outv=encode(inpv);
   setTimeout(function(){ 
     document.getElementById("out").innerHTML=outv;
}, 100);
}
function decodet() {
var inpv2 =document.getElementById("inptext2").value;
   var outv2=decode(inpv2);
   setTimeout(function(){ 
    
   document.getElementById("out2").innerHTML=outv2;
}, 100);
}
