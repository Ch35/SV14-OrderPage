//Toggle Specifications
function toggleSpecifications(){
  var div = document.getElementById("Specifications");

  //Togles style
  div.classList.toggle("Specifications-Content");
}

//Open Menu Overlay
function openNav(){
  document.getElementById("menuOverlay").style.display = "block";

  setTimeout(function() {
    document.getElementById("menuOverlay").style.opacity = "1";
  }, 1);
}
//Close Menu Overlay
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

  //If selected is Spinnaker
  if(partClass == "Spinnaker"){
    document.getElementsByClassName("Racing-Spinnaker")[0].style.opacity = "0";
    document.getElementById("Racing-Spinnaker").style.color = "#777777";
  } else if(partClass == "Racing-Spinnaker"){
    document.getElementsByClassName("Spinnaker")[0].style.opacity = "0";
    document.getElementById("Spinnaker").style.color = "#777777";
  }
}
