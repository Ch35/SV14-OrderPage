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
