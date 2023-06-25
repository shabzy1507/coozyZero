const addMore = document.querySelector(".addmore");
const addMore2 = document.querySelector(".addmore2");
const addMoreInput = document.querySelector(".addMoreInput");
const addedLabel = document.querySelector(".added-label");
const addedCheck = document.querySelector(".added-check");
const addedBox = document.querySelector(".added-box");
const added = document.querySelector(".added");
const addedLine = document.querySelector(".added-line");
addMore.addEventListener("click", function () {
  addMoreInput.classList.remove("hidden");
  addMore2.classList.remove("hidden");
  addMore.classList.add("hidden");
});
addMore2.addEventListener("click", function () {
  console.log(addMoreInput.value);
  addedLabel.textContent = addMoreInput.value;
  addMoreInput.classList.add("hidden");
  addMore2.classList.add("hidden");
  addMore.classList.remove("hidden");
  addedBox.classList.remove("hidden");
  addedCheck.classList.remove("hidden");
  added.classList.remove("hidden");
  addedLabel.classList.remove("hidden");
  addedLine.classList.remove("hidden");
});
