function encodet(){
  document.getElementById("button").innerHTML="You can double click to copy";
  var encoding=(document.getElementById("encoding").value);
  var input = document.getElementById("inptext").value;
  var output ="";
  var code1="";
  var final="";
  var ifu=parseInt(encoding.charAt(0));
  if(ifu=1) {
    console.log("abcd");
    var encoding1 = parseInt(encoding.charAt(4))*10+(parseInt(encoding.charAt(3)));
    var encoding2 = parseInt(encoding.charAt(2))*10+(parseInt(encoding.charAt(1)));
  } else if(ifu=2) {
    var encoding1 = parseInt(encoding.charAt(4))*10+(parseInt(encoding.charAt(3)));
    var encoding2 = parseInt(encoding.charAt(1))*10+(parseInt(encoding.charAt(2)));
  }else if(ifu=3) {
    var encoding1 = parseInt(encoding.charAt(4))*10+(parseInt(encoding.charAt(2)));
    var encoding2 = parseInt(encoding.charAt(3))*10+(parseInt(encoding.charAt(1)));
  }else if(ifu=4) {
    var encoding1 = parseInt(encoding.charAt(4))*10+(parseInt(encoding.charAt(2)));
    var encoding2 = parseInt(encoding.charAt(1))*10+(parseInt(encoding.charAt(3)));
  }else if(ifu=5) {
    var encoding1 = parseInt(encoding.charAt(4))*10+(parseInt(encoding.charAt(1)));
    var encoding2 = parseInt(encoding.charAt(3))*10+(parseInt(encoding.charAt(2)));
  }else if(ifu=6) {
    var encoding1 = parseInt(encoding.charAt(4))*10+(parseInt(encoding.charAt(1)));
    var encoding2 = parseInt(encoding.charAt(2))*10+(parseInt(encoding.charAt(3)));
  }else if(ifu=7) {
    var encoding1 = parseInt(encoding.charAt(3))*10+(parseInt(encoding.charAt(4)));
    var encoding2 = parseInt(encoding.charAt(2))*10+(parseInt(encoding.charAt(1)));
  }else if(ifu=8) {
    var encoding1 = parseInt(encoding.charAt(3))*10+(parseInt(encoding.charAt(4)));
    var encoding2 = parseInt(encoding.charAt(1))*10+(parseInt(encoding.charAt(2)));
  }else if(ifu=9) {
    var encoding1 = parseInt(encoding.charAt(3))*10+(parseInt(encoding.charAt(2)));
    var encoding2 = parseInt(encoding.charAt(4))*10+(parseInt(encoding.charAt(1)));
  }else if(ifu=0) {
    var encoding1 = parseInt(encoding.charAt(3))*10+(parseInt(encoding.charAt(2)));
    var encoding2 = parseInt(encoding.charAt(1))*10+(parseInt(encoding.charAt(4)));
  }
 
  for (var i = 0; i < input.length; i++){

    code1=input[i].charCodeAt(0).toString(10);
    if (i % 2 == 0) {
 output =parseInt(code1)+encoding1;
    } else {
      output =parseInt(code1)+encoding2;
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
  var input = document.getElementById("inptext2").value;

  var output ="";

  var code1="";

  var final="";
  var ifu=parseInt(encoding.charAt(0));
  if(ifu=1) {
    console.log("abcd");
    var encoding1 = parseInt(encoding.charAt(4))*10+(parseInt(encoding.charAt(3)));
    var encoding2 = parseInt(encoding.charAt(2))*10+(parseInt(encoding.charAt(1)));
  } else if(ifu=2) {
    var encoding1 = parseInt(encoding.charAt(4))*10+(parseInt(encoding.charAt(3)));
    var encoding2 = parseInt(encoding.charAt(1))*10+(parseInt(encoding.charAt(2)));
  }else if(ifu=3) {
    var encoding1 = parseInt(encoding.charAt(4))*10+(parseInt(encoding.charAt(2)));
    var encoding2 = parseInt(encoding.charAt(3))*10+(parseInt(encoding.charAt(1)));
  }else if(ifu=4) {
    var encoding1 = parseInt(encoding.charAt(4))*10+(parseInt(encoding.charAt(2)));
    var encoding2 = parseInt(encoding.charAt(1))*10+(parseInt(encoding.charAt(3)));
  }else if(ifu=5) {
    var encoding1 = parseInt(encoding.charAt(4))*10+(parseInt(encoding.charAt(1)));
    var encoding2 = parseInt(encoding.charAt(3))*10+(parseInt(encoding.charAt(2)));
  }else if(ifu=6) {
    var encoding1 = parseInt(encoding.charAt(4))*10+(parseInt(encoding.charAt(1)));
    var encoding2 = parseInt(encoding.charAt(2))*10+(parseInt(encoding.charAt(3)));
  }else if(ifu=7) {
    var encoding1 = parseInt(encoding.charAt(3))*10+(parseInt(encoding.charAt(4)));
    var encoding2 = parseInt(encoding.charAt(2))*10+(parseInt(encoding.charAt(1)));
  }else if(ifu=8) {
    var encoding1 = parseInt(encoding.charAt(3))*10+(parseInt(encoding.charAt(4)));
    var encoding2 = parseInt(encoding.charAt(1))*10+(parseInt(encoding.charAt(2)));
  }else if(ifu=9) {
    var encoding1 = parseInt(encoding.charAt(3))*10+(parseInt(encoding.charAt(2)));
    var encoding2 = parseInt(encoding.charAt(4))*10+(parseInt(encoding.charAt(1)));
  }else if(ifu=0) {
    var encoding1 = parseInt(encoding.charAt(3))*10+(parseInt(encoding.charAt(2)));
    var encoding2 = parseInt(encoding.charAt(1))*10+(parseInt(encoding.charAt(4)));
  }
  for (var i = 0; i < input.length; i++){

    code1=input[i].charCodeAt(0).toString(10);
    if (i % 2 == 0) {
 output =parseInt(code1)-encoding1;
    } else {
      output =parseInt(code1)-encoding2;
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
