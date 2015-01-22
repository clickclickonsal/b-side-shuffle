$(document).ready(function(){
  var options = {
    $menu: $('header .menu'),
    slideSpeed: 200,
    directionThreshold: 100,
    slideSpeed: 500,
    onActivate: function(){
      if( $(".active").hasClass("last-page") ){
        $("header").slideDown();
        $("#wrapper").panelSnap('disable');
        $("#up-button").slideDown();

        if( $(".active").hasClass("news") ){
          $('#wrapper').panelSnap('enable')
        }
      }
      else{
        $("header").slideUp();
        $("#up-button").slideUp();
      }
    },
    keyboardNavigation: {
      enabled: true,
      wrapAround: false,
    }
  };

  $('#wrapper').panelSnap(options);
});