$(document).ready(function() {
  $(".hamburger-icon").on("click", function(event){
  	event.preventDefault();
  	console.log("hi");
  	$(".menu").toggleClass("menu-js");
  })
});