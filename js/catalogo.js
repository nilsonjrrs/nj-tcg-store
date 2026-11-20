// Renderização do catálogo: filtros combináveis (coleção, idioma, categoria)
// e a grade de cards de produto, com o campo "estoque" controlando o estado
// de esgotado quando ele for um número (ver js/produtos.js).
const Catalogo = (function () {
  const TODOS = "Todos";
  const filtroAtivo = { colecao: TODOS, idioma: TODOS, categoria: TODOS };
  let buscaAtiva = "";

  function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  function estaEsgotado(produto) {
    return typeof produto.estoque === "number" && produto.estoque <= 0;
  }

  function valoresUnicos(campo) {
    const vistos = [];
    PRODUTOS.forEach((produto) => {
      if (!vistos.includes(produto[campo])) vistos.push(produto[campo]);
    });
    return vistos;
  }

  function renderizarGrupoFiltro(containerId, campo, valores) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    [TODOS, ...valores].forEach((valor) => {
      const botao = document.createElement("button");
      botao.type = "button";
      botao.className = "chip";
      botao.textContent = valor;
      botao.setAttribute("aria-pressed", String(filtroAtivo[campo] === valor));
      botao.addEventListener("click", () => {
        filtroAtivo[campo] = valor;
        renderizarFiltros();
        renderizarGrade();
      });
      container.appendChild(botao);
    });
  }

  function renderizarFiltros() {
    renderizarGrupoFiltro("filtro-colecao", "colecao", valoresUnicos("colecao"));
    renderizarGrupoFiltro("filtro-idioma", "idioma", valoresUnicos("idioma"));
    renderizarGrupoFiltro("filtro-categoria", "categoria", valoresUnicos("categoria"));
  }

  function produtosFiltrados() {
    return PRODUTOS.filter((produto) => {
      return (
        (filtroAtivo.colecao === TODOS || produto.colecao === filtroAtivo.colecao) &&
        (filtroAtivo.idioma === TODOS || produto.idioma === filtroAtivo.idioma) &&
        (filtroAtivo.categoria === TODOS || produto.categoria === filtroAtivo.categoria) &&
        (buscaAtiva === "" || produto.nome.toLowerCase().includes(buscaAtiva))
      );
    });
  }

  function definirBusca(texto) {
    buscaAtiva = texto.trim().toLowerCase();
    renderizarGrade();
  }

  function limparFiltros() {
    filtroAtivo.colecao = TODOS;
    filtroAtivo.idioma = TODOS;
    filtroAtivo.categoria = TODOS;
    renderizarFiltros();
    renderizarGrade();
  }

  function criarFoto(produto) {
    const tilt = document.createElement("div");
    tilt.className = "produto-tilt";

    if (estaEsgotado(produto)) {
      const badge = document.createElement("span");
      badge.className = "badge-esgotado";
      badge.textContent = "Esgotado";
      tilt.appendChild(badge);
    }

    const inner = document.createElement("div");
    inner.className = "produto-tilt-inner";
    let fotoDisponivel = Boolean(produto.img);
    if (produto.img) {
      const img = document.createElement("img");
      img.src = produto.img;
      img.alt = produto.nome + " — " + produto.colecao;
      img.loading = "lazy";
      img.addEventListener("error", () => {
        fotoDisponivel = false;
        inner.textContent = "Foto em breve";
        tilt.classList.remove("produto-tilt--clicavel");
        tilt.removeAttribute("role");
        tilt.removeAttribute("tabindex");
        tilt.removeAttribute("aria-label");
      });
      inner.appendChild(img);
    } else {
      inner.textContent = "Foto em breve";
    }
    tilt.appendChild(inner);

    if (fotoDisponivel) {
      tilt.classList.add("produto-tilt--clicavel");
      tilt.setAttribute("role", "button");
      tilt.setAttribute("tabindex", "0");
      tilt.setAttribute("aria-label", "Ampliar foto de " + produto.nome);

      const abrirZoom = () => {
        if (!fotoDisponivel) return;
        Zoom.abrir(produto.img, produto.nome + " — " + produto.colecao);
      };
      tilt.addEventListener("click", abrirZoom);
      tilt.addEventListener("keydown", (evento) => {
        if (evento.key === "Enter" || evento.key === " ") {
          evento.preventDefault();
          abrirZoom();
        }
      });

      const indicador = document.createElement("span");
      indicador.className = "zoom-indicador";
      indicador.setAttribute("aria-hidden", "true");
      indicador.innerHTML =
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';
      tilt.appendChild(indicador);
    }

    Tilt.ativar(tilt);
    return tilt;
  }

  function criarCard(produto) {
    const card = document.createElement("article");
    card.id = "produto-" + produto.id;
    card.className = "produto-card" + (estaEsgotado(produto) ? " esgotado" : "");
    card.appendChild(criarFoto(produto));

    const etiquetas = document.createElement("div");
    etiquetas.className = "produto-etiquetas";
    const etColecao = document.createElement("span");
    etColecao.className = "etiqueta";
    etColecao.textContent = produto.idioma.startsWith("Inglês") ? produto.colecao + " · EN" : produto.colecao;
    const etCategoria = document.createElement("span");
    etCategoria.className = "etiqueta etiqueta-categoria";
    etCategoria.textContent = produto.categoria;
    etiquetas.appendChild(etColecao);
    etiquetas.appendChild(etCategoria);
    card.appendChild(etiquetas);

    const nome = document.createElement("p");
    nome.className = "produto-nome";
    nome.textContent = produto.nome;
    card.appendChild(nome);

    const precoLinha = document.createElement("div");
    precoLinha.className = "produto-preco-linha";
    const preco = document.createElement("p");
    preco.className = "produto-preco";
    preco.textContent = formatarPreco(produto.preco);
    precoLinha.appendChild(preco);
    if (produto.precoPix) {
      const pix = document.createElement("span");
      pix.className = "produto-preco-pix";
      pix.textContent = formatarPreco(produto.precoPix) + " no Pix";
      precoLinha.appendChild(pix);
    }
    card.appendChild(precoLinha);

    const acoes = document.createElement("div");
    acoes.className = "produto-acoes";

    const stepper = document.createElement("div");
    stepper.className = "produto-stepper";
    const botaoMenos = document.createElement("button");
    botaoMenos.type = "button";
    botaoMenos.textContent = "–";
    botaoMenos.setAttribute("aria-label", "Diminuir quantidade de " + produto.nome);
    const qtdSpan = document.createElement("span");
    qtdSpan.className = "produto-qtd";
    qtdSpan.textContent = Carrinho.obterQuantidade(produto.id);
    stepper.appendChild(botaoMenos);
    stepper.appendChild(qtdSpan);

    const botaoAdicionar = document.createElement("button");
    botaoAdicionar.type = "button";
    botaoAdicionar.className = "botao-adicionar";
    botaoAdicionar.textContent = "Adicionar";
    botaoAdicionar.setAttribute("aria-label", "Adicionar " + produto.nome + " ao pedido");
    if (estaEsgotado(produto)) {
      botaoAdicionar.disabled = true;
      botaoAdicionar.textContent = "Esgotado";
    }

    function atualizarQtd() {
      qtdSpan.textContent = Carrinho.obterQuantidade(produto.id);
      document.dispatchEvent(new CustomEvent("carrinho:alterado"));
    }

    botaoMenos.addEventListener("click", () => {
      Carrinho.alterar(produto.id, -1);
      atualizarQtd();
    });
    botaoAdicionar.addEventListener("click", () => {
      if (botaoAdicionar.disabled) return;
      Carrinho.alterar(produto.id, 1);
      atualizarQtd();
      document.dispatchEvent(new CustomEvent("carrinho:item-adicionado"));
    });

    acoes.appendChild(stepper);
    acoes.appendChild(botaoAdicionar);
    card.appendChild(acoes);

    return card;
  }

  function renderizarGrade() {
    const grade = document.getElementById("grade-produtos");
    const vazio = document.getElementById("catalogo-vazio");
    const lista = produtosFiltrados();
    grade.innerHTML = "";
    if (lista.length === 0) {
      vazio.hidden = false;
    } else {
      vazio.hidden = true;
      lista.forEach((produto, indice) => {
        const card = criarCard(produto);
        card.style.animationDelay = Math.min(indice * 30, 240) + "ms";
        grade.appendChild(card);
      });
    }
  }

  function injetarJsonLd() {
    const base = (typeof CONFIG !== "undefined" && CONFIG.siteUrl) || "";
    const itens = PRODUTOS.map((produto) => {
      const oferta = {
        "@type": "Offer",
        priceCurrency: "BRL",
        price: produto.preco.toFixed(2),
        availability: estaEsgotado(produto) ? "https://schema.org/OutOfStock" : "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        url: base
      };
      const item = {
        "@type": "Product",
        sku: produto.sku,
        name: produto.nome,
        category: produto.categoria,
        inLanguage: produto.idioma,
        brand: { "@type": "Brand", name: "NJ TCG Store" },
        offers: oferta
      };
      if (produto.img) {
        item.image = base + produto.img;
      }
      return item;
    });

    const dados = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: itens.map((item, indice) => ({
        "@type": "ListItem",
        position: indice + 1,
        item: item
      }))
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(dados);
    document.head.appendChild(script);
  }

  function iniciar() {
    renderizarFiltros();
    renderizarGrade();
    injetarJsonLd();
  }

  return { iniciar, renderizarGrade, formatarPreco, estaEsgotado, definirBusca, limparFiltros };
})();
