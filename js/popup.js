var link = document.querySelector(".map-btn");
var popup = document.querySelector(".popup-form");
var close = popup.querySelector(".popup-form-close");
var name = popup.querySelector(".popup-name");
var mail = popup.querySelector(".popup-mail");
var form = popup.querySelector("form");
var storage = localStorage.getItem("name")
var overlay = document.querySelector(".modal-overlay");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("popup-form-show");
  overlay.classList.add("modal-overlay-show");
  if (storage) {
    name.value = storage;
    mail.focus();
  } else {
    name.focus();
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("popup-form-show");
  overlay.classList.remove("modal-overlay-show");
});

form.addEventListener("submit", function(event) {
  if (!name.value || !mail.value) {
    event.preventDefault();
    console.log("Нужно ввести логин и пароль");
  } else {
    localStorage.setItem("name", name.value);
  }
});

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("popup-form-show")) {
        popup.classList.romove("popup-form-show");
    }
  }
});
