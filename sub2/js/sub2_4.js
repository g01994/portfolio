// 팝업 

// 객체 배열 생성 (dd)
var nation_pop = [
    {sub1:'3개', sub2:'25개', sub3:'3,969개'}, // 미국
    {sub1:'96개', sub2:'815개', sub3:'108,575개'}, // 튀르키예
    {sub1:'9개', sub2:'28개', sub3:'4,925개'}, // 미얀마
    {sub1:'69개', sub2:'401개', sub3:'68,442개'}, // 인도네시아
    {sub1:'82개', sub2:'480개', sub3:'61,620개'}, // 베트남
    {sub1:'146개', sub2:'1,165개', sub3:'189,930개'}, // 중국
    {sub1:'193개', sub2:'1,355개', sub3:'199,602개'}]; // 한국

// 객체 배열 생셩 (팝업 노출 위치)
var pstn=[
    {right1:'915',top1:'120'},
    {right1:'365',top1:'108'},
    {right1:'130',top1:'180'},
    {right1:'60',top1:'270'},
    {right1:'40',top1:'155'},
    {right1:'95',top1:'140'},
    {right1:'0',top1:'110'}
];    
// 변수 값
var indList = 0; // 전역변수, 인덱스 
var txtDl = ''; // dl태그 생성 
var totalList = $('.nation_map .nation_list').size(); // 콘텐츠 총 개수(div 기준)
// var totalList = nation_pop.length; // 콘텐츠 총 개수(객체배열 기준)

// popup 노출 시 출력 내용 입력
function popchange(){
    txtDl = '';

    txtDl+='<dl>';
    txtDl+='<dt>- 극장 : </dt>';
    txtDl+='<dd>'+nation_pop[indList].sub1+'</dd>';
    txtDl+='</dl>';

    txtDl+='<dl>';
    txtDl+='<dt>- 스크린 : </dt>';
    txtDl+='<dd>'+nation_pop[indList].sub2+'</dd>';
    txtDl+='</dl>';

    txtDl+='<dl>';
    txtDl+='<dt>- 좌석 : </dt>';
    txtDl+='<dd>'+nation_pop[indList].sub3+'</dd>';
    txtDl+='</dl>';

    $('.popup_list .popup').html(txtDl); // 태그 생성
};

// a태그 클릭 시 팝업 노출
$('.nation_list a').click(function(e){
    e.preventDefault();
    indList = $(this).index('.nation_list a');  // 0 ~ 6

    popchange(); // dl태그 생성 함수 호출

    $('.info .popup_list').hide().fadeIn('slow');
    $('.info .popup_list').css({
        'right': pstn[indList].right1+'px' ,
        'top': pstn[indList].top1+'px'
    });

    // 오버 효과 노출
    $('.nation_list a img').removeClass('hoverEffect1');
    $('.nation_list a img:eq('+indList+')').addClass('hoverEffect1');

    $('.info .nation_list a span').removeClass('hoverEffect2');
    $('.info .nation_list a span:eq('+indList+')').addClass('hoverEffect2');
    
});

// 닫기 버튼 클릭 시 close
$('.close_btn').click(function(e){
    e.preventDefault();
    $('.info .popup_list').fadeOut('fast')

    $('.nation_map .nation_list a img').removeClass('hoverEffect1');
    $('.info .nation_list a span').removeClass('hoverEffect2');
});
