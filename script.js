var keyused=false;
function changed(){
  keyused=false;
}
function encodet(){
  keyused=true;
var encoding=(document.getElementById("encoding").value);
var input = document.getElementById("inptext").value;
 if(encoding==""){
  document.getElementById("suggest").innerHTML="please enter a 5 digit key of your choice";
 } else if (input=="") {
  document.getElementById("suggest").innerHTML="enter text to encrypt";
 } else {
  var output ="";
  var code1="";
  var final="";
  document.getElementById("button").innerHTML="You can double click to copy";
  document.getElementById("suggest").innerHTML="suggestion:don't forget your encryption key";
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
    document.getElementById("suggest").innerHTML="";
  },4000);}
}
function decodet(){
var encoding=document.getElementById("encoding").value;
var input = document.getElementById("inptext2").value;
if(encoding==""){
  document.getElementById("suggest").innerHTML="please enter a 5 digit key of your choice";
  document.getElementById("suggest").scrollIntoView();
} else if (input=="") {
  document.getElementById("suggest").innerHTML="enter text to decrypt";
 }else{
if (keyused=true){
  document.getElementById("suggest").innerHTML="do you want to use that key you can change it";
}
  var output ="";

  var code1="";

  var final="";
  var ifu=parseInt(encoding.charAt(0));
  document.getElementById("button2").innerHTML="You can double click to copy";
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

}}
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

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('sw.js')
      .then(() => { console.log('Service Worker Registered'); });
  }
  
  // Code to handle install prompt on desktop
  
  let deferredPrompt;
  const addBtn = document.querySelector('.add-button');
  addBtn.style.display = 'none';
  
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI to notify the user they can add to home screen
    addBtn.style.display = 'block';
  
    addBtn.addEventListener('click', () => {
      // hide our user interface that shows our A2HS button
      addBtn.style.display = 'none';
      // Show the prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the prompt');
        } else {
          console.log('User dismissed the prompt');
        }
        deferredPrompt = null;
      });
    });
  });
