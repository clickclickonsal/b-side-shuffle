$(document).ready(function() {

  var currentSong = -1;
  var trackId = 133312661;
  var trackTitle = "Omajimawoma";
  var tracksArray = []

  SC.initialize({
    client_id: gon.soundcloud_key
  });
  var is_playing = false, sound;

  SC.get("/tracks", { user_id: 34132939, limit: 10}, function(tracks){
    for (var i = 0; i < tracks.length; i++){
      tracksArray.push({"title": tracks[i].title, "id": tracks[i].id})
    }
  });

  function getNextSong(num){
    trackId = tracksArray[num].id
    trackTitle = tracksArray[num].title
  }

  function playSong(){
    SC.stream("/tracks/"+trackId, function(obj){
      obj.play();
      sound = obj;
      is_playing = true;
    });
    $("#small-record-disc").addClass("spin-record-js");
  }

  function player(){
    if( sound ){
      if(is_playing){
        sound.pause();
        is_playing = false;
        $("#small-record-disc").removeClass("spin-record-js");
      } 
      else {
        sound.play();
        is_playing = true;
      }
    }
  }

  $("#play-button").on("click", function(event){
  	event.preventDefault();

  	$(this).hide();
  	$("#pause-button").show();
    $(".song-title").html("\""+trackTitle+"\"")
    playSong();
  });

  $("#pause-button").on("click", function(event){
  	event.preventDefault();

  	$(this).hide();
  	$("#play-button").show();

    player();
  });

  $("#forward-button").on("click", function(event){
    event.preventDefault();

    $("#play-button").hide();
    $("#pause-button").show();

    currentSong++;
    if( currentSong === tracksArray.length){
      currentSong = 0;
    }
    getNextSong(currentSong);
    $(".song-title").html("\""+trackTitle+"\"")
    player();
    playSong();
  })

  $("#rewind-button").on("click", function(event){
    event.preventDefault();

    $("#play-button").hide();
    $("#pause-button").show();

    currentSong--;
    if( currentSong === -1 || currentSong === -2){
      currentSong = tracksArray.length -1;
    }

    getNextSong(currentSong);
    $(".song-title").html("\""+trackTitle+"\"")
    
    player();
    playSong();
  })
});