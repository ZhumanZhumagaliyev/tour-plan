$(document).ready(function () {

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

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    document
      .querySelector(".navbar-bottom")
      .classList.toggle("navbar-bottom--visible");
  });

});
