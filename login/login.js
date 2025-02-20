const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector("#form");
const confirmPassword = document.querySelector("#confirm-password");
const btnSignup = document.querySelector("#btn-signup");
const togglePassword = document.querySelector("#re-password");

// let accountType = "tenant";
const savedAccountType = localStorage.getItem("accountType");
togglePassword.addEventListener("click", () => {
  if (togglePassword.classList.contains("fa-eye-slash")) {
    togglePassword.classList.replace("fa-eye-slash", "fa-eye");
    password.setAttribute("type", "text");
  } else {
    togglePassword.classList.replace("fa-eye", "fa-eye-slash");
    password.setAttribute("type", "password");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value && password.value && savedAccountType == "tenant") {
    alert("Successful ✔️");
    window.location.href = "./../client/index.html";
  } else if (email.value && password.value && savedAccountType == "landlord") {
    window.location.href = "./../landlord/index.html";
  } else {
    alert("Invalid username or password ❌");
  }
  //   console.log(accountType);
});

//===================================
