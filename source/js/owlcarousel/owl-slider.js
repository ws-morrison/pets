"use strict";

$(document).ready(function () {

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

    $(".charity__carousel").owlCarousel({
        loop: true,
        margin: 5,
        // stagePadding: 10,
        items: 1,
        responsive: {
            320: {
                items: 4,
            }
        }
    });

    //  Function for detect center item FOR 3 ITEMS (Change i==1) for your element
    // Функция для определения центрального элемента. В данный момент для 3-х элементов внутри слайдера.
    // Измените количество в "i==1",
    // до нужного вам количества, чтобы точно определять центральный элемент.
    function set_owl_center() {
        owl.find(".active").removeClass('owl-center');
        setTimeout(function () {
            owl.find(".active").each(function (i) {
                if (i == 1) $(this).addClass('owl-center');
            });
        }, 80);
    }
    owl.on('changed.owl.carousel', function (event) {
        set_owl_center();
    }) // On changes
    set_owl_center(); // Init center
});
