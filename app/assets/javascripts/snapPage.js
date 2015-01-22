// $(document).ready(function() {
//   $('#fullpage').fullpage({
//     anchors: ['home-page', 'news-section'],
//     menu: '#my-menu',
//     resize: false,
//     scrollOverflow: true,
//     onLeave: function(index, nextIndex, direction){
//       //after leaving section 2
//       if(index == 1 && direction =='down'){
//         $("#header").slideDown();
//       }
//       else if(index == 2 && direction == 'up'){
//         $("#header").slideUp();
//       }
//     },
//     afterRender: function(){
//       !function(d,s,id){
//         var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
//         if(!d.getElementById(id)){
//           js=d.createElement(s);
//           js.id=id;
//           js.src=p+"://platform.twitter.com/widgets.js";
//           fjs.parentNode.insertBefore(js,fjs);
//         }
//         }(document,"script","twitter-wjs");
//       }
//     });

//   $("#down-button").on("click", function(event){
//     event.preventDefault();

//     $.fn.fullpage.moveSectionDown();
//   });

// });
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