const btn1 = document.querySelector(".slider-btn1");
const btn2 = document.querySelector(".slider-btn2");
const btn3 = document.querySelector(".slider-btn3");
const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");
const page3 = document.querySelector(".page3");

btn2.addEventListener("click", function () {
  btn3.classList.remove("btn-active");
  btn1.classList.remove("btn-active");
  btn2.classList.add("btn-active");
  page2.classList.remove("hidden");
  page1.classList.add("hidden");
  page3.classList.add("hidden");
});
btn3.addEventListener("click", function () {
  btn1.classList.remove("btn-active");
  btn2.classList.remove("btn-active");
  btn3.classList.add("btn-active");
  page3.classList.remove("hidden");
  page1.classList.add("hidden");
  page2.classList.add("hidden");
});
btn1.addEventListener("click", function () {
  btn3.classList.remove("btn-active");
  btn2.classList.remove("btn-active");
  btn1.classList.add("btn-active");
  page1.classList.remove("hidden");
  page3.classList.add("hidden");
  page2.classList.add("hidden");
});
