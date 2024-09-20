const menu = document.querySelector(".navigation");
const btnBurger = document.querySelector(".burger");

btnBurger.addEventListener("click", mobileMenu);

function mobileMenu() {
  menu.classList.toggle("active");
}
