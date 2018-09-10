"use strict";

$(document).ready(function () {

    // OwlCarousel
    $(".post__slider").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        responsive: {
            600: {
                items: 1
            }
        },
        nav: true
    });

});

// $(".loop").owlCarousel({
//   center: true,
//   items: 1,
//   loop: true,
//   margin: 10,
//   responsive: {
//     600: {
//       items: 1
//     }
//   },
//   singleItem: true,
//   autoHeight: false,
//   nav: true
// });

