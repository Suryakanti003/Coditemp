function encodet(){
  var input = document.getElementById("inptext").value;
  var output ="";
  var code1="";
  var final="";
  var fo="";
  for (var i = 0; i < input.length; i++){
    code1=input[i].charCodeAt(0).toString(10);
 output =parseInt(code1)+1;
  final+=String.fromCodePoint(output);
}
/*  setTimeout(function(){ 
     for (var i = 0; i < final.length; i++){
     fo+= String.fromCodePoint(final[i]);
     }  }, 150);*/
   setTimeout(function(){ 
   document.getElementById("out").innerHTML=final;
  }, 200);
}
