
$(document).ready(function() {
    // setInterval(function(){
    //   console.log("YES ", $('.marquee'));

    //   $('.marquee').animate({scrollTop: "100px"}, 2000);
    // }, 2000);
  var i = 0;
  $(".marquee").last().addClass("last");
  $(".marquee").each(function() {
    var $this = $(this);
    $this.css("top", i);
    i += $this.height();
    scroll($this);
  });
});


function scroll($el) {
  var top = parseInt($el.css("top"));
    if(top < -5) {
      var $lastEl = $(".last");
      $lastEl.removeClass("last");
      $el.addClass("last");
      var top = (parseInt($lastEl.css("top")) + $lastEl.height());
      $el.css("top", top);
    }
    $el.animate({ top: (parseInt(top)-50) },2000,'linear', 
      function() {
        scroll($(this));
      }
    );
}


