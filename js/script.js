let menu = document.querySelector(".menu");
let menuHamburguer = document.querySelector(".menu-hamburguer");

menuHamburguer.addEventListener("click", menuOpen);

function menuOpen() {
    menu.classList.toggle("menu-open");
}