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

    // ------------------------------------------------------- //
    //   Open & Close Search Panel
    // ------------------------------------------------------ //
    $('[data-bs-toggle="search"]').on("click", function () {
        $(".search-area-wrapper").show();
        $(".search-area-input").focus();
    });

    $(".search-area-wrapper .close-btn").on("click", function () {
        $(".search-area-wrapper").hide();
    });
});