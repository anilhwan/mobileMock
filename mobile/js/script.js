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
