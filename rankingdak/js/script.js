// pc
var mySwiper1 = new Swiper('.banner', {
	slidesPerView: 1, /* 보여줄 이미지 수 */
	spaceBetween: 0,  /* 이미지 사이 패딩값 */
	autoplay:{
		delay:2000,   /* 1초마다 오토플레이 */
		disableOnInteraction: false,		/* false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음 */
	},
	loop: true,       /* true=무한반복 false=이미지 끝까지가면 멈춤 */
	pagination: {
			el: ".pagination",
			type: "fraction",
		},
	navigation: {
			nextEl: ".next",
			prevEl: ".prev",
		},
});
// 배너 스와이퍼 아이콘 클릭이벤트
$(".pause").click(function(){
	mySwiper1.autoplay.stop();
	$(".pause").hide();
	$(".play").show();
});
$(".play").click(function(){
	mySwiper1.autoplay.start();
	$(".play").hide();
	$(".pause").show();	
});
$(".plus").click(function(){
	mySwiper1.autoplay.stop();
	$(".img-zip").show();
	$('body').addClass('scroll')
});
$(".close").click(function(){
	mySwiper1.autoplay.start();
	$(".img-zip").hide();
	$(".play").hide();
	$(".pause").show();
	$('body').removeClass('scroll')
});
// 상품 더보기 버튼 이벤트
$(".img-more").click(function(){
	$(".hide").toggle();
	$(this).text($(this).text()=='닫기'?'+상품더보기':'닫기');
	return false;
});	
// 태블릿, 모바일 배너이미지
var mySwiper2 = new Swiper('.mob', {
slidesPerView: 1, /* 보여줄 이미지 수 */
spaceBetween: 0,  /* 이미지 사이 패딩값 */
autoplay:{
	delay:2000,   /* 1초마다 오토플레이 */
	disableOnInteraction: false,
	},
loop: true,       /* true=무한반복 false=이미지 끝까지가면 멈춤 */
pagination: {
	el: ".pagination",
	type: "fraction",
	},
});
$(".plus-m").click(function(){
	mySwiper2.autoplay.stop();
	mySwiper6.autoplay.stop();
	mySwiper7.autoplay.stop();
	$(".img-zip").show();
	$('body').addClass('scroll')
});
$(".close").click(function(){
	mySwiper2.autoplay.start();
	mySwiper6.autoplay.start();
	mySwiper7.autoplay.start();
	$(".img-zip").hide();
	$('body').removeClass('scroll')
});
// 타임세일 스와이퍼
var swiper3 = new Swiper(".mySwiper", {
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	  renderBullet: function (index, className) {
		return '<span class="' + className + '">' + (index + 1) + "</span>";
	  },
	},
  });
//  타임세일 타이머
(function counter(){
	var dday = new Date(2021,10,11,23,59,59) //디데이
	setInterval(function(){
		var now = new Date(); //현재 날짜 가져오기
		var distance = dday - now;
		var d = Math.floor(distance / (1000 * 60 * 60 * 24));
		var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var s = Math.floor((distance % (1000 * 60)) / 1000);
		if(s<10){s='0'+s;}
		if(h<10){h ='0'+h;}
		if(m<10){m ='0'+m;}
		$('.time-day').html(d)
		$('.time-h').html(h)
		$('.time-m').html(m)
		$('.time-sec').html(s)
	}, 1000);
})();

// 기획전 특가상품 클릭이벤트
$(".category-tit").click(function() {
	var tab = $(this).attr('data-tab');
	$('.category-tit').removeClass('on');
	$('.pro-swiper').removeClass('on');
	$(this).addClass('on');
	$("." + tab).addClass('on');
});

 //   기획전 특가상품 스와이퍼
var mySwiper4 = new Swiper('.pro-swiper', {
	slidesPerView: 3, /* 보여줄 이미지 수 */
	spaceBetween: 50,  /* 이미지 사이 패딩값 */
	loop: false,       /* true=무한반복 false=이미지 끝까지가면 멈춤 */
});

