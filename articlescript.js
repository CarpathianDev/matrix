$(document).on('scroll', function () {

    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();

    //Link boxes section

    const $last = $('.last');
    const lastFromTop = $last.offset().top;
    const last5Height = $last.innerHeight();

    if (scrollValue > lastFromTop - windowHeight) {
        $last.addClass('activeLink');
    }
    //Cleaner
    if (scrollValue < 100) {
        $('.last').removeClass('activeLink');
    }
})