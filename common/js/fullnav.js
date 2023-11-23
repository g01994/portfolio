
$(document).ready(function() { //생략 가능
 
    //헤더 네비게이션 영역
    var smh=$('.visual').height();  // 비주얼 이미지 높이 리턴
    var on_off=false;  //false(안오버),true(오버)
   
    //헤더 영역에 마우스 올렸/내렸을 때 
       $('#headerArea').mouseenter(function(){
           $(this).css('background','rgba(0, 0, 0, .9)');
           on_off=true;
       });
   
      $('#headerArea').mouseleave(function(){
           var scroll = $(window).scrollTop(); //스크롤 거리 발생 시
           
           if(scroll<smh-60){
               $(this).css('background','none').css('border-bottom','none'); 
           }else{
               $(this).css('background','rgba(0, 0, 0, .9)'); 
           }
          on_off=false;    
      });
   
      $(window).on('scroll',function(){ 
           var scroll = $(window).scrollTop(); //스크롤 탑 발생 시

           if(scroll>smh-60){
               $('#headerArea').css('background','rgba(0, 0, 0, .9)')
               .css('border-bottom','1px solid #ccc');
           }else{ //스크롤 내리기 전 기본 값
              if(on_off==false){ 
                   $('#headerArea').css('background','none').css('border-bottom','none');
              }
           }; 
           
        });


    $('#gnb').hover(
       function() { 
          $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();}); 
          $('#headerArea').animate({height:230},'fast').clearQueue();
          $('#gnb a.bottom_menu').animate({"top":"190px"},'3000').clearQueue();
          $('#gnb a.bottom_menu').fadeIn('slow');
       },function() {
          $('ul.dropdownmenu li.menu ul').hide(); 
          $('#headerArea').animate({height:80},'fast').clearQueue();
          $('#gnb a.bottom_menu').animate({"top":"80px"},'3000').clearQueue();
          $('#gnb a.bottom_menu').fadeOut('fast');
     });

     //tab 처리
     $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
        $('ul.dropdownmenu li.menu ul').slideDown('normal');
        $('#headerArea').css('background','rgba(0, 0, 0, .9)')
        $('#headerArea').animate({height:230},'fast').clearQueue();
        $('#gnb a.bottom_menu').animate({"top":"190px"},'3000').clearQueue();
     });

    $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
        $('ul.dropdownmenu li.menu ul').slideUp('fast');
        $('#headerArea').css('background','rgba(0, 0, 0, .9)')
        $('#headerArea').animate({height:80},'normal').clearQueue();
        $('#gnb a.bottom_menu').animate({"top":"80px"},'3000').clearQueue();
    });

    //푸터 패밀리 사이트
    //버튼 클릭 시 
    $('.family .family_btn a').toggle(function(e){
        e.preventDefault();
        $('.family .family_list').slideDown('slow');
        $('.family .family_btn a').children('span').html('<span class="material-symbols-rounded">remove</span>')
    }, function(){
        $('.family .family_list').slideUp('fast');
        $('.family .family_btn a').children('span').html('<span class="material-symbols-rounded">add</span>')
    });
    // tab 키 처리
    $('.family .family_btn a').on('focus', function(){
        $('.family .family_list').fadeIn('slow');
    });
    $('.family .family_list li:last dl dd').on('blur', function(){
        $('.family .family_list').fadeOut('fast');
    });

    //상단이동 메뉴 스크롤 처리
    $(window).on('scroll',function(){ 
        var scroll = $(window).scrollTop(); 
    
        if(scroll>1500){ 
            $('.top_move').fadeIn('slow'); 
        }else{
            $('.top_move').fadeOut('fast');
        }
    });

    $('.top_move').click(function(e){
        e.preventDefault();
        $("html,body").stop().animate({"scrollTop":0},1000);
    });
});
