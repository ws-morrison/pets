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
        $(".nav-menu").toggleClass("visually-hidden");
        $(".modal-overlay").removeClass("hidden");
    });

    // special for index
    $(".burger--special").on("click", function() {
        $(".menu-nav").toggleClass("visually-hidden");
    });

    // Burger animation
    $(".burger").click(function() {
        $(this).toggleClass("open");
        $(".nav-menu").toggleClass("nav-menu--opened");
        $(".menu-nav").toggleClass("nav-menu--opened");
    });

    // stopPropagation Burger menu
    $(".modal-overlay").click(function(event) {
        if ($(event.target).closest(".burger").length) return;
        $(".burger").removeClass("open");
        $(".nav-menu").addClass("visually-hidden");
        $(".nav-menu").removeClass("nav-menu--opened");
        $(".menu-nav").removeClass("nav-menu--opened");
        $(".menu-nav").addClass("visually-hidden");
        $(".modal-overlay").toggleClass("hidden");
        event.stopPropagation();
    });
});
