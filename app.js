//■page topボタン

$(function () {
    var topBtn = $('#pageTop');
    topBtn.hide();



    //◇ボタンの表示設定
    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {

            //---- 画面を80pxスクロールしたら、ボタンを表示する
            topBtn.fadeIn();

        } else {

            //---- 画面が80pxより上なら、ボタンを表示しない
            topBtn.fadeOut();

        }
    });



    // ◇ボタンをクリックしたら、スクロールして上に戻る
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;

    });


});

//■page topボタン終わり







// ここからswiper

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        480: {
            slidesPerView: 1.5,
        }
    },
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});











//  Params
// var sliderSelector = '.swiper-container',
    // options = {
        // init: false,
        // loop: true,
        // speed: 800,
        // slidesPerView: 2, // or 'auto'
        // spaceBetween: 10,
        // centeredSlides: true,
        // effect: 'coverflow', // 'cube', 'fade', 'coverflow',
        // coverflowEffect: {
            // rotate: 50, // Slide rotate in degrees
            // stretch: 0, // Stretch space between slides (in px)
            // depth: 100, // Depth offset in px (slides translate in Z axis)
            // modifier: 1, // Effect multipler
            // slideShadows: true, // Enables slides shadows
        // },
        // grabCursor: true,
        // parallax: true,
        // pagination: {
            // el: '.swiper-pagination',
            // clickable: true,
        // },
        // navigation: {
            // nextEl: '.swiper-button-next',
            // prevEl: '.swiper-button-prev',
        // },
        // breakpoints: {
            // 1023: {
                // slidesPerView: 1,
                // spaceBetween: 0
            // }
        // },
        // Events
        // on: {
            // imagesReady: function () {
                // this.el.classList.remove('loading');
            // }
        // }
    // };
// var mySwiper = new Swiper(sliderSelector, options);

// Initialize slider
// mySwiper.init();