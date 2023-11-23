$(document).ready(function(){
    var cnt=$('.sub_list li').size();  // 탭메뉴 총 개수

    // 최초 상황
    $('.tab').show('.tab1');
    $('.sub_list li:eq(0)').addClass('current');
    
    $('.sub_list li a').click(function(e){
      //debugger;
      e.preventDefault();

      var ind1 = $(this).index('.sub_list li a');
      //console.log(ind1);

      // 탭메뉴 활성화
      $('.sub_list li').removeClass('current') 
      $('.sub_list li:eq('+(ind1)+')').addClass('current'); 
      // 해당 테이블 노출
      $('.tab .tab_com').hide();
      $('.tab li:eq('+(ind1)+')').fadeIn('slow');
    });
});

