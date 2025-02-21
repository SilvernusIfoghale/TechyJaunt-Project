const imgMain = document.querySelector(".img-main");
const thumbnails = document.querySelectorAll(".img-thumb");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    imgMain.setAttribute("src", thumbnail.src);
  });
});

const contact = document.querySelector(".btn-contact");

contact.addEventListener("click", () => {
  window.location.href = "./property-owner.html";
});

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
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

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    const userName = user?.displayName;
    const userEmail = user?.email;
    const userProfilePicture = user?.photoURL;
    console.log(userProfilePicture);

    document.getElementById("userName").textContent = userName;
    if (userProfilePicture) {
      document.getElementById("userProfilePicture").src = userProfilePicture;
    }
  } else {
    window.location.href = "./../index.html";
  }
});

// sign out

document.querySelector(".btn-logout").addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      window.location.href = "./../index.html";
    })
    .catch((error) => {
      console.log("Error", error.message);
    });
});
