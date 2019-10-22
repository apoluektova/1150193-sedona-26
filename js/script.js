var button = document.querySelector(".hotel-button");
var modal = document.querySelector(".search-form");
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
  modal.classList.toggle("modal-show");
  modal.classList.toggle("modal-hide");
  checkin.focus();
});


modal.addEventListener("submit", function(evt) {
  if (!checkin.value || !checkout.value || !adults.value || !kids.value) {
  evt.preventDefault();
  modal.classList.remove("modal-error");
  modal.offsetWidth = modal.offsetWidth;
  modal.classList.add("modal-error");
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
        modal.classList.remove("modal-error");
      }
    }
  });
