$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['home-page', 'news-section'],
    menu: '#my-menu',
    resize: false,
    scrollOverflow: true,
    onLeave: function(index, nextIndex, direction){
      //after leaving section 2
      if(index == 1 && direction =='down'){
        $("#header").slideDown();
      }
      else if(index == 2 && direction == 'up'){
        $("#header").slideUp();
      }
    },
    afterRender: function(){
      !function(d,s,id){
        var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
        if(!d.getElementById(id)){
          js=d.createElement(s);
          js.id=id;
          js.src=p+"://platform.twitter.com/widgets.js";
          fjs.parentNode.insertBefore(js,fjs);
        }
        }(document,"script","twitter-wjs");
      }
    });

  $("#down-button").on("click", function(event){
    event.preventDefault();

    $.fn.fullpage.moveSectionDown();
  });

});