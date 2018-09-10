"use strict";

$(document).ready(function() {
  // var ActivateList = function() {

  //   $(".dropdown-list__heading").toggleClass("dropdown-list__heading--active");
  //   $(".docs__wrapper")
  //     .toggleClass(".visually-hidden")
  //     .fadeToggle("fast");

  // };

  // $(".dropdown-list__heading").click(function() {
  //   $(".dropdown-list__heading").toggleClass("dropdown-list__heading--active");
  //   $(".docs__wrapper")
  //     .toggleClass(".visually-hidden")
  //     .fadeToggle("fast");
  // });

  $(".dropdown-list__heading--active").each(function() {
    $(this).click(function() {
        $(this).toggleClass("dropdown-list__heading--active");
        $(this).closest("docs__wrapper")
          .toggleClass("visually-hidden")
          .fadeToggle("fast");
    });
  });
});

// Алексей Макаров, [10.09.18 15: 33]
// $(".product-item").each(function () {
//   $(this).on("click", function () {
//     console.log($(this));
//   });
// });
