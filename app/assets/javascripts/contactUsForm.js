$(document).ready(function() {

  $(".contact-us-form").on("submit", function(event){
  	event.preventDefault();
  	var nameField = $("#name-field").val();
  	var cEmailField = $("#contact-email-field").val();
  	var subjectField = $("#subject-field").val();
  	var messageField = $("#message-field").val();

  	$.ajax({
  		url: "/contact_us",
  		method: "POST",
  		dataType: "json",
  		data: { contact_us: { name: nameField, email: cEmailField, subject: subjectField, message: messageField } },
  		success: function(){
  			$("#name-field").val('');
		  	$("#contact-email-field").val('');
		  	$("#subject-field").val('');
		  	$("#message-field").val('');
  			alert("Your Information has been successfully recieved and we will get back to you soon.");
  		},
  		failure: function(){
  			alert("Uh oh! Something went wrong, please make sure all fields are filled out.")
			},
			error: function(){
  			alert("Uh oh! Something went wrong, please make sure all fields are filled out.")
			}
  	});
  });
});