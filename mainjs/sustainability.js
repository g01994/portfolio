// 사업 영역

// 최초 상황 (css로 p, span display:none;, 상단 첫 li만 open)
$('#content .sustainability_inner li:eq(0) h4 a').addClass('current');
$('#content .sustainability_inner li:eq(0) .sub_con').show();

// 변수 값 설정
var timeonoff; // 자동 타이머
var conCount=$('#content .sustainability_inner li').size(); // 콘텐츠 총 개수
var cnt1=1; // 카운트 증가, 감소

// 자동 타이머
function move_con(){
    cnt1++; // 1씩 증가
    // console.log('cnt1');

    if(cnt1==1){
        $('#content .sustainability_inner li h4 a').removeClass('current');
        $('#content .sustainability_inner li .sub_con').slideUp(300);

        $('#content .sustainability_inner li:eq(0) h4 a').addClass('current');
        $('#content .sustainability_inner li:eq(0) .sub_con').slideDown(500);
        $('#content .sustainability_inner .sustainability_img img').attr('src','./images/sustainability_01.jpg');
    }else if(cnt1==2){
        $('#content .sustainability_inner li h4 a').removeClass('current');
        $('#content .sustainability_inner li .sub_con').slideUp(300);

        $('#content .sustainability_inner li:eq(1) h4 a').addClass('current');
        $('#content .sustainability_inner li:eq(1) .sub_con').slideDown(500);
        $('#content .sustainability_inner .sustainability_img img').attr('src','./images/sustainability_02.jpg');
    }else if(cnt1==3){
        $('#content .sustainability_inner li h4 a').removeClass('current');
        $('#content .sustainability_inner li .sub_con').slideUp(300);

        $('#content .sustainability_inner li:eq(2) h4 a').addClass('current');
        $('#content .sustainability_inner li:eq(2) .sub_con').slideDown(500);
        $('#content .sustainability_inner .sustainability_img img').attr('src','./images/sustainability_03.jpg');
    }else if(cnt1==4){
        $('#content .sustainability_inner li h4 a').removeClass('current');
        $('#content .sustainability_inner li .sub_con').slideUp(300);

        $('#content .sustainability_inner li:eq(3) h4 a').addClass('current');
        $('#content .sustainability_inner li:eq(3) .sub_con').slideDown(500);
        $('#content .sustainability_inner .sustainability_img img').attr('src','./images/sustainability_04.jpg');
    }
    if(cnt1==conCount)cnt1=0; // 자동 롤링 (값 미입력 시 오류 발생)
    // if(cnt1==conCount)clearInterval(timeonoff); // 1회 롤링 후 중단
};
    timeonoff= setInterval(move_con, 4000);

// 마우스 클릭 시 
$('#content .sustainability_inner li h4 a').click(function(e){
    e.preventDefault();
    clearInterval(timeonoff);

    indCon = $(this).index('#content .sustainability_inner li h4 a'); // 인덱스
    // var 없이 전역변수로 입력, 추후 지역변수로 활용 예정 시 var 입력 후 상단에 입력

    $('#content .sustainability_inner li h4 a').removeClass('current');
    $('#content .sustainability_inner li .sub_con').hide();

    $('#content .sustainability_inner li:eq('+ (indCon) +') h4 a').addClass('current');
    $('#content .sustainability_inner li:eq('+ (indCon) +') .sub_con').slideDown(500);
    $('#content .sustainability_inner .sustainability_img img').attr('src','./images/sustainability_0'+(indCon+1) +'.jpg');
});
    