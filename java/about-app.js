
        function topFunction() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }
        $(".loading").fadeTo(5000, 1).slideUp(1000);
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

        /*menu animation */
        $('.burgercontainer').click(function () {
            if ($(".line1").hasClass("line1-after")) {
                $(".line1").removeClass("line1-after");
                $(".layer1").removeClass("layer1-after");
                $(".menulayer").removeClass("menulayer-after");
                $(".languages").removeClass("languages-after");
                $("body").css({
                    overflow: "auto"
                });
            } else {
                $(".line1").addClass("line1-after");
                $(".layer1").addClass("layer1-after");
                $(".menulayer").addClass("menulayer-after");
                $(".languages").addClass("languages-after");
                $("body").css({
                    overflow: "hidden"
                });
            }

            ///////////////////////////////////////
            if ($(".line2").hasClass("line2-after")) {
                $(".line2").removeClass("line2-after");
            } else {
                $(".line2").addClass("line2-after");
            }
        });