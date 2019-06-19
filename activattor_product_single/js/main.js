$(document).ready(function(){
  $(document).on('click', '.checkbox_cnt label', function () {
    var checkbox_parent = $(this).parent();
    if($(this).prev('input').attr('type') == 'radio'){
      checkbox_parent.addClass('active').siblings().removeClass('active');
    } else {
      checkbox_parent.toggleClass('active');
    }
  });
  $('.slider-block .slider-lists').slick({
    dots: true,
    arrow: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  $('.quick-view-block .nav-pills').slick({
    dots: false,
    arrow: false,
    infinite: false,
    speed: 300,
    slidesToShow: 9,
    centerMode: false,
    variableWidth: true,
    centerPadding: '0px',
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          variableWidth: false,
          arrow: false,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          variableWidth: false,
          arrow: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          variableWidth: false,
          arrow: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          variableWidth: false,
          arrow: false,
        }
      },
      {
        breakpoint: 640,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false,
          arrow: false,
        }
      }
    ]
  });
  $('.product-item-list').slick({
    dots: false,
    arrow: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1370,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrow: true
        }
      },
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          centerPadding: '0px',
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 375,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.client-list').slick({
    dots: false,
    arrow: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrow: true
        }
      },
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          allow: false,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          allow: false,
          centerMode: false,
          centerPadding: '0px',
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.news-list-main').slick({
    dots: false,
    arrow: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrow: true
        }
      },
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          centerMode: true,
          centerPadding: '80px',
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('ul.nav-pills .slick-slide:nth-child(1)').addClass('active');
  $('ul.nav-pills').on('click', '.slick-slide:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('section.quick-view-block').find('div.tab-pane').removeClass('active').removeClass('show').eq($(this).index()).addClass('active').addClass('show');
  });

  $('#footer-pokupatelyam .footer_heading').on('click', function() {
    $('#footer-pokupatelyam .footer_nav').toggleClass('active');
  });

  $('#footer-partneram .footer_heading').on('click', function() {
    $('#footer-partneram .footer_nav').toggleClass('active');
  });

  $('#footer-informatsiya .footer_heading').on('click', function() {
    $('#footer-informatsiya .footer_nav').toggleClass('active');
  });
  $(".white_bar").on("click", function () {
      $(".grey_round").toggleClass("clicked");
      $(".element_grid").toggleClass("flat");
  });
});
