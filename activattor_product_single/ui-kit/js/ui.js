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

});