$(document).ready(function () {
    //mobile menu - start
    $('.mobile-button-open').on("tap click", function () {
        $('.nav-menu__body').addClass('mobile-nav-menu__body');
        $('.nav-menu__list-item').addClass('mobile-nav-menu__list-item');
        $('.nav-menu__item').addClass('mobile-nav-menu__item');
        $('.sign-button-block').addClass('mobile-sign-button-block');
        $('.mobile-button-close').addClass('mobile-button-close_active');
        $('.mobile-button-open').addClass('mobile-button-open_deactive')
    });

    function closeMobileMenu() {
        $('.nav-menu').removeClass('mobile-nav-menu');
        $('.nav-menu__list-item').removeClass('mobile-nav-menu__list-item');
        $('.nav-menu__item').removeClass('mobile-nav-menu__item');
        $('.sign-button-block').removeClass('mobile-sign-button-block');
        $('.mobile-button-close').removeClass('mobile-button-close_active');
        $('.mobile-button-open').removeClass('mobile-button-open_deactive')
    }

    $('.mobile-button-close').on("tap click", closeMobileMenu)

    $('.nav-menu__link').on("tab click", closeMobileMenu)
    //mobile meu - finish

    //atach class "appeared" for animation when user scroll -start
    //left rain
    $(function () {
        $(document.body).on('appear', '#simple-ways-row__img-dynamic', function (e, $affected) {
            $(this).addClass("appeared");
        });
        $('#simple-ways-row__img-dynamic').appear({ force_process: true });
    });
    //stadion
    $(function () {
        $(document.body).on('appear', '.stadion-illustration__line-img', function (e, $affected) {
            $(this).addClass("appeared");
        });
        $('.stadion-illustration__line-img').appear({ force_process: true });
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
    $('.sign-button_in').click(function (e) {
        e.preventDefault();
        $('.sign-in-form').fadeIn(800);
        $('html').addClass('no-scroll');
        closeMobileMenu();
    });

    $('.pop-up__close-button').click(function () {
        $('.sign-in-form').fadeOut(800);
        $('html').removeClass('no-scroll');
    });
    //pop up login in form finish

    //pop up login in form start
    $('.sign-button_up').click(function (e) {
        e.preventDefault();
        $('.sign-up-form').fadeIn(800);
        $('html').addClass('no-scroll');
        closeMobileMenu();
    });

    $('.pop-up__close-button').click(function () {
        $('.sign-up-form').fadeOut(800);
        $('html').removeClass('no-scroll');
    });
    //pop up login in form finish

    //gap for button - start
    $('.identification-form__button').on('click', function () {
        alert('Благодарю за нажатие, доброго времени суток.))')
    })
    $('.promo__button').on('click', function () {
        alert('Благодарю за нажатие, доброго времени суток.))')
    })
    $('.preview__play-button').on('click', function () {
        alert('Благодарю за нажатие, доброго времени суток.))')
    })
    $('.preview__open-button').on('click', function () {
        alert('Благодарю за нажатие, доброго времени суток.))')
    })
    $('.traffic-boost-row__button').on('click', function () {
        alert('Благодарю за нажатие, доброго времени суток.))')
    })
    $('.ideia__button').on('click', function () {
        alert('Благодарю за нажатие, доброго времени суток.))')
    })
    $('.investments-block__button').on('click', function () {
        alert('Благодарю за нажатие, доброго времени суток.))')
    })
    $('.subscribe-form__button').on('click', function () {
        alert('Благодарю за нажатие, доброго времени суток.))')
    })
    $('.footer__link').on('click', function () {
        alert('Благодарю за нажатие, доброго времени суток.))')
    })
    $('.copyright-block__policy').on('click', function () {
        alert('Благодарю за нажатие, доброго времени суток.))')
    })
    $('.copyright-block__service').on('click', function () {
        alert('Благодарю за нажатие, доброго времени суток.))')
    })
    //gap for button - finish
});


/*
Coded by Andrey Kiryanov on 19/06/2021
*/