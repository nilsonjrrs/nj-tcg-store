// Seção "Coleção": todas as cartas de uma coleção em ordem de número, dentro
// de um fichário — folhas de 9 bolsos (3x3), duas folhas lado a lado no
// desktop e uma no celular. As abas são as logos das coleções; clicar numa
// carta abre o zoom 3D (js/zoom.js). As coleções vêm de Simulador.colecoes.
const Colecao = (function () {
  const POR_FOLHA = 9;
  const duasFolhas = window.matchMedia("(min-width: 760px)");

  let colecao = null;
  let cartas = [];
  let todas = []; // a coleção inteira, em ordem
  let inicio = 0; // índice da primeira carta à mostra
  let iniciado = false;

  const el = (id) => document.getElementById(id);

  function porVez() {
    return POR_FOLHA * (duasFolhas.matches ? 2 : 1);
  }

  function criarBolso(carta) {
    const bolso = document.createElement(carta ? "button" : "div");
    bolso.className = "fichario-bolso" + (carta ? "" : " fichario-bolso--vazio");
    if (!carta) return bolso;
    bolso.type = "button";
    bolso.setAttribute("aria-label", "Ampliar " + carta.nome + ", " + Simulador.codigoDaCarta(colecao, carta) + ", " + carta.raridade);
    const img = document.createElement("img");
    img.src = carta.imagem_url.replace("cartas/", "cartas/p/");
    img.alt = "";
    img.loading = "lazy";
    img.width = 300;
    img.height = 417;
    bolso.appendChild(img);
    // código de busca da carta (sigla da coleção + número), como no canto inferior esquerdo dela
    const codigo = document.createElement("span");
    codigo.className = "fichario-codigo";
    codigo.textContent = Simulador.codigoDaCarta(colecao, carta);
    bolso.appendChild(codigo);
    bolso.addEventListener("click", () => Zoom.abrir(carta.imagem_url, carta.nome, Simulador.nivelRaridade(carta)));
    return bolso;
  }

  // direcao: 1 (avançou), -1 (voltou) ou 0 (sem animação de virar)
  function desenhar(direcao) {
    const folhas = el("fichario-folhas");
    folhas.innerHTML = "";
    for (let f = 0; f < porVez() / POR_FOLHA; f++) {
      const folha = document.createElement("div");
      folha.className = "fichario-folha";
      for (let i = 0; i < POR_FOLHA; i++) folha.appendChild(criarBolso(cartas[inicio + f * POR_FOLHA + i]));
      folhas.appendChild(folha);
    }
    folhas.classList.remove("virando-frente", "virando-tras");
    if (direcao) {
      void folhas.offsetWidth;
      folhas.classList.add(direcao > 0 ? "virando-frente" : "virando-tras");
    }

    const ultima = Math.min(inicio + porVez(), cartas.length);
    el("fichario-posicao").textContent = cartas.length
      ? "Cartas " + (inicio + 1) + " a " + ultima + " de " + cartas.length
      : "Nenhuma carta encontrada";
    el("fichario-anterior").disabled = inicio === 0;
    el("fichario-proxima").disabled = ultima >= cartas.length;
  }

  function mostrar(id) {
    colecao = Simulador.colecao(id) || Simulador.colecoes[0];
    // numeradas em ordem; as de código não numérico (RGB, Coleção Clássica) vão pro fim, na ordem do arquivo
    const ordem = (carta, i) => (/^\d/.test(carta.numero) ? parseInt(carta.numero, 10) : 10000 + i);
    todas = colecao.cartas
      .map((carta, i) => [ordem(carta, i), carta])
      .sort((a, b) => a[0] - b[0])
      .map((par) => par[1]);
    el("fichario-busca").value = "";
    cartas = todas;
    inicio = 0;
    document.querySelectorAll(".colecao-aba").forEach((aba) => {
      aba.setAttribute("aria-pressed", String(aba.dataset.colecao === colecao.id));
    });
    el("fichario").setAttribute("aria-label", "Fichário da coleção " + colecao.nome);
    desenhar(0);
  }

  // busca por nome ou pelo código da carta ("dlr 141", "141", "cc12", "pikachu"...)
  function buscar(texto) {
    const limpar = (t) => t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const termo = limpar(texto.trim());
    cartas = termo
      ? todas.filter((carta) => limpar(carta.nome + " " + Simulador.codigoDaCarta(colecao, carta)).includes(termo))
      : todas;
    inicio = 0;
    desenhar(0);
  }

  function virar(direcao) {
    const novo = inicio + direcao * porVez();
    if (novo < 0 || novo >= cartas.length) return;
    inicio = novo;
    desenhar(direcao);
  }

  // usado pela logo do simulador: troca pra coleção e rola até o fichário
  function irPara(id) {
    Vistas.abrir("colecao"); // monta o fichário se for a primeira vez
    mostrar(id);
  }

  function iniciar() {
    if (iniciado) return;
    iniciado = true;
    const abas = el("colecao-abas");
    Simulador.colecoes.forEach((c) => {
      const aba = document.createElement("button");
      aba.type = "button";
      aba.className = "colecao-aba";
      aba.dataset.colecao = c.id;
      const img = document.createElement("img");
      img.src = c.logo;
      img.alt = c.nome;
      aba.appendChild(img);
      aba.addEventListener("click", () => mostrar(c.id));
      abas.appendChild(aba);
    });
    el("fichario-busca").addEventListener("input", (evento) => buscar(evento.target.value));
    el("fichario-anterior").addEventListener("click", () => virar(-1));
    el("fichario-proxima").addEventListener("click", () => virar(1));
    // ao cruzar o ponto de quebra, realinha o início pra não cortar uma folha no meio
    duasFolhas.addEventListener("change", () => {
      inicio -= inicio % porVez();
      desenhar(0);
    });
    mostrar(Simulador.colecoes[0].id);
  }

  return { iniciar, mostrar, irPara };
})();
