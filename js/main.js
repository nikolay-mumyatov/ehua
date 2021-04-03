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


// Modal window

let modalWindow = document.querySelector(".modal"),
  closeBtn = document.querySelector(".modal-close");

// Прослушивание документа на нажатие. Если нажали на элемент с классом .modal-btn то произойдет событие.
document.addEventListener("click", function (e) {
  const target = e.target;
  if (target.matches(".modal-btn")) {
    modalWindow.classList.toggle("modal-active");
    $("body").css({"overflow": "hidden"});
  }
});

// Закрытие по кнопе ESC
$(document).keydown(function (eventObject) {
  if (eventObject.which == 27 && modalWindow.classList.contains('modal-active')){
    modalWindow.classList.remove("modal-active");
    $("body").css({"overflow": "visible"});
  }
});

closeBtn.addEventListener("click", function () {
  modalWindow.classList.toggle("modal-active");
  $("body").css({"overflow": "visible"});
});

$(document).click(function (e) {
  if ($(e.target).is(".modal")) {
    modalWindow.classList.toggle("modal-active");
    $("body").css({"overflow": "visible"});
  }
});