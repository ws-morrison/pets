"use strict";

$(document).ready(function () {

    $(".docs__wrapper").addClass("visually-hidden");

    $(".dropdown-list__item").each(function () {
        $(this).on('click', function () {


            $(this).children('.dropdown-list__heading').toggleClass("dropdown-list__heading--active");
            $(this).find('.dropdown-list__heading-thumb').toggleClass("dropdown-list__heading-thumb--active");
            $(this).children('.docs__wrapper').toggleClass("visually-hidden");
        });
    });
});
