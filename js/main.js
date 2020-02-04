(function ($) {
    "use strict";

    // loading 
    $("#loading").fadeOut(1000);

    // for menu scroll 
    $('.main-menu ul li a').click(function () {
        var hash = this.hash;
        var position = $(hash).offset().top;
        $('html').animate({
            scrollTop: position
        }, 900);
    });

    // meanmenu
    jQuery('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });


    // extra-info 
    $('.info-bar').on('click',function(){
        $('.extra-info').addClass('info-open');
    })

    $('.close-icon').on('click',function(){
        $('.extra-info').removeClass('info-open');
    })


    //for portfolio menu active class
    $('.portfolio-menu button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    $('#demo-pie-1').pieChart({
        barColor: '#df3940',
        barWidth: 10,
        trackColor: '#14527d',
        lineCap: 'round',
        lineWidth: 5,
        onStep: function (from, to, percent) {
            $(this.element).find('.pie-value').text(Math.round(percent) + '%');
        }
    });

    // slider - active
    function mainSlider() {
        var BasicSlider = $('.testimonial-active');

        BasicSlider.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.single-testimonial:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });

        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-testimonial[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });

        BasicSlider.slick({
            autoplay: true,
            autoplaySpeed: 5000,
            dots: true,
            fade: true,
            arrows: false,
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();

    //Scroll top 
    $(".scroll-top a").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
    });

    // magnificPopup
    $('.popup-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });


})(jQuery);	    