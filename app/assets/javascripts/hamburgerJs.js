$(document).ready(function() {
  $(".hamburger-icon").on("click", function(event){
  	event.preventDefault();
  	console.log("hi");
  	$(".menu").toggleClass("menu-js");
  });
  $(".nav-links").on("click", function(){
  	$(".menu").toggleClass("menu-js");
  })
});