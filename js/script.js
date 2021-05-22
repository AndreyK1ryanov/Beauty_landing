$(document).ready(function () {
    //mobile menu - start
    $('#mob_trigger').on("tap click", function () {
        $('#nav_menu').addClass('mob_nav_menu');
        $('#nav_menu_link').addClass('mob_nav_menu_link');
        $('#nav_menu_button').addClass('mob_nav_menu_button');
        $('#nav_menu_close').addClass('mob_nav_menu_close');
        $('.nav_menu_close').addClass('mob_nav_menu_close');
    });

    function close_mob_menu() {
        $('#nav_menu').removeClass('mob_nav_menu');
        $('#nav_menu_link').removeClass('mob_nav_menu_link');
        $('#nav_menu_button').removeClass('mob_nav_menu_button');
        $('#nav_menu_close').removeClass('mob_nav_menu_close');
        $('.nav_menu_close').removeClass('mob_nav_menu_close');
    }

    $('#nav_menu_close').on("tap click", close_mob_menu)

    $('#nav_menu_link').find('a').on("tab click", close_mob_menu)
    //mobile meu - finish

    //atach class "appeared" for animation when user scroll -start
    //left rain
    $(function () {
        $(document.body).on('appear', '#move_rain3', function (e, $affected) {
            $(this).addClass("appeared");
        });
        $('#move_rain3').appear({ force_process: true });
    });
    //stadion
    $(function () {
        $(document.body).on('appear', '.stadion_line', function (e, $affected) {
            $(this).addClass("appeared");
        });
        $('.stadion_line').appear({ force_process: true });
    })
    //block ten dot
    $(function () {
        $(document.body).on('appear', '.block_ten_dot', function (e, $affected) {
            $(this).addClass("appeared");
        });
        $('.block_ten_dot').appear({ force_process: true });
    })
    //atach class "appeared" for animation when user scroll -finish

    //pop up login in form start
    $('#sign_in').click(function (e) {
        e.preventDefault();
        $('#sign_in_form').fadeIn(800);
        $('html').addClass('no-scroll');
        close_mob_menu();
    });

    $('.close-popup').click(function () {
        $('#sign_in_form').fadeOut(800);
        $('html').removeClass('no-scroll');
    });
    //pop up login in form finish

    //pop up login in form start
    $('#sign_up').click(function (e) {
        e.preventDefault();
        $('#sign_up_form').fadeIn(800);
        $('html').addClass('no-scroll');
        close_mob_menu();
    });

    $('.close-popup').click(function () {
        $('#sign_up_form').fadeOut(800);
        $('html').removeClass('no-scroll');
    });
    //pop up login in form finish
});
