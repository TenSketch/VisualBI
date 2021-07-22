// show and hide details section
function showDetails() {
    var x = document.getElementById("info");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
// toggle tabs
function openTab(tab) {
    var x = document.getElementsByClassName("info");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tab).style.display = "block";
}


// Add active class to the current button (highlight it)
var header = document.getElementById("navActive");
var btns = header.getElementsByClassName("navPills_link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
