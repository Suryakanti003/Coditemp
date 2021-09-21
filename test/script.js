
function encodet(){
  
  var input = document.getElementById("inptext").value;
  var rencoded=encode(input);
  var output ="";
  var code1="";
  var final="";
  var fo="";
  for (var i = 0; i < input.length; i++){

    code1=input[i].charCodeAt(0).toString(10);

 output =parseInt(code1)+1;

  final+=String.fromCodePoint(output);

}
   setTimeout(function(){ 
   document.getElementById("out").innerHTML=final;
  }, 200);
}
function decodet(){

  var input = document.getElementById("inptext2").value;

  var output ="";

  var code1="";

  var final="";

  var fo="";

  for (var i = 0; i < input.length; i++){

    code1=input[i].charCodeAt(0).toString(10);

 output =parseInt(code1)-1;

  final+=String.fromCodePoint(output);

}

/*  setTimeout(function(){ 

     for (var i = 0; i < final.length; i++){

     fo+= String.fromCodePoint(final[i]);

     }  }, 150);*/

   setTimeout(function(){ 

   document.getElementById("out2").innerHTML=final;

  }, 200);

}
var input1 = document.getElementById("myfile");
var output1 = document.getElementById("output");
var fileE;

input1.addEventListener("change", function () {
  if (this.files && this.files[0]) {
    var myFile = this.files[0];
    var reader = new FileReader();
    
    reader.addEventListener('load', function (e) {
  document.getElementById("out2").innerHTML= e.target.result;
    });
    
    reader.readAsBinaryString(myFile);
  }   
});
