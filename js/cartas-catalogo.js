// Catálogo de cartas avulsas: junta as cartas de Reinado Delta
// (js/cartas-reinado-delta.js) e Celebração 30 Anos
// (js/cartas-celebracao-30-anos.js) numa única vitrine de navegação — sem
// botão de compra/consulta por carta (ainda é só pra pesquisar/ver, a maioria
// das cartas de Celebração 30 Anos está "Sob consulta", sem preço real).
// Os cards são criados uma única vez e só escondidos/mostrados ao
// filtrar/buscar/ordenar (nunca recriados), porque aqui são ~340 cartas —
// bem mais que os poucos produtos selados do catálogo principal.
const CartasCatalogo = (function () {
  const TODAS = "Todas";
  const filtroAtivo = { colecao: TODAS };
  let buscaAtiva = "";
  let ordenacaoAtiva = "numero";
  let itens = []; // { carta, el }

  // Nível de efeito visual (holo/moldura) pro badge de raridade — não dá pra
  // reaproveitar Simulador.nivelRaridade porque ele só conhece os nomes de
  // raridade das coleções que o simulador usa (Reinado Delta via
  // js/cartas-reinado-delta.js, Celebração 30 Anos via js/cartas-celebracao-30.js);
  // aqui as cartas de Celebração 30 Anos vêm de um arquivo diferente
  // (js/cartas-celebracao-30-anos.js, raridade inferida por nós — ver CLAUDE.md),
  // com nomes próprios ("Ilustração Especial", "Clássica").
  const NIVEL_POR_RARIDADE = {
    "Mega Hiper Raro": "sir",
    "Ilustração Rara Especial": "sir",
    "Futuristic Rare": "sir",
    "Clássica": "sir",
    "Ilustração Rara": "irfa",
    "Ultra Rara": "irfa",
    "Rara Dupla": "irfa",
    "Pikachu Rare": "irfa",
    "Ilustração Especial": "irfa",
  };

  function nivelDe(carta) {
    return NIVEL_POR_RARIDADE[carta.raridade] || "base";
  }

  function numeroOrdenavel(numero) {
    const m = numero.match(/\d+/);
    return m ? parseInt(m[0], 10) : 0;
  }

  function criarCard(carta) {
    const el = document.createElement("div");
    el.className = "carta-avulsa-card";
    el.setAttribute("role", "button");
    el.setAttribute("tabindex", "0");
    el.setAttribute("aria-label", "Ampliar carta: " + carta.nome);

    const tilt = document.createElement("div");
    tilt.className = "produto-tilt";
    const inner = document.createElement("div");
    inner.className = "produto-tilt-inner";
    const img = document.createElement("img");
    img.src = carta.imagem_url.replace("img/cartas/", "img/cartas/p/");
    img.alt = carta.nome;
    img.loading = "lazy";
    img.decoding = "async";
    img.width = 300;
    img.height = 417;
    img.addEventListener("error", () => {
      inner.textContent = carta.nome;
    });
    inner.appendChild(img);
    tilt.appendChild(inner);
    el.appendChild(tilt);

    const nivel = nivelDe(carta);
    if (nivel !== "base") {
      const badge = document.createElement("span");
      badge.className = "carta-avulsa-badge carta-avulsa-badge--" + nivel;
      badge.textContent = nivel === "sir" ? "Secreta" : "Rara";
      el.appendChild(badge);
    }

    const info = document.createElement("div");
    info.className = "carta-avulsa-info";

    const nome = document.createElement("p");
    nome.className = "carta-avulsa-nome";
    nome.textContent = carta.nome;
    info.appendChild(nome);

    const meta = document.createElement("p");
    meta.className = "carta-avulsa-meta";
    meta.textContent = carta.colecao + " · Nº " + carta.numero;
    info.appendChild(meta);

    const preco = document.createElement("p");
    const temPreco = carta.preco_num > 0;
    preco.className = "carta-avulsa-preco" + (temPreco ? "" : " carta-avulsa-preco--consulta");
    preco.textContent = temPreco ? carta.preco_brl : "Sob consulta";
    info.appendChild(preco);

    el.appendChild(info);

    const abrirZoom = () => Zoom.abrir(carta.imagem_url, carta.nome + " — " + carta.colecao, nivel);
    el.addEventListener("click", abrirZoom);
    el.addEventListener("keydown", (evento) => {
      if (evento.key === "Enter" || evento.key === " ") {
        evento.preventDefault();
        abrirZoom();
      }
    });

    return el;
  }

  function renderizarFiltroColecao() {
    const container = document.getElementById("filtro-cartas-colecao");
    container.innerHTML = "";
    [TODAS, "Reinado Delta", "Celebração 30 Anos"].forEach((valor) => {
      const botao = document.createElement("button");
      botao.type = "button";
      botao.className = "chip";
      botao.textContent = valor;
      botao.setAttribute("aria-pressed", String(filtroAtivo.colecao === valor));
      botao.addEventListener("click", () => {
        filtroAtivo.colecao = valor;
        renderizarFiltroColecao();
        aplicarFiltros();
      });
      container.appendChild(botao);
    });
  }

  function comparador(a, b) {
    switch (ordenacaoAtiva) {
      case "nome":
        return a.carta.nome.localeCompare(b.carta.nome, "pt-BR");
      case "preco-desc":
        return b.carta.preco_num - a.carta.preco_num;
      case "preco-asc":
        return a.carta.preco_num - b.carta.preco_num;
      default:
        return numeroOrdenavel(a.carta.numero) - numeroOrdenavel(b.carta.numero);
    }
  }

  // Reordena o DOM (reaproveitando os mesmos elementos, nunca recriando) —
  // só precisa rodar quando a ordenação muda, não a cada filtro/busca.
  function reordenar() {
    const grade = document.getElementById("grade-cartas");
    [...itens].sort(comparador).forEach((item) => grade.appendChild(item.el));
  }

  function aplicarFiltros() {
    const termo = buscaAtiva;
    let visiveis = 0;

    itens.forEach((item) => {
      const bateColecao = filtroAtivo.colecao === TODAS || item.carta.colecao === filtroAtivo.colecao;
      const bateBusca =
        termo === "" ||
        item.carta.nome.toLowerCase().includes(termo) ||
        item.carta.numero.toLowerCase().includes(termo);
      const mostra = bateColecao && bateBusca;
      item.el.hidden = !mostra;
      if (mostra) visiveis += 1;
    });

    const contagem = document.getElementById("cartas-contagem");
    contagem.textContent =
      visiveis === 0
        ? "Nenhuma carta encontrada com esses filtros."
        : visiveis + (visiveis === 1 ? " carta encontrada." : " cartas encontradas.");
  }

  function definirBusca(texto) {
    buscaAtiva = texto.trim().toLowerCase();
    aplicarFiltros();
  }

  function definirOrdenacao(valor) {
    ordenacaoAtiva = valor;
    reordenar();
    aplicarFiltros();
  }

  // Chamado por js/vistas.js na primeira vez que a aba "Cartas avulsas" é aberta.
  function montar() {
    if (typeof CARTAS_REINADO_DELTA === "undefined" || typeof CARTAS_CELEBRACAO_30_ANOS === "undefined") return;

    const todas = [
      ...CARTAS_REINADO_DELTA.map((c) => Object.assign({ colecao: "Reinado Delta" }, c)),
      ...CARTAS_CELEBRACAO_30_ANOS.map((c) => Object.assign({ colecao: "Celebração 30 Anos" }, c)),
    ];

    const grade = document.getElementById("grade-cartas");
    itens = todas.map((carta) => {
      const el = criarCard(carta);
      grade.appendChild(el);
      return { carta, el };
    });

    renderizarFiltroColecao();
    reordenar();
    aplicarFiltros();

    document.getElementById("busca-carta").addEventListener("input", (evento) => definirBusca(evento.target.value));
    document.getElementById("ordenar-cartas").addEventListener("change", (evento) => definirOrdenacao(evento.target.value));
  }

  return { montar };
})();
