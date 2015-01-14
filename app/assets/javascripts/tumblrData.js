$(document).ready(function() {
  $.ajax({
  	url: "http://api.tumblr.com/v2/blog/bsideshuffle.tumblr.com/posts/text?api_key="+gon.tumblr_key,
  	method: "GET",
  	dataType: "jsonp",
  	success: function(data){
  		console.log("Success");
  		console.log(data);
  	}
  });
});