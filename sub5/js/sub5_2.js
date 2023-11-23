$(document).ready(function(){
    /* work 영역 (마우스 오버 시 효과) */
    $('#content .work ul li:eq(1)').addClass('lihover'); 


    $('#content .work ul li').each(function (index) {  // index=0 1 2 3
        $(this).mouseover(function(e){  //각각의 탭메뉴를 마우스 오버하면... 
            e.preventDefault();  
    
            $('.work ul li').removeClass('lihover'); //모두 비활성화
  
            $(this).addClass('lihover'); // 클릭한 해당 탭메뉴만 활성화
          });
      });
    })