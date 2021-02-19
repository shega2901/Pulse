// https://denis-creative.com/jquery-tabs/

$(document).ready(function() {
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() { // "." write to name class for $
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active') // don't write "."
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    // function 'detail <-> back' variant 1
    // $('.catalog-item__link').each(function(i) {
    //     $(this).on('click', function(e) {
    //         e.preventDefault(); // cancel to go <a href="#" 
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active'); // switch class according "i"
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //     })
    // });

    // $('.catalog-item__back').each(function(i) {
    //     $(this).on('click', function(e) {
    //         e.preventDefault(); // cancel to go <a href="#" 
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active'); // switch class according "i"
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //     })
    // });

    // function 'detail <-> back' variant 2
    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault(); // cancel to go <a href="#" 
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active'); // switch class according "i"
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

});