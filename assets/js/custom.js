$(document).ready(function () {
    "use strict";

    //Preloader
    $(window).on('load', function (e) {
        $(".loadersec").fadeOut();
        $(".loader").delay(500).fadeOut("slow");
    })

    // AOS
    AOS.init();

    // Navbar Fixed
    if ($(window).width() > 992) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 40) {
                $('#navbar_top').addClass("fixed-top");
                $('#navbar_top').removeClass("bg-transparent")
            } else {
                $('#navbar_top').removeClass("fixed-top");
            }
        });
    }
});