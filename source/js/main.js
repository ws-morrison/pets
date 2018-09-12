$(document).ready(function() {
    // change nav-button background
    $(document).on("click", ".nav-list__button", function(evt) {
        evt.preventDefault();
        $(".nav-list__button").removeClass("nav-list__button--active");
        $(this).addClass("nav-list__button--active");
    });


    // change nav-button orange background
    $(document).on("click", ".nav-list__button", function (evt) {
        evt.preventDefault();
        $(".nav-list__button").removeClass("nav-list__button--orange");
        $(this).addClass("nav-list__button--orange");
    });
    // burger
    // $(".nav-menu").addClass("visually-hidden");

    // special for index
    $(".burger--special").on("click", function() {
        $(".nav-menu--special").toggleClass("visually-hidden").fadeTo('slow');
    });

    // open/close menu
    $(".burger").on("click", function () {
        $(".nav-menu").toggleClass("visually-hidden").fadeTo('slow');
    });

    // Burger animation
    $('.burger').click(function () {
        $(this).toggleClass('open');
    });
});
