function encodet() {
var inpv =document.getElementById("inptext").value;
   var outv=encode(inpv);
   setTimeout(function(){ 
     document.getElementById("out").innerHTML=outv;
}, 1000);
}
function decodet() {
var inpv2 =document.getElementById("inptext2").value;
   var outv2=decode(inpv2);
   setTimeout(function(){ 
    
   document.getElementById("out2").innerHTML=outv2;
}, 1000);
}
