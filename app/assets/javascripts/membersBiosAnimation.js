$(document).ready(function() {
  $(".member-photos img").on("click", $(this), function(event){
  	event.preventDefault();

  	if($(".members-bios-container").hasClass("members-bios-container-js")){
  		$(".members-bios-container").removeClass("members-bios-container-js");
  	}
  	else{
  		$(".members-bios-container").addClass("members-bios-container-js");
  	}
  });
});