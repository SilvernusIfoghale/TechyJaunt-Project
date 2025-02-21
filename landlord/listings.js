const user = localStorage.getItem("user");
const userData = JSON.parse(user);
console.log(userData);

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
