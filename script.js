
function changeImg()   {
    var windowWidth = $(window).width();
    if (windowWidth <= 992) {
        $('body').css('background-image', 'none');
    } else if (windowWidth > 640) {
        $('body').css('background-image', 'url (/img/banner.png)');
    }
}
window.onload=changeImg;


(function () {
    "use strict";
  
    var carousels = function () {
      $(".owl-carousel1").owlCarousel({
        loop: true,
        center: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          680: {
            items: 2,
            nav: false,
            loop: false
          },
          1000: {
            items: 3,
            nav: true
          }
        }
      });
    };
  
    (function ($) {
      carousels();
    })(jQuery);
  })();
  