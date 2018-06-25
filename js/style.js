$(document).ready(function() {
    var sticky = $('nav').offset().top;
    $(window).on('scroll', function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > sticky) {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });
});