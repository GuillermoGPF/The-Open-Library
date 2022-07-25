// Library Script
$(document).ready(function($) {
    $(window).scroll(function() {
        $scroll = $(document).scrollTop();
        if ($scroll > 150) {
            $('.navbar').addClass('shrink')
            $('.wrapNavbar').addClass('fixed-top');
        } else {
            $('.navbar').removeClass('shrink');
            $('.wrapNavbar').removeClass('fixed-top');
        }
    });
});