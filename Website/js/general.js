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
    document.getElementsByClassName("s")[0].innerHTML = "U.S.$ 500";
  } else {input[1].value = "0"; document.getElementsByClassName("s")[0].innerHTML = "U.S.$ 0";}

  if(rSpinnaker.style.opacity == "1"){
    input[5].value = "1";
    document.getElementsByClassName("rs")[0].innerHTML = "U.S.$ 315"
  } else {input[5].value = "0"; document.getElementsByClassName("rs")[0].innerHTML = "U.S.$ 0";}

  if(rJib.style.opacity == "1"){
    input[4].value = "1";
    document.getElementsByClassName("rj")[0].innerHTML = "U.S.$ 215";
  } else {input[4].value = "0"; document.getElementsByClassName("rj")[0].innerHTML = "U.S.$ 0";}

  if(rSail.style.opacity == "1"){
    input[3].value = "1";
    document.getElementsByClassName("rm")[0].innerHTML = "U.S.$ 670";
  } else {input[3].value = "0"; document.getElementsByClassName("rm")[0].innerHTML = "U.S.$ 0";}

  if(seats.style.opacity == "1"){
    input[2].value = "1";
    document.getElementsByClassName("t")[0].innerHTML = "U.S.$ 3200";
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
      cost = 3700;
      break;
    case "s": //Nylon Spinnaker
      cost = 500;
      break;
    case "t": //Tilting mechanism
      cost = 3200;
      break;
    case "rm": //GP Racing MainSail
      cost = 670;
      break;
    case "rj": //GP Racing Jib
      cost = 215;
      break;
    case "rs": //GP Racing Spinnaker
      cost = 315;
      break;
      //
    case "smain": //Dacron MainSail
      cost = 300;
      break;
    case "sjib": //Dacron Jib
      cost = 130;
      break;
    case "sspin": //Nylon Spinnaker
      cost = 270;
      break;
    case "screw": //Basic Crew/Para Seat
      cost = 300;
      break;
    case "shelm": //Basic Helmsman
      cost = 420;
      break;
    case "srudder": //Individual Rudderblade
      cost = 275;
      break;
    case "sdeck": //Deck Cover
      cost = 210;
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


// Send email
function sendEmail(){
  var elQuantity = document.querySelectorAll("table input");
  var elPrice = document.querySelectorAll(".price");
  var idDetails = ["tName", "tPhone", "tEmail", "tAddress", "tMsg", "tShipping"];
  var elDetails;
  var details = "";
  var msg = "";
  var total = "<br>Total Cost: " + document.getElementById("total").innerHTML+"<br>";
  var items = "";
  var i;

  for(i = 0; i < 6; i++){
    elDetails = document.getElementById(idDetails[i]);
    details += idDetails[i].replace("t","")+": "+elDetails.value+"<br>";
  }

  for(i = 0; i < elQuantity.length; i++){
    if(elQuantity[i].value >= 1){
      switch(elQuantity[i].id){
        //Main Options
        case "sv":
          items += "Boat x"+elQuantity[i].value+" = "+elPrice[i].innerHTML+"<br><br>";
          break;
        case "s":
          items += "Nylon Spinnaker & Deck Gear x"+elQuantity[i].value+" = "+elPrice[i].innerHTML+"<br>";
          break;
        case "t":
          items += "Titling Mechanism Kit x"+elQuantity[i].value+" = "+elPrice[i].innerHTML+"<br>";
          break;
        case "rm":
          items += "GP Racing Mainsail x"+elQuantity[i].value+" = "+elPrice[i].innerHTML+"<br>";
          break;
        case "rj":
          items += "GP Racing Jib x"+elQuantity[i].value+" = "+elPrice[i].innerHTML+"<br>";
          break;
        case "rs":
          items += "GP Racing Asymmetric Spinnaker x"+elQuantity[i].value+" = "+elPrice[i].innerHTML+"<br><br>";
          break;
        //Spare Parts
        case "smain":
          items += "Dacron MainSail x"+elQuantity[i].value+" = "+elPrice[i].innerHTML+"<br>";
          break;
        case "sjib":
          items += "Dacron Jib x"+elQuantity[i].value+" = "+elPrice[i].innerHTML+"<br>";
          break;
        case "sspin":
          items += "Nylon Asymmetric Spinnaker Kit x"+elQuantity[i].value+" = "+elPrice[i].innerHTML+"<br>";
          break;
        case "screw":
          items += "Basic Crew/Para Seat x"+elQuantity[i].value+" = "+elPrice[i].innerHTML+"<br>";
          break;
        case "shelm":
          items += "Basic Helmsman/Quad Seat x"+elQuantity[i].value+" = "+elPrice[i].innerHTML+"<br>";
          break;
        case "srudder":
          items += "Individual Rudderblade x"+elQuantity[i].value+" = "+elPrice[i].innerHTML+"<br>";
          break;
        case "sdeck":
          items += "Deck Cover x"+elQuantity[i].value+" = "+elPrice[i].innerHTML+"<br>";
          break;
      }
    }
  }
   msg = "<h1>Order</h1><br>"+"<strong>Client Details</strong><hr>"+details+"<br><strong>Order Details</strong><hr>"+items+total;


  Email.send({
    SecureToken: "fb9d7bdb-a257-47a6-aed0-e749ea52e4e6",
    To : 'sailing@SV14.org',
    From : "sv14order@gmail.com",
    Subject : "New Order",
    Body : msg
  }).then(message => alert("Order Sent"));
}
