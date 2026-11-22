// Ponto de entrada: inicia os módulos, mantém o contador do pedido e o
// aviso rápido, preenche textos que vêm de js/config.js e cuida da
// acessibilidade das janelas (fechar com Esc e prender o Tab dentro da
// janela aberta).
(function () {
  const el = (id) => document.getElementById(id);

  // Da mais "de cima" pra mais "de baixo": a primeira aberta é a que recebe Esc/Tab.
  const JANELAS = [
    { elemento: () => el("modal-zoom"), aberta: () => Zoom.estaAberto(), fechar: () => Zoom.fechar() },
    { elemento: () => el("modal-booster"), aberta: () => BoosterUI.estaAberto(), fechar: () => BoosterUI.fechar() },
    { elemento: () => el("modal-produto"), aberta: () => ProdutoDetalhe.estaAberto(), fechar: () => ProdutoDetalhe.fechar() },
    { elemento: () => el("modal-pedido"), aberta: () => Pedido.estaAberto(), fechar: () => Pedido.fechar() },
    { elemento: () => el("filtros"), aberta: () => Catalogo.filtrosAbertos(), fechar: () => Catalogo.fecharFiltros() },
  ];

  function atualizarContador() {
    const total = Carrinho.totalItens();
    const contador = el("contador-pedido");
    contador.textContent = total;
    contador.dataset.vazio = String(total === 0);
    el("botao-pedido").setAttribute("aria-label", total === 0 ? "Pedido vazio" : "Abrir pedido, " + total + (total === 1 ? " item" : " itens"));
  }

  function pulsarBotaoPedido() {
    const botao = el("botao-pedido");
    botao.classList.remove("bounce");
    void botao.offsetWidth; // força reflow pra reiniciar a animação em cliques seguidos
    botao.classList.add("bounce");
  }

  let avisoTimer = null;
  function mostrarAviso(evento) {
    const aviso = el("aviso");
    aviso.textContent = evento.detail.texto;
    aviso.dataset.tipo = evento.detail.tipo;
    aviso.hidden = false;
    clearTimeout(avisoTimer);
    avisoTimer = setTimeout(() => {
      aviso.hidden = true;
    }, evento.detail.tipo === "erro" ? 5000 : 2600);
  }

  function preencherTextosDaLoja() {
    const entrega = CONFIG.entregaOpcoes.map((o) => o.nome).join(" ou ");
    const pagamento = CONFIG.pagamentoOpcoes.map((o) => o.nome).join(" ou ");
    el("passo-entrega").textContent = "Entrega: " + entrega + ". Pagamento: " + pagamento + ".";
    el("rodape-info").textContent = "Pagamento: " + pagamento + ". Entrega: " + entrega + ".";
    el("rodape-aviso").textContent = CONFIG.avisoPrecos;
    const numero = CONFIG.whatsappNumero.replace(/^55(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
    const whats = el("rodape-whatsapp");
    whats.textContent = numero;
    whats.href = "https://wa.me/" + CONFIG.whatsappNumero;
  }

  function elementosFocaveis(container) {
    return Array.from(container.querySelectorAll('button, a[href], input, select, [tabindex]:not([tabindex="-1"])')).filter(
      (item) => !item.disabled && item.offsetParent !== null
    );
  }

  document.addEventListener("DOMContentLoaded", () => {
    Tema.iniciar();
    Catalogo.iniciar();
    ProdutoDetalhe.iniciar();
    Pedido.iniciar();
    atualizarContador();
    preencherTextosDaLoja();
    // o expositor fica escondido no celular: lá nem monta (são 5 imagens de carta em tamanho cheio)
    if (window.matchMedia("(min-width: 720px)").matches) HeroCartas.montar();

    document.addEventListener("carrinho:alterado", atualizarContador);
    document.addEventListener("carrinho:item-adicionado", pulsarBotaoPedido);
    document.addEventListener("loja:aviso", mostrarAviso);

    el("fechar-zoom").addEventListener("click", Zoom.fechar);
    el("modal-zoom").addEventListener("click", (evento) => {
      if (evento.target.id === "modal-zoom") Zoom.fechar();
    });

    document.addEventListener("keydown", (evento) => {
      const janela = JANELAS.find((j) => j.aberta());
      if (!janela) return;

      if (evento.key === "Escape") {
        janela.fechar();
        return;
      }

      if (evento.key === "Tab") {
        const focaveis = elementosFocaveis(janela.elemento());
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

    el("botao-whatsapp-flutuante").addEventListener("click", () => {
      const mensagem = "Olá! Vim pelo site e quero saber mais sobre os produtos.";
      window.open("https://wa.me/" + CONFIG.whatsappNumero + "?text=" + encodeURIComponent(mensagem), "_blank", "noopener");
    });


    BoosterUI.iniciar();
    SimuladorVitrine.iniciar();
    // o link "Abrir booster virtual" do produto usa este evento
    document.addEventListener("simulador:abrir", () => BoosterUI.abrir("reinado-delta"));
    el("fechar-booster").addEventListener("click", BoosterUI.fechar);
    el("modal-booster").addEventListener("click", (evento) => {
      if (evento.target.id === "modal-booster") BoosterUI.fechar();
    });

    // "Comprar booster real no catálogo": limpa filtros e destaca o produto da coleção aberta
    el("booster-comprar").addEventListener("click", (evento) => {
      evento.preventDefault();
      BoosterUI.fechar();
      Vistas.abrir("loja");
      Catalogo.limparFiltros();
      requestAnimationFrame(() => {
        const alvo = el("produto-" + BoosterUI.colecaoAtual().produtoId);
        if (!alvo) return;
        alvo.scrollIntoView({ behavior: "smooth", block: "center" });
        alvo.classList.add("produto-card--destaque");
        setTimeout(() => alvo.classList.remove("produto-card--destaque"), 1600);
      });
    });

    Vistas.iniciar();
  });
})();
