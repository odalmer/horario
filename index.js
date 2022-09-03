const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const container = document.getElementById("container");
const horario = document.getElementById("horario");

let menuStatus;

menuBtn.addEventListener("click", () => {
  if (menu.style.display == "block") {
    menuStatus = "none";
    container.style.gridTemplateColumns = "auto";
  } else {
    menuStatus = "block";
    container.style.gridTemplateColumns = "20rem 67.5%";
  }
  menu.style.display = menuStatus;
});
