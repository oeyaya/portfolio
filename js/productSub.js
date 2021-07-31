$(function(){
   new WOW().init();
     $('.imgwarp').slick({
         infinite: true,
         dots:true,
         slidesToShow: 1,
         slidesToScroll: 1
  });


    $('#importantMenu .icon').click(function(){
              $("#importantMenu").toggleClass('hover');
           });
    
    
     lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });
    
        $('#slick-slide-control00').addClass('color');
    $('#productSub .slick-dots li').on('click', function(){
           var num = $(this).index();
                $('#slick-slide-control00').removeClass('color');

               $('#productSub .slick-dots li').removeClass('color');
               $('#productSub .slick-dots li').eq(num).addClass('color');

       
        });
    
    $('#productSub .slick-dots li').on('click', function(){
           
               var sectionTop = $('#productSub').offset().top;
                $('html, body').stop().animate({'scrollTop': sectionTop}, 700, 'easeOutQuad');
             

            });
    
    
    
});
