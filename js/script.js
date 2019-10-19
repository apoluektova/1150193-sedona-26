var button = document.querySelector(".hotel-button");
var modal = document.querySelector(".search-form");
var checkin = modal.querySelector("[name=checkin]");
var checkout = modal.querySelector("[name=checkout]");
button.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.toggle("modal-show");
checkin.focus();
modal.addEventListener("submit", function(evt){
  if (!checkin.value && !checkout.value)
  evt.preventDefault();
  console.log("Нужно ввести дату заезда и выезда");
})
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modal.classList.contains("modal-show")) {
        modal.classList.remove("modal-show");
      }
    }
  });
