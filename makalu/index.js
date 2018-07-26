$(document).ready(function(){
     $(".main-scroll-btn").click(function() {
        var href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 800);
    });
    
    $(document).scroll(function(){
       var position_y = $(document).scrollTop();

       if (position_y >= 300){               
           $('.campaign-intro-bg').addClass('on');
           $('#btntop').fadeIn(300);
       } 
       if (position_y < 290){                   
           $('.campaign-intro-bg').removeClass('on');
           $('#btntop').fadeOut(300);
       }
   });
    
    var swiper = new Swiper('.main-visual.swiper-container', {
        loop: true,
        paginationClickable: true,
        centeredSlides: true,
        effect: 'fade',
        /*fadeEffect: {
                    crossFade: true
                },*/
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.main-visual .swiper-button-next',
            prevEl: '.main-visual .swiper-button-prev',
        },
        autoplay: {
            delay: 1500,
        },
        autoplayDisableOnInteraction: false
    });
   
});