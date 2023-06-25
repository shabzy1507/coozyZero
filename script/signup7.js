const mobileNo = document.querySelector(".mobile");
const continueBtn = document.querySelector(".cta-btn");
function storeData(e) {
  e.preventDefault();
  let existingData = localStorage.getItem("signDataKey");
  existingData = existingData ? JSON.parse(existingData) : {};
  existingData.mobile_no = `${mobileNo.value}`;
  localStorage.setItem("signDataKey", JSON.stringify(existingData));
  let otpData = {
    email_address: "user@example.com",
    phone_number: ` ${existingData.mobile_no}`,
    purpose: "Email Verification",
  };
  // console.log(otpData.phone_number);
  fetch("http://cozzy-app.fly.dev/api/v1/otp/generate/", {
    method: "post",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(otpData),
    // console.log(existingData.mobile_no);
  });
  // window.location.href = "/signup/signup8.html";
}
continueBtn.addEventListener("click", storeData);
