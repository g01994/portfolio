// conNav 영역
// 최초 상황 640 이상
var scrSize

$('.spotlightOn').show();
$('.newReleases, .bestOf').hide();
$('.conNav li:eq(0) a').addClass('tab_a1');
var ind=0;

$('.conNav li').click(function(e){
    e.preventDefault();
    ind = $(this).index();
    // console.log(ind);
    $("#content section").fadeOut('fast');
    $("#content section:eq("+ind+")").fadeIn('slow');
    $('.conNav li a').removeClass();
    $(this).find('a').addClass('tab_a1');
});

// 640 이하
function screen_size2(){
  scrSize = $(window).width();
  var nav_on = false

$('.conav_box>a').click(function(e) {
    e.preventDefault();

    if (nav_on == true) {
        $('.conNav').slideUp('fast');	
        $(this).find('span').text('expand_more');
        nav_on=false;

    } else {
        $('.conNav').slideDown('fast');
        $(this).find('span').text('expand_less')
        nav_on=true;
    }
});

var ins= ['Spotlight On', 'New Releases', 'Best Of']
    $('.conNav li a').on('click', function(e){
        e.preventDefault();
        var ind = $(this).index('.conNav li a');
        //$('.conNav li a').removeClass();

        //$('section').hide();
        //var ind = $(this).index();
        //$('section:eq('+ind+')').show();

      $('.conav_box>a strong').text(ins[ind]);
      $('.conNav').slideUp('fast');
      $('.conav_box>a').find('span').text('expand_more');
      nav_on=false;
    });
  };
  
      if(scrSize <= 640){
        screen_size2();  //최초함수호출
      }

      var onoff2=false; 
      $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
      scrSize = $(window).width();
    
      if(scrSize <= 640 && onoff2==false){
        screen_size2();
        $('.conNav').hide();
        //$('.conNav li a').removeClass();
        onoff2=true;
      }else if(scrSize > 640){
        $('.conNav').show();
        // $('.conNav li a:eq('+ind+')').addClass('tab_a1');
        $('.conNav li a').off('click');
        onoff2=false;
      };
  });