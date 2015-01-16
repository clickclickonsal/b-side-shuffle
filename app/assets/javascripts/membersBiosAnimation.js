$(document).ready(function() {
  $(".members-photos").on("click", $(this), function(event){
  	event.preventDefault();
  	console.log($(this));
  });
});