// 종류별 인기상품 스와이퍼
var mySwiper5 = new Swiper(".hitSwiper", {
	watchOverflow: false,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	  renderBullet: function (index, className) {
		return '<span class="' + className + '">' + (index + 1) + "</span>";
	  },
	},
	touchRatio: 0,   /* 드래그막기 */
	navigation: {
		nextEl: ".next",
		prevEl: ".prev",
	},
  });
//   종류별 인기상품 클릭이벤트
$(".left-menu li").click(function() {
	var tab = $(this).attr('data-tab');
	$('.left-menu li').removeClass('on');
	$('.hitSwiper').removeClass('on');
	$(this).addClass('on');
	$("." + tab).addClass('on');
});

// PC상단메뉴 고정
var pScrollTop = 0,
        delta = 10;									// 이벤트를 발생시킬 스크롤의 이동 범위
$(window).scroll(function(){
    var sc = $(this).scrollTop();					// 현재 window의 scrollTop 값
	if (Math.abs(pScrollTop - sc) <= delta) return;		// delta로 설정한 값보다 많이 스크롤 되어야 실행된다.
	if ((sc > pScrollTop) && (pScrollTop > 0) && (sc > 100)) {
		$(".pc-fix-menu").css("top", "-120px");				// 스크롤을 내렸을 때
		$('.side-menu').fadeOut(100);
		$('.side-btn').fadeIn(100);
	} else {
		$(".pc-fix-menu").css("top", "0px");				// 스크롤을 올렸을 때
		$('.side-menu').fadeOut(100);
		$('.side-btn').fadeIn(100);

	}
	pScrollTop = sc;										// 현재 멈춘 위치를 기준점으로 재설정
});
// 모바일 상단메뉴 고정
var mScrollTop = 0
$(window).scroll(function(){
    var st = $(this).scrollTop()
	if (Math.abs(mScrollTop - st) <= delta) return;
	if ((st > mScrollTop) && (mScrollTop > 0)) {
		$(".mobile-fix-menu").css("top", "-60px");
	} else {
		$(".mobile-fix-menu").css("top", "0px");
	}
	mScrollTop = st;
});
// 모바일 스와이퍼
var mySwiper6 = new Swiper('.m-event', {
	slidesPerView: 1, /* 보여줄 이미지 수 */
	spaceBetween: 50,  /* 이미지 사이 패딩값 */
	loop: true,       /* true=무한반복 false=이미지 끝까지가면 멈춤 */
	pagination: {
	el: ".swiper-pagination",
	clickable: true,
	},
	autoplay:{
			delay:2000,   /* 1초마다 오토플레이 */
			disableOnInteraction: false,
		},
});
// 모바일 타임세일 스와이퍼
var mySwiper7 = new Swiper('.m-sale', {
	slidesPerView: 1, /* 보여줄 이미지 수 */
	spaceBetween: 20,  /* 이미지 사이 패딩값 */
	loop: true,       /* true=무한반복 false=이미지 끝까지가면 멈춤 */
	pagination: {
	el: ".swiper-pagination",
	clickable: true,
	},
	autoplay:{
		delay:2000,   /* 1초마다 오토플레이 */
		disableOnInteraction: false,
		},
	});
// 모바일 푸터 사업자정보확인 아이콘
$('.food-info p').click(function(){
	$(this).toggleClass('rotate');
	$('.food-info-notice').toggle();
});

var topBar = $(".main-area").offset();
    $(window).scroll(function(){
        var docScrollY = $(this).scrollTop()
        var barThis = $(".side-btn");
        if( docScrollY > topBar.top ) {
            barThis.addClass("fixed");
        }else{
            barThis.removeClass("fixed");
        }
    });

$('.side-open').click(function(){
	$('.side-menu').fadeIn(100);
	$('.side-btn').fadeOut(100);
});
$('.side-close').click(function(){
	$('.side-menu').fadeOut(100);
	$('.side-btn').fadeIn(100);
});