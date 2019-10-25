var button = document.querySelector(".hotel-button");
var modal = document.querySelector(".search-form");
var form = modal.querySelector(".popup");
var checkin = modal.querySelector("[name=checkin]");
var checkout = modal.querySelector("[name=checkout]");
var adults = modal.querySelector("[name=adults]");
var kids = modal.querySelector("[name=kids]");
var isStorageSupport = true;
var storageAdults = "";
var storageKids = "";

try {
  storageAdults = localStorage.getItem("adults");
  storageKids = localStorage.getItem("kids");
} catch (err) {
  isStorageSupport = false;
}

if (storageAdults || storageKids) {
  adults.value = storageAdults;
  kids.value = storageKids;
}

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-error");
  modal.classList.toggle("modal-show");
  modal.classList.toggle("modal-hide");
  checkin.focus();
});

modal.classList.add("modal-hide");

modal.addEventListener("submit", function(evt) {
  if (!checkin.value || !checkout.value || !adults.value || !kids.value || adults.value == "0") {
  evt.preventDefault();
  form.classList.remove("modal-error");
  form.offsetWidth = form.offsetWidth;
  form.classList.add("modal-error");
} else {
  if (isStorageSupport) {
  localStorage.setItem("adults", adults.value);
  localStorage.setItem("kids", kids.value);
  }
}
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modal.classList.contains("modal-show")) {
        modal.classList.remove("modal-show");
        form.classList.remove("modal-error");
        modal.classList.add("modal-hide");
      }
    }
  });
