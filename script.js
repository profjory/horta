// SCRIPT HORTA CQC AGRO

document.addEventListener('DOMContentLoaded', () => {
  // Atualizar ano atual no rodapé
  const elementoAno = document.getElementById('ano-atual');
  if (elementoAno) {
    elementoAno.textContent = new Date().getFullYear();
  }

  // Toggle do menu mobile
  const botaoMenu = document.getElementById('botao-menu');
  const menu = document.getElementById('menu');

  if (botaoMenu && menu) {
    botaoMenu.addEventListener('click', () => {
      menu.classList.toggle('ativo');
      const expandido = menu.classList.contains('ativo');
      botaoMenu.setAttribute('aria-expanded', expandido);
    });

    // Fechar menu ao clicar num link
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('ativo');
        botaoMenu.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
