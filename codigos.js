const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const opcao = document.querySelector(".opcao")

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

opcao.addEventListener("click", () => nav.classList.toggle("active"));



