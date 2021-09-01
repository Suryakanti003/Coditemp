function encodet(){
  var input = document.getElementById("inptext").value;
  var output = document.getElementById("out");
  output.innerHTML = "";
  for (var i = 0; i < input.length; i++){
    output.innerHTML += input[i].charCodeAt(0).toString(2) + " ";
  }
}
