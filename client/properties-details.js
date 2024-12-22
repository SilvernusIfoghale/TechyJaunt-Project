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
