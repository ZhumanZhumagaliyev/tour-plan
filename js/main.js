$(document).ready(function () {
  
  var hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    effect: "coverflow",

    autoplay: {
      delay: 5000,
    },
  });
  var reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    autoHeight: true,
  });

  $(".newsletter--parallax").parallax({
    imageSrc: "img/newsletter-bg.webp",
  });

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    document
      .querySelector(".navbar-bottom")
      .classList.toggle("navbar-bottom--visible");
  });

  var modalButton = $("[data-toggle=modal]");
  modalButton.on("click", openModal);

  var closeModalButton = $(".modal__close");
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }

  $(document).keydown(function (event) {
    if (event.keyCode == 27) {
      $(".modal__overlay").removeClass("modal__overlay--visible");
      $(".modal__dialog").removeClass("modal__dialog--visible");
    }
  });

  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      rules: {
        nameModal: {
          required: true,
          minlength: 2,
        },
        nameFooter: {
          required: true,
          minlength: 2,
        },
        emailModal: {
          required: true,
          email: true,
        },
        emailSub: {
          required: true,
          email: true,
        },
        phoneModal: {
          required: true,
          minlength: 18,
        },
        phoneFooter: {
          required: true,
          minlength: 18,
        },
      },
      messages: {
        nameModal: {
          required: "Please write your name",
          minlength: "At least two letters",
        },
        nameFooter: {
          required: "Please write your name",
          minlength: "At least two letters",
        },
        emailModal: {
          required: "We need your email address to contact",
        },
        emailSub: {
          required: "We need your email address to contact",
        },
        phoneModal: {
          required: "We also need your phone number",
          minlength: "At least ten numbers",
        },
        phoneFooter: {
          required: "We also need your phone number",
          minlength: "At least ten numbers",
        },
      },
    });
  });

  $(".phone").mask("+7 (000) 000-00-00");

  AOS.init();

  var map = document.querySelector(".map");
  map.addEventListener("mouseover", function () {
    map.insertAdjacentHTML(
      "afterBegin",
      '<iframe class="map__iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31618.33138992656!2d98.27946830121141!3d7.8645410993889735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30503b7bfcd9f903%3A0xf7065fac1e3d7c48!2sDoubleTree%20by%20Hilton%20Phuket%20Banthai%20Resort!5e0!3m2!1sru!2skz!4v1606225404927!5m2!1sru!2skz" style="border: 0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
    );
  });
});
