// 사이드메뉴
var slide = $(".menu-contents>li");
slide.click(function(){
    slide.find("ul").slideUp();
    if ($(this).children('ul').is(':hidden')){
       $(this).children('ul').slideDown();
    } else{
       $(this).children('ul').slideUp();
    }
    return false;
 });

$('.menu-box').click(function(){
   $(this).toggleClass('add')
   $('.side-menu').toggleClass('slide')
   $('body').toggleClass('scroll')
})

// 상단메뉴 고정이벤트
var menu = $('.header');
$(window).scroll(function(){
   var wst = $(window).scrollTop();
       if($(".main-slide").offset().top < wst){
           menu.addClass('fix');
       }else{
          menu.removeClass('fix');
       } 
   });
// 맥딜리버리 / 매장찾기 하단메뉴 이벤트
var pScrollTop = 0,
        delta = 10;									// 이벤트를 발생시킬 스크롤의 이동 범위
$(window).scroll(function(){
    var sc = $(this).scrollTop();					// 현재 window의 scrollTop 값
	if (Math.abs(pScrollTop - sc) <= delta) return;		// delta로 설정한 값보다 많이 스크롤 되어야 실행된다.
	if ((sc > pScrollTop) && (pScrollTop > 0) && (sc > delta)) {
		$(".down-menu").css("bottom", "0px");				// 스크롤을 내렸을 때
	} else {
		$(".down-menu").css("bottom", "-60px");				// 스크롤을 올렸을 때
	}
	pScrollTop = sc;										// 현재 멈춘 위치를 기준점으로 재설정
});

// 지도
var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        var options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(37.26802307605828, 127.00555176387485), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };
        var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        var mapTypeControl = new kakao.maps.MapTypeControl();

        // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
        // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        var zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
        
        function locationLoadSuccess(pos){
         // 현재 위치 받아오기
         var currentPos = new kakao.maps.LatLng(pos.coords.latitude,pos.coords.longitude);
      
         // 지도 이동(기존 위치와 가깝다면 부드럽게 이동)
         map.panTo(currentPos);
      };
      
      function locationLoadError(pos){
         alert('위치 정보를 가져오는데 실패했습니다.');
      };
      // 위치 가져오기 버튼 클릭시
      function getCurrentPosBtn(){
         navigator.geolocation.getCurrentPosition(locationLoadSuccess,locationLoadError);
      };