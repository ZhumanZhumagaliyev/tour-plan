var mySwiper = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  effect: "coverflow",
});




ymaps.ready(init);

function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    center: [7.89067148, 98.29468129],
    zoom: 17
  });

}

