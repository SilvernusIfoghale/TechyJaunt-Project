const toggle = document.querySelector(".toggle");
const toggleBtn = document.querySelector(".fa-solid");
const nav = document.querySelector(".right-nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("visible");
  if (nav.classList.contains("visible")) {
    toggleBtn.classList.replace("fa-bars", "fa-xmark");
  } else {
    toggleBtn.classList.replace("fa-xmark", "fa-bars");
  }
});
