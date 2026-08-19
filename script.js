// FUNCIONALIDADE PARA AMPLIAR IMAGENS AO CLICAR (LIGHTBOX)

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal-imagem');
    const imgModal = document.getElementById('img-ampliada');
    const legendaModal = document.getElementById('legenda-modal');
    const btnFechar = document.getElementsByClassName('fechar')[0];

    // Seleciona todos os containers de imagem marcados com a classe .zoomable
    const imagensZoom = document.querySelectorAll('.zoomable img');

    imagensZoom.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            imgModal.src = this.src;
            legendaModal.innerHTML = this.alt;
        });
    });

    // Fechar no X
    btnFechar.onclick = function() {
        modal.style.display = "none";
    }

    // Fechar ao clicar fora da imagem
    modal.onclick = function(e) {
        if (e.target !== imgModal) {
            modal.style.display = "none";
        }
    }
});
