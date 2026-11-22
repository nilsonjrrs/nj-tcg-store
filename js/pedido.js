// Pedido (o "carrinho" da loja, #modal-pedido): itens com foto e seletor de
// quantidade, subtotal, escolha de entrega/pagamento e a mensagem final do
// WhatsApp. Não existe checkout nem pagamento online: frete, estoque e
// pagamento são confirmados na conversa.
const Pedido = (function () {
  let entregaSelecionada = CONFIG.entregaOpcoes[0].id;
  let pagamentoSelecionado = CONFIG.pagamentoOpcoes[0].id;
  let ultimoFoco = null;

  const el = (id) => document.getElementById(id);
  const formatarPreco = (valor) => Catalogo.formatarPreco(valor);

  function renderizarOpcoes(containerId, opcoes, selecionadoId, aoSelecionar) {
    const container = el(containerId);
    container.innerHTML = "";
    opcoes.forEach((opcao) => {
      const botao = document.createElement("button");
      botao.type = "button";
      botao.className = "chip";
      botao.textContent = opcao.nome;
      botao.setAttribute("aria-pressed", String(opcao.id === selecionadoId));
      botao.addEventListener("click", () => {
        aoSelecionar(opcao.id);
        renderizar();
      });
      container.appendChild(botao);
    });
  }

  function criarItem({ produto, quantidade }) {
    const li = document.createElement("li");
    li.className = "pedido-item";

    const foto = document.createElement("div");
    foto.className = "pedido-item-foto";
    if (produto.img) {
      const img = document.createElement("img");
      img.src = produto.img;
      img.alt = "";
      img.addEventListener("error", () => img.remove());
      foto.appendChild(img);
    }

    const nome = document.createElement("p");
    nome.className = "pedido-item-nome";
    nome.textContent = produto.nome;
    const dados = document.createElement("small");
    dados.textContent = produto.colecao + ", " + produto.idioma.toLowerCase() + ". " + formatarPreco(produto.preco) + " cada";
    nome.appendChild(dados);

    const remover = document.createElement("button");
    remover.type = "button";
    remover.className = "pedido-item-remover";
    remover.textContent = "Remover";
    remover.setAttribute("aria-label", "Remover " + produto.nome + " do pedido");
    remover.addEventListener("click", () => {
      Catalogo.alterarQuantidade(produto, -quantidade);
      el("fechar-modal").focus(); // o botão clicado some junto com a linha
    });

    const stepper = document.createElement("div");
    stepper.className = "stepper";
    stepper.setAttribute("role", "group");
    stepper.setAttribute("aria-label", "Quantidade de " + produto.nome);
    const passo = (rotulo, texto, delta) => {
      const botao = document.createElement("button");
      botao.type = "button";
      botao.textContent = texto;
      botao.setAttribute("aria-label", rotulo);
      botao.dataset.delta = delta;
      botao.addEventListener("click", () => {
        Catalogo.alterarQuantidade(produto, delta);
        // a lista é redesenhada: devolve o foco pro mesmo botão da mesma linha
        const mesmo = document.querySelector('.pedido-item[data-id="' + produto.id + '"] [data-delta="' + delta + '"]');
        (mesmo || el("fechar-modal")).focus();
      });
      return botao;
    };
    const valor = document.createElement("output");
    valor.textContent = quantidade;
    stepper.append(passo("Diminuir", "−", -1), valor, passo("Aumentar", "+", 1));

    const total = document.createElement("span");
    total.className = "pedido-item-total";
    total.textContent = formatarPreco(produto.preco * quantidade);

    li.dataset.id = produto.id;
    li.append(foto, nome, remover, stepper, total);
    return li;
  }

  function renderizar() {
    const itens = Carrinho.itens();
    const lista = el("lista-pedido");
    lista.innerHTML = "";
    itens.forEach((item) => lista.appendChild(criarItem(item)));

    const vazio = itens.length === 0;
    el("pedido-vazio").hidden = !vazio;
    el("pedido-entrega").hidden = vazio;
    el("pedido-pagamento").hidden = vazio;
    el("botao-whatsapp").disabled = vazio;
    el("total-pedido").textContent = formatarPreco(Carrinho.totalPreco());

    renderizarOpcoes("opcoes-entrega", CONFIG.entregaOpcoes, entregaSelecionada, (id) => {
      entregaSelecionada = id;
    });
    renderizarOpcoes("opcoes-pagamento", CONFIG.pagamentoOpcoes, pagamentoSelecionado, (id) => {
      pagamentoSelecionado = id;
    });
    el("entrega-detalhe").textContent = CONFIG.entregaOpcoes.find((o) => o.id === entregaSelecionada).detalhe;
  }

  function montarMensagem() {
    const itens = Carrinho.itens();
    const entrega = CONFIG.entregaOpcoes.find((o) => o.id === entregaSelecionada);
    const pagamento = CONFIG.pagamentoOpcoes.find((o) => o.id === pagamentoSelecionado);

    let msg = "Olá! Gostaria de fazer o seguinte pedido na NJ TCG Store:\n\n";
    itens.forEach(({ produto, quantidade }, indice) => {
      msg +=
        (indice + 1) + ". " + quantidade + "x " + produto.nome +
        " (" + produto.colecao + " | " + produto.idioma + ") — " +
        formatarPreco(produto.preco * quantidade) + "\n";
    });
    msg += "\nTotal: " + formatarPreco(Carrinho.totalPreco());
    msg += "\nEntrega: " + entrega.nome + " — " + entrega.detalhe;
    msg += "\nPagamento: " + pagamento.nome;
    return msg;
  }

  function abrir() {
    ultimoFoco = document.activeElement;
    renderizar();
    el("modal-pedido").hidden = false;
    el("fechar-modal").focus();
  }

  function fechar() {
    el("modal-pedido").hidden = true;
    if (ultimoFoco && document.contains(ultimoFoco)) ultimoFoco.focus();
  }

  function estaAberto() {
    return !el("modal-pedido").hidden;
  }

  function finalizar() {
    if (Carrinho.itens().length === 0) return;
    const url = "https://wa.me/" + CONFIG.whatsappNumero + "?text=" + encodeURIComponent(montarMensagem());
    window.open(url, "_blank", "noopener");
  }

  function iniciar() {
    el("botao-pedido").addEventListener("click", abrir);
    el("fechar-modal").addEventListener("click", fechar);
    el("continuar-comprando").addEventListener("click", fechar);
    el("pedido-ver-catalogo").addEventListener("click", () => {
      fechar();
      Vistas.abrir("loja", "catalogo");
    });
    el("modal-pedido").addEventListener("click", (evento) => {
      if (evento.target.id === "modal-pedido") fechar();
    });
    el("botao-whatsapp").addEventListener("click", finalizar);
    document.addEventListener("carrinho:alterado", () => {
      if (estaAberto()) renderizar();
    });
  }

  return { iniciar, abrir, fechar, estaAberto, renderizar, montarMensagem };
})();
