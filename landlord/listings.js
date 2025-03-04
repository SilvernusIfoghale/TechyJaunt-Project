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

const formProperty = document.querySelector("#formProperty");

formProperty.addEventListener("click", (e) => {
  e.preventDefault();
});

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

//listings

const dropArea = document.getElementById("drop-area");
const gallery = document.getElementById("gallery");
const fileInput = document.getElementById("fileElem");

dropArea.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropArea.classList.add("hover");
});

dropArea.addEventListener("dragleave", () => {
  dropArea.classList.remove("hover");
});

dropArea.addEventListener("drop", (event) => {
  event.preventDefault();
  dropArea.classList.remove("hover");
  const files = event.dataTransfer.files;
  handleFiles(files);
});

dropArea.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", (event) => {
  const files = event.target.files;
  handleFiles(files);
});

function handleFiles(files) {
  if (files.length + gallery.children.length > 10) {
    alert("You can only upload up to 10 images.");
    return;
  }
  Array.from(files).forEach(uploadFile);
}

function uploadFile(file) {
  const thumbnail = document.createElement("div");
  thumbnail.classList.add("thumbnail");

  const img = document.createElement("img");
  img.src = URL.createObjectURL(file);
  thumbnail.appendChild(img);

  const progressBar = document.createElement("div");
  progressBar.classList.add("progress");
  thumbnail.appendChild(progressBar);

  gallery.appendChild(thumbnail);

  // Simulate upload progress
  let progress = 0;
  const interval = setInterval(() => {
    progress += 10; // Simulate progress
    progressBar.style.width = progress + "%";

    if (progress >= 100) {
      clearInterval(interval);
    }
  }, 100);
}
