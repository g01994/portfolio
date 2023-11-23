$(document).ready(function(){
    // 객체 배열에 큰 이미지 담기
    var largeImg = [
        {imgsrc: 'popcorn_cinema.jpg'},
        {imgsrc: 'cine_pub.jpg'},
        {imgsrc: 'cine_cafe.jpg'},
        {imgsrc: 'go_pizza.jpg'}
      ];

    $('.food_beverage .small_img a:eq(0)').css('filter','grayscale(0)');
      
    $('.food_beverage .small_img a').click(function(e){
        e.preventDefault();
      
        // 인덱스
        var ind = $(this).index('.food_beverage .small_img a');

        // 확대 이미지 교체
       $('.food_beverage .large_img img').attr('src','./images/content2/'+largeImg[ind].imgsrc).hide().fadeIn('slow'); // 없앴다가 다시 나오는 효과이기 때문에 .hide 써줌

        $('.food_beverage .small_img a').css('filter','grayscale(1)'); // 비활성화
        $('.food_beverage .small_img a:eq('+ind+')').css('filter','grayscale(0)'); // 활성화 
    });
  });
  
  