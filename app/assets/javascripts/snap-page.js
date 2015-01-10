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
    }
  });

  $("#down-button").on("click", function(event){
    event.preventDefault();

    $.fn.fullpage.moveSectionDown();
  });
});