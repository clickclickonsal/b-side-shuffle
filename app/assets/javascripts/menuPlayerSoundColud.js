$(document).ready(function() {

  $("#play-button").on("click", function(event){
  	event.preventDefault();

  	$(this).hide();
  	$("#pause-button").show();
  });

  $("#pause-button").on("click", function(event){
  	event.preventDefault();

  	$(this).hide();
  	$("#play-button").show();
  });
});