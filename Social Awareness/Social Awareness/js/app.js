// Menu trigger
var menu_trigger = document.querySelector(".menu-burger");
var menu_bars = document.querySelectorAll(".menu-bar");
var menu_closer = document.querySelector(".menu-closer");
var nav_menu = document.querySelector(".site-nevigation");
menu_trigger.addEventListener("click", function(){
  menu_trigger.classList.toggle("border-white");
  menu_bars.forEach( number =>
     { number.classList.toggle("d-none");
    });
  menu_closer.classList.toggle("d-none");
  nav_menu.classList.toggle("transition");
});
// Sliders
var swiper = new Swiper(".advertisement_slider", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal 
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  else if (event.target == modal2) {
    modal2.style.display = "none";
  }
}