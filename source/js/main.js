$(document).ready(function () {
    // change nav-button background
    $(document).on('click', '.nav-list__button', function (evt) {
        evt.preventDefault();
        $('.nav-list__button').removeClass('nav-list__button--active');
        $(this).addClass('nav-list__button--active');
    });

    // change nav-button orange background
    $(document).on('click', '.nav-list__button--catalog', function (evt) {
        evt.preventDefault();
        $('.nav-list__button--catalog').removeClass('nav-list__button--orange');
        $(this).addClass('nav-list__button--orange');
    });

    // burger
    // open/close menu
    $('.burger').on('click', function () {
        $('.nav-menu').toggleClass('visually-hidden');
        $('.modal-overlay').removeClass('hidden');
    });

    // special for index
    $('.burger--special').on('click', function () {
        $('.menu-nav').toggleClass('visually-hidden');
    });

    // Burger animation
    $('.burger').click(function () {
        $(this).toggleClass('open');
        $('.nav-menu').toggleClass('nav-menu--opened');
        $('.menu-nav').toggleClass('nav-menu--opened');
    });

    // stopPropagation Burger menu
    $('.modal-overlay').click(function (event) {
        if ($(event.target).closest('.burger').length) return;
        $('.burger').removeClass('open');
        $('.nav-menu').addClass('visually-hidden');
        $('.nav-menu').removeClass('nav-menu--opened');
        $('.menu-nav').removeClass('nav-menu--opened');
        $('.menu-nav').addClass('visually-hidden');
        $('.modal-overlay').toggleClass('hidden');
        event.stopPropagation();
    });


    // Показ модального при покидании сайта
    var exitModal = $('.modal');
    document.addEventListener('mouseleave', function (e) {
        if (e.clientY < 0) {
            $('html, body').animate({
                    scrollTop: exitModal.offset().top
                },
                500
            );
            exitModal.show(100);
            // exitModal.toggleClass('show');
        }
    });

    // Закрываем модальное окно
    // function modalClose() {
    //     $('.modal').removeClass('show');
    //     $('.modal-overlay').addClass('visually-hidden');
    // }

    $('.jsModalCloseBtn').on('click', function (e) {
        e.preventDefault();
        exitModal.hide(100);
        // modalClose();


    });


    // Drop-items
    var showContentTrigger = $('.jsShowContentTrigger');
    var showContent = $('.jsShowContent');

    // showContent.addClass('hidden');
    showContentTrigger.each(function () {
        $(this).on('click', function () {
            $(this)
                .find(".icon__plus-drop")
                .toggleClass("active");
            $(this).toggleClass('active');
            $(this).next(showContent).toggleClass('active');
        })
    });


    //  https://github.com/inuyaksa/jquery.nicescroll

    $(".jsCustomScroll").niceScroll({
        cursorcolor: "#3AB9C3",
        background: "#3ab9c333",
        cursorborderradius: "3.5px",
        cursoropacitymin: 1, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
        iframeautoresize: true, // autoresize iframe on load event
    });
});
