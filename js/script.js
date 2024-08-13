$(document).ready(function(){
    var winH = $(window).innerHeight();
    var docH = $('body').innerHeight();
    
    if(docH < winH) {
        $('.footer').addClass('fixed');
    }else{
        $('.footer').removeClass('fixed');
    }

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();

        if(scroll > 0) {
            $('.header').addClass('fixed');
            $('.index .contents').addClass('scrolled');

        }else{
            $('.header').removeClass('fixed');
            $('.index .contents').removeClass('scrolled');
        }


        $('.index .contents').each(function(){
            var conTop = $(this).offset().top - 500

            if( scroll > conTop ){
                if($(this).find('.text').hasClass('left')){

                    $(this).find('.i_h1').animate({'opacity':'1', 'margin-left': '0'}, 300);
                    $(this).find('.sub').animate({'opacity':'1', 'margin-left': '0'}, 700);
                    $(this).find('.btn_area').animate({'opacity':'1', 'margin-left': '0'}, 1100);
                    
                    $(this).find('.line').css({'animation':'lineup 1s 1.5s'});

                }else if($(this).find('.text').hasClass('right')){

                    $(this).find('.i_h1').animate({'opacity':'1', 'margin-right': '0'}, 300);
                    $(this).find('.sub').animate({'opacity':'1', 'margin-right': '0'}, 700);
                    $(this).find('.btn_area').animate({'opacity':'1', 'margin-right': '0'}, 1100);
                }
            }
        }); 
    });

    var mobW = $('.mob_nav .white_bg').innerWidth();

    var winW = $(window).innerWidth();
    if(winW <= 768) {
        $('.mob_nav').removeClass('on');

    }else{
        $('.mob_nav').addClass('on');
    }

    $(window).resize(function(){
        var win_reW = $(window).innerWidth();

        if(win_reW <= 768) {
            $('.mob_nav').removeClass('on');
        }else{
            $('.mob_nav').addClass('on');
        }
    });

    $('.mob_nav .white_bg').css({'left': -mobW + 'px'});

    $('.ham_btn').click(function(){
        $('.mob_nav').addClass('on');
        $('.mob_nav .white_bg').stop().animate({'left': '0'}, 300);
    });

    $('.mob_nav .black_bg, .mob_nav .close_btn').click(function(){
        $('.mob_nav').removeClass('on');
        $('.mob_nav .white_bg').css({'left': -mobW + 'px'});
    });


    $('.detail_wrap .more_btn').click(function(){
        $(this).parent().removeClass('on');
        $(this).parent().prev().removeClass('ellip');
        $(this).parents().removeClass('short');
    });


    var swiper = new Swiper(".menu_swiper", {
        slidesPerView : 2.5,
        spaceBetween : 15,
        mousewheel: false,
        keyboard:false,

        breakpoints: {
            500: {
                slidesPerView : 3.5,
            },
            768: {
                slidesPerView : 4.5,
            },
            960 : {
                slidesPerView : 5.5,
            },
        }
    });

    $('#news .news_box').mouseenter(function(){
        $(this).stop().animate({'top': '-15px'},300);
    });

    $('#news .news_box').mouseleave(function(){
        $('#news .news_box').stop().animate({'top': '0'},300);
    });

    $('#faq .f_cate').click(function(){
        $('#faq .f_cate').removeClass('on');
        $(this).addClass('on');

        $('#faq .tab').removeClass('on');
        $('#faq .tab').eq($(this).index()).addClass('on');
    });

    $('#faq .list .l_bot').slideUp(0);

    $('#faq .list .l_top').each(function(data,index){
        $('#faq .list .l_top').data('willOpen', true);
    });

    $('#faq .list .l_top').click(function(){
        if($(this).data('willOpen')){
            $(this).data('willOpen', false);
            $('#faq .list .l_bot').slideUp(300);
            $(this).next('.l_bot').slideDown(300);
            $(this).children('.arrow').children('img').addClass('on');

        }else{
            $(this).data('willOpen', true);
            $('#faq .list .l_bot').slideUp(300);
            $('#faq .list .l_top .arrow img').removeClass('on');
        }
    });


    $('#chat').change(function(){
        if($(this).is(":checked")){
            $(this).next(".txt").text("ON");
            $(this).next(".txt").addClass("on");

        }else{
            $(this).next(".txt").text("OFF");
            $(this).next(".txt").removeClass("on");
        }
    });


    $('#write_food .add_btn').click(function(){
        var id = $('#write_food .menu:last-child .file').attr('id');
        var number = /[^0-9]/g;
        var number2 = id.replace(number, "");
        var i = parseInt(number2)+parseInt(1);

        var data = '';

        data += '<div class="menu vt_top">'
        data += '<input type="file" name="menu' + i + '" id="menu' + i + '" class="file menu_th" onchange="read_menu(this)">'
        data += '<label for="menu' + i + '" class="img_area">'
        data += '<div class="grid">'
        data += '<span class="no_txt t' + i + ' on">NO IMG</span>'
        data += '<img src="" alt="img" id="thumb' + i + '">'
        data += '</div>'
        data += '</label>'
        data += '<div class="txt_area">'
        data += '<input type="text" name="name' + i + '" id="name' + i + '" class="input" placeholder="메뉴 이름">'
        data += '</div>'
        data += '<button type="button" class="del_btn">'
        data += '<img src="img/delete.png" alt="삭제">'
        data += '</button>'
        data += '</div>'

        $('#write_food .mymenu_wrap').append(data);

        $('#write_food .del_btn').click(function(){
            if($('#write_food .menu').length > 1){
                if(confirm("메뉴를 삭제하시겠습니까?")){
                    $(this).parent('.menu').remove();
                }
            }
        });
        
    });

    $('#write_food .del_btn').click(function(){
        if($('#write_food .menu').length > 1){
            if(confirm("메뉴를 삭제하시겠습니까?")){
                $(this).parent('.menu').remove();
            }
        }
    });


    $('#write_food #location_1').change(function(){

        $('.select#location_2').removeClass('on');
        $('.select#location_2').val('default');

        if($(this).val() == 'loc1_1'){
            $('.opt1').addClass('on');

        }else if($(this).val() == 'loc1_2'){
            $('.opt2').addClass('on');

        }else if($(this).val() == 'loc1_3'){
            $('.opt3').addClass('on');
        }
    });

    $('#write_food input[name="day"]').change(function(){
        if($(this).is(":checked")){
            $(this).parent().next().children('.time').prop("disabled", false);
        }else{
            $(this).parent().next().children('.time').prop("disabled", true);
            $(this).parent().next().children('.time').val("");
        }
    });



    $('#join #all_ck').change(function(){
        if($(this).is(":checked")){
            $('#join #term1').prop("checked", true);
            $('#join #term2').prop("checked", true);

        }else{
            $('#join #term1').prop("checked", false);
            $('#join #term2').prop("checked", false);
        }
    });
    $('#join #term1, #join #term2').change(function(){
        var length = $('#join input[name="term"]').length
        var length_ck = $('#join input[name="term"]:checked').length

        if(length == length_ck){
            $('#join #all_ck').prop("checked", true);
        }else{
            $('#join #all_ck').prop("checked", false);
        }
    });
    $('#join .f_btns').click(function(){
        if($(this).hasClass('btn1')) { //회원가입(약관) 취소
            history.go(-1);

        }else if($(this).hasClass('btn2')) { //회원가입(약관) 다음
            if($('#join #term1').prop("checked") && $('#join #term2').prop("checked")){
                $('#join .step').removeClass('on');
                $('#join .st2').addClass('on');

                $('#join .f_tab').removeClass('on');
                $('#join .ft2').addClass('on');

            }else{
                alert("필수 약관에 동의해주세요");
            }

        }else if($(this).hasClass('btn3')) { //회원가입(정보) 취소
            $('#join .step').removeClass('on');
            $('#join .st1').addClass('on');

            $('#join .f_tab').removeClass('on');
            $('#join .ft1').addClass('on');

        }else if($(this).hasClass('btn4')) { //회원가입(정보) 회원가입
            var id = $('#join #user_id').val();
            var pw = $('#join #user_pw').val();
            var pw2 = $('#join #user_pw2').val();
            var name = $('#join #user_name').val();
            var phone = $('#join #user_phone').val();

            if(!id) {
                alert("아이디를 입력해주세요.");
                return;
            }
            if(!pw) {
                alert("비밀번호를 입력해주세요.");
                return;
            }
            if(!pw2) {
                alert("비밀번호를 다시 한번 입력해주세요.");
                return;
            }
            if(pw != pw2) {
                alert("비밀번호가 일치하지 않습니다.");
                return;
            }
            if(!name) {
                alert("이름을 입력해주세요.");
                return;
            }
            if(!phone) {
                alert("연락처를 입력해주세요.");
                return;
            }

            location.href='join_ok.html';

        }
    });


    $('#login .btns').click(function(){
        if($(this).hasClass('login')){
            location.href='index.html';

        }else if($(this).hasClass('join')) {
            location.href='join.html';
        }
    });


    var playW = $('#play .playbox').innerWidth();
    $('#play .playbox').css({'height': playW + 'px'});
    $('#play .playbox .img').css({'width': playW + 'px', 'height': playW + 'px'});

    $(window).resize(function(){
        var playW_re = $('#play .playbox').innerWidth();

        $('#play .playbox').css({'height': playW_re + 'px'});
        $('#play .playbox').css({'height': playW_re + 'px'});
        $('#play .playbox .img').css({'width': playW_re + 'px', 'height': playW_re + 'px'});
    });

    $('#play .playbox').mouseenter(function(){
        $(this).children('.black_bg').fadeIn(300);
    });
    $('#play .playbox').mouseleave(function(){
        $(this).children('.black_bg').fadeOut(300);
    });

    var swiper = new Swiper(".p_swiper", {
        slidesPerView : 1,
        spaceBetween : 0,
        loop: true, 
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation:{
            nextEl:".next_btn",
            prevEl:".prev_btn",
        },
    });

    var ps_W = $('.p_swiper').innerWidth();
    var ps_H = $('.p_swiper').innerHeight();

    $('.p_swiper .p_li img').css({'width': ps_W + 'px', 'height': ps_H + 'px'});

    $(window).resize(function(){
        var psW_re = $('.p_swiper').innerWidth();
        var psH_re = $('.p_swiper').innerHeight();
        
        $('.p_swiper .p_li img').css({'width': psW_re + 'px', 'height': psH_re + 'px'});
    });



});


function read_logo(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
        document.getElementById('logo_thumb').src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}
function read_myimg(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
        document.getElementById('thumb').src = e.target.result;

        $('#thumb').removeClass('empty');
        };
        reader.readAsDataURL(input.files[0]);
    }
}