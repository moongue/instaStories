function menuLogic () {
    var $header = $('.header');
    var $mobileMenuTrigger = $('.mobile-menu-toggle', $header);
    var $menuBlock = $('.menu', $header);
    var openClass = 'is-open';

    // Toggle main menu.
    $mobileMenuTrigger.on('click', function(e) {
        e.preventDefault();
        $menuBlock.toggleClass(openClass);
    });
};

function slider () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
    });
};

$(window).on('load', function() {
    menuLogic();
    slider();
});