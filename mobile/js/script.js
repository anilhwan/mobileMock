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

 $('.menu').click(function(){
     $('.side-menu').stop().animate({left:0})
 })