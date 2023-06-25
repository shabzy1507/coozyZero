const bathroomIncrement = document.getElementById("bathroomIncrease");
const bathroomDecrement = document.getElementById("bathroomDecrease");
const bathroomMeasure = document.querySelector(".bathroomMeasure");
bathroomIncrement.onclick = function () {
  if (bathroomMeasure.textContent >= 0) {
    bathroomMeasure.textContent++;
  }
};
bathroomDecrement.onclick = function () {
  if (bathroomMeasure.textContent > 0) {
    bathroomMeasure.textContent--;
  }
};
