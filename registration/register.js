const form = document.querySelector("#form");
const btnSignup = document.querySelector("#btn-signup");
const togglePassword = document.querySelector("#re-password");
const toggleConfirm = document.querySelector("#re-confirm");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
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

//===================================
const landlord = document.querySelector("#landlord");
const tenant = document.querySelector("#tenant");
const next = document.querySelector(".btn-next");
const account = document.querySelector(".account-section");
const formsection = document.querySelector(".form-section");

// console.log(landlord.checked);
// console.log(tenant.checked);

next.addEventListener("click", () => {
  if (landlord.checked) {
    let accountType = "landlord";
    localStorage.setItem("accountType", accountType);
  } else if (tenant.checked) {
    let accountType = "tenant";
    localStorage.setItem("accountType", accountType);
  }
  account.classList.add("hidden");
  formsection.classList.add("visible");
});

//Email and Password Login
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBazHNvBbgW1pVf00R2QcUBocECxA9d15o",
  authDomain: "nestify-e5ad9.firebaseapp.com",
  projectId: "nestify-e5ad9",
  storageBucket: "nestify-e5ad9.firebasestorage.app",
  messagingSenderId: "581222877627",
  appId: "1:581222877627:web:241241b6ac572f0b2f1c9e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Db
const db = getFirestore(app);

const auth = getAuth(app);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#email").value;
  const firstName = document.querySelector("#firstname").value;
  const lastName = document.querySelector("#lastname").value;
  const password = document.querySelector("#password").value;
  const confirmPassword = document.querySelector("#confirm-password").value;

  if (password !== confirmPassword) {
    alert("Password do not match ❌");
  } else if (password.length < 6) {
    alert("Password should be at least 6 characters");
  } else if (password === confirmPassword) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        const userData = {
          email: email,
          firstName: firstName,
          lastName: lastName,
          password: password,
        };

        const docRef = doc(db, "users", user.uid);
        setDoc(docRef, userData)
          .then(() => {
            console.log("Account Created Successfully");
            window.location.href = "./../login/login.html";
          })
          .catch((error) => {
            alert("Something went wrong 😥", errorMessage);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode == "auth/email-already-in-use") {
          alert("Email Address Already Exists!");
        } else {
          alert("Unable to create User");
        }
      });
  }
});
