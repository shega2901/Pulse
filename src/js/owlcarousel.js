// https://owlcarousel2.github.io/OwlCarousel2/
$(document).ready(function() {
    $('.carousel__inner').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })
})