
     $(window).on("load", function () {
        $(".loading").slideUp("500");
    });
    $(".loading").fadeTo(5000,1).slideUp(1000);
    $('#container').mouseleave(function (e) {
      TweenMax.to(this, 0.3, {
        height: 150,
        width: 150
      });
      TweenMax.to('.burgercontainer', 0.3, {

        x: 0,
        y: 0
      });
    });
    $('body').css('cursor', 'none');
    $('#container').mouseenter(function (e) {
      TweenMax.to(this, 0.3, {
        height: 150,
        width: 150
      });

    });

    $('#container').mousemove(function (e) {
      callParallax(e);
    });

    function callParallax(e) {
      parallaxIt(e, '.burgercontainer', 80);
    }

    function parallaxIt(e, target, movement) {
      var $this = $('#container');
      var relX = e.pageX - $this.offset().left;
      var relY = e.pageY - $this.offset().top;

      TweenMax.to(target, 0.3, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement,
        ease: Power2.easeOut
      });
    }


    /*Cursuure */
    $(".link").mouseenter(function (e) {
      $(".cursor__dot").addClass("cursor__dot--anim");
    });
    $(".link").mouseleave(function (e) {
      $(".cursor__dot").removeClass("cursor__dot--anim");
    });
    $(".linktoplat").mouseenter(function (e) {
      $(".cursor__dot").addClass("cursor__dot--anim");
    });
    $(".linktoplat").mouseleave(function (e) {
      $(".cursor__dot").removeClass("cursor__dot--anim");
    });
    $(".linktext").mouseenter(function (e) {
      $(".cursor__dot").addClass("cursor__dot--anim");
    });
    $(".linktext").mouseleave(function (e) {
      $(".cursor__dot").removeClass("cursor__dot--anim");
    });
    $("#container").mouseenter(function (e) {
      $(".cursor__dot").addClass("cursor__dot--anim");
    });
    $("#container").mouseleave(function (e) {
      $(".cursor__dot").removeClass("cursor__dot--anim");
    });
    $(".logotext").mouseenter(function (e) {
      $(".cursor__dot").addClass("cursor__dot--anim");
    });
    $(".logotext").mouseleave(function (e) {
      $(".cursor__dot").removeClass("cursor__dot--anim");
    });
    $(" .carousel-control-next-icon").mouseenter(function (e) {
      $(".cursor__dot").addClass("cursor__dot--anim");
    });
    $(" .carousel-control-next-icon").mouseleave(function (e) {
      $(".cursor__dot").removeClass("cursor__dot--anim");
    });
    $(" .carousel-control-prev-icon").mouseenter(function (e) {
      $(".cursor__dot").addClass("cursor__dot--anim");
    });
    $(" .carousel-control-prev-icon").mouseleave(function (e) {
      $(".cursor__dot").removeClass("cursor__dot--anim");
    });
    $(document).on("mousemove", function (e) {
      $(".cursor, .follower").css({
        transform: "translate3d(" + e.pageX + "px, " + e.pageY + "px, 0px)"
      });
    });

    /*menu animation */
    $('.burgercontainer').click(function () {
      if ($(".line1").hasClass("line1-after")) {
        $(".line1").removeClass("line1-after");
        $(".layer1").removeClass("layer1-after");
        $(".menulayer").removeClass("menulayer-after");
        $(".languages").removeClass("languages-after");
      } else {
        $(".line1").addClass("line1-after");
        $(".layer1").addClass("layer1-after");
        $(".menulayer").addClass("menulayer-after");
        $(".languages").addClass("languages-after");
      }

      ///////////////////////////////////////
      if ($(".line2").hasClass("line2-after")) {
        $(".line2").removeClass("line2-after");
      } else {
        $(".line2").addClass("line2-after");
      }
    });

        