const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const continueBtn = document.querySelector(".cta-btn");

function storeData(e) {
  e.preventDefault();
  let existingData = localStorage.getItem("signDataKey");
  existingData = existingData ? JSON.parse(existingData) : {};
  existingData.first_name = `${first_name.value}`;
  existingData.last_name = `${last_name.value}`;
  localStorage.setItem("signDataKey", JSON.stringify(existingData));
  console.log(existingData.email);
  window.location.href = "/signup/signup6.html";
}
continueBtn.addEventListener("click", storeData);
