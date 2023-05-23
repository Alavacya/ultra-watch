// Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import $ from 'jquery';
import {
  Swiper,
  Mousewheel,
  Parallax,
  Pagination,
  Scrollbar,
  Controller,
  Navigation,
  Autoplay,
} from 'swiper';
Swiper.use([Mousewheel, Scrollbar, Pagination, Parallax, Controller, Navigation, Autoplay]);

document.addEventListener('DOMContentLoaded', () => {
  $('a.scroll-to').on('click', function (e) {
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $(anchor).offset().top - $('.main-nav').height() * 2,
        },
        100,
      );
    $('.nav-bar').removeClass('toggle');
    $('#nav-icon4').removeClass('open');
  });

  var swiper = new Swiper('.mySwiper', {
    slidesPerView: 'auto',
    spaceBetween: 190,
    centeredSlides: true,
    preventClicks: true,
    navigation: {
      nextEl: '.swiper-button-nextt',
      prevEl: '.swiper-button-prevp',
    },
    speed: 900,
    loop: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 33,
      },
      480: {
        spaceBetween: 33,
      },
      // when window width is >= 480px
      640: {
        spaceBetween: 30,
      },
      // when window width is >= 640px
      960: {
        spaceBetween: 18,
      },
      1200: {
        spaceBetween: 190,
      },
    },
    on: {
      init: function () {
        $('.swiper-slide').addClass('changed');
      },
      slideChangeTransitionStart: function () {
        $('.swiper-slide').addClass('changing');
        $('.swiper-slide').removeClass('changed');
      },
      slideChangeTransitionEnd: function () {
        $('.swiper-slide').removeClass('changing');
        $('.swiper-slide').addClass('changed');
      },
    },
  });

  //menu

  $(document).ready(function () {
    $('#nav-icon4').click(function () {
      $(this).toggleClass('open');
      $('.nav-bar').toggleClass('toggle');
    });
  });

  //sendler

  const fileInput = document.querySelector('input[type="file"]');

  fileInput.addEventListener('change', (e) => {
    let files = e.currentTarget.files;
    console.log(files);

    if (files.length) {
      fileInput.closest('label').querySelector('span').textContent = files[0].name;
    } else {
      fileInput.closest('label').querySelector('span').textContent = 'Прикрепить файл';
    }
  });

  let validateForms = function (selector, rules, successModal, yaGoal) {
    new window.JustValidate(selector, {
      rules: rules,
      submitHandler: function (form) {
        e.preventDefault();
        e.preventDefault();
        let formData = new FormData(form);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            e.preventDefault();
            if (xhr.status === 200) {
              console.log('Отправлено');
            }
          }
        };

        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);

        form.reset();

        fileInput.closest('label').querySelector('span').textContent = 'Прикрепить файл';
      },
    });
  };
});
