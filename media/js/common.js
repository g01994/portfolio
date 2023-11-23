// 헤더 변경
window.addEventListener('scroll', function() {
  var screenHeight = $(window).height();
  var screenSize = $(window).width();

  var scroll = window.scrollY;

  if (scroll >= screenHeight) {
    headerArea.style.backgroundColor = 'rgba(0, 0, 0, .9)';
  } else {
    headerArea.style.backgroundColor = 'transparent';
  }
});

// 햄버거 메뉴 
$(document).ready(function() {
  $(".menuOpen").toggle(function() {
    $("#headerArea").addClass('menuCurrent');
    $("#gnb").slideDown('slow');
  }, function() {
    $("#gnb").slideUp('fast');
    $("#headerArea").removeClass('menuCurrent');
  });

  var current=0;
  $(window).resize(function(){ 
    var screenSize = $(window).width(); 
    if( screenSize > 768){
      $(".menuOpen").hide();
      $("#gnb").show();
      current=1;
    }
    if(current==1 && screenSize < 768){
      $(".menuOpen").show();
      $("#gnb").hide();
      current=0;
    }
  }); 
   
 });

//스크롤 이동시 나타나는 top
$(window).on('scroll',function(){ 
  var scroll = $(window).scrollTop(); 

  if(scroll>1000){ 
      $('.topMove').fadeIn('slow'); 
  }else{
      $('.topMove').fadeOut('fast');
  }
});  

// top 이동
$('.topMove').click(function(e){
  e.preventDefault();

  $("html,body").stop().animate({"scrollTop":0},1000); 
});