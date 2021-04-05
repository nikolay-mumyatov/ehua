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
  burgerLine = document.querySelectorAll(".burger__line"),
  bodyHidden = document.querySelector("body");

burgerLine.forEach(function (line) {
  menuBtn.addEventListener("click", function () {
    line.classList.toggle("burger__line-active");
    document.querySelector(".header-nav").classList.toggle("header-nav__visible");
    bodyHidden.classList.toggle("body-hidden");
  });
});

// Включение фонового цвета шапки при скролле.
window.addEventListener('scroll', function(e) {
  const y = window.pageYOffset;
  if (y >= 25) {
    $('.header-wrapper').addClass('header-wrapper__scroll');
  } else {
    $('.header-wrapper').removeClass('header-wrapper__scroll');
  }
})

// Появление кнопки "наверх"
window.addEventListener('scroll', function(e) {
  const up = window.pageYOffset;
  if (up >= 1500) {
    $('.button-up').show();
  } else {
    $('.button-up').hide();
  }
})

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


// form validation
$(".form").each(function () {
  $(this).validate({
    errorClass: "form-validate",
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      phone: {
        required: true,
        minlength: 17,
      },
      text: {
        required: true,
      }
    },
    messages: {
      name: {
        required: "Введите ваше имя.",
        minlength: jQuery.validator.format("Минимум {0} символа."),
      },
      phone: {
        required: "Введите ваш телефон.",
        minlength: "Минимум 11 знаков.",
      },
      email: {
        required: "Введите ваш email",
        email: "Необходимый формат ввода name@domain.com",
      },
      text: {
        required: "Введите ваш комментарий",
      }
    },
  });
});


// phone masc
$("input[type=tel]").mask("+7 (999) 999-9999");
$("input[type=tel]").focus(function () {
  $("input[type=tel]").val("+7");
});


//Плавный скролл страницы

$('a').click(function() {
    let linkHref = $(this).attr('href'); //Получить значение из АТРИБУТА href
    let scrollHeight = $(linkHref).offset().top; //Получить значение растояния от элемента до верха страницы

    $('html, body').animate({
        scrollTop : scrollHeight //Зарегистрированное значение JS
    }, 500)
});