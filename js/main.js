$(document).ready(function () {
var hotelSlider = new Swiper('.hotel-slider', {
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


var reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  autoHeight: true,
}); 

$('.newsletter--parallax').parallax({imageSrc: 'img/newsletter-bg.jfif'});

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function() {
  document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible")
});


var modalButton = $("[data-toggle=modal]");
modalButton.on('click', openModal);

var closeModalButton = $(".modal__close");
closeModalButton.on ('click', closeModal);


function openModal() {
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.addClass("modal__overlay--visible");
  modalDialog.addClass("modal__dialog--visible");
};

function closeModal(event) {
  event.preventDefault();
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.removeClass("modal__overlay--visible");
  modalDialog.removeClass("modal__dialog--visible");
};

$(document).keydown(function(event) { 
  if (event.keyCode == 27) { 
    $(".modal__overlay").removeClass("modal__overlay--visible");
    $(".modal__dialog").removeClass("modal__dialog--visible");
  }
});

});