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

//Firebase login
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
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
  const password = document.querySelector("#password").value;
  if (email && password && savedAccountType == "tenant") {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      alert("Successful ✔️");
      const user = userCredential.user;
      localStorage.setItem("loggedInUserId", user.uid);
      window.location.href = "./../client/index.html";
    });
  } else if (email.value && password.value && savedAccountType == "landlord") {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Successful ✔️");
        const user = userCredential.user;
        localStorage.setItem("loggedInUserId", user.uid);
        window.location.href = "./../landlord/index.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/invalid-credential") {
          alert("Incorrect Email or Password");
        } else {
          alert("Account does not Exist");
        }
      });
  } else {
    alert("Invalid username or password ❌");
  }
  //   console.log(accountType);
});

//===================================
