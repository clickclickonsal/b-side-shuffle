$(document).ready(function() {
  $(".member-photos img").on("click", $(this), function(event){
  	event.preventDefault();

  	if($(".members-bios-container").hasClass("members-bios-container-js")){
  		$(".members-bios-container").removeClass("members-bios-container-js");
  	}
  	else{
  		$(".members-bios-container").addClass("members-bios-container-js");
  	}

  	if( $(this).context.alt === "Geoff Browning"){
  		if($(".members-bios-container").hasClass("geoff-js")){
  			$(".members-bios-container").removeClass("geoff-js");
	  	}
	  	else{
        $(".members-bios-container").addClass("members-bios-container-js");
        $(".members-bios-container").removeClass("carter-js jasper-js nik-js");
	  		$(".members-bios-container").addClass("geoff-js");
	  	}
  	}

  	else if( $(this).context.alt === "Carter Jones" ){
  		if($(".members-bios-container").hasClass("carter-js")){
  			$(".members-bios-container").removeClass("carter-js");
	  	}
	  	else{
        $(".members-bios-container").addClass("members-bios-container-js");
        $(".members-bios-container").removeClass("geoff-js jasper-js nik-js");
	  		$(".members-bios-container").addClass("carter-js");
	  	}
  	}

  	else if( $(this).context.alt === "Jasper" ){
  		if($(".members-bios-container").hasClass("jasper-js")){
  			$(".members-bios-container").removeClass("jasper-js");
	  	}
	  	else{
        $(".members-bios-container").addClass("members-bios-container-js");
        $(".members-bios-container").removeClass("geoff-js carter-js nik-js");
	  		$(".members-bios-container").addClass("jasper-js");
	  	}
  	}

  	else if( $(this).context.alt === "Nik Sus" ){
  		if($(".members-bios-container").hasClass("nik-js")){
  			$(".members-bios-container").removeClass("nik-js");
	  	}
	  	else{
        $(".members-bios-container").addClass("members-bios-container-js");
        $(".members-bios-container").removeClass("geoff-js carter-js jasper-js");
	  		$(".members-bios-container").addClass("nik-js");
	  	}
  	}

  });
  $(".members-bios-container div div div a").on("click", function(event){
    event.preventDefault();
    console.log($(this))
      $(".members-bios-container").removeClass("members-bios-container-js geoff-js carter-js jasper-js nik-js");
  });
});