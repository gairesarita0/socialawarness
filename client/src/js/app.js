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