 //submit btn

 $(".submit").mouseenter(function (e) {
    $(".cursor__dot").addClass("cursor__dot--anim");
  });

  $(".submit").mouseleave(function (e) {
    $(".cursor__dot").removeClass("cursor__dot--anim");
  });
  $(".Xcontainer").mouseenter(function (e) {
    $(".cursor__dot").addClass("cursor__dot--anim");
  });

  $(".Xcontainer").mouseleave(function (e) {
    $(".cursor__dot").removeClass("cursor__dot--anim");
  }); 
   $(".logotext").mouseenter(function (e) {
    $(".cursor__dot").addClass("cursor__dot--anim");
  });

  $(".logotext").mouseleave(function (e) {
    $(".cursor__dot").removeClass("cursor__dot--anim");
  });
  $(document).on("mousemove", function (e) {
    $(".cursor, .follower").css({
      transform: "translate3d(" + e.pageX + "px, " + e.pageY + "px, 0px)"
    });
  });
  $(".loading").fadeTo(5000,1).slideUp(1000);