$(function(){
    $('html, body').stop().animate({'scrollTop': 0}, 1000, 'easeInOutCubic');

    
     $('section').on('mousewheel', function(event, delta){
                var num = $(this).index();
                var Num = $(this).index();
                var Numscroll = $(this).index();

                var sectionTop = "";


                if(delta > 0){//위로 올릴 때
                   
                    sectionTop = $(this).prev().offset().top;
                   
                    if(1<Num){
                    $("#pagerdown span").eq(Num-1).removeClass('active');
                    $("#pagerdown span").eq(Num-2).addClass('active');
                    }
                    if(1<Numscroll){
                    $("#pagerdown .bullets").addClass('s'+(Numscroll-1)+'');
                    $("#pagerdown .bullets").removeClass('s'+Numscroll+'');
                        }
                    
                    if(1<num){
                    $("#pagerdown .bullet").eq(num).removeClass('move1');
                    $("#pagerdown .bullet").eq(num-1).addClass('move1');
                    $("#pagerdown .bullet").removeClass('move');
                        
                    }
                    
                     num -= 1;
                }else if(delta < 0){//아래로 내릴 때

                    sectionTop = $(this).next().offset().top;
                    
                    
                    if(Num<3){
                    $("#pagerdown span").eq(Num-1).removeClass('active');
                    $("#pagerdown span").eq(Num).addClass('active');
                        }
                    if(Numscroll <3){
                       $("#pagerdown .bullets").addClass('s'+(Numscroll+1)+'');
                    $("#pagerdown .bullets").removeClass('s'+Numscroll+'');
                    }
                    
                    if(num<3){
                    $("#pagerdown .bullet").eq(num-1).addClass('move');
                    $("#pagerdown .bullet").eq(num-2).removeClass('move');
                    $("#pagerdown .bullet").removeClass('move1');
                    }
                    $('#info .data').addClass('downAni');
              num += 1;
                 }

                if( num >3 )return false;
                if( Numscroll >3 )return false;
        
           $('html, body').stop().animate({'scrollTop': sectionTop}, 1000, 'easeInOutCubic');
         
});////on mousewheel
    
    $(window).scroll(function(){

            var st = $(this).scrollTop();
              var top = $('#info .bottomblock .inforow:last-child').offset().top;

            if( st >= top ){
                $('#pagerdown .label').addClass('change');
                $('#hd').addClass('lastUp');
            }else if( st < top ){
                $('#pagerdown .label').removeClass('change');
                $('#hd').removeClass('lastUp');
            }
   
    $('.hirebtn').click(function(e){
         e.preventDefault();
         var bottom = $('section').eq(2).offset().top;
        
            if(st < bottom){
         $("#pagerdown span").eq(2).addClass('active');
         $("#pagerdown .bullets").addClass('s3');
                
         $("#pagerdown span").eq(0).removeClass('active');
         $("#pagerdown span").eq(1).removeClass('active');
         $("#pagerdown .bullets").removeClass('s1');
         $("#pagerdown .bullets").removeClass('s2');
        }
        
         $('html, body').stop().animate({'scrollTop': bottom}, 1000, 'easeInOutCubic');
     });
    });
    

    
    $('#slidebar li').hover(function(){
        
       $('body').toggleClass('on');
        $('#rightMenu').toggleClass('border');
    });

 
});