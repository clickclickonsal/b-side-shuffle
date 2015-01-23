$(document).ready(function(){
  var options = {
    $menu: $('header .menu'),
    slideSpeed: 200,
    directionThreshold: 100,
    slideSpeed: 500,
    onActivate: function(){
      var viewPortWidth = window.innerWidth;
      if( $(".active").hasClass("last-page") ){
        $("header").slideDown();
        $("#wrapper").panelSnap('disable');
        $("#up-button").slideDown();

        if( ($(".active").hasClass("news")) && (viewPortWidth > 751) ){
          $('#wrapper').panelSnap('enable')
        }
      }
      else if($(".active").hasClass("splash-class") && viewPortWidth > 751){
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