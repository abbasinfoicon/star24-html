/*=====================================================================
    ==========================  ScrollToptoBottom  =========================
    ========================================================================*/
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('#scroll').fadeIn();
    } else {
        $('#scroll').fadeOut();
    }
});
$('#scroll').click(function () {
    $("html, body").animate({scrollTop: 0}, 600);
    return false;
});

/*========================================================================================================
================================ number count for stats, using jQuery animate ===================================================================
===========================================================================================================*/

$('.counting').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({ countNum: $this.text()}).animate({
            countNum: countTo
        },

        {

            duration: 3000,
            easing:'linear',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
                //alert('finished');
            }

        });


});


/*========================================================================================================
================================ number count for stats, using jQuery animate ===================================================================
===========================================================================================================*/
jQuery("#carousel").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 0,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    dots: false,
    navText: ["<img src='assets/img/left-arrow.png' class='img-responsive' />", "<img src='assets/img/right-arrow.png' class='img-responsive' />"],
    responsive: {
        0: {
            items: 2
        },

        600: {
            items: 4
        },

        1024: {
            items: 5
        },

        1366: {
            items: 5
        }
    }
});

jQuery(".full-width").owlCarousel({
    items: 1,
    autoplay: true,
    lazyLoad: true,
    loop: true,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 8000,
    smartSpeed: 500,
    nav: true,
    dots: false,
    navText: ["<img src='assets/img/left-arrow.png' class='img-responsive' />", "<img src='assets/img/right-arrow.png' class='img-responsive' />"],

});


jQuery(".main-carousel").owlCarousel({
    items: 1,
    autoplay: true,
    lazyLoad: true,
    loop: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
});

jQuery(".top-carousel").owlCarousel({
    items: 1,
    autoplay: true,
    lazyLoad: true,
    loop: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
});

