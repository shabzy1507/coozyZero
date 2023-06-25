"use strict";
const guestIncrement = document.getElementById("guestIncrease");
const peopleIncrement = document.getElementById("peopleIncrease");
const guestDecrement = document.getElementById("guestDecrease");
const peopleDecrement = document.getElementById("peopleDecrease");
const peopleMeasure = document.querySelector(".peopleMeasure");
const guestMeasure = document.querySelector(".guestMeasure");
guestIncrement.onclick = function () {
  if (guestMeasure.textContent >= 0) {
    guestMeasure.textContent++;
  }
};
guestDecrement.onclick = function () {
  if (guestMeasure.textContent > 0) {
    guestMeasure.textContent--;
  }
};
peopleIncrement.onclick = function () {
  if (peopleMeasure.textContent >= 0) {
    peopleMeasure.textContent++;
  }
};
peopleDecrement.onclick = function () {
  if (peopleMeasure.textContent > 0) {
    peopleMeasure.textContent--;
  }
};
