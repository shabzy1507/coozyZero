const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const continueBtn = document.querySelector(".cta-btn");
const errMsg = document.querySelector(".incorrect");

function storeData(e) {
  e.preventDefault();
  if (password.value === confirmPassword.value) {
    let existingData = localStorage.getItem("signDataKey");
    existingData = existingData ? JSON.parse(existingData) : {};
    existingData.password = `${password.value}`;
    localStorage.setItem("signDataKey", JSON.stringify(existingData));
    console.log(existingData.email);
    window.location.href = "/signup/signup7.html";
  } else {
    errMsg.classList.remove("hidden");
  }
}
continueBtn.addEventListener("click", storeData);
