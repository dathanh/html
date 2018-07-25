$(document).ready(function() {
    // var index = 0;

    // function displayBanner() {
    //     // $('banner-item').css({ display: 'none' });
    //     $('banner-item')[index].css({ display: 'block' });
    //     index++;
    //     setTimeout(displayBanner, 100);
    // }
    $("div.mobile-menu>a:first-child").on('click', function() {
        if ($("div.menu-content").css('display') == 'none') {
            $("div.menu-content").css({ display: 'block' });
            $("div.mobile-menu>a:first-child").css({ "background-color" : '#4caf50' });
        } else {
            $("div.menu-content").css({ display: 'none' });
            $("div.mobile-menu>a:first-child").css({ "background-color" : '#0F0E0E' });
        }

    });
});