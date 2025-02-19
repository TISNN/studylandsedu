"use strict";
//�������أ�http://www.bootstrapmb.com
(function ($) {
  "use strict";

  $(document).ready(function() {
    const gallery = $('.offer-gallery');
    const wrapper = $('.offer-gallery-wrapper');
  
    const prevArrow = $('.prev-arrow');
    const nextArrow = $('.next-arrow');
  
    prevArrow.on('click', function() {
      gallery[0].scrollLeft -= 300; // 使用原生 DOM 方法
    });
  
    nextArrow.on('click', function() {
      gallery[0].scrollLeft += 300; // 使用原生 DOM 方法
    });
  });

  
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;

    if (window_top > 50) {
      $('.fixed-btm-top').addClass('reveal');
    } else {
      $('.fixed-btm-top').removeClass('reveal');
    }
  });
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;

    if (window_top > 50) {
      $('.site-navigation ').addClass('menu_fixed animated fadeInDown');
    } else {
      $('.site-navigation').removeClass('menu_fixed animated fadeInDown');
    }
  });
  $('.testimonials-slides').owlCarousel({
    loop: true,
    dots: true,
    nav: false,
    margin: 10,
    autoplayHoverPause: true,
    autoplay: false,
    center: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });
  $('.testimonials-slides-2').owlCarousel({
    loop: true,
    dots: true,
    nav: false,
    margin: 10,
    autoplayHoverPause: true,
    autoplay: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 1
      },
      1200: {
        items: 1
      }
    }
  });
  $('.testimonials-slides-3').owlCarousel({
    loop: true,
    dots: true,
    nav: false,
    margin: 10,
    autoplayHoverPause: true,
    autoplay: false,
    responsiveClass: true,
    // navText: [
    //     "<i class='bx bx-left-arrow-alt'></i>",
    //     "<i class='bx bx-right-arrow-alt'></i>"
    // ],
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 2
      },
      1200: {
        items: 2
      }
    }
  }); // Counter

  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
  $('.team-slider').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: false,
    navRewind: false,
    margin: 30,
    navText: ["<i class='bx bx-left-arrow-alt'></i>", "<i class='bx bx-right-arrow-alt'></i>"],
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 2
      },
      1000: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });
  /* ---------------------------------------------
         course filtering
         --------------------------------------------- */

  var $course = $('.course-gallery');

  if ($.fn.imagesLoaded && $course.length > 0) {
    imagesLoaded($course, function () {
      $course.isotope({
        itemSelector: '.course-item',
        filter: '*'
      });
      $(window).trigger("resize");
    });
  }

  $('.course-filter').on('click', 'a', function (e) {
    e.preventDefault();
    $(this).parent().addClass('active').siblings().removeClass('active');
    var filterValue = $(this).attr('data-filter');
    $course.isotope({
      filter: filterValue
    });
  });
  /* ----------------------------------------------------------- */

  /*  Map
  /* ----------------------------------------------------------- */

  var map;

  function initialize() {
    var mapOptions = {
      zoom: 13,
      center: new google.maps.LatLng(50.97797382271958, -114.107718560791) // styles: style_array_here

    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  }

  var google_map_canvas = $('#map-canvas');

  if (google_map_canvas.length) {
    google.maps.event.addDomListener(window, 'load', initialize);
  }
})(jQuery);

// 其他现有代码...

(function ($) {
  "use strict";

  // 你的现有代码...

//   $('.navbar-toggler').on('click', function() {
//     window.location.href = 'contact.html'; // 替换为您想要跳转的页面
// });

  // 弹窗功能代码
  var contactButtons = document.querySelectorAll('.contact-button');
  


  contactButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          openModal();
      });
  });

  function openModal() {
      document.getElementById('contactModal').style.display = 'block';
  }

  function closeModal() {
    document.getElementById('contactModal').style.display = 'none';
    if (window.history.length > 1) {
        // 返回上一页
        window.history.back();
    } else {
        // 没有历史记录时，跳转到主页或指定页面
        window.location.href = 'index.html'; // 替换为你的主页或指定页面
    }
}

// 导航菜单切换功能
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
        });

        // 点击菜单项后自动关闭菜单
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbarCollapse.classList.remove('show');
            });
        });

        // 点击页面其他区域关闭菜单
        document.addEventListener('click', function(event) {
            const isClickInside = navbarToggler.contains(event.target) || navbarCollapse.contains(event.target);
            if (!isClickInside && navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        });
    }
});

})(jQuery);
