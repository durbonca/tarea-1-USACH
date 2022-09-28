const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  var audio = document.getElementById('myAudio');
  document.body.addEventListener("click", function () {
    audio.play()
})