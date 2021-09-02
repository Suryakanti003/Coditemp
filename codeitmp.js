function encode(e){
let input = e;
let output ="";
let code1="";
let final="";
let fo="";
for (var i = 0; i < input.length; i++){
code1=input[i].charCodeAt(0).toString(10);
output =parseInt(code1)-1;
final+=String.fromCodePoint(output);
if (i>=input.length){
return final;
}
}
}
function decode(e){
let input = e;
let output ="";
let code1="";
let final="";
let fo="";
for (var i = 0; i < input.length; i++){
code1=input[i].charCodeAt(0).toString(10);
output =parseInt(code1)+1;
final+=String.fromCodePoint(output);
if (i>=input.length){
return final;
}
}
}
