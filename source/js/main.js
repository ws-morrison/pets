$(document).ready(function () {

    // change nav-button background
    $(document).on('click', '.nav-list__button', function (evt) {
        console.log('asd');
        evt.preventDefault();
        $('.nav-list__button').removeClass('nav-list__button--active');
        $(this).addClass('nav-list__button--active');
    })
});
