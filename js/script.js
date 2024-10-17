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
                    
                    $(this).find('.line1').css({'animation':'lineup 1s 1.5s'});
                    $(this).find('.line2').css({'animation':'lineright 1s 1.5s'});
                    $(this).find('.infinite').css({'animation': 'rotate 10s infinite linear'});

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

    $('#faq .f_cate').click(function(){
        $('#faq .f_cate').removeClass('on');
        $(this).addClass('on');

        $('#faq .tab').removeClass('on');
        $('#faq .tab').eq($(this).index()).addClass('on');

        //초기화
        $('#faq .list .l_top').data('willOpen', true);
        $('#faq .list .l_bot').slideUp(300);
        $('#faq .list .l_top .arrow img').removeClass('on');

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



    if(winW <= 960) {
        $('#mypage .my_left').slideUp(0);
        $('#mypage .my_h1').addClass('clickable');

    }else{
        $('#mypage .my_left').slideDown(0);
        $('#mypage .my_h1').removeClass('clickable');
    }

    $('#mypage .my_h1').each(function(data,index){
        $('#mypage .my_h1').data('menuOpen', true);
    });

    $('#mypage .my_h1').click(function(){
        if($(this).data('menuOpen') && $(this).hasClass('clickable')){
            $(this).data('menuOpen', false);
            $('#mypage .my_left').stop().slideDown(300);
            $(this).children('.arrow').css({'transform': 'rotate(-90deg)'});
        
        }else if($(this).data('menuOpen') == false) {
            $(this).data('menuOpen', true);
            $('#mypage .my_left').stop().slideUp(300);
            $(this).children('.arrow').css({'transform': 'rotate(90deg)'});
        }
    });


    $(window).resize(function(){
        var win_reW = $(window).innerWidth();

        if(win_reW <= 960) {
            $('#mypage .my_h1').addClass('clickable');
            $('#mypage .my_left').stop().slideUp(0);
            $('#mypage .my_h1').data('menuOpen', true);
            $('#mypage .my_h1 .arrow').css({'transform': 'rotate(90deg)'});
            
        }else{
            $('#mypage .my_h1').removeClass('clickable');
            $('#mypage .my_left').slideDown(0);
            $('#mypage .my_h1').data('menuOpen', false);
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

    $('#join #user_id').change(function(){
        $(this).siblings('.sub').addClass('on');
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


    $('#play_detail').addClass('on');

    var ps_W = $('.p_swiper').innerWidth();
    var ps_H = $('.p_swiper').innerHeight();

    $('.p_swiper .p_li img').css({'width': ps_W + 'px', 'height': ps_H + 'px'});

    $(window).resize(function(){
        var psW_re = $('.p_swiper').innerWidth();
        var psH_re = $('.p_swiper').innerHeight();
        
        $('.p_swiper .p_li img').css({'width': psW_re + 'px', 'height': psH_re + 'px'});
    });

    $('#play_detail').removeClass('on');


    $('#play .playbox').click(function(){
        $('#play_detail').fadeIn(300);
    });

    $('.pop .close_btn, .pop .black_bg').click(function(){
        $('.pop').fadeOut(300);
    });

    $('#play_detail .r_li').click(function(){
        $('#play_detail .r_li').removeClass('on');
        $(this).addClass('on');

        $('#play_detail .tab').removeClass('on');
        $('#play_detail .tab').eq($(this).index()).addClass('on');
    });

    $('#play_detail .rp_wrap .btns').click(function(){
        if($(this).hasClass('edit')){
            var reple = $(this).parent().siblings().children('p').text();

            $('#play_detail #reple_write').val(reple);

        }else if($(this).hasClass('del')){
            if(confirm("댓글을 삭제하시겠습니까?")) {
                location.href='play.html';
            }
        }
    });


    $('#mypage .f_li').click(function(){
        $('#mypage .f_li').removeClass('on');
        $(this).addClass('on');

        $('.my_contents .box_wrap .box').removeClass('on');

        if($(this).index() == '0') {
            $('.my_contents .box_wrap .box').addClass('on');

        }else if($(this).index() == '1') {
            $('.my_contents .box_wrap .my_upload').addClass('on');

        }else {
            $('.my_contents .box_wrap .my_book').addClass('on');
        }
    });

    $('#mypage .box .del_btn').click(function(){
        if(confirm("삭제하시겠습니까?")){
            location.href='';
        }
    });


    $('#restaurant_sub .menu_li .img_area').click(function(){
        var src = $(this).find('img').attr('src');

        $('#img_view').fadeIn(300);
        $('#img_view #preview').attr('src', src);
    });


    $('#chat .chatbox img').click(function(){
        var src = $(this).attr('src');

        $('#img_view').fadeIn(300);
        $('#img_view #preview').attr('src', src);
    });

    $('#chat .send_btn').click(function(){
        var chat = $('#newchat').val();

        if(!chat){
            alert("채팅 내용을 입력해주세요.");

        }else{
            var chatbox = '';

            chatbox += '<div class="chatbox my">';
            chatbox += '<div class="text vt_top">';
            chatbox += '<p>' + chat + '</p>';
            chatbox += '</div>';
            chatbox += '</div>';

            $('#chat .scroll_area').append(chatbox);

            $('#newchat').val('');

            //입력하면 밑으로
            var scr = $('#chat .scroll_area').prop('scrollHeight');
            $('#chat .chat_area').scrollTop(scr)
            
        }
    });

    $('.go_chat').click(function(){
        if(winW > 960) {
            location.href='chat.html';
        }else{
            location.href='chat_mob.html';
        }
    });

    $(window).resize(function(){
        var winW_re = $(window).innerWidth();

        $('.go_chat').click(function(){
            if(winW_re < 960) {
                location.href='chat.html';
            }else{
                location.href='chat_mob.html';
            }
        });
    });


    $('#infochange #user_nick').change(function(){
        $(this).siblings('.sub').addClass('on');
    });


    $('#chat_mob .ch_block').click(function(){
        location.href='chat.html';
    });

    $('#infochange .f_btns').click(function(){
        if($(this).hasClass('btn1')){
            history.go(-1);

        }else if($(this).hasClass('btn2')){
            var nick = $('#infochange #user_nick').val();
            var id = $('#infochange #user_id').val();
            var pw = $('#infochange #user_pw').val();
            var pw2 = $('#infochange #user_pw2').val();
            var name = $('#infochange #user_name').val();
            var phone = $('#infochange #user_phone').val();

            if(!nick) {
                alert("닉네임을 입력해주세요.");
                return;
            }
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

            location.href='mypage.html';
        }
    });


    $('#mypage .q_table .td').click(function(){
        if($(this).parent().hasClass('ans')){
            location.href='mypage_inquiry_sub.html';

        }else{
            location.href='mypage_inquiry_sub2.html';
        }
    });


    $('#my_restaurant .more_btn').click(function(){
        location.href='mypage_food.html';
    });
    $('#my_restaurant .btn1').click(function(){
        location.href='restaurant_sub.html';
    });
    $('#my_restaurant .btn2').click(function(){
        location.href='mypage_food_write.html';
    });


    $('#my_play .more_btn').click(function(){
        location.href='mypage_play.html';
    });
    $('#my_play .btn1').click(function(){
        location.href='play.html';
    });
    $('#my_play .btn2').click(function(){
        location.href='mypage_play_write.html';
    });


    $('#my_estate .more_btn').click(function(){
        location.href='mypage_estate.html';
    });
    $('#my_estate .btn1').click(function(){
        location.href='estate_sub.html';
    });
    $('#my_estate .btn2').click(function(){
        location.href='mypage_estate_write.html';
    });


    $('#my_inquiry .more_btn').click(function(){
        location.href='mypage_inquiry.html';
    });


    $('.showhide').each(function(data,index){
        $('.showhide').data("willshow", true);
    });

    $('.showhide').click(function(){
        if($(this).data("willshow")){
            $(this).data("willshow", false);
            $(this).children("#show").removeClass("on");
            $(this).children("#hide").addClass("on");
            $(this).prev(".input").attr("type", "text");

        }else {
            $(this).data("willshow", true);
            $(this).children("#show").addClass("on");
            $(this).children("#hide").removeClass("on");
            $(this).prev(".input").attr("type", "password");
        }
    });

    $('input[type="date"]').change(function(){
        $(this).addClass('show');
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

        $('.no_txt').removeClass('on');
        $('.img').addClass('on');
        };
        reader.readAsDataURL(input.files[0]);
    }
}
function read_menu(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
        document.getElementById('thumb1').src = e.target.result;

        $('#thumb1').addClass('on');
        $('.no_txt').removeClass('on')
        };
        reader.readAsDataURL(input.files[0]);
    }
}
function read_newimg(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var chatbox = '';

            chatbox += '<div class="chatbox my">';
            chatbox += '<div class="text vt_top">';
            chatbox += '<img src="' + e.target.result + '">';
            chatbox += '</div>';
            chatbox += '</div>';

            $('#chat .scroll_area').append(chatbox);

            $('#chat .chatbox img').click(function(){
                var src = $(this).attr('src');
        
                $('#img_view').fadeIn(300);
                $('#img_view #preview').attr('src', src);
            });
        };
        reader.readAsDataURL(input.files[0]);
    }
}