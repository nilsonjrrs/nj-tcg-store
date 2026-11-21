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

  function modalAbertoAtivo() {
    if (modalEstaAberto()) return document.getElementById("modal-pedido");
    if (Zoom.estaAberto()) return document.getElementById("modal-zoom");
    if (BoosterUI.estaAberto()) return document.getElementById("modal-booster");
    return null;
  }

  document.addEventListener("DOMContentLoaded", () => {
    Catalogo.iniciar();
    atualizarContador();
    preencherRodape();
    HeroCartas.montar();

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

    document.getElementById("fechar-zoom").addEventListener("click", Zoom.fechar);
    document.getElementById("modal-zoom").addEventListener("click", (evento) => {
      if (evento.target.id === "modal-zoom") Zoom.fechar();
    });

    document.addEventListener("keydown", (evento) => {
      const modalAtivo = modalAbertoAtivo();
      if (!modalAtivo) return;

      if (evento.key === "Escape") {
        if (modalAtivo.id === "modal-pedido") fecharModal();
        else if (modalAtivo.id === "modal-zoom") Zoom.fechar();
        else BoosterUI.fechar();
        return;
      }

      if (evento.key === "Tab") {
        const focaveis = elementosFocaveis(modalAtivo);
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

    document.getElementById("botao-whatsapp-flutuante").addEventListener("click", () => {
      const mensagem = "Olá! Vim pelo site e quero saber mais sobre os produtos.";
      const url = "https://wa.me/" + CONFIG.whatsappNumero + "?text=" + encodeURIComponent(mensagem);
      window.open(url, "_blank", "noopener");
    });

    document.getElementById("busca-produto").addEventListener("input", (evento) => {
      Catalogo.definirBusca(evento.target.value);
    });

    BoosterUI.iniciar();
    SimuladorVitrine.iniciar();
    // o link "Abrir booster virtual" fica no card do Booster Avulso de Reinado Delta
    document.addEventListener("simulador:abrir", () => BoosterUI.abrir("reinado-delta"));
    document.getElementById("fechar-booster").addEventListener("click", BoosterUI.fechar);
    document.getElementById("modal-booster").addEventListener("click", (evento) => {
      if (evento.target.id === "modal-booster") BoosterUI.fechar();
    });

    document.getElementById("booster-comprar").addEventListener("click", (evento) => {
      evento.preventDefault();
      BoosterUI.fechar();
      Catalogo.limparFiltros();
      requestAnimationFrame(() => {
        const alvo = document.getElementById("produto-" + BoosterUI.colecaoAtual().produtoId);
        if (!alvo) return;
        alvo.scrollIntoView({ behavior: "smooth", block: "center" });
        alvo.classList.add("produto-card--destaque");
        setTimeout(() => alvo.classList.remove("produto-card--destaque"), 1600);
      });
    });
  });
})();
