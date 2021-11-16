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
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
                  mapOption = {
                      center: new kakao.maps.LatLng(37.56682, 126.97865), // 지도의 중심좌표
                      level: 3, // 지도의 확대 레벨
                      mapTypeId : kakao.maps.MapTypeId.ROADMAP // 지도종류
                  }; 
              // 지도를 생성한다 
              var map = new kakao.maps.Map(mapContainer, mapOption);

              function locationLoadSuccess(pos){
                  // 현재 위치 받아오기
                  var currentPos = new kakao.maps.LatLng(pos.coords.latitude,pos.coords.longitude);
              
                  // 지도 이동(기존 위치와 가깝다면 부드럽게 이동)
                  map.panTo(currentPos);
              
                  // 마커 생성
                  var marker = new kakao.maps.Marker({
                      position: currentPos
                  });
              
                  // 기존에 마커가 있다면 제거
                  marker.setMap(null);
                  marker.setMap(map);
              };
              
              function locationLoadError(pos){
                  alert('위치 정보를 가져오는데 실패했습니다.');
              };
              
              // 위치 가져오기 버튼 클릭시
              function getCurrentPosBtn(){
                  navigator.geolocation.getCurrentPosition(locationLoadSuccess,locationLoadError);
              };