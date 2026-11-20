// Ponto de entrada: liga catálogo, carrinho e pedido aos elementos da página,
// cuida do contador flutuante, do rodapé e da acessibilidade do modal
// (fechar com Esc, devolver foco, prender o Tab dentro do modal aberto).
(function () {
  let ultimoFocoAntesDoModal = null;

  function atualizarContador() {
    document.getElementById("contador-pedido").textContent = "(" + Carrinho.totalItens() + ")";
  }

  function pulsarBotaoPedido() {
    const botao = document.getElementById("botao-pedido");
    botao.classList.remove("bounce");
    void botao.offsetWidth; // força reflow pra poder reiniciar a animação em cliques seguidos
    botao.classList.add("bounce");
  }

  function preencherRodape() {
    const entregaTextos = CONFIG.entregaOpcoes.map((o) => o.nome).join(" ou ");
    const pagamentoTextos = CONFIG.pagamentoOpcoes.map((o) => o.nome).join(" ou ");
    document.getElementById("rodape-info").textContent =
      "Pagamento: " + pagamentoTextos + " • Entrega: " + entregaTextos;
    document.getElementById("rodape-aviso").textContent = CONFIG.avisoPrecos;
  }

  function elementosFocaveis(container) {
    return Array.from(
      container.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])')
    ).filter((el) => !el.disabled && el.offsetParent !== null);
  }

  function abrirModal() {
    ultimoFocoAntesDoModal = document.activeElement;
    Pedido.abrir();
    const modal = document.getElementById("modal-pedido");
    modal.hidden = false;
    document.getElementById("fechar-modal").focus();
  }

  function fecharModal() {
    document.getElementById("modal-pedido").hidden = true;
    if (ultimoFocoAntesDoModal) ultimoFocoAntesDoModal.focus();
  }

  function modalEstaAberto() {
    return !document.getElementById("modal-pedido").hidden;
  }

  document.addEventListener("DOMContentLoaded", () => {
    Catalogo.iniciar();
    atualizarContador();
    preencherRodape();

    document.addEventListener("carrinho:alterado", atualizarContador);
    document.addEventListener("carrinho:item-adicionado", pulsarBotaoPedido);

    document.getElementById("botao-pedido").addEventListener("click", abrirModal);
    document.getElementById("botao-pedido").addEventListener("animationend", (evento) => {
      if (evento.animationName === "bounce-pedido") evento.target.classList.remove("bounce");
    });
    document.getElementById("fechar-modal").addEventListener("click", fecharModal);

    document.getElementById("modal-pedido").addEventListener("click", (evento) => {
      if (evento.target.id === "modal-pedido") fecharModal();
    });

    document.addEventListener("keydown", (evento) => {
      if (!modalEstaAberto()) return;

      if (evento.key === "Escape") {
        fecharModal();
        return;
      }

      if (evento.key === "Tab") {
        const conteudo = document.querySelector("#modal-pedido .modal-conteudo");
        const focaveis = elementosFocaveis(conteudo);
        if (focaveis.length === 0) return;
        const primeiro = focaveis[0];
        const ultimo = focaveis[focaveis.length - 1];

        if (evento.shiftKey && document.activeElement === primeiro) {
          evento.preventDefault();
          ultimo.focus();
        } else if (!evento.shiftKey && document.activeElement === ultimo) {
          evento.preventDefault();
          primeiro.focus();
        }
      }
    });

    document.getElementById("botao-whatsapp").addEventListener("click", () => {
      if (Carrinho.itens().length === 0) return;
      const mensagem = Pedido.montarMensagem();
      const url = "https://wa.me/" + CONFIG.whatsappNumero + "?text=" + encodeURIComponent(mensagem);
      window.open(url, "_blank", "noopener");
    });
  });
})();
