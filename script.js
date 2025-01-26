document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('active');

    if (window.innerWidth <= 1199) {
      document.querySelector('body').classList.toggle('is-lock');
    }
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
  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map('map', {
        center: [53.937456, 27.471128],
        zoom: 14,
        controls: [],
      }),
      myGeoObject = new ymaps.GeoObject({});

    myMap.geoObjects.add(myGeoObject).add(
      new ymaps.Placemark([53.937456, 27.471128], {
        iconColor: '#184eca',
      })
    );
  }
});
