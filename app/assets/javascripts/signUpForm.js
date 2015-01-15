$(document).ready(function() {
  $(".sign-up-form").on("submit", function(event){
		event.preventDefault();

		var inputedEmail = $("#email-field").val();
		$("#email-field").val('');

		$.ajax({
			url: "/email_lists",
			method: "POST",
			dataType: "json",
			data: {email_list: {email_address: inputedEmail}},
			success: function(){
				alert("Email Submitted Successfully!");
			},
			error: function(){
				alert("Please Enter an Email Address!");
			}
		});
		
	});
});