// Slick mutiple carousel
$('.post-wrapper').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
        }
    ]
});

/*Lazy Loading */
const myLazyLoad = new LazyLoad({
    element_selector: ".lazy"
})


