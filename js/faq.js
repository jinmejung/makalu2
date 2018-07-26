

(function(){
    function a(index){
        $('.faq_menu>li:first-child').addClass('faq_menu_on').show();
        $('.faq_wrap div').hide();
        $('.faq_wrap .faq_contents' + index).fadeIn(800);	
    }

    a("1");

    var li = $('.faq_menu > ._m').click(function(){
        var $this = $(this);

        a(li.index($this) + 1);
    });
})();


$('.faq_menu>li').click(function(){

    $('.faq_menu>li').removeClass('faq_menu_on');
    $(this).addClass('faq_menu_on');
})

$('.faq_bar > ul > li > span').click(function () {

    $('.faq_bar li').removeClass('active');

    $(this).closest('li').addClass('active');	
    var checkElement = $(this).next();
    if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
        $(this).closest('li').removeClass('active');
        checkElement.slideUp(150);
    }
    if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
        $('.faq_bar ul ul:visible').slideUp(150);
        checkElement.slideDown(150);
    }
    if($(this).closest('li').find('ul').children().length == 0) {
        return false;
    }
    else{
        return false;	
    }		
});




