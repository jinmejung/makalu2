$(document).ready(function(){
     //로그인폼 placeholder 추가
    if ($('.xans-member-login').val() != undefined) {
        $('#member_id').attr('placeholder', '아이디');
        $('#member_passwd').attr('placeholder', '패스워드');
    }

    // 회원&비회원 토글
    $('.ec-base-tab').each(function(){
        var selected = $(this).find('> ul > li.selected > a');
    });

    $('body').delegate('.ec-base-tab a', 'click', function(e){
       var _target = $(this).attr('href');
        if (_target == '#member') {
            $('#member_login_module_id').show();
            $('#order_history_nologin_id').hide();
        } else { console.log("BBB");
            $('#member_login_module_id').hide();
            $('#order_history_nologin_id').show();
        }
        e.preventDefault();
    });   
});
