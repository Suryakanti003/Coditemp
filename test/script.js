function encodet(){
  var input = document.getElementById("inptext").value;
  var output ="";
  for (var i = 0; i < input.length; i++){
    if (i=input.length){
    document.getElementById("out").innerHTML=output;
    }
   output += ( parseInt(input[i].charCodeAt(0).toString(10))+1);
  }
}
