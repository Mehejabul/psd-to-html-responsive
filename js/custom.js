$(function () {

    //======banner_slider====//

    $('.banner_slider').slick({
        autoplay: true,
        autoplaySpeed: 800,
        arrows: false,
        dots: true,

    });
    //=======mixitup=====//

    var mixer = mixitup('.work_wrap');

    //=======slider_js=====//

    $('.slider_area').slick({

        arrows: false,
        dots: true


    });

    //===== Sticky===//

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".navbar").removeClass("sticky");
            $(".header-three .navigation img").attr("src", "images/logo-2.png");
        } else {
            $(".navbar").addClass("sticky");
            $(".header-three .navigation img").attr("src", "images/logo.png");
        }
    });

    //=======venobox=======//
    $(document).ready(function () {
        $('.venobox').venobox();
    });
    
    
    //==== Show or hide the sticky footer button
$(window).on('scroll', function(event) {
    if($(this).scrollTop() > 600){
        $('.back-to-top').fadeIn(200)
    } else{
        $('.back-to-top').fadeOut(200)
    }
});


//==== Animate the scroll to top
$('.back-to-top').on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: 0,
    }, 1500);
});

//========smoth scroll========//
      var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        speedAsDuration: true
    });
    
    //=========preloader==========//
    $(window).on('load', function(event) {
    $('.preloader').delay(1000).fadeOut(1000);
});


});
