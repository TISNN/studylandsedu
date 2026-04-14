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

(function () {
  var stage = document.querySelector('[data-offer-morph-stage]');

  if (!stage) {
    return;
  }

  var canvas = stage.querySelector('[data-offer-morph-canvas]');
  var intro = stage.querySelector('[data-offer-morph-intro]');
  var copy = stage.querySelector('[data-offer-morph-copy]');

  if (!canvas || !intro || !copy) {
    return;
  }

  var imageNames = [
    '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png',
    '12.png', '13.png', '14.png', '16.png', '17.png', '18.png', '19.png', '20.png',
    '21.png', '22.png', '24.png', '25.png', '26.png', '28.png', '29.png', '30.png',
    '31.png', '32.png', '34.png', '36.png', '37.png', '39.png', '40.png', '41.png',
    '42.png', '43.png', '44.png'
  ];

  var cards = [];
  var scatterPositions = [];
  var width = 0;
  var height = 0;
  var phase = 'scatter';
  var scrollValue = 0;
  var parallaxX = 0;
  var MAX_SCROLL = 3000;
  var frameId = null;

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function lerp(start, end, t) {
    return start * (1 - t) + end * t;
  }

  function createCards() {
    var fragment = document.createDocumentFragment();

    imageNames.forEach(function (name, index) {
      var card = document.createElement('div');
      card.className = 'offer-morph-card';
      card.style.left = '50%';
      card.style.top = '50%';

      var inner = document.createElement('div');
      inner.className = 'offer-morph-card-inner';

      var front = document.createElement('div');
      front.className = 'offer-morph-card-front';

      var img = document.createElement('img');
      img.src = '/assets/images/offer/' + name;
      img.alt = 'Offer ' + (index + 1);
      img.loading = 'lazy';
      front.appendChild(img);

      var back = document.createElement('div');
      back.className = 'offer-morph-card-back';
      back.innerHTML = '<span>Offer</span><strong>View</strong>';

      inner.appendChild(front);
      inner.appendChild(back);
      card.appendChild(inner);
      fragment.appendChild(card);
      cards.push(card);
    });

    canvas.appendChild(fragment);
  }

  function updateScatterPositions() {
    scatterPositions = cards.map(function () {
      return {
        x: (Math.random() - 0.5) * Math.max(width * 1.4, 1600),
        y: (Math.random() - 0.5) * Math.max(height * 1.1, 900),
        rotation: (Math.random() - 0.5) * 200,
        scale: 0.65,
        opacity: 0
      };
    });
  }

  function requestRender() {
    if (frameId) {
      return;
    }

    frameId = requestAnimationFrame(function () {
      frameId = null;
      render();
    });
  }

  function render() {
    var total = cards.length;
    var isMobile = width < 768;
    var morph = phase === 'circle' ? clamp(scrollValue / 600, 0, 1) : 0;
    var rotateProgress = clamp((scrollValue - 600) / (MAX_SCROLL - 600), 0, 1);
    var minDimension = Math.min(width, height);
    var circleRadius = Math.min(minDimension * 0.28, 270);
    var spread = isMobile ? 112 : 138;
    var baseRadius = Math.min(width, height * 1.45);
    var arcRadius = baseRadius * (isMobile ? 1.25 : 1.08);
    var arcApexY = height * (isMobile ? 0.42 : 0.33);
    var arcCenterY = arcApexY + arcRadius;
    var step = spread / Math.max(total - 1, 1);
    var startAngle = -90 - spread / 2;
    var boundedRotation = -rotateProgress * (spread * 0.88);
    var lineSpacing = isMobile ? 44 : 56;
    var lineOffset = ((total - 1) * lineSpacing) / 2;

    cards.forEach(function (card, i) {
      var target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

      if (phase === 'scatter') {
        target = scatterPositions[i];
      } else if (phase === 'line') {
        target = {
          x: i * lineSpacing - lineOffset,
          y: 0,
          rotation: 0,
          scale: 1,
          opacity: 1
        };
      } else {
        var circleAngle = (i / total) * 360;
        var circleRad = (circleAngle * Math.PI) / 180;
        var circleX = Math.cos(circleRad) * circleRadius;
        var circleY = Math.sin(circleRad) * circleRadius;
        var circleRotation = circleAngle + 90;

        var currentArcAngle = startAngle + i * step + boundedRotation;
        var arcRad = (currentArcAngle * Math.PI) / 180;
        var arcX = Math.cos(arcRad) * arcRadius + parallaxX;
        var arcY = Math.sin(arcRad) * arcRadius + arcCenterY;
        var arcRotation = currentArcAngle + 90;
        var arcScale = isMobile ? 1.2 : 1.45;

        target = {
          x: lerp(circleX, arcX, morph),
          y: lerp(circleY, arcY, morph),
          rotation: lerp(circleRotation, arcRotation, morph),
          scale: lerp(1, arcScale, morph),
          opacity: 1
        };
      }

      card.style.opacity = target.opacity;
      card.style.transform =
        'translate(-50%, -50%) translate3d(' +
        target.x +
        'px, ' +
        target.y +
        'px, 0) rotate(' +
        target.rotation +
        'deg) scale(' +
        target.scale +
        ')';
    });

    var introOpacity = phase !== 'circle' ? 1 : Math.max(0, 1 - morph * 2);
    intro.style.opacity = introOpacity;
    intro.style.transform = 'translate(-50%, calc(-50% - ' + (1 - introOpacity) * 14 + 'px))';

    var copyOpacity = phase === 'circle' ? clamp((morph - 0.74) / 0.26, 0, 1) : 0;
    copy.style.opacity = copyOpacity;
    copy.style.transform = 'translate(-50%, ' + (12 - copyOpacity * 12) + 'px)';
  }

  function handleResize() {
    width = stage.clientWidth;
    height = stage.clientHeight;
    updateScatterPositions();
    requestRender();
  }

  createCards();
  handleResize();

  setTimeout(function () {
    phase = 'line';
    requestRender();
  }, 450);

  setTimeout(function () {
    phase = 'circle';
    requestRender();
  }, 2200);

  stage.addEventListener(
    'wheel',
    function (event) {
      var next = clamp(scrollValue + event.deltaY, 0, MAX_SCROLL);
      if (next !== scrollValue) {
        event.preventDefault();
        scrollValue = next;
        requestRender();
      }
    },
    { passive: false }
  );

  var touchStartY = 0;
  stage.addEventListener('touchstart', function (event) {
    if (!event.touches || !event.touches.length) {
      return;
    }
    touchStartY = event.touches[0].clientY;
  });

  stage.addEventListener(
    'touchmove',
    function (event) {
      if (!event.touches || !event.touches.length) {
        return;
      }
      var touchY = event.touches[0].clientY;
      var delta = touchStartY - touchY;
      touchStartY = touchY;
      var next = clamp(scrollValue + delta * 1.15, 0, MAX_SCROLL);

      if (next !== scrollValue) {
        event.preventDefault();
        scrollValue = next;
        requestRender();
      }
    },
    { passive: false }
  );

  stage.addEventListener('mousemove', function (event) {
    var rect = stage.getBoundingClientRect();
    var normalizedX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    parallaxX = normalizedX * (width < 768 ? 42 : 86);

    if (phase === 'circle') {
      requestRender();
    }
  });

  window.addEventListener('resize', handleResize);
})();

(function () {
  var accordion = document.querySelector('[data-product-accordion]');

  if (!accordion) {
    return;
  }

  var items = Array.prototype.slice.call(accordion.querySelectorAll('.product-accordion-item'));

  if (!items.length) {
    return;
  }

  function setActiveItem(item) {
    items.forEach(function (current) {
      current.classList.toggle('is-active', current === item);
    });
  }

  items.forEach(function (item) {
    item.addEventListener('click', function () {
      setActiveItem(item);
    });

    item.addEventListener('focus', function () {
      setActiveItem(item);
    });

    item.addEventListener('mouseenter', function () {
      if (window.matchMedia && window.matchMedia('(hover: hover)').matches) {
        setActiveItem(item);
      }
    });
  });

  var defaultItem = accordion.querySelector('.product-accordion-item.is-active') || items[items.length - 1];
  setActiveItem(defaultItem);
})();

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
