"use strict";
const fieldIn = document.querySelector("#checkIn");
const fieldOut = document.querySelector("#checkOut");
const submit = document.querySelector(".checking-btn");
const checkInDate = document.querySelector(".checkIn-date");
const checkOutDate = document.querySelector(".checkOut-date");
const combineDate = document.querySelector(".combine-dates");
// handle date changes
// fieldIn.valueAsDate = new Date();
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// ("The current month is " + monthNames[d.getMonth()])
let checkIn;
let checkOut;
submit.addEventListener("click", function () {
  checkIn = fieldIn.valueAsDate;
  checkOut = fieldOut.valueAsDate;
  console.log(
    `${monthNames[checkIn.getMonth()]} ${checkIn.getDate()} - ${
      monthNames[checkOut.getMonth()]
    } ${checkOut.getDate()} ${checkIn.getFullYear()}`
  );
  combineDate.textContent = `${
    monthNames[checkIn.getMonth()]
  } ${checkIn.getDate()} - ${
    monthNames[checkOut.getMonth()]
  } ${checkOut.getDate()} ${checkIn.getFullYear()}`;

  checkInDate.textContent = `${
    monthNames[checkIn.getMonth()]
  } ${checkIn.getDate()} ${checkIn.getFullYear()}`;
  checkOutDate.textContent = `${
    monthNames[checkOut.getMonth()]
  } ${checkOut.getDate()} ${checkIn.getFullYear()}`;

  console.log(checkIn.getFullYear(), checkOut);
});
const currentDate = new Date();
// console.log(currentDate);
// checkIn = function () {
//   checkIn = fieldIn.valueAsDate;
// };
// fieldIn.addEventListener("input", checkIn);
// console.log(checkIn());
// //  function () {
// //   checkIn = fieldIn.valueAsDate;
// //   // if(){

// //   // }
// //   console.log(checkIn);
// // });
// fieldOut.addEventListener("input", function () {
//   checkOut = fieldOut.valueAsDate;
//   console.log(checkOut);
// });
