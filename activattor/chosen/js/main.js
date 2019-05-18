$(document).ready(function () {
    // $('.header-content-section-mainmenu .nav').slick({
    //   dots: false,
    //   arrow: false,
    //   infinite: false,
    //   speed: 300,
    //   slidesToShow: 9,
    //   slidesToScroll: 1,
    //   centerMode: false,
    //   variableWidth: true,
    //   responsive: [
    //     {
    //       breakpoint: 1440,
    //       settings: {
    //         slidesToShow: 7,
    //         slidesToScroll: 1,
    //         arrow: true
    //       }
    //     },
    //     {
    //       breakpoint: 1170,
    //       settings: {
    //         slidesToShow: 5,
    //         slidesToScroll: 1,
    //         arrow: true
    //       }
    //     },
    //   ]
    // });
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
                breakpoint: 1300,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    variableWidth: false,
                    arrow: false,
                }
            },
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    variableWidth: false,
                    arrow: false,
                }
            },
            {
                breakpoint: 1170,
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
        centerMode: true,
        centerPadding: '10px',
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
    $('ul.nav-pills').on('click', '.slick-slide:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('section.quick-view-block').find('div.tab-pane').removeClass('active').removeClass('show').eq($(this).index()).addClass('active').addClass('show');
    });

    $('#footer-pokupatelyam .footer_heading').on('click', function () {
        $('#footer-pokupatelyam .footer_nav').toggleClass('active');
    });

    $('#footer-partneram .footer_heading').on('click', function () {
        $('#footer-partneram .footer_nav').toggleClass('active');
    });

    $('#footer-informatsiya .footer_heading').on('click', function () {
        $('#footer-informatsiya .footer_nav').toggleClass('active');
    });
});

$('.slider-thumb').slick({
    autoplay: false,
    vertical: true,
    infinite: true,
    verticalSwiping: true,
    slidesPerRow: 1,
    slidesToShow: 6,
    asNavFor: '.slider-preview',
    focusOnSelect: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-up"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-down"></i></button>',
    responsive: [
        {
            breakpoint: 767,
            settings: {
                vertical: false,
            }
        },
        {
            breakpoint: 479,
            settings: {
                vertical: false,
                slidesPerRow: 3,
                slidesToShow: 3,
            }
        },
    ]
});
$('.slider-preview').slick({
    autoplay: false,
    vertical: true,
    infinite: true,
    slidesPerRow: 1,
    slidesToShow: 1,
    asNavFor: '.slider-thumb',
    arrows: false,
    draggable: false,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                vertical: false,
                fade: true,
            }
        },
    ]
});
$(".white_bar").on("click", function () {
    $(".grey_round").toggleClass("clicked");
    $(".element_grid").toggleClass("flat");
});


$(document).ready(function () {
    $(document).on('click', '.checkbox_cnt label', function () {
        var _parent = $(this).parent();
        if($(this).prev('input').attr('type') == 'radio'){
            _parent.addClass('active').siblings().removeClass('active');
        } else {
            _parent.toggleClass('active');
        }

    });

    $(document).on('click', '.filter-mobile:not(".active")', function () {
        $('#character-main').addClass('active');
        $('.filter').removeClass('display');
    });

    $(document).on('click', '.price_range.last_range .btn-show', function (e) {
        // e.preventDefault();
        $('.filter-mobile').addClass('active');
        $('#character-main').removeClass('active');
        $('.filter').addClass('display');
    });
    $(document).on('click', '.close-arrow', function (e) {
        $('.filter').addClass('display');
        $('#character-main').removeClass('active');
    });

    $(document).on('click', '.filter-mobile.active', function () {
        $(this).removeClass('active');
        $('#filter_reset').trigger('click');
    });

    $(document).on('click', '#filter_reset', function () {
        $('.filter').addClass('display');
        $('#character-main').removeClass('active');
    });

    $(document).on('mousedown', '.input-menu li', function () {
        let __text = $(this).text();
        $(this).closest('.input-main').find('.input_cnt p').text(__text);
        $(this).closest('.input-main').find('.input_cnt input[type="hidden"]').val(__text);

    });

});


$(".white_icon").on("click", function () {

    $(".filter").toggleClass("display");

    if($(".filter").hasClass("display")){
        $(this).find("use").attr("xlink:href", "#plus_icon");
    }else{
        $(this).find("use").attr("xlink:href", "#minus_icon");
    }

})


