<!doctype html>
<html lang="en">
// JavaScript Document

$(document).ready(function(){
	"use strict";
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;


      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }
  });
});

"use strict";
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("link");
var sticky = navbar.offsetTop;

function myFunction() {
	"use strict";
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	  } else {
		navbar.classList.remove("sticky");
	  }
}