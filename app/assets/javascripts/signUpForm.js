$(document).ready(function() {
  $(".sign-up-form").on("submit", function(event){
		event.preventDefault();

		var input = $("#email-field").val();
		$("#email-field").val('');
		alert("Email Submitted Successfully!")
	});
});