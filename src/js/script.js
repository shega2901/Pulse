// https://kenwheeler.github.io/slick/

$(document).ready(function() {
    $('.carousel__inner').slick({
        speed: 1200,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [{
            breakpoint: 575, // from 0px to 768px tablet arrow don't use, use dot
            settings: {
                dots: true,
                arrows: false
            }
        }]
    });
});