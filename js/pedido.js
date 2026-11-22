// Modal de pedido: lista de itens, escolha de entrega/pagamento e montagem
// da mensagem final enviada para o WhatsApp.
const Pedido = (function () {
  let entregaSelecionada = CONFIG.entregaOpcoes[0].id;
  let pagamentoSelecionado = CONFIG.pagamentoOpcoes[0].id;

  function formatarPreco(valor) {
    return Catalogo.formatarPreco(valor);
  }

  function renderizarOpcoes(containerId, opcoes, selecionadoId, aoSelecionar) {
    const container = document.getElementById(containerId);
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

  function precoItem(produto) {
    return Catalogo.precoParaPagamento(produto, pagamentoSelecionado);
  }

  function totalPedido() {
    return Carrinho.itens().reduce((soma, item) => soma + precoItem(item.produto) * item.quantidade, 0);
  }

  function renderizarLista() {
    const lista = document.getElementById("lista-pedido");
    const vazio = document.getElementById("pedido-vazio");
    const itens = Carrinho.itens();
    lista.innerHTML = "";

    if (itens.length === 0) {
      vazio.hidden = false;
    } else {
      vazio.hidden = true;
      itens.forEach(({ produto, quantidade }) => {
        const linha = document.createElement("div");
        linha.className = "item-pedido";

        const nome = document.createElement("span");
        nome.className = "item-nome";
        nome.textContent = quantidade + "x " + produto.nome + " — " + formatarPreco(precoItem(produto) * quantidade);

        const remover = document.createElement("button");
        remover.className = "item-remover";
        remover.type = "button";
        remover.textContent = "×";
        remover.setAttribute("aria-label", "Remover " + produto.nome);
        remover.addEventListener("click", () => {
          Carrinho.definirQuantidade(produto.id, 0);
          document.dispatchEvent(new CustomEvent("carrinho:alterado"));
          renderizar();
          Catalogo.renderizarGrade();
        });

        linha.appendChild(nome);
        linha.appendChild(remover);
        lista.appendChild(linha);
      });
    }

    document.getElementById("total-pedido").textContent = formatarPreco(totalPedido());
  }

  function renderizar() {
    renderizarLista();
    renderizarOpcoes("opcoes-entrega", CONFIG.entregaOpcoes, entregaSelecionada, (id) => {
      entregaSelecionada = id;
    });
    renderizarOpcoes("opcoes-pagamento", CONFIG.pagamentoOpcoes, pagamentoSelecionado, (id) => {
      pagamentoSelecionado = id;
    });
    document.getElementById("botao-whatsapp").disabled = Carrinho.itens().length === 0;
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
        formatarPreco(precoItem(produto) * quantidade) + "\n";
    });
    msg += "\nTotal: " + formatarPreco(totalPedido());
    msg += "\nEntrega: " + entrega.nome + " — " + entrega.detalhe;
    msg += "\nPagamento: " + pagamento.nome;
    return msg;
  }

  function abrir() {
    renderizar();
  }

  return { abrir, renderizar, montarMensagem };
})();
