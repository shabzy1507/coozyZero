const userNo = document.getElementById("userNo");
const userYes = document.getElementById("userYes");
const phone = document.querySelector(".phone");
const addedSvg = document.querySelector(".added-svg");
const warning = document.querySelector(".warning");
userNo.addEventListener("click", function () {
  phone.classList.remove("hidden");
  addedSvg.classList.remove("hidden");
  warning.classList.remove("hidden");
});
userYes.addEventListener("click", function () {
  phone.classList.add("hidden");
  addedSvg.classList.add("hidden");
  warning.classList.add("hidden");
});
