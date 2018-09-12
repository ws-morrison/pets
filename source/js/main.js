$(document).ready(function() {
    // change nav-button background
    $(document).on("click", ".nav-list__button", function(evt) {
        evt.preventDefault();
        $(".nav-list__button").removeClass("nav-list__button--active");
        $(this).addClass("nav-list__button--active");
    });

    // burger
    // $(".nav-menu").addClass("visually-hidden");

    $(".burger").on("click", function() {
        console.log("asd");
        $(".nav-menu").toggleClass("visually-hidden").fadeTo('slow');
    });
});
