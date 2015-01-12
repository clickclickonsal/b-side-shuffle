$(document).ready(function() {
	$.ajax({
		url: "http://api.songkick.com/api/3.0/artists/6404794/calendar.json?apikey="+gon.songkick_key,
		dataType: "json",
		method: "GET",
		success: function(data){
			var result = data.resultsPage.results.event
			for(var r = 0; r < result.length; r++){
			console.log(result[r].venue.displayName)
			console.log(result[r].uri)
				if( r === 0 ){
					$("#first-show ").html(result[r].start.date);
				}
				else if( r === 1){
					$("#second-show").html(result[r].start.date);
				}
				else if( r === 2){
					$("#third-show").html(result[r].start.date);
				}
			}
		}
	})
});