import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

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

const auth = getAuth(app);

const provider = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();
auth.languageCode = "en";

const btnGoogle = document.querySelector(".google-sign-in");

btnGoogle.addEventListener("click", () => {
  const savedAccountType = localStorage.getItem("accountType");
  console.log(savedAccountType);
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      localStorage.setItem("loggedInUserId", user.uid);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // const user = JSON.stringify(result.user);
      // localStorage.setItem("user", user);
      // console.log(user);

      if (savedAccountType == "tenant") {
        window.location.href = "./../client/index.html";
      } else {
        window.location.href = "./../landlord/index.html";
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      alert(errorMessage);
    });
});
//facebook

const btnFacebook = document.querySelector(".facebook-sign-in");
btnFacebook.addEventListener("click", () => {
  signInWithPopup(auth, providerFacebook)
    .then((result) => {
      const user = result.user;
      localStorage.setItem("loggedInUserId", user.uid);
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      // const user = JSON.stringify(result.user);
      // localStorage.setItem("user", user);
      // console.log(user);
      const savedAccountType = localStorage.getItem("accountType");
      console.log(savedAccountType);
      if (savedAccountType == "tenant") {
        // console.log(user);
        window.location.href = "./../client/index.html";
      } else {
        window.location.href = "./../landlord/index.html";
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = FacebookAuthProvider.credentialFromError(error);
      console.log(errorMessage);
    });
});
