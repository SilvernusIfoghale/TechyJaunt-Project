// const user = localStorage.getItem("user");
// const userData = JSON.parse(user);
// console.log(userData);

// function updateUserProfile(userData) {
//   const userName = userData?.displayName;
//   const userEmail = userData?.email;
//   const userProfilePicture = userData?.photoURL;
//   console.log(userProfilePicture);

//   document.getElementById("userName").textContent = userName;
//   if (userProfilePicture) {
//     document.getElementById("userProfilePicture").src = userProfilePicture;
//   }
// }

// updateUserProfile(userData);

// document.querySelector(".btn-logout").addEventListener("click", () => {
//   localStorage.clear();
//   window.location.href = "./../index.html";
// });

//..................

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
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

const auth = getAuth(app);
const db = getFirestore();

onAuthStateChanged(auth, (user) => {
  // const loggedInUserId = localStorage.getItem("loggedInUserId");
  if (user) {
    const uid = user.uid;
    const userName = user?.displayName;
    const userEmail = user?.email;
    const userProfilePicture = user?.photoURL;
    // console.log(userProfilePicture);

    document.getElementById("userName").textContent = userName;
    if (userProfilePicture) {
      document.getElementById("userProfilePicture").src = userProfilePicture;
    }
  }
});

onAuthStateChanged(auth, (user) => {
  const loggedInUserId = localStorage.getItem("loggedInUserId");
  if (loggedInUserId) {
    const docRef = doc(db, "users", loggedInUserId);
    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          const userData = docSnap.data();
          console.log(userData);
          document.getElementById("userName").textContent = userData.firstName;
        } else {
          console.log("No document found matching id");
        }
      })
      .catch((error) => {
        alert("Logging out,..");
      });
  } else {
    console.log("User id not found.");
    window.location.href = "./../index.html";
  }
});

// sign out

document.querySelector(".btn-logout").addEventListener("click", () => {
  localStorage.removeItem("loggedInUserId");
  signOut(auth)
    .then(() => {
      window.location.href = "./../index.html";
    })
    .catch((error) => {
      alert("Error Signin Out");
    });
});
