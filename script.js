const botaoMenu = document.querySelector("#botao-menu");
const menu = document.querySelector("#menu");
const linksMenu = document.querySelectorAll("#menu a");

/* MENU PARA CELULAR */
if (botaoMenu && menu) {
  botaoMenu.addEventListener("click", () => {
    const menuEstaAberto = menu.classList.toggle("aberto");
    botaoMenu.setAttribute("aria-expanded", menuEstaAberto);
    botaoMenu.textContent = menuEstaAberto ? "✕" : "☰";
  });
}

linksMenu.forEach((link) => {
  link.addEventListener("click", () => {
    menu?.classList.remove("aberto");
    botaoMenu?.setAttribute("aria-expanded", "false");
    if (botaoMenu) botaoMenu.textContent = "☰";
  });
});

/* CONTADORES AUTOMÁTICOS */
function atualizarContadores() {
  const relatos = document.querySelectorAll(".relato");
  const plantas = document.querySelectorAll(".planta").length;
  const fotos = document.querySelectorAll(".grade-galeria img, .relato-imagem img").length;

  const contadorRelatos = document.querySelector("#total-relatos");
  const contadorSemanas = document.querySelector("#total-semanas");
  const contadorPlantas = document.querySelector("#total-plantas");
  const contadorFotos = document.querySelector("#total-fotos");

  if (contadorRelatos) {
    contadorRelatos.textContent = relatos.length;
  }

  if (contadorSemanas) {
    // Exemplo estático de semanas de projeto
    contadorSemanas.textContent = "4";
  }

  if (contadorPlantas) {
    contadorPlantas.textContent = plantas;
  }

  if (contadorFotos) {
    contadorFotos.textContent = fotos;
  }
}

atualizarContadores();

/* ANO AUTOMÁTICO NO RODAPÉ */
const anoAtual = document.querySelector("#ano-atual");
if (anoAtual) {
  anoAtual.textContent = new Date().getFullYear();
}
