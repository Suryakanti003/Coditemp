function encodet(){
  var input = document.getElementById("inptext").value;
  var output ="";
  for (var i = 0; i < input.length; i++){
    output += input[i].charCodeAt(0).toString(10)+1;
    document.getElementById("out").innerHTML=output;
  }
}
