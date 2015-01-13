$(document).ready(function() {
	$.ajax({
		url: "http://api.songkick.com/api/3.0/artists/6404794/calendar.json?apikey="+gon.songkick_key,
		dataType: "json",
		method: "GET",
		success: function(data){
			var result = data.resultsPage.results.event
			for(var r = 0; r < result.length; r++){
				if( r === 0 ){
					$("#first-show ").html("<li>"+result[r].start.date+"<br/>"+result[r].venue.displayName+"</li><li>"+result[r].location.city+"</li><li><button><a href='"+result[r].uri+"'>Tickets</a></button></li>");
				}
				else if( r === 1){
					$("#second-show").html("<li>"+result[r].start.date+"<br/>"+result[r].venue.displayName+"</li><li>"+result[r].location.city+"</li><li><button><a href='"+result[r].uri+"'>Tickets</a></button></li>");
				}
				else if( r === 2){
					$("#third-show").html("<li>"+result[r].start.date+"<br/>"+result[r].venue.displayName+"</li><li>"+result[r].location.city+"</li><li><button><a href='"+result[r].uri+"'>Tickets</a></button></li>");
				}
			}
		}
	})
});