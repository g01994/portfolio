$(document).ready(function() {

    var timeonoff; // 타이머 처리
    var imageCount=$('.gallery ul li').size(); // 이미지 총 개수
    var cnt=1; // 이미지 순서
    var onoff=true; // true:타이머 동작중 , false:동작하지 않을때
    
    // 처음 노출 상태
    // 버튼
    //$('.btn1').css('background','#da281c'); 
    $('.btn1').addClass('on');
    $('.btn1').css('width','160px'); 
    
    // 이미지
    $('.gallery .link1').fadeIn('normal'); 
    $('.gallery .link1 span').delay(1000).animate({top:680, opacity:1},'slow');
    $('.gallery .link1 p').delay(1500).animate({top:780, opacity:1},'slow');

 
    function moveg(){
      if(cnt==imageCount+1)cnt=1;
      if(cnt==imageCount)cnt=0; // 카운트 초기화
      cnt++; 
     
      $('.gallery li').hide(); 
      $('.gallery .link'+cnt).fadeIn('normal'); 
	 		                    
      $('.mbutton').css('background','rgba(255, 255, 255, .7)'); // 전체 버튼 off
      $('.mbutton').css('width','80px'); // 버튼 원래의 너비
      //$('.btn'+cnt).css('background','#da281c'); // 해당 버튼 on
      $('.mbutton').removeClass('on');
      $('.btn'+cnt).addClass('on');
      $('.btn'+cnt).css('width','160px');

      $('.gallery li span').css('top',700).css('opacity',0); //텍스트의 초기화
      $('.gallery li p').css('top',800).css('opacity',0);
      $('.gallery .link'+cnt).find('span').delay(1000).animate({top:680, opacity:1},'slow');
      $('.gallery .link'+cnt).find('p').delay(1500).animate({top:780, opacity:1},'slow');

      if(cnt==imageCount)cnt=0;  //카운트의 초기화 0
    }
     
    timeonoff= setInterval( moveg , 5000); // 타이머 자동 동작

      // 각각의 버튼 클릭 시 
      $('.mbutton').click(function(event){ 
	      var $target=$(event.target); // 클릭한 버튼 $target == $(this)
        clearInterval(timeonoff); // 타이머 중지     
	 
	    $('.gallery li').hide(); // 전체 이미지 off
		  if($target.is('.btn1')){  
				 cnt=1;  
		  }else if($target.is('.btn2')){  
				 cnt=2; 
		  }else if($target.is('.btn3')){ 
				 cnt=3; 
		  } 

		  $('.gallery .link'+cnt).fadeIn('normal');  // 해당 이미지 on
		  
      $('.mbutton').css('background','rgba(255, 255, 255, .7)'); // 전체 버튼 off
      $('.mbutton').css('width','80px');
      //$('.btn'+cnt).css('background','#da281c'); // 해당 버튼 on
      $('.mbutton').removeClass('on');
      $('.btn'+cnt).addClass('on');
      $('.btn'+cnt).css('width','160px');
      
      $('.gallery li span').css('top',700).css('opacity',0);
      $('.gallery li p').css('top',800).css('opacity',0);
      $('.gallery .link'+cnt).find('span').delay(1000).animate({top:680, opacity:1},'slow');
      $('.gallery .link'+cnt).find('p').delay(1500).animate({top:780, opacity:1},'slow');

      if(cnt==imageCount)cnt=0;  //카운트 초기화
     
      timeonoff= setInterval( moveg , 5000); // 타이머 재동작
    
      // 타이머 동작 시 중지 상태일 경우
      if(onoff==false){ // 중지
          onoff=true; //동작
          $('.ps').html('<span class="hidden">stop</span><i class="fa-solid fa-pause"></i>');
      }
    });

	  // stop,play 버튼 클릭시 타이머 동작/중지
    $('.ps').click(function(){ 
    
     if(onoff==true){ // 타이머 동작
	       clearInterval(timeonoff); 
		     $(this).html('<span class="hidden">play</span><i class="fa-solid fa-play"></i>'); 
         onoff=false;   
	   }else{  // false 타이머 중지
		   timeonoff= setInterval( moveg , 5000); 
		   $(this).html('<span class="hidden">stop</span><i class="fa-solid fa-pause"></i>');
		   onoff=true; 
	    }
    });	

    // 왼쪽/오른쪽 버튼 처리
    $('.visual .dock .btnDock .lrbtn').click(function(){

      clearInterval(timeonoff); 
      
      if($(this).is('.btnRight')){ // 오른쪽 버튼 클릭
          if(cnt==imageCount)cnt=0;  //카운트가 마지막 번호(5)라면 초기화 0
          cnt++;
      }else if($(this).is('.btnLeft')){   // 왼쪽 버튼 클릭
          if(cnt==1)cnt=imageCount+1;   // 1->4 이동 시 최초로 이동
          if(cnt==0)cnt=imageCount; 
          cnt--; 
      }

    $('.gallery li').hide(); // 모든 이미지 off
    $('.gallery .link'+cnt).fadeIn('normal'); // 해당 이미지 on
                        
    $('.mbutton').css('background','rgba(255, 255, 255, .7)'); // 전체 버튼 off
    $('.mbutton').css('width','80px');
    //$('.btn'+cnt).css('background','#da281c'); // 해당 버튼 on 
    $('.mbutton').removeClass('on');
    $('.btn'+cnt).addClass('on');
    $('.btn'+cnt).css('width','160px');

    $('.gallery li span').css('top',700).css('opacity',0);
    $('.gallery li p').css('top',800).css('opacity',0);
    $('.gallery .link'+cnt).find('span').delay(1000).animate({top:680, opacity:1},'slow');
    $('.gallery .link'+cnt).find('p').delay(1500).animate({top:780, opacity:1},'slow');

    timeonoff= setInterval( moveg , 5000); // 타이머 동작

    // 타이머 동작 시 중지 상태일 경우
    if(onoff==false){ //중지
      onoff=true; // 동작
      $('.ps').html('<span class="hidden">stop</span><i class="fa-solid fa-pause"></i>');
    }
  });

  
});




