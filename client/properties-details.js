const imgMain = document.querySelector(".img-main");
const thumbnails = document.querySelectorAll(".img-thumb");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    imgMain.setAttribute("src", thumbnail.src);
  });
});
