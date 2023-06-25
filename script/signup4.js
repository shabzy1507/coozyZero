const signUpEmail = document.getElementById("signUpEmail");
const continueBtn = document.querySelector(".cta-btn");
const form = document.querySelector("form");
// let signUpData = {};
// signUpData.email = "knwlnwln";
// const addData = (email, first_name, last_name, password, phone_number) => {
//   signUpData.push({
//     email,
//     first_name,
//     last_name,
//     password,
//     phone_number,
//   });
//   let signUpDataJson = JSON.stringify(signUpData);
//   localStorage.setItem("signDataKey", signUpDataJson);
//   let signUpDataObj = JSON.parse(localStorage.getItem("signDataKey"));
//   console.log(localStorage);
// };
let signUpData = {
  email: "string",
  first_name: "string",
  last_name: "string",
  password: "string",
  phone_number: "string",
  account_type: "Agent",
  id_name: "string",
  id_number: "string",
  agent_phone_number: "string",
  home_address: "string",
  gender: "Male",
  date_of_birth: "2023-05-31",
};
let signUpDataJson = JSON.stringify(signUpData);
localStorage.setItem("signDataKey", signUpDataJson);

function storeData(e) {
  e.preventDefault();
  let existingData = localStorage.getItem("signDataKey");
  existingData = existingData ? JSON.parse(existingData) : {};
  existingData.email = `${signUpEmail.value}`;
  localStorage.setItem("signDataKey", JSON.stringify(existingData));
  console.log(existingData.email);
  window.location.href = "/signup/signup5.html";
  // const addData{
  // const newData = addData(email.value);
  // return { n };
  // }
  // signUpEmail.value = signUpData.email;
  // let signUpDataJson = JSON.stringify(signUpData);
  // localStorage.setItem("signDataKey", signUpDataJson);
  // let signUpDataObj = JSON.parse(localStorage.getItem("signDataKey"));
  // console.log(localStorage);
  // console.log(signUpDataObj);
}
continueBtn.addEventListener("click", storeData);
