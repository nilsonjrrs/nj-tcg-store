(function () {
  const carrinho = {}; // { [produtoId]: quantidade }

  function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  function agruparProdutos(produtos) {
    const grupos = [];
    const indicePorChave = {};
    produtos.forEach((produto) => {
      const chave = produto.colecao + "|" + produto.idioma;
      if (!(chave in indicePorChave)) {
        indicePorChave[chave] = grupos.length;
        grupos.push({ colecao: produto.colecao, idioma: produto.idioma, itens: [] });
      }
      grupos[indicePorChave[chave]].itens.push(produto);
    });
    return grupos;
  }

  function criarCardProduto(produto) {
    const card = document.createElement("div");
    card.className = "produto-card";

    const foto = document.createElement("div");
    foto.className = "produto-foto";
    if (produto.img) {
      const img = document.createElement("img");
      img.src = produto.img;
      img.alt = produto.nome;
      foto.appendChild(img);
    } else {
      foto.textContent = "sem foto";
    }

    const info = document.createElement("div");
    info.className = "produto-info";

    const nome = document.createElement("p");
    nome.className = "produto-nome";
    nome.textContent = produto.nome;

    const preco = document.createElement("p");
    preco.className = "produto-preco";
    preco.textContent = formatarPreco(produto.preco);
    if (produto.precoPix) {
      const pix = document.createElement("span");
      pix.className = "produto-preco-pix";
      pix.textContent = formatarPreco(produto.precoPix) + " no Pix";
      preco.appendChild(pix);
    }

    info.appendChild(nome);
    info.appendChild(preco);

    const acoes = document.createElement("div");
    acoes.className = "produto-acoes";

    const botaoMenos = document.createElement("button");
    botaoMenos.type = "button";
    botaoMenos.textContent = "–";
    botaoMenos.setAttribute("aria-label", "Diminuir quantidade de " + produto.nome);

    const qtdSpan = document.createElement("span");
    qtdSpan.className = "produto-qtd";
    qtdSpan.textContent = carrinho[produto.id] || 0;

    const botaoAdicionar = document.createElement("button");
    botaoAdicionar.type = "button";
    botaoAdicionar.className = "botao-adicionar";
    botaoAdicionar.textContent = "Adicionar";
    botaoAdicionar.setAttribute("data-produto-id", produto.id);

    function atualizarQtd(delta) {
      const atual = carrinho[produto.id] || 0;
      const novo = Math.max(0, atual + delta);
      if (novo === 0) {
        delete carrinho[produto.id];
      } else {
        carrinho[produto.id] = novo;
      }
      qtdSpan.textContent = novo;
      salvarCarrinho();
      atualizarContador();
    }

    botaoMenos.addEventListener("click", () => atualizarQtd(-1));
    botaoAdicionar.addEventListener("click", () => atualizarQtd(1));

    acoes.appendChild(botaoMenos);
    acoes.appendChild(qtdSpan);
    acoes.appendChild(botaoAdicionar);

    card.appendChild(foto);
    card.appendChild(info);
    card.appendChild(acoes);

    return card;
  }

  function renderizarCatalogo() {
    const catalogo = document.getElementById("catalogo");
    catalogo.innerHTML = "";
    const grupos = agruparProdutos(PRODUTOS);

    grupos.forEach((grupo) => {
      const secao = document.createElement("section");
      secao.className = "grupo-colecao";

      const titulo = document.createElement("div");
      titulo.className = "grupo-titulo";
      const h2 = document.createElement("h2");
      h2.textContent = grupo.colecao;
      const etiqueta = document.createElement("span");
      etiqueta.className = "etiqueta-idioma";
      etiqueta.textContent = grupo.idioma;
      titulo.appendChild(h2);
      titulo.appendChild(etiqueta);
      secao.appendChild(titulo);

      grupo.itens.forEach((produto) => {
        secao.appendChild(criarCardProduto(produto));
      });

      catalogo.appendChild(secao);
    });
  }

  function obterItensDoPedido() {
    return Object.keys(carrinho)
      .map((id) => {
        const produto = PRODUTOS.find((p) => p.id === id);
        if (!produto) return null;
        return { produto, quantidade: carrinho[id] };
      })
      .filter(Boolean);
  }

  function calcularTotal(itens) {
    return itens.reduce((soma, item) => soma + item.produto.preco * item.quantidade, 0);
  }

  function atualizarContador() {
    const totalItens = Object.values(carrinho).reduce((a, b) => a + b, 0);
    document.getElementById("contador-pedido").textContent = "(" + totalItens + ")";
  }

  function renderizarPedido() {
    const lista = document.getElementById("lista-pedido");
    const vazio = document.getElementById("pedido-vazio");
    const itens = obterItensDoPedido();
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
        nome.textContent = quantidade + "x " + produto.nome + " — " + formatarPreco(produto.preco * quantidade);

        const remover = document.createElement("button");
        remover.className = "item-remover";
        remover.type = "button";
        remover.textContent = "×";
        remover.setAttribute("aria-label", "Remover " + produto.nome);
        remover.addEventListener("click", () => {
          delete carrinho[produto.id];
          salvarCarrinho();
          atualizarContador();
          renderizarPedido();
          renderizarCatalogo();
        });

        linha.appendChild(nome);
        linha.appendChild(remover);
        lista.appendChild(linha);
      });
    }

    document.getElementById("total-pedido").textContent = formatarPreco(calcularTotal(itens));
  }

  function montarMensagemWhatsapp() {
    const itens = obterItensDoPedido();
    let msg = "Olá! Gostaria de fazer o seguinte pedido na NJ TCG Store:\n\n";
    itens.forEach(({ produto, quantidade }) => {
      msg += quantidade + "x " + produto.nome + " (" + produto.colecao + ") — " + formatarPreco(produto.preco * quantidade) + "\n";
    });
    msg += "\nTotal: " + formatarPreco(calcularTotal(itens));
    msg += "\n\nPagamento: " + CONFIG.pagamento;
    msg += "\nEntrega: " + CONFIG.entrega;
    return msg;
  }

  function salvarCarrinho() {
    try {
      localStorage.setItem("nj-tcg-carrinho", JSON.stringify(carrinho));
    } catch (e) {
      // localStorage indisponível (ex.: navegação privada) — segue sem persistir.
    }
  }

  function carregarCarrinho() {
    try {
      const salvo = JSON.parse(localStorage.getItem("nj-tcg-carrinho") || "{}");
      Object.assign(carrinho, salvo);
    } catch (e) {
      // ignora carrinho corrompido ou localStorage indisponível
    }
  }

  function abrirModal() {
    renderizarPedido();
    document.getElementById("modal-pedido").hidden = false;
  }

  function fecharModal() {
    document.getElementById("modal-pedido").hidden = true;
  }

  function preencherConfig() {
    document.getElementById("info-pagamento").textContent = CONFIG.pagamento;
    document.getElementById("info-entrega").textContent = CONFIG.entrega;
    document.getElementById("rodape-info").textContent = "Pagamento: " + CONFIG.pagamento + " • Entrega: " + CONFIG.entrega;
    document.getElementById("rodape-aviso").textContent = CONFIG.avisoPrecos;
    const linkInsta = document.getElementById("link-instagram");
    linkInsta.textContent = CONFIG.instagram;
    linkInsta.href = "https://instagram.com/" + CONFIG.instagram.replace("@", "");
  }

  document.addEventListener("DOMContentLoaded", () => {
    carregarCarrinho();
    preencherConfig();
    renderizarCatalogo();
    atualizarContador();

    document.getElementById("botao-pedido").addEventListener("click", abrirModal);
    document.getElementById("fechar-modal").addEventListener("click", fecharModal);
    document.getElementById("modal-pedido").addEventListener("click", (e) => {
      if (e.target.id === "modal-pedido") fecharModal();
    });

    document.getElementById("botao-whatsapp").addEventListener("click", () => {
      const itens = obterItensDoPedido();
      if (itens.length === 0) return;
      const mensagem = montarMensagemWhatsapp();
      const url = "https://wa.me/" + CONFIG.whatsappNumero + "?text=" + encodeURIComponent(mensagem);
      window.open(url, "_blank");
    });
  });
})();
