//Open Overlay
function openNav(overlayClass){
  var overlay = document.getElementsByClassName(overlayClass)[0];

  document.getElementsByClassName("Order-Form")[0].style.display = "none";
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
    document.getElementsByClassName("s")[0].innerHTML = "U.S.$ 435";
  } else {input[1].value = "0"; document.getElementsByClassName("s")[0].innerHTML = "U.S.$ 0";}

  if(rSpinnaker.style.opacity == "1"){
    input[5].value = "1";
    document.getElementsByClassName("rs")[0].innerHTML = "U.S.$ 2900"
  } else {input[5].value = "0"; document.getElementsByClassName("rs")[0].innerHTML = "U.S.$ 0";}

  if(rJib.style.opacity == "1"){
    input[4].value = "1";
    document.getElementsByClassName("rj")[0].innerHTML = "U.S.$ 195";
  } else {input[4].value = "0"; document.getElementsByClassName("rj")[0].innerHTML = "U.S.$ 0";}

  if(rSail.style.opacity == "1"){
    input[3].value = "1";
    document.getElementsByClassName("rm")[0].innerHTML = "U.S.$ 645";
  } else {input[3].value = "0"; document.getElementsByClassName("rm")[0].innerHTML = "U.S.$ 0";}

  if(seats.style.opacity == "1"){
    input[2].value = "1";
    document.getElementsByClassName("t")[0].innerHTML = "U.S.$ 2900";
  } else {input[2].value = "0"; document.getElementsByClassName("t")[0].innerHTML = "U.S.$ 0";}

  calcTotal();
}

// Calculate price
function calcPrice(elmPrice){
  var ePrice = document.getElementsByClassName(elmPrice)[0];
  var eQuantity = document.getElementById(elmPrice);
  var cost = 0;

  if(eQuantity.value < 0){
    eQuantity.value = 0;
  }

  switch(elmPrice){
    case "sv": //Standard Version
      cost = 3500;
      break;
    case "s": //Nylon Spinnaker
      cost = 435;
      break;
    case "t": //Tilting mechanism
      cost = 2900;
      break;
    case "rm": //GP Racing MainSail
      cost = 645;
      break;
    case "rj": //GP Racing Jib
      cost = 195;
      break;
    case "rs": //GP Racing Spinnaker
      cost = 305;
      break;
      //
    case "smain": //Dacron MainSail
      cost = 275;
      break;
    case "sjib": //Dacron Jib
      cost = 120;
      break;
    case "sspin": //Nylon Spinnaker
      cost = 250;
      break;
    case "screw": //Basic Crew/Para Seat
      cost = 275;
      break;
    case "shelm": //Basic Helmsman
      cost = 385;
      break;
    case "srudder": //Individual Rudderblade
      cost = 275;
      break;
    case "sdeck": //Deck Cover
      cost = 190;
      break;
  }
  total = cost * eQuantity.value;
  ePrice.innerHTML = "U.S.$ " + total;
  calcTotal();
}

// Calculate total
function calcTotal(){
  var ePrice = document.getElementById("total");
  var prices = document.querySelectorAll(".price");
  var total = 0;
  var price = "";
  var i;

  for(i = 0; i < prices.length; i++){
    price = prices[i].innerHTML.replace("U.S.$ ", "");
    total += parseInt(price);
  }

  ePrice.innerHTML = "U.S.$ " + total;
}

// Load Order Form
function showForm(){
  document.getElementsByClassName("Order-Form")[0].style.display = "block";
  document.getElementsByClassName("Order-Content")[0].style.display = "none";
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
