"use strict";

// OwlCarousel
$(document).ready(function() {
  $(".owl-carousel").owlCarousel();
});

$(".loop").owlCarousel({
  center: true,
  items: 1,
  loop: true,
  margin: 10,
  responsive: {
    600: {
      items: 1
    }
  },
  singleItem: true,
  autoHeight: false,
  nav: true,
  navText: ['<img src=\"/source/img/slider-prev.png\">','<img src=\"/source/img/slider-prev.png\">']
});

