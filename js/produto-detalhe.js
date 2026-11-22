// Detalhe do produto (#modal-produto): foto ampliável, ficha com os dados
// que existem em js/produtos.js, preço, disponibilidade, quantidade e as
// opções de entrega/pagamento de js/config.js. Não há página própria por
// produto porque o site é estático de página única.
const ProdutoDetalhe = (function () {
  let produto = null;
  let quantidade = 1;
  let origem = null;

  const el = (id) => document.getElementById(id);

  // Quantas unidades ainda cabem no pedido (Infinity quando o estoque não é controlado).
  function disponivel() {
    if (typeof produto.estoque !== "number") return Infinity;
    return Math.max(0, produto.estoque - Carrinho.obterQuantidade(produto.id));
  }

  function linhaDaFicha(rotulo, valor) {
    const dt = document.createElement("dt");
    dt.textContent = rotulo;
    const dd = document.createElement("dd");
    dd.textContent = valor;
    el("detalhe-ficha").append(dt, dd);
  }

  function atualizarCompra() {
    const resta = disponivel();
    const esgotado = Catalogo.estaEsgotado(produto);
    quantidade = Math.max(1, Math.min(quantidade, resta === Infinity ? quantidade : Math.max(1, resta)));
    el("detalhe-qtd").textContent = quantidade;
    el("detalhe-menos").disabled = quantidade <= 1;
    el("detalhe-mais").disabled = quantidade >= resta;
    el("detalhe-adicionar").disabled = esgotado || resta === 0;
    el("detalhe-adicionar").textContent = esgotado ? "Esgotado" : "Adicionar ao pedido";

    const estoque = el("detalhe-estoque");
    estoque.dataset.estado = esgotado ? "esgotado" : "ok";
    if (esgotado) estoque.textContent = "Esgotado no momento.";
    else if (typeof produto.estoque === "number") estoque.textContent = produto.estoque + (produto.estoque === 1 ? " unidade em estoque." : " unidades em estoque.");
    else estoque.textContent = "Disponibilidade confirmada no WhatsApp ao fechar o pedido.";

    const noPedido = Carrinho.obterQuantidade(produto.id);
    const aviso = el("detalhe-aviso");
    aviso.dataset.tipo = "ok";
    aviso.textContent = noPedido ? noPedido + (noPedido === 1 ? " unidade no seu pedido." : " unidades no seu pedido.") : "";
  }

  function abrir(id, elementoOrigem) {
    produto = PRODUTOS.find((p) => p.id === id);
    if (!produto) return;
    origem = elementoOrigem || document.activeElement;
    quantidade = 1;

    const foto = el("detalhe-foto");
    foto.innerHTML = "";
    foto.disabled = !produto.img;
    if (produto.img) {
      const img = document.createElement("img");
      img.src = produto.img;
      img.alt = produto.nome + ", " + produto.colecao;
      img.addEventListener("error", () => {
        foto.disabled = true;
        foto.textContent = "Foto em breve";
      });
      foto.appendChild(img);
      foto.setAttribute("aria-label", "Ampliar foto de " + produto.nome);
    } else {
      foto.textContent = "Foto em breve";
    }
    el("detalhe-nota-foto").hidden = !produto.img;

    el("detalhe-colecao").textContent = produto.colecao;
    el("detalhe-nome").textContent = produto.nome;
    el("detalhe-ficha").innerHTML = "";
    linhaDaFicha("Tipo", produto.categoria);
    linhaDaFicha("Idioma", produto.idioma);
    linhaDaFicha("Condição", "Novo, lacrado");
    linhaDaFicha("Código", produto.sku);

    // Pix em destaque (preço principal) quando o produto tiver um; cartão
    // vem abaixo, menor (ver produto.precoPix em js/produtos.js).
    const preco = el("detalhe-preco");
    if (produto.precoPix) {
      preco.textContent = Catalogo.formatarPreco(produto.precoPix) + " no Pix";
      const cartao = document.createElement("small");
      cartao.textContent = Catalogo.formatarPreco(produto.preco) + " no cartão";
      preco.appendChild(cartao);
    } else {
      preco.textContent = Catalogo.formatarPreco(produto.preco);
    }

    const entrega = el("detalhe-entrega");
    entrega.innerHTML = "";
    CONFIG.entregaOpcoes.forEach((opcao) => {
      const li = document.createElement("li");
      const nome = document.createElement("strong");
      nome.textContent = opcao.nome;
      li.append(nome, document.createTextNode(opcao.detalhe));
      entrega.appendChild(li);
    });
    const pagamento = document.createElement("li");
    const titulo = document.createElement("strong");
    titulo.textContent = "Pagamento";
    pagamento.append(titulo, document.createTextNode(CONFIG.pagamentoOpcoes.map((o) => o.nome).join(" ou ") + "."));
    entrega.appendChild(pagamento);

    // o simulador só existe pras coleções cadastradas em js/simulador.js
    const colecaoSim = Simulador.colecoes.find((c) => c.produtoId === produto.id);
    const botaoSim = el("detalhe-simulador");
    botaoSim.hidden = !colecaoSim;
    botaoSim.onclick = colecaoSim
      ? () => {
          fechar();
          BoosterUI.abrir(colecaoSim.id);
        }
      : null;

    atualizarCompra();
    el("modal-produto").hidden = false;
    el("fechar-produto").focus();
  }

  function fechar() {
    el("modal-produto").hidden = true;
    if (origem && document.contains(origem)) origem.focus();
  }

  function estaAberto() {
    return !el("modal-produto").hidden;
  }

  function iniciar() {
    el("detalhe-menos").addEventListener("click", () => {
      quantidade -= 1;
      atualizarCompra();
    });
    el("detalhe-mais").addEventListener("click", () => {
      quantidade += 1;
      atualizarCompra();
    });
    el("detalhe-adicionar").addEventListener("click", () => {
      Catalogo.alterarQuantidade(produto, quantidade);
      quantidade = 1;
      atualizarCompra();
    });
    el("detalhe-foto").addEventListener("click", () => {
      if (produto && produto.img) Zoom.abrir(produto.img, produto.nome + ", " + produto.colecao);
    });
    el("fechar-produto").addEventListener("click", fechar);
    el("modal-produto").addEventListener("click", (evento) => {
      if (evento.target.id === "modal-produto") fechar();
    });
    document.addEventListener("produto:abrir", (evento) => abrir(evento.detail.id, evento.detail.origem));
  }

  return { iniciar, abrir, fechar, estaAberto };
})();
