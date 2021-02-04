//Overlay Fullscreen
function openNav() {
  document.getElementById("myNav").style.display = "block";
}

function closeNav() {
  document.getElementById("myNav").style.display = "none";
}

//Nav Tabs
function features(evt,navName) {
  var i,x,tablinks;
  var x = document.getElementsByClassName("navtabs");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("navbutton");
  for (i = 0; i < x.length; i++) {
   tablinks[i].className = tablinks[i].className.replace(" border-red","");
  
  }
  document.getElementById(navName).style.display = "flex"; 
  evt.currentTarget.firstElementChild.className += " border-red";
}

// Set up the click event on the accordion itself
// When a panel is clicked, that event will bubble up
// to the accordion and can be handled there.
document.querySelector(".accordion1").addEventListener("click", function(event){

  // Check to see if the clicked panel was the currently open one.
  let alreadyActive = event.target.classList.contains("active");
  
  // Loop over all the panels an close each one
  document.querySelectorAll(".panel").forEach(function(panel){
    panel.style.maxHeight = "0";
    panel.previousElementSibling.classList.remove("active");
  });

  // If the clicked panel wasn't the already active one go ahead
  // and open the clicked panel. Otherwise, do nothing and leave
  // all the panels closed.
  if(!alreadyActive){
    // Then show the clicked panel which is accessible as event.target
    event.target.classList.add("active");
    var panel = event.target.nextElementSibling;
    panel.style.maxHeight = panel.scrollHeight + "px";
  }

});

 //Validate the Email
function emailFunction()
{
  var email;
  var email = document.getElementById("txtemail").value;
  var reg=/^([A-Za-z0-9_\-\.])+\@([A-za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if(reg.test(txtemail.value) == false)

{  document.getElementById("results").innerHTML;
    document.getElementById("results").style.color="none";
    document.getElementById("txtemail").style.color="red";
    document.getElementById("results").style.display = "block";
    return false;
  }


    else{
      document.getElementById("results").innerHTML;
      document.getElementById("results").style.color="green";
    document.getElementById("txtemail").style.color="green";
      document.getElementById("results").style.display = "block";
    }
  return true;
}

