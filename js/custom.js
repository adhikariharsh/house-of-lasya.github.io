$(document).ready(function () {

    $('.toogle').click(function () {
        $('.category-menu').slideToggle()
    })
    $(".search-btn").click(function () {
        $(".popup").fadeIn(500);
    });
    $(".close").click(function () {
        $(".popup").fadeOut(500);
    });
    $('.card').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(document).ready(function () {
        const minus = $('.quantity__minus');
        const plus = $('.quantity__plus');
        const input = $('.quantity__input');
        minus.click(function (e) {
            e.preventDefault();
            var value = $(this).next(input).val();
            if (value > 1) {
                value--;
            }
            $(this).next(input).val(value);
        });

        plus.click(function (e) {
            e.preventDefault();
            var value = $(this).prev(input).val();
            value++;
            $(this).prev(input).val(value);
        })
    })
    $('.swapper').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })
    $('.review-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});