var button = document.querySelector(".hotel-button");
var modal = document.querySelector(".search-form");
button.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.toggle("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modal.classList.contains("modal-show")) {
        modal.classList.remove("modal-show");
      }
    }
  });
