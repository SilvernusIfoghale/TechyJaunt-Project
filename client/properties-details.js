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

const user = localStorage.getItem("user");
const userData = JSON.parse(user);
console.log(userData);

// document
//   .getElementById("loginForm")
//   .addEventListener("submit", async (event) => {
//     event.preventDefault();

//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     try {
//       const response = await fetch(
//         "https://techyjaunt-final-project-1.onrender.com/user/login",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ username, password }),
//         }
//       );

//       const data = await response.json();
//       if (response.ok) {
//         alert(data.message); // Handle successful login
//
//       } else {
//         alert(data.message); // Handle error
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred. Please try again.");
//     }
//   });

function updateUserProfile(userData) {
  const userName = userData?.displayName;
  const userEmail = userData?.email;
  const userProfilePicture = userData?.photoURL;
  console.log(userProfilePicture);

  document.getElementById("userName").textContent = userName;
  if (userProfilePicture) {
    document.getElementById("userProfilePicture").src = userProfilePicture;
  }
}

updateUserProfile(userData);
document.querySelector(".btn-logout").addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "./../index.html";
});
