//Open
function openNav(){
  document.getElementById("myNav").style.display = "block";

  setTimeout(function() {
    document.getElementById("myNav").style.opacity = "1";
  }, 1);
}

//Close
function closeNav(){
  document.getElementById("myNav").style.opacity = "0";
  setTimeout(function() {
    document.getElementById("myNav").style.display = "none";
  }, 500);
}

//Toggle Customization parts for boat
function togglePart(partClass){
  var part = document.getElementsByClassName(partClass)[0];
  var text = document.getElementById(partClass);

  if(part.style.opacity == "1"){
    part.style.opacity = "0";
    text.style.color = "#777777";
  } else{
    part.style.opacity = "1";
    text.style.color = "#F6364D";
  }
}
