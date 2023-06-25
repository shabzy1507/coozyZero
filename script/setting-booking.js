const activeBtn = document.querySelector(".activeBtn");
const completedBtn = document.querySelector(".completedBtn");
const cancelledBtn = document.querySelector(".cancelledBtn");
const activeBox = document.querySelectorAll(".activeInfo-box");
const cancelledBox = document.querySelectorAll(".cancelledInfo-box");
const completedBox = document.querySelectorAll(".completedInfo-box");

activeBtn.addEventListener("click", function () {
  activeBtn.classList.add("active-activeBtn");
  completedBtn.classList.remove("active-completedBtn");
  cancelledBtn.classList.remove("active-cancelledBtn");
  for (let i = 0; i < activeBox.length; i++) {
    activeBox[i].classList.remove("hidden");
    cancelledBox[i].classList.add("hidden");
    completedBox[i].classList.add("hidden");
  }
});

completedBtn.addEventListener("click", function () {
  activeBtn.classList.remove("active-activeBtn");
  completedBtn.classList.add("active-completedBtn");
  cancelledBtn.classList.remove("active-cancelledBtn");
  for (let i = 0; i < activeBox.length; i++) {
    activeBox[i].classList.add("hidden");
    cancelledBox[i].classList.add("hidden");
    completedBox[i].classList.remove("hidden");
  }
});

cancelledBtn.addEventListener("click", function () {
  activeBtn.classList.remove("active-activeBtn");
  completedBtn.classList.remove("active-completedBtn");
  cancelledBtn.classList.add("active-cancelledBtn");
  for (let i = 0; i < activeBox.length; i++) {
    activeBox[i].classList.add("hidden");
    cancelledBox[i].classList.remove("hidden");
    completedBox[i].classList.add("hidden");
  }
});
