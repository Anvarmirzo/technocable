$(document).ready(function () {
    $('#clients-slider').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    dots: true,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            }
        ]
    });

    $('.portfolio-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        initialSlide: 2,
        asNavFor: '.portfolio-slider--small',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $('.portfolio-slider--small').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.portfolio-slider',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        infinite: false,
        initialSlide: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    initialSlide: 0,
                    dots: true,
                    centerMode: false,
                    slidesToShow: 3,
                    arrows: false
                }
            }
        ]
    });

    $('.navbar-toggler').click(function () {
        if (!$('.header-nav-menu').hasClass('active-menu')) {
            $("body").css("overflow", "hidden");
            $('.header-nav-menu').addClass('active-menu');
            $('.icon-open').hide();
            $('.icon-close').show();
            $('.navbar-toggler').addClass('toggler-fixed');
        }
        else {
            $("body").css("overflow", "scroll");
            $('.header-nav-menu').removeClass('active-menu');
            $('.icon-close').hide();
            $('.icon-open').show();
        }
    })

    $('.ask').click(function (e) {
        if (!$(this).next().hasClass('open')) {
            $('.answer').slideUp();
            $(this).next().slideDown(200);
            $('.answer').removeClass('open');
            $(this).next().addClass('open');
            $('.icon-down').addClass('icon-up');

        } else {
            $('.answer').slideUp();
            $('.answer').removeClass('open');
            $('.icon-down').removeClass('icon-up');
        }
    })
});