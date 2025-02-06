document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu');
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

  const itemsSliderZoom = document.querySelectorAll(
    '.swiper-advantages .swiper-slide'
  );
  const itemsZoom = document.querySelectorAll('.advantages-zoom div');
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
  // function init() {
  //   var myMap = new ymaps.Map('map', {
  //       center: [53.937456, 27.471128],
  //       zoom: 14,
  //       controls: [],
  //     }),
  //     myGeoObject = new ymaps.GeoObject({});

  //   myMap.geoObjects.add(myGeoObject).add(
  //     new ymaps.Placemark([53.937456, 27.471128], {
  //       iconColor: '#184eca',
  //     })
  //   );
  // }
  // ymaps.ready(init);
});
