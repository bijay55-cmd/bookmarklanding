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
 // Get all Accordion and Panel
 let accHeading = document.querySelectorAll(".accordion");
 let accPanel = document.querySelectorAll(".accordion-panel");
 
 for (let i = 0; i < accHeading.length; i++) {
     // Execute whenever an accordion is clicked 
     accHeading[i].onclick = function() {
         if (this.nextElementSibling.style.maxHeight) {
            hidePanels();     // Hide All open Panels 
         } else {
            showPanel(this);  // Show the panel
         } 
     };
 }
 
 // Function to Show a Panel
 function showPanel(elem) {
   hidePanels();
   elem.classList.add("active");
   elem.nextElementSibling.style.maxHeight = elem.nextElementSibling.scrollHeight + "px";
 }
 
 // Function to Hide all shown Panels
 function hidePanels() {
   for (let i = 0; i < accPanel.length; i++) {
       accPanel[i].style.maxHeight = null;
       accHeading[i].classList.remove("active");
   }
 }
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

