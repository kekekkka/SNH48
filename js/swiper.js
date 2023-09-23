var mySwiper = new Swiper('.swiper', {
    autoplay: {
        delay: 1000,//1秒切换一次
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
})

//如果你初始化时没有定义Swiper实例，后面也可以通过Swiper的HTML元素来获取该实例
new Swiper('.swiper')
var mySwiper = document.querySelector('.swiper').swiper
mySwiper.slideNext();