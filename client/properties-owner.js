const dark = document.querySelector(".dark");
const modal = document.querySelector(".modal");

const btnApply = document.querySelector(".btn-apply");

const btnApplyPay = document.querySelector(".btn-apply-for-rent");

btnApply.addEventListener("click", () => {
  dark.classList.add("visible");
  dark.classList.add("dark-background");
  modal.classList.add("visible");
});

btnApplyPay.addEventListener("click", (e) => {
  e.preventDefault();
  // window.location.href = "./properties-account.html";
});
