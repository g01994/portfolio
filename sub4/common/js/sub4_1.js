$(document).ready(function(){
    var cnt=$('.sub_list li').size();  // 탭메뉴 총 개수

    // 최초 상황
    $('.tab').show('.tab1');
    $('.sub_list li:eq(0)').addClass('current');
    
    $('.sub_list li a').click(function(e){
      e.preventDefault();

      var ind1 = $(this).index('.sub_list li a');
      console.log(ind1);
    });
    
    // $('.sub_list li a').click(function (index){  
    //     $(this).click(function(e){  // 각각의 탭메뉴를 클릭 시
    //       e.preventDefault();

    //       $('.tab .tab:eq('+index+')').css('display','block');
    //       $('.tab .tab:eq('+index+')').hide(); 
    //       //$(".tab .tab:eq("+index+")").show(); // 해당 탭 open
    //       $('.tab .tab:eq('+index+')').fadeIn('slow');
    //       $('.sub_list li').removeClass('current') //모든 탭메뉴를 비활성화
    //       $(this).addClass('current'); // 클릭한 해당 탭메뉴만 활성화
    //     });

});

