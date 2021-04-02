// Подключение слайдера
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".example-btn-next",
    prevEl: ".example-btn-prev",
  },

  autoplay: {
    delay: 5000,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});


// Слайдер страницы articles
const articlesSlider = new Swiper('.slider-swiper-container', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".slider-btn-next",
    prevEl: ".slider-btn-prev",
  },

  autoplay: {
    delay: 5000,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});


// Burger menu
var menuBtn = document.querySelector(".burger"),
  burgerLine = document.querySelectorAll(".burger__line");

burgerLine.forEach(function (line) {
  menuBtn.addEventListener("click", function () {
    line.classList.toggle("burger__line-active");
    document
      .querySelector(".header-nav")
      .classList.toggle("header-nav__visible");
  });
});