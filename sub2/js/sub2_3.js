// space_content 영역
// memo[2].title
var space_con = [
    {title: '피커스', 
    imgsrc: 'peakers.jpg',
    sub: '지난 2022년 1월 CGV피카디리1958의 일부 상영관을 리뉴얼해 탄생한 클라이밍짐 피커스(PEAKERS)는 peak(정상)와 ers(~하는 사람들)의 합성어로, 정상을 오르는 사람들을 의미합니다. 코로나19 이후 건강 및 체력 증진에 대한 관심이 높아진 트렌드에 발 맞춰 CGV의 상영관 시설을 여가 시설로 변화시킨 첫 사례입니다.'},
    {title: '씨네샵', 
    imgsrc: 'cine_shop.jpg',
    sub: '씨네샵은 영화와 관련된 다양한 디자인 상품들을 만날 수 있는 국내 최초 영화 굿즈 스토어입니다. 다양한 영화 캐릭터를 활용한 문구, 잡화, 의류, 디지털 기기 등 다양한 카테고리 상품을 출시하고 있으며, 판매 상품 중 약 70% 이상은 CJ CGV에서 직접 기획/제작한 씨네샵 PB제품들입니다. 영화 외에도 게임, 스포츠, 아이돌 등 다양한 테마의 굿즈를 선보이고 있습니다.'},
    {title: '볼링펍', 
    imgsrc: 'bowling_pub.jpg',
    sub: '볼링펍은 CGV수유, 청주율량에 위치한 프리미엄 볼링장입니다. 레트로 빈티지 디자인으로 고급스러움을 더하였으며, 리버스탭 생맥주, 간편식 스낵, 음료를 함께 즐기실 수 있습니다. 자녀와 함께 방문하는 가족 고객들을 위해 아동용 볼링화, 거터에 공이 빠지지 않게 하는 거터 범퍼, 아동 및 초보자를 위한 미끄럼틀 모양의 볼 가이드 등 다양한 보조 장비도 준비되어 있습니다.'},
    {title: '롤롤', 
    imgsrc: 'lolol.jpg',
    sub: '롤롤은 CGV영등포, 대전, 광교에 위치한 신개념 만화카페입니다. 영화 관람 전이나 후에 친구, 연인, 가족들과 함께 휴식 및 만화와 연계된 다양한 문화 프로그램을 즐길 수 있는 공간입니다. 순정·로맨스, SF·판타지, 액션·무협, 명랑·코믹, 공포·추리, 소설, 키즈, 아트·일러스트 등 13가지 섹션으로 총 1만 6천여 권의 만화가 구비되어 있습니다.'},
    {title: '미션브레이크', 
    imgsrc: 'mission_break.jpg',
    sub: '미션브레이크는 CGV용산아이파크몰과 광주금남로에 위치한 방탈출 테마 체험 공간 입니다. 영화 관람 전후 고객들이 즐길 수 있는 체감형 게임장입니다. 제한된 시간 안에 테마룸과 극장 구석구석 배치된 단서를 활용해 문제를 해결해 나가며, 극장 공간의 즐거움과 긴장감을 함께 체험실 수 있는 공간입니다.'},
];

var ind = 0; // 인덱스 
var total = space_con.length; // 배열 개수

function space_conchange(){ // 방향키 클릭 시 생성되는 태그
    $('.space li img').attr('src','./images/content3/'+space_con[ind].imgsrc).hide().fadeIn('fast');

    $('.space dl dt').text(space_con[ind].title); // 태그 생성
    $('.space dl dd').text(space_con[ind].sub);
}

  $('.space .next').click(function(e){ // 썸네일 버튼 클릭 시
      e.preventDefault();
      
      ind++; 
      space_conchange(); // 입력한 함수 호출 > 그대로 출력
      if(ind==4)ind=-1;
  });