/******************** mobile menu ********************/
$('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "991",
});

// Data-background js
$("[data-background]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
})

// banner-slider-area 
$('.banner-area .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

// banner-slider-area 
$('.our-courses .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    autoplay: false,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})

// MagnificPopup 
$('.gallery-item').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    }
});

// footer Year
var Year = new Date();
document.getElementById("CurrentYear").innerHTML = Year.getFullYear();