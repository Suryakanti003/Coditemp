function encodet(){
  document.getElementById("button").innerHTML="You can double click to copy";
  var encoding=document.getElementById("encoding").value;
  var encoding2=document.getElementById("encoding2").value;
  var input = document.getElementById("inptext").value;
  var output ="";
  var code1="";
  var final="";
  encoding=parseInt(encoding);
  encoding2=parseInt(encoding2);
  for (var i = 0; i < input.length; i++){

    code1=input[i].charCodeAt(0).toString(10);
    if (i % 2 == 0) {
 output =parseInt(code1)+encoding;
    } else {
      output =parseInt(code1)+(21-encoding2);
    }
  final+=String.fromCodePoint(output);

}
   setTimeout(function(){ 
   document.getElementById("out").value=final;
  }, 200);
  setTimeout(function(){ 
    document.getElementById("button").innerHTML="encode"; 
  },4000);
}
function decodet(){
  document.getElementById("button2").innerHTML="You can double click to copy";
  var encoding=document.getElementById("encoding").value;
  var encoding2=document.getElementById("encoding2").value;
  encoding=parseInt(encoding);
  encoding2=parseInt(encoding2);
  var input = document.getElementById("inptext2").value;

  var output ="";

  var code1="";

  var final="";

  var fo="";

  for (var i = 0; i < input.length; i++){

    code1=input[i].charCodeAt(0).toString(10);
    if (i % 2 == 0) {
 output =parseInt(code1)-encoding;
    } else {
      output =parseInt(code1)-(21-encoding2);
    }

  final+=String.fromCodePoint(output);

}


   setTimeout(function(){ 

   document.getElementById("out2").value=final;

  }, 200);
  setTimeout(function(){ 
    document.getElementById("button2").innerHTML="decode"; 
  },4000);

}
function copyen(){
  var copyText = document.getElementById("out");
  copyText.select();
  document.getElementById("button").innerHTML="encode";
  document.execCommand("copy");
   
}
function copyde(){
  var copyText = document.getElementById("out2");
  copyText.select();
  document.getElementById("button2").innerHTML="decode"; 
  document.execCommand("copy");
 
 
}
