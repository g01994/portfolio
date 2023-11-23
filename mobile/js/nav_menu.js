$(document).ready(function() {
   var op = false;  // 네비가 열려있으면(true) , 닫혀있으면(false)
 	
   $(".menu_ham").click(function(e) { // 메뉴 버튼 클릭시
      e.preventDefault();
       
      var documentHeight =  $(document).height();
      $("#gnb").css('height',documentHeight); 
      // #gnb 높이를 전체 페이지 높이와 동일하게 설정

      if(op==false){ // 처음 닫힌 상태에서 클릭 시 
        $("#gnb").animate({left: 0,opacity: 1}, 'fast'); // 메뉴 노출
        $('#headerArea').addClass('mn_open'); // x 교체
        op=true; // 위 상태가 모두 열린 상태
        $('#headerArea .box').show();
      }else{
        $("#gnb").animate({left:'-100%',opacity: 0}, 'fast');
        $('#headerArea').removeClass('mn_open');
        op=false;
        $('#headerArea .box').hide();
      }
   });
   
    //2depth 메뉴 교대로 열기 (하단의 배열로 처리 > 인덱스로 처리)
    var onoff=[false,false,false,false]; 
    // 각각의 1뎁스 메뉴의 열림(true)/닫힘(false)을 잡을 변수
    var arrcount=onoff.length; 
    // 총 4개 개수 담기
    
    $('#gnb .depth1 h3 a').click(function(e){
        e.preventDefault();
        var ind=$(this).parents('.depth1').index(); 
        // var ind=$(this).index('#gnb .depth1 h3 a'); 
        // console.log(ind);
        
       if(onoff[ind]==false){ // 클릭한 1depth 메뉴의 상태가 닫혀있을 경우 (false)
        //$('#gnb .depth1 ul').hide();
        $(this).parents('.depth1').find('ul').slideDown('slow'); // 해당 서브 메뉴 열기
        $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast'); 
        // 클릭한 메뉴 외에 모든 형제를 다 닫음
        for(var i=0; i<arrcount; i++) onoff[i]=false; // 모든 배열 상태를 false 상태로 만들기
        onoff[ind]=true; // 클릭한 해당 1depth 메뉴의 상태를 true로 바꿔주기
           
        $('.depth1 span').text('expand_more'); // 모두 + 처리
        $(this).find('span').text('expand_less'); // 클릭한 해당 메뉴에만 - 처리
        // 태그를 통해 변경 시에는 .text > .html
            
       }else{ // 클릭한 1depth 메뉴의 상태가 열려있을 경우 (true)
        $(this).parents('.depth1').find('ul').slideUp('fast'); // 클릭한 메뉴만 닫히기
        onoff[ind]=false; // 해당 메뉴만 false 처리 
           
        $(this).find('span').text('expand_more'); // 해당 메뉴만 + 처리
         // 태그를 통해 변경 시에는 .text > .html
       }
    });    

    // 스크롤 처리 (비주얼 이미지 아래로 내려갈 시 gnb 색상 교체)
    var visual_height = $('.visual').height()-60; 
    // 비주얼 이미지 높이 담기
    // -80 == gnb 높이 빼기

    $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
      var scroll = $(window).scrollTop(); //스크롤의 거리

      if(scroll>visual_height){ //950이상의 거리가 발생되면
          $('#headerArea').css('background','rgba(34,34,34,1)');  // 배경색 바꾸기
      }else{
          $('#headerArea').css('background','rgba(34,34,34,0)'); // 기존 배경색으로 교체
      }
    });
  
  });

//상단이동 메뉴 스크롤 처리
$(window).on('scroll',function(){ 
  var scroll = $(window).scrollTop(); 

  if(scroll>400){ 
      $('.topMove').fadeIn('slow'); 
  }else{
      $('.topMove').fadeOut('fast');
  }
});

$('.topMove').click(function(e){
  e.preventDefault();
  $("html,body").stop().animate({"scrollTop":0},1000);
});


