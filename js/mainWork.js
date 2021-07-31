$(function(){
  $('html, body').stop().animate({'scrollTop': 0}, 1000, 'easeInOutCubic');
    
//     $('.work').on('mousewheel', function(event, delta){
//                var num = $(this).index();
//         
//                if(delta > 0){//위로 올릴 때
//                    $(".imgWrapper").eq(num-1).addClass('turnOn');
//                    $(".imgWrapper").eq(num).removeClass('turnOn');
//                    num -= 1;
//                }else if(delta < 0){//아래로 내릴 때
//                    $(".imgWrapper").eq(num+1).addClass('turnOn');
//                    $(".imgWrapper").eq(num).removeClass('turnOn');
//                    num += 1;
//                 }
//         
//});////on mousewheel
    $(window).scroll(function(){

            var st = $(this).scrollTop();
        
            if( st >= 200 ){
                $('#hd').addClass('lastUp');
            }else if( st < 200 ){
                $('#hd').removeClass('lastUp');
            }
    });
    
     $('#slidebar li').hover(function(){
        
       $('body').toggleClass('on');
       $('#rightMenu').toggleClass('border');
    });

 new WOW().init();
    
    $(".n1 .btns").click(function(){
        $(".popImg").fadeIn(800).css({"display":"block"});
    });
    $(".imgClose").click(function(){
         $(".popImg").fadeOut(800).css({"display":"none"});
         $(".popImg2").fadeOut(800).css({"display":"none"});
    });
    
    $(".n2 .btns").click(function(){
        $(".popImg2").fadeIn(800).css({"display":"block"});
    });
    
});