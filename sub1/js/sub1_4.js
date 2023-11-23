// 최초 화면 설정
$('.content_menu li:eq(0)').find('a').addClass('current');
$('section.history_list:eq(0)').addClass('boxMove');

var mah = 1300 ; // $('.info').height(); // 상단 도입부 설명글 높이
var h1 = $('.info section:eq(1)').offset().top-800 ; // 2번째 section부터 활성화 
var h2 = $('.info section:eq(2)').offset().top-800 ;

// 스크롤 이벤트
$(window).on('scroll' , function(){
    var scroll = $(window).scrollTop(); // 스크롤 top 좌표 담기
    // $('.text').text(scroll); //스크롤 좌표 값 확인 

    // sticky menu
    if(scroll>mah){ // 스크롤 top 좌표가 도입부 설명글 높이보다 커질 경우
        $('header').hide();
        $('.navBox').addClass('navOn');
        $('.navBox .content_menu a').css('color','#fff');
    }else{
        $('header').show();
        $('.navBox').removeClass('navOn');
        $('.navBox .content_menu a').css('color','#333');
    }


    // scroll spy
    $('.content_menu li').find('a').removeClass('current'); // 전체 비활성화

    if(scroll>=0 &&scroll<h1-150){
        $('.content_menu li:eq(0)').find('a').addClass('current'); // 메뉴 활성화
        $('section.history_list:eq(0)').addClass('boxMove'); // 섹션 애니메이션 추가
    }else if(scroll>=h1 && scroll<h2-150){
        $('.content_menu li:eq(1)').find('a').addClass('current'); 
        $('section.history_list:eq(1)').addClass('boxMove');
    }else if(scroll=h2-150){
        $('.content_menu li:eq(2)').find('a').addClass('current'); 
        $('section.history_list:eq(2)').addClass('boxMove');
    }
});

// 클릭 시 이동 
$('.content_menu li a').click(function(e){
    e.preventDefault();

    var scrollH=0; // 이동할 스크롤 거리

    if($(this).is('.content_menu li:eq(0) a')){ // 첫번째 클릭 시 
        scrollH = $('section.y_2010_now').offset().top; 
        // 해당 콘텐츠 상단 거리, .offset().top; 
    }else if($(this).is('.content_menu li:eq(1) a')){
        scrollH = $('section.y_2000_2009').offset().top;
    }else if($(this).is('.content_menu li:eq(2) a')){
        scrollH = $('section.y_1993_1999').offset().top;
    }

    scrollH-=80 // 최종값 : 상단 거리-80 (자연스러움을 위해)
    $("html,body").stop().animate({"scrollTop":scrollH},1000);
});
