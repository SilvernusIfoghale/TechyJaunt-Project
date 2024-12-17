const email = document.querySelector("#email");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const password = document.querySelector("#password");
const form = document.querySelector("#form");
const confirmPassword = document.querySelector("#confirm-password");
const btnSignup = document.querySelector("#btn-signup");
const togglePassword = document.querySelector("#re-password");
const toggleConfirm = document.querySelector("#re-confirm");

let accountType = "tenant";

togglePassword.addEventListener("click", () => {
  if (togglePassword.classList.contains("fa-eye-slash")) {
    togglePassword.classList.replace("fa-eye-slash", "fa-eye");
    password.setAttribute("type", "text");
  } else {
    togglePassword.classList.replace("fa-eye", "fa-eye-slash");
    password.setAttribute("type", "password");
  }
});
toggleConfirm.addEventListener("click", () => {
  if (toggleConfirm.classList.contains("fa-eye-slash")) {
    toggleConfirm.classList.replace("fa-eye-slash", "fa-eye");
    confirmPassword.setAttribute("type", "text");
  } else {
    toggleConfirm.classList.replace("fa-eye", "fa-eye-slash");
    confirmPassword.setAttribute("type", "password");
  }
});
form.addEventListener("click", (e) => {
  e.preventDefault();
});

//===================================
const landlord = document.querySelector("#landlord");
const tenant = document.querySelector("#tenant");
const next = document.querySelector(".btn-next");
const account = document.querySelector(".account-section");
const formsection = document.querySelector(".form-section");

next.addEventListener("click", () => {
  if (landlord.checked) {
    accountType = "landlord";
  } else {
    accountType = "tenant";
  }
  console.log(accountType);
  account.classList.add("hidden");

  formsection.classList.add("visible");
});
