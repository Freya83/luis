
$(document).ready(function (e) {

//nav
    $(function () {
        $(".navbar-nav li a").on('click', function (e) {
            e.preventDefault();
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');            

            var $target = this.hash.substring(1);           
            
            switch ($target) {
              case 'digital':
                $('.navbar-brand').removeClass('active-right');
                $('.navbar-brand').addClass('active-left');
                break;
              case 'identity':
                 $('.navbar-brand').removeClass('active-right');
                 $('.navbar-brand').addClass('active-left');             
                break;
              case 'marks':
                $('.navbar-brand').removeClass('active-left');
                $('.navbar-brand').addClass('active-right');
                break;
              case 'product':
                $('.navbar-brand').removeClass('active-left');
                $('.navbar-brand').addClass('active-right');
                break;
              case 'contact':
                $('.navbar-brand').removeClass('active-left');
                $('.navbar-brand').addClass('active-right');
                break;
              case 'about':
                $('.navbar-brand').removeClass('active-right');
                $('.navbar-brand').addClass('active-left');
                break;
              }
              

            $('.content').each(function () {                
                if (($(this).attr('id')) === $target) {
                    $(this).fadeIn(500);
                    if ($(window).width() >= 768) {   
                      $('.slideshow').slick('setPosition');
                    }
                }
                else {
                    $(this).hide();        
                }        
            });           
        });       
    });
    $(function () {
         $(".navbar-brand").on('click', function (e) {
            $(this).removeClass('active-right');
            $(this).removeClass('active-left');
        });  
    });
   /* $(window).load(function () {
        var target = window.location.hash.substring(1);
        if (target.length) {
            
        }
    });*/ 
 $(window).load(function () {
  if ($(window).width() >= 768) {
    $('#arrow-right, #arrow-left').addClass('active');
      
      $('#home').delay(5000).queue(function(){
          $('.content').each(function () {                
              if (($(this).attr('id')) === 'digital') {
                  $(this).fadeIn(500);
                  if ($(window).width() >= 768) {   
                    $('.slideshow').slick('setPosition');
                  }
              }
              else {
                  $(this).hide();        
              }        
          });         
          $('#home').fadeOut(200);
          $(".navbar-nav li.digital").addClass('active');
      });
    }
    else {
      $('#home').hide();
      $('#digital').fadeIn(500);
      $(".navbar-nav li.digital").addClass('active');
    }
  });

  if ($(window).width() >= 768) {
    $('.slideshow').slick({
      dots: false,
      infinite: true,
      speed: 300,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }
  $(window).on('resize', function(){
      if ($(window).width() <= 767) { 
        $('.slideshow').slick('unslick');
      }       
  });
   
});


