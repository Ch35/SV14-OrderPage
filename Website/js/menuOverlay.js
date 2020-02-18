//Open Overlay
function openNav(overlayClass){
  var overlay = document.getElementsByClassName(overlayClass)[0];

  document.getElementById("orderTitle").innerHTML = "Terms and Conditions";
  document.getElementsByClassName("Terms-Content")[0].style.display = "block";
  document.getElementsByClassName("Order-Content")[0].style.display = "none";
  document.getElementsByTagName("Body")[0].style.overflowY = "hidden";
  overlay.style.display = "block";

  setTimeout(function() {
    overlay.style.opacity = "1";
    overlay.style.height = "100%";
  }, 1);
}
//Close Overlay
function closeNav(overlayClass){
  var overlay = document.getElementsByClassName(overlayClass)[0];

  document.getElementsByTagName("Body")[0].style.overflowY = "scroll";
  overlay.style.opacity = "0";

  setTimeout(function() {
    overlay.style.height = "0";
    overlay.style.display = "none";
  }, 500);
}


// Accept T&Cs
var arrParts = [];
function AcceptTerms(){
  var spinnaker = document.getElementsByClassName("Spinnaker")[0];
  var rSpinnaker = document.getElementsByClassName("Racing-Spinnaker")[0];
  var rJib = document.getElementsByClassName("Racing-Jib")[0];
  var rSail = document.getElementsByClassName("Racing-MainSail")[0];
  var seats = document.getElementsByClassName("Canting-Seats")[0];
  var input = document.getElementsByTagName("input");

  document.getElementById("orderTitle").innerHTML = "Order";
  document.getElementsByClassName("Terms-Content")[0].style.display = "none";
  document.getElementsByClassName("Order-Content")[0].style.display = "block";

  if(spinnaker.style.opacity == "1"){
    input[1].value = "1";
  } else {input[1].value = "0"}

  if(rSpinnaker.style.opacity == "1"){
    input[5].value = "1";
  } else {input[5].value = "0"}

  if(rJib.style.opacity == "1"){
    input[4].value = "1";
  } else {input[4].value = "0"}

  if(rSail.style.opacity == "1"){
    input[3].value = "1";
  } else {input[3].value = "0"}

  if(seats.style.opacity == "1"){
    input[2].value = "1";
  } else {input[2].value = "0"}
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


//Toggle Specifications
function toggleSpecifications(){
  var div = document.getElementById("Specifications");

  //Togles style
  div.classList.toggle("Specifications-Content");
}
