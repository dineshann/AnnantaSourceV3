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

    // Software Solution SLide
    $(".solutionSec__slide").slick({
        slidesToShow: 5,
        infinite: true,
        speed: 500,
        responsive: [{
                breakpoint: 1040,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 960,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});