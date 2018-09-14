"use strict";

$(document).ready(function() {

    // OwlCarousel
    $(".post__slider").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        responsiveBaseWidth: ".post__slider",
        responsive: {
            600: {
                items: 1
            }
        },
        nav: true
    });
});
