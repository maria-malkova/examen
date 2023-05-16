$(document).ready(function (){
    $('.portfolio__list').slick({
        arrows: true,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 6000,

        prevArrow: '.portfolio__top',
        nextArrow: '.portfolio__bottom',

    });
})


