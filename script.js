document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const modal = document.querySelector('.modal');
  const btnSend = document.querySelectorAll('.send');
  const modalForm = document.querySelector('.modal form');
  const btnCloseForm = document.querySelector(
    '.modal form button[type=button]'
  );

  $('[data-fancybox="gallery"]').fancybox({
    buttons: [
      'slideShow',
      'thumbs',
      'zoom',
      'fullScreen',
      'share',
      'download',
      'close',
    ],
    loop: false,
    protect: true,
  });
  window.addEventListener('scroll', function () {
    if (window.scrollY > 72) {
      document.querySelector('.header').classList.add('shadow');
    } else {
      document.querySelector('.header').classList.remove('shadow');
    }
  });
  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('active');

    if (window.innerWidth <= 1199) {
      document.querySelector('body').classList.toggle('is-lock');
    }
  });
  document.querySelector('body').addEventListener('click', (e) => {
    e.stopPropagation();
    burger.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.querySelector('body').classList.remove('is-lock');
  });
  mobileMenu.addEventListener('click', (e) => {
    e.stopPropagation();
  });
  btnSend.forEach((btn) => {
    btn.addEventListener('click', () => {
      modal.classList.add('active');
      // modalForm.forEach((form) => {
      //   form.reset();
      // });
    });
  });
  modalForm.addEventListener('click', (e) => {
    e.stopPropagation();
  });
  modal.addEventListener('click', (e) => {
    e.stopPropagation();
    modal.classList.remove('active');
  });
  btnCloseForm.addEventListener('click', () => {
    modal.classList.remove('active');
  });
  const itemsSliderZoom = document.querySelectorAll(
    '.swiper-advantages .swiper-slide'
  );
  const itemsZoom = document.querySelectorAll('.advantages-zoom div');
  const btnZoomClose = document.querySelectorAll('.advantages-zoom div button');
  const boxZoom = document.querySelector('.advantages-zoom');

  itemsSliderZoom.forEach((itemSliderZoom, i) => {
    itemsZoom.forEach((itemZoom, j) => {
      itemSliderZoom.addEventListener('click', () => {
        if (i === j) {
          itemZoom.classList.add('active');
          boxZoom.classList.add('active');
        }

        boxZoom.addEventListener('click', () => {
          itemZoom.classList.remove('active');
          boxZoom.classList.remove('active');
        });
        itemZoom.addEventListener('click', (e) => {
          e.stopPropagation();
        });

        btnZoomClose.forEach((btn) => {
          btn.addEventListener('click', () => {
            boxZoom.classList.remove('active');
            itemZoom.classList.remove('active');
          });
        });
      });
    });
  });
  const swiperPromo = new Swiper('.swiper-promo', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  new Swiper('.swiper-news', {
    loop: true,
    spaceBetween: '16px',
    slidesPerView: 1.1,
    breakpoints: {
      992: {
        spaceBetween: '40px',
        slidesPerView: 3,
      },
    },
  });

  if (window.innerWidth <= 1599) {
    const swiperAdvantages = new Swiper('.swiper-advantages', {
      loop: true,
      spaceBetween: '16px',
      slidesPerView: 1.5,
      breakpoints: {
        1200: {
          slidesPerView: 2,
        },
      },
    });
  }
  const swiperApartment = new Swiper('.swiper-apartment', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 24,
    freeMode: true,
  });
  const swiperApartment2 = new Swiper('.swiper-apartment2', {
    loop: true,
    spaceBetween: 24,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: swiperApartment,
    },
  });
  const swiperParking = new Swiper('.swiper-parking', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 24,
    freeMode: true,
  });
  const swiperParking2 = new Swiper('.swiper-parking2', {
    loop: true,
    spaceBetween: 24,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: swiperParking,
    },
  });
  ymaps.ready(init);
  function init() {
    // Создание карты.
    let myMap = new ymaps.Map('map', {
      center: [53.937456, 27.471128],
      zoom: 17,
      controls: [],
    });
    let MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="display: flex; align-items: center; justify-content: center; background: #fff; width: 150px; height: 40px; color: #000;">Мястровская 16</div>'
    );

    let = myPlacemark = new ymaps.Placemark(
      [53.937456, 27.471128],
      {
        hintContent: 'Мястровская, 16',
        iconCaption: 'Очень длиннный, но невероятно интересный текст',
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: './image/iconMap.svg',
        // Размеры метки.
        iconImageSize: [75, 85],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-30, -100],
        iconContentOffset: [80, 15],
        iconCaption: 'Очень длиннный, но невероятно интересный текст',
        iconContentLayout: MyIconContentLayout,
      }
    );
    myMap.geoObjects.add(myPlacemark);
  }
});
