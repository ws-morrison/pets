$(document).ready(function() {
    // change nav-button background
    $(document).on("click", ".nav-list__button", function(evt) {
        evt.preventDefault();
        $(".nav-list__button").removeClass("nav-list__button--active");
        $(this).addClass("nav-list__button--active");
    });

    // change nav-button orange background
    $(document).on("click", ".nav-list__button--catalog", function(evt) {
        evt.preventDefault();
        $(".nav-list__button--catalog").removeClass("nav-list__button--orange");
        $(this).addClass("nav-list__button--orange");
    });

    // burger
    // open/close menu
    $(".burger").on("click", function() {
        console.log("Нажал на бургер");
        $(".nav-menu").toggleClass("visually-hidden");
    });

    // special for index
    $(".burger--special").on("click", function() {
        $(".nav-menu--special").toggleClass("visually-hidden");
    });

    // Burger animation
    $(".burger").click(function() {
        $(this).toggleClass("open");
    });

    // stopPropagation Burger menu
    $(document).click(function(event) {
        if ($(event.target).closest(".burger").length) return;
        $(".burger").removeClass("open");
        $(".nav-menu").addClass("visually-hidden");
        event.stopPropagation();
    });
});
