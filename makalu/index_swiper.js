$(document).ready(function(){
    var swiper = new Swiper('.product_wrap .swiper-container', {
        slidesPerView: 1,
        autoplay: {
            delay: 1500,
        },
        spaceBetween:0,
        loop:true,
        navigation: {
            nextEl: '.product_wrap .swiper-button-next',
            prevEl: '.product_wrap .swiper-button-prev',
        },
        autoplayDisableOnInteraction : false,
    });
})

