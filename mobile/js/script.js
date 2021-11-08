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
})

var btn =$('.graph').find('button')
var progress =$('.bar')
progress.animate({width:'100%'},5000);
// 메인페이지 스와이퍼
var swiper = new Swiper(".mySwiper", {
   navigation: {
     nextEl: ".button-next",
     prevEl: ".button-prev",
   },
   loop:true,
   autoplay:{
      delay:5000,   /* 1초마다 오토플레이 */
      disableOnInteraction: false,      /* false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음 */
   },
   on:{
      slideChange:()=>{
         progress.stop().css({width:0}).animate({width:'100%'},5000);
      }
   }
 });
//  재생 정지버튼
btn.click(function(){
   if(btn.hasClass('play')){
      swiper.autoplay.stop();
      $(this).removeClass('play');
      $(this).text('재생');
      progress.stop().animate({width:0})
   }else{
      swiper.autoplay.start();
      $(this).addClass('play');
      $(this).text('정지');
      progress.animate({width:'100%'},5000);
   }
})

// 상단메뉴 고정이벤트
var menu = $('.header');
var topBtn =$('.top-btn');
$(window).scroll(function(){
   var wst = $(window).scrollTop();
       if($(".main-slide").offset().top < wst){
           menu.addClass('fix');
       }else{
          menu.removeClass('fix');
       }
       if ($(".live-content>li:nth-child(4)").offset().top <wst ) {
         topBtn.addClass('fix-top')
       }else{
         topBtn.removeClass('fix-top')
       }
       
   });
// 라이브 상품들 정렬
// $('.live-content').masonry({
//    itemSelector:'li', //이미지가 포함된 엘리먼트
//    gutter: 0, //margin
//    horizontalOrder:true //순서대로 정렬   
// });

var msnry = new Masonry( '.live-content', {
   itemSelector: 'li',
   // columnWidth: 200
   percentPosition: true,
   gutter : 0,
   });
   imagesLoaded( '.live-content' ).on( 'progress', function() {
      msnry.layout();
   });

$('.top-btn').click(function(){
   $('html,body').animate({ scrollTop : $('body').offset().top-500},500);
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


