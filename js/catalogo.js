// Catálogo: busca, filtros combináveis (só sobre campos que existem em
// js/produtos.js), ordenação, contagem, filtros ativos removíveis e a grade
// de cards. O campo "estoque" controla o estado de esgotado quando for um
// número. Sem paginação de propósito: o catálogo inteiro cabe numa tela.
const Catalogo = (function () {
  const GRUPOS = [
    { campo: "categoria", rotulo: "Tipo de produto" },
    { campo: "colecao", rotulo: "Coleção" },
    { campo: "idioma", rotulo: "Idioma" },
  ];
  const selecionados = { categoria: new Set(), colecao: new Set(), idioma: new Set() };
  let busca = "";
  let ordem = "destaque";

  const el = (id) => document.getElementById(id);

  function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  function estaEsgotado(produto) {
    return typeof produto.estoque === "number" && produto.estoque <= 0;
  }

  // minúsculas e sem acento, pra "celebracao" achar "Celebração"
  function normalizar(texto) {
    return String(texto).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  }

  function valoresUnicos(campo) {
    return PRODUTOS.map((p) => p[campo]).filter((valor, i, lista) => lista.indexOf(valor) === i);
  }

  function passaNosFiltros(produto) {
    return GRUPOS.every(({ campo }) => selecionados[campo].size === 0 || selecionados[campo].has(produto[campo]));
  }

  function passaNaBusca(produto) {
    if (!busca) return true;
    const alvo = normalizar([produto.nome, produto.colecao, produto.categoria, produto.idioma, produto.sku].join(" "));
    return busca.split(/\s+/).every((termo) => alvo.includes(termo));
  }

  function produtosFiltrados() {
    const lista = PRODUTOS.filter((p) => passaNosFiltros(p) && passaNaBusca(p));
    if (ordem === "preco-menor") lista.sort((a, b) => a.preco - b.preco);
    if (ordem === "preco-maior") lista.sort((a, b) => b.preco - a.preco);
    if (ordem === "nome") lista.sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
    return lista;
  }

  function totalDeFiltros() {
    return GRUPOS.reduce((soma, { campo }) => soma + selecionados[campo].size, 0);
  }

  /* ---------- Alterar o pedido (usado pelo card, pelo produto e pelo pedido) ---------- */
  function avisar(texto, tipo) {
    document.dispatchEvent(new CustomEvent("loja:aviso", { detail: { texto, tipo: tipo || "ok" } }));
  }

  // Devolve quanto de fato mudou (0 se bateu no estoque conhecido) e avisa o resultado.
  function alterarQuantidade(produto, delta) {
    const antes = Carrinho.obterQuantidade(produto.id);
    Carrinho.alterar(produto.id, delta);
    const mudou = Carrinho.obterQuantidade(produto.id) - antes;
    if (delta > 0 && mudou < delta) {
      avisar("Só temos " + produto.estoque + " unidade" + (produto.estoque === 1 ? "" : "s") + " de " + produto.nome + ".", "erro");
    } else if (delta > 0) {
      avisar(produto.nome + " adicionado ao pedido.");
      document.dispatchEvent(new CustomEvent("carrinho:item-adicionado"));
    }
    if (mudou !== 0) document.dispatchEvent(new CustomEvent("carrinho:alterado"));
    return mudou;
  }

  /* ---------- Filtros ---------- */
  function renderizarFiltros() {
    const container = el("filtros-grupos");
    container.innerHTML = "";
    GRUPOS.forEach(({ campo, rotulo }) => {
      const grupo = document.createElement("fieldset");
      grupo.className = "filtro-grupo";
      const legenda = document.createElement("legend");
      legenda.textContent = rotulo;
      grupo.appendChild(legenda);
      valoresUnicos(campo).forEach((valor) => {
        const opcao = document.createElement("label");
        opcao.className = "filtro-opcao";
        const caixa = document.createElement("input");
        caixa.type = "checkbox";
        caixa.checked = selecionados[campo].has(valor);
        caixa.addEventListener("change", () => {
          if (caixa.checked) selecionados[campo].add(valor);
          else selecionados[campo].delete(valor);
          atualizar();
        });
        const quantidade = document.createElement("small");
        quantidade.textContent = PRODUTOS.filter((p) => p[campo] === valor).length;
        opcao.append(caixa, document.createTextNode(valor), quantidade);
        grupo.appendChild(opcao);
      });
      container.appendChild(grupo);
    });
  }

  // Atalho do cabeçalho: um tipo de produto por vez (ou todos).
  function renderizarCategorias() {
    const nav = el("nav-categorias");
    nav.querySelectorAll("button").forEach((b) => b.remove());
    const referencia = nav.firstChild;
    const criar = (rotulo, valor) => {
      const botao = document.createElement("button");
      botao.type = "button";
      botao.textContent = rotulo;
      const ativo = valor === null ? selecionados.categoria.size === 0 : selecionados.categoria.size === 1 && selecionados.categoria.has(valor);
      botao.setAttribute("aria-pressed", String(ativo));
      botao.addEventListener("click", () => {
        selecionados.categoria.clear();
        if (valor !== null) selecionados.categoria.add(valor);
        atualizar();
        el("catalogo").scrollIntoView({ behavior: "smooth", block: "start" });
      });
      nav.insertBefore(botao, referencia);
    };
    criar("Todos os produtos", null);
    valoresUnicos("categoria").forEach((valor) => criar(valor, valor));
  }

  function renderizarAtivos() {
    const container = el("filtros-ativos");
    container.innerHTML = "";
    const criar = (rotulo, aoRemover) => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "filtro-ativo";
      chip.setAttribute("aria-label", "Remover filtro " + rotulo);
      chip.append(document.createTextNode(rotulo));
      const x = document.createElement("span");
      x.setAttribute("aria-hidden", "true");
      x.textContent = "×";
      chip.appendChild(x);
      chip.addEventListener("click", aoRemover);
      container.appendChild(chip);
    };
    if (busca) criar("Busca: " + el("busca-produto").value.trim(), () => definirBusca("", true));
    GRUPOS.forEach(({ campo }) => {
      selecionados[campo].forEach((valor) =>
        criar(valor, () => {
          selecionados[campo].delete(valor);
          atualizar();
        })
      );
    });
    if (container.children.length > 1) {
      const limpar = document.createElement("button");
      limpar.type = "button";
      limpar.className = "botao botao--texto";
      limpar.textContent = "Limpar tudo";
      limpar.addEventListener("click", limparFiltros);
      container.appendChild(limpar);
    }
  }

  /* ---------- Card ---------- */
  function criarFoto(produto) {
    const foto = document.createElement("button");
    foto.type = "button";
    foto.className = "produto-foto";
    foto.setAttribute("aria-label", "Ver " + produto.nome + ", " + produto.colecao);
    if (produto.img) {
      const img = document.createElement("img");
      img.src = produto.img;
      img.alt = "";
      img.loading = "lazy";
      img.width = 600;
      img.height = 600;
      img.addEventListener("error", () => img.replaceWith(document.createTextNode("Foto em breve")));
      foto.appendChild(img);
    } else {
      foto.textContent = "Foto em breve";
    }
    if (estaEsgotado(produto)) {
      const selo = document.createElement("span");
      selo.className = "produto-selo";
      selo.textContent = "Esgotado";
      foto.appendChild(selo);
    }
    foto.addEventListener("click", () => abrirProduto(produto, foto));
    return foto;
  }

  function abrirProduto(produto, origem) {
    document.dispatchEvent(new CustomEvent("produto:abrir", { detail: { id: produto.id, origem } }));
  }

  // Área de compra do card: botão enquanto o produto não está no pedido, seletor de quantidade depois.
  function renderizarAcao(card, produto) {
    const acao = card.querySelector(".produto-acao");
    const qtd = Carrinho.obterQuantidade(produto.id);
    if (acao.dataset.qtd === String(qtd)) return;
    const tinhaFoco = acao.contains(document.activeElement);
    acao.dataset.qtd = String(qtd);
    acao.innerHTML = "";

    if (estaEsgotado(produto)) {
      const botao = document.createElement("button");
      botao.type = "button";
      botao.className = "botao botao--neutro";
      botao.disabled = true;
      botao.textContent = "Esgotado";
      acao.appendChild(botao);
      return;
    }

    if (qtd === 0) {
      const botao = document.createElement("button");
      botao.type = "button";
      botao.className = "botao botao--primario";
      botao.textContent = "Adicionar ao pedido";
      botao.setAttribute("aria-label", "Adicionar " + produto.nome + " ao pedido");
      botao.addEventListener("click", () => alterarQuantidade(produto, 1));
      acao.appendChild(botao);
      if (tinhaFoco) botao.focus();
      return;
    }

    const stepper = document.createElement("div");
    stepper.className = "stepper";
    stepper.setAttribute("role", "group");
    stepper.setAttribute("aria-label", "Quantidade de " + produto.nome + " no pedido");
    const menos = document.createElement("button");
    menos.type = "button";
    menos.textContent = "−";
    menos.setAttribute("aria-label", "Diminuir");
    menos.addEventListener("click", () => alterarQuantidade(produto, -1));
    const valor = document.createElement("output");
    valor.textContent = qtd;
    const mais = document.createElement("button");
    mais.type = "button";
    mais.textContent = "+";
    mais.setAttribute("aria-label", "Aumentar");
    mais.addEventListener("click", () => alterarQuantidade(produto, 1));
    stepper.append(menos, valor, mais);
    const rotulo = document.createElement("span");
    rotulo.className = "produto-acao-rotulo";
    rotulo.textContent = "no pedido";
    acao.append(stepper, rotulo);
    if (tinhaFoco) mais.focus();
  }

  function criarCard(produto) {
    const card = document.createElement("article");
    card.id = "produto-" + produto.id;
    card.className = "produto" + (estaEsgotado(produto) ? " produto--esgotado" : "");
    card.appendChild(criarFoto(produto));

    const colecao = document.createElement("p");
    colecao.className = "produto-colecao";
    colecao.textContent = produto.colecao;
    card.appendChild(colecao);

    const nome = document.createElement("h3");
    nome.className = "produto-nome";
    const link = document.createElement("button");
    link.type = "button";
    link.textContent = produto.nome;
    link.addEventListener("click", () => abrirProduto(produto, link));
    nome.appendChild(link);
    card.appendChild(nome);

    const dados = document.createElement("p");
    dados.className = "produto-dados";
    dados.textContent = produto.categoria + ", " + produto.idioma.toLowerCase();
    card.appendChild(dados);

    const preco = document.createElement("p");
    preco.className = "produto-preco";
    preco.textContent = formatarPreco(produto.preco);
    if (produto.precoPix) {
      const pix = document.createElement("small");
      pix.textContent = formatarPreco(produto.precoPix) + " no Pix";
      preco.appendChild(pix);
    }
    card.appendChild(preco);

    const acao = document.createElement("div");
    acao.className = "produto-acao";
    card.appendChild(acao);
    renderizarAcao(card, produto);
    return card;
  }

  /* ---------- Grade ---------- */
  function renderizarGrade() {
    const grade = el("grade-produtos");
    const lista = produtosFiltrados();
    grade.innerHTML = "";
    lista.forEach((produto) => grade.appendChild(criarCard(produto)));
    el("catalogo-vazio").hidden = lista.length > 0;

    const n = lista.length;
    el("catalogo-contagem").textContent = n === PRODUTOS.length ? n + " produtos" : n + " de " + PRODUTOS.length + " produtos";
    el("aplicar-filtros").textContent = n === 0 ? "Nenhum produto" : "Ver " + n + (n === 1 ? " produto" : " produtos");
    const filtros = totalDeFiltros();
    el("filtros-qtd").textContent = filtros ? "(" + filtros + ")" : "";
    el("limpar-filtros").disabled = filtros === 0;
  }

  // Só a área de compra de cada card visível (quando o pedido muda em outro lugar).
  function sincronizar() {
    PRODUTOS.forEach((produto) => {
      const card = el("produto-" + produto.id);
      if (card) renderizarAcao(card, produto);
    });
  }

  function atualizar() {
    renderizarFiltros();
    renderizarCategorias();
    renderizarAtivos();
    renderizarGrade();
  }

  function definirBusca(texto, limparCampo) {
    busca = normalizar(texto.trim());
    if (limparCampo) el("busca-produto").value = "";
    renderizarAtivos();
    renderizarGrade();
  }

  function limparFiltros() {
    GRUPOS.forEach(({ campo }) => selecionados[campo].clear());
    busca = "";
    el("busca-produto").value = "";
    atualizar();
  }

  /* ---------- Painel de filtros no celular ---------- */
  function filtrosAbertos() {
    return el("filtros").dataset.aberto === "true";
  }

  function abrirFiltros() {
    el("filtros").dataset.aberto = "true";
    el("abrir-filtros").setAttribute("aria-expanded", "true");
    el("fechar-filtros").focus();
  }

  function fecharFiltros() {
    el("filtros").dataset.aberto = "false";
    el("abrir-filtros").setAttribute("aria-expanded", "false");
    el("abrir-filtros").focus();
  }

  function injetarJsonLd() {
    const base = (typeof CONFIG !== "undefined" && CONFIG.siteUrl) || "";
    const itens = PRODUTOS.map((produto) => {
      const item = {
        "@type": "Product",
        sku: produto.sku,
        name: produto.nome,
        category: produto.categoria,
        inLanguage: produto.idioma,
        brand: { "@type": "Brand", name: "NJ TCG Store" },
        offers: {
          "@type": "Offer",
          priceCurrency: "BRL",
          price: produto.preco.toFixed(2),
          availability: estaEsgotado(produto) ? "https://schema.org/OutOfStock" : "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
          url: base,
        },
      };
      if (produto.img) item.image = base + produto.img;
      return item;
    });
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: itens.map((item, indice) => ({ "@type": "ListItem", position: indice + 1, item })),
    });
    document.head.appendChild(script);
  }

  function iniciar() {
    atualizar();
    injetarJsonLd();
    el("busca-produto").addEventListener("input", (evento) => definirBusca(evento.target.value));
    el("form-busca").addEventListener("submit", (evento) => {
      evento.preventDefault();
      el("catalogo").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    el("ordenar").addEventListener("change", (evento) => {
      ordem = evento.target.value;
      renderizarGrade();
    });
    el("abrir-filtros").addEventListener("click", abrirFiltros);
    el("fechar-filtros").addEventListener("click", fecharFiltros);
    el("aplicar-filtros").addEventListener("click", fecharFiltros);
    el("limpar-filtros").addEventListener("click", limparFiltros);
    el("vazio-limpar").addEventListener("click", limparFiltros);
    document.addEventListener("carrinho:alterado", sincronizar);
  }

  return { iniciar, formatarPreco, estaEsgotado, alterarQuantidade, limparFiltros, filtrosAbertos, fecharFiltros };
})();
