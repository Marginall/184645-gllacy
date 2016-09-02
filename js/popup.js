var link = document.querySelector(".map-btn");
var popup = document.querySelector(".popup-form");
var name = document.querySelector(".popup-name");
var close = popup.querySelector(".popup-form-close");

link.addEventListener("click", function(event) {
event.preventDefault();
popup.classList.add("popup-form-show");
name.focus();
});

close.addEventListener("click", function(event) {
event.preventDefault();
popup.classList.remove("popup-form-show");
});
