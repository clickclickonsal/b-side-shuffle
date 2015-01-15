$(document).ready(function() {

  $(".contact-us-form").on("submit", function(event){
  	event.preventDefault();
  	var nameField = $("#name-field").val();
  	var cEmailField = $("#contact-email-field").val();
  	var subjectField = $("#subject-field").val();
  	var messageField = $("#message-field").val();

  	$("#name-field").val('');
  	$("#contact-email-field").val('');
  	$("#subject-field").val('');
  	$("#message-field").val('');

  	$.ajax({
  		url: "/contact_us",
  		method: "POST",
  		dataType: "json",
  		data: { {} },
  		success: function(){
  			alert("Your Information has been successfully recieved and we will get back to you soon.")
  		}
  	});
  });
});