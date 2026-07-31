const botaoMenu = document.querySelector("#botao-menu");
const menu = document.querySelector("#menu");
const linksMenu = document.querySelectorAll("#menu a");

const filtros = document.querySelectorAll(".filtro");
const relatos = document.querySelectorAll(".relato");
const mensagemVazia = document.querySelector("#mensagem-vazia");

const modal = document.querySelector("#modal-relato");
const botoesLerMais = document.querySelectorAll(".ler-mais");
const botoesFecharModal = document.querySelectorAll("[data-fechar-modal]");

// MENU PARA CELULAR
botaoMenu.addEventListener("click", () => {
  const menuEstaAberto = menu.classList.toggle("aberto");

  botaoMenu.setAttribute("aria-expanded", menuEstaAberto);
  botaoMenu.textContent = menuEstaAberto ? "✕" : "☰";
});

linksMenu.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("aberto");
    botaoMenu.setAttribute("aria-expanded", "false");
    botaoMenu.textContent = "☰";
  });
});

// FILTRO DOS RELATOS
filtros.forEach((botao) => {
  botao.addEventListener("click", () => {
    filtros.forEach((item) => item.classList.remove("ativo"));
    botao.classList.add("ativo");

    const categoriaEscolhida = botao.dataset.filtro;
    let totalVisivel = 0;

    relatos.forEach((relato) => {
      const categoriaDoRelato = relato.dataset.categoria;

      const deveAparecer =
        categoriaEscolhida === "todos" ||
        categoriaDoRelato === categoriaEscolhida;

      relato.classList.toggle("oculto", !deveAparecer);

      if (deveAparecer) {
        totalVisivel++;
      }
    });

    mensagemVazia.hidden = totalVisivel !== 0;
  });
});

// MODAL COM O RELATO COMPLETO
function abrirModal(relato) {
  const titulo = relato.querySelector("h3").textContent;

  const texto = relato
    .querySelector(".relato-conteudo > p")
    .textContent
    .trim();

  const autor = relato.querySelector(".autor").textContent;
  const categoria = relato.querySelector(".categoria").textContent;

  const informacoes = [
    ...relato.querySelectorAll(".relato-informacoes span")
  ]
    .map((item) => item.textContent)
    .join(" • ");

  document.querySelector("#modal-titulo").textContent = titulo;
  document.querySelector("#modal-texto").textContent = texto;
  document.querySelector("#modal-autor").textContent = autor;
  document.querySelector("#modal-categoria").textContent = categoria;
  document.querySelector("#modal-dados").textContent = informacoes;

  modal.classList.add("aberto");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-aberto");
}

function fecharModal() {
  modal.classList.remove("aberto");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-aberto");
}

botoesLerMais.forEach((botao) => {
  botao.addEventListener("click", () => {
    const relato = botao.closest(".relato");
    abrirModal(relato);
  });
});

botoesFecharModal.forEach((botao) => {
  botao.addEventListener("click", fecharModal);
});

document.addEventListener("keydown", (evento) => {
  if (
    evento.key === "Escape" &&
    modal.classList.contains("aberto")
  ) {
    fecharModal();
  }
});

// CONTADORES AUTOMÁTICOS
function atualizarContadores() {
  const semanas = new Set(
    [...relatos].map((relato) => relato.dataset.semana)
  ).size;

  const plantas = document.querySelectorAll(".planta").length;

  const fotos = document.querySelectorAll(
    ".grade-galeria img, .relato-imagem img"
  ).length;

  document.querySelector("#total-relatos").textContent =
    relatos.length;

  document.querySelector("#total-semanas").textContent =
    semanas;

  document.querySelector("#total-plantas").textContent =
    plantas;

  document.querySelector("#total-fotos").textContent =
    fotos;
}

atualizarContadores();

// ANO AUTOMÁTICO NO RODAPÉ
document.querySelector("#ano-atual").textContent =
  new Date().getFullYear();
