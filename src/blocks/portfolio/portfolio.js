$(document).ready(function (){
    $('.portfolio__list').slick({
        arrows: true,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 7000,

        prevArrow: '.portfolio__top',
        nextArrow: '.portfolio__bottom',

    });
})


