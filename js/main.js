$(function() {
    $(".fairy-tail__slider").slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.svg" alt=""></button>',
        /* автоматическое проигрывание*/
        autoplay: true,
        /* скорость проигрывания */
        autoplaySpeed: 3000,
        /* анимация перелистывания слайдера */
        fade: true,
        responsive: [{
            breakpoint: 601,
            settings: {
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
            },
        }, ],
    });
    $(".our-trip__slider").slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.svg" alt=""></button>',
        /* автоматическое проигрывание*/
        autoplay: true,
        /* скорость проигрывания */
        autoplaySpeed: 3000,
        /* анимация перелистывания слайдера */
        fade: true,
        responsive: [{
            breakpoint: 601,
            settings: {
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
            },
        }, ],
    });
});