function toggleSpecifications(){
  var div = document.getElementById("Specifications");

  if(div.style.maxHeight == "100%"){
    div.style.opacity = "0";
    div.style.maxHeight = "0";
  } else{
    setTimeout(function() {
      div.style.maxHeight = "100%";
      div.style.opacity = "1";
    }, 500);
  }
}

//Open
function openNav(){
  document.getElementById("menuOverlay").style.display = "block";

  setTimeout(function() {
    document.getElementById("menuOverlay").style.opacity = "1";
  }, 1);
}

//Close
function closeNav(){
  document.getElementById("menuOverlay").style.opacity = "0";

  setTimeout(function() {
    document.getElementById("menuOverlay").style.display = "none";
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
