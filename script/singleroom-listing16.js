// const customRadio = document.getElementById("custom-radio");
const customInput = document.getElementById("custom-input");
const showLabel = document.getElementById("custom-label");
const showRadio = document.getElementById("custom-radio");
const addTimeBtn = document.getElementById("addTime-btn");

addTimeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  showLabel.textContent = customInput.value;
  showLabel.classList.remove("hidden");
  showRadio.classList.remove("hidden");
});
