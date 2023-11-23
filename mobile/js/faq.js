$(document).ready(function(){
    var article = $('.qna .article'); // 전체 질문 답변 리스트 

    // 아이콘 추가
    article.find('span').html('<i class="fas fa-chevron-down"></i>'); 

    $('.qna .article:first').find('.answer').slideDown(100);
    $('.qna .article:first').find('span').html('<i class="fas fa-chevron-up"></i>');
    $('.qna .article:first .trigger').addClass('question_color');

    // 각 질문 클릭 시 
    $('.qna .article .trigger').click(function(e){
        e.preventDefault();
        var myArticle = $(this).parents('.article'); // 클릭한 list 

        if(myArticle.hasClass('hide')){ // 리스트 닫혀있는 경우
            article.find('.answer').slideUp(100); // 전체 닫기 
            article.removeClass('show').addClass('hide'); // hide 교체
            article.find('span').html('<i class="fas fa-chevron-down"></i>');
            article.find('.trigger').removeClass('question_color');

            myArticle.removeClass('hide').addClass('show');  // show 교체
            myArticle.find('.answer').slideDown(100); // 리스트 답변 열기
            myArticle.find('span').html('<i class="fas fa-chevron-up"></i>');
            $(this).addClass('question_color');
        } else {  // 'show' 답변이 열려있는 경우
            myArticle.removeClass('show').addClass('hide'); // hide로 교체
            myArticle.find('.answer').slideUp(100); // 리스트 답변 닫기
            myArticle.find('span').html('<i class="fas fa-chevron-down"></i>');
            $(this).removeClass('question_color');
        }
    });

    //모두 여닫기 처리
    $('.qna_all').toggle(function(e){
            e.preventDefault(); 
            article.find('.answer').slideDown(100);
            article.removeClass('hide').addClass('show');
            article.find('span').html('<i class="fas fa-chevron-up"></i>');
            $(this).text('모두닫기');
    },function(e){
            e.preventDefault(); 
            article.find('.answer').slideUp(100);
            article.removeClass('show').addClass('hide');
            article.find('span').html('<i class="fas fa-chevron-down"></i>');
            $(this).text('모두열기');
    });
});