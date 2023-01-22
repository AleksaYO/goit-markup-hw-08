const colorSwitcher = document.querySelector(".js-color__switch");
const body = document.querySelector("body");

colorSwitcher.addEventListener("click", () => {
  body.classList.toggle("js-theme");
});
