// Palco de abertura do booster de Reinado Delta: gesto de rasgar o pacote
// (arraste ou botão/tecla) seguido da revelação sequencial das 6 cartas
// (sorteio em js/simulador.js). Reaproveita o componente de brilho/tilt
// dos produtos do catálogo (produto-tilt, ver js/tilt.js) nas cartas
// secretas reveladas.
const BoosterUI = (function () {
  const LIMIAR_RASGO = 70;

  let cartasAtuais = [];
  let indiceAtual = 0;
  let revelada = false;
  let arrastando = false;
  let inicioArrasteX = 0;
  let inicioPalcoX = null;

  function abrir() {
    cartasAtuais = [];
    indiceAtual = 0;
    revelada = false;
    document.getElementById("booster-resumo").hidden = true;
    document.getElementById("booster-revelacao").hidden = true;
    document.getElementById("booster-fechado").hidden = false;
    document.getElementById("booster-corte-dica").hidden = false;
    atualizarProgressoCorte(0);
    document.getElementById("modal-booster").hidden = false;
    document.getElementById("botao-rasgar").focus();
  }

  function fechar() {
    document.getElementById("modal-booster").hidden = true;
  }

  function estaAberto() {
    return !document.getElementById("modal-booster").hidden;
  }

  function atualizarProgressoCorte(progresso) {
    document.getElementById("booster-pacote").style.setProperty("--progresso-corte", String(progresso));
  }

  function iniciarArraste(evento) {
    arrastando = true;
    inicioArrasteX = evento.clientX;
    document.getElementById("booster-pacote").classList.add("sem-transicao");
    document.getElementById("booster-corte").setPointerCapture(evento.pointerId);
  }

  function moverArraste(evento) {
    if (!arrastando) return;
    const delta = evento.clientX - inicioArrasteX;
    const progresso = Math.max(0, Math.min(1, delta / LIMIAR_RASGO));
    atualizarProgressoCorte(progresso);
    if (delta >= LIMIAR_RASGO) {
      arrastando = false;
      rasgar();
    }
  }

  function soltarArraste() {
    if (!arrastando) return;
    arrastando = false;
    document.getElementById("booster-pacote").classList.remove("sem-transicao");
    atualizarProgressoCorte(0);
  }

  function rasgar() {
    document.getElementById("booster-pacote").classList.remove("sem-transicao");
    document.getElementById("booster-corte-dica").hidden = true;
    atualizarProgressoCorte(1);
    document.getElementById("booster-pacote").classList.add("booster-pacote--rasgado");
    setTimeout(iniciarRevelacao, 320);
  }

  function iniciarRevelacao() {
    cartasAtuais = Simulador.abrirPacote().map((carta) => ({ carta, revelada: false }));
    indiceAtual = 0;
    document.getElementById("booster-fechado").hidden = true;
    document.getElementById("booster-pacote").classList.remove("booster-pacote--rasgado");
    document.getElementById("booster-revelacao").hidden = false;
    mostrarCartaAtual();
    document.getElementById("carta-palco").focus();
  }

  function mostrarCartaAtual() {
    const total = cartasAtuais.length;
    document.getElementById("booster-progresso").textContent = "Carta " + (indiceAtual + 1) + " de " + total;
    document.getElementById("carta-dica").textContent = "Toque na carta pra virar";

    const inner = document.getElementById("carta-palco-inner");
    inner.classList.remove("virada");
    void inner.offsetWidth;

    const frente = document.getElementById("carta-palco-frente");
    frente.className = "carta-face carta-frente";
    frente.innerHTML = "";
  }

  function criarImagemCarta(carta) {
    const img = document.createElement("img");
    img.src = carta.imagem_url;
    img.alt = carta.nome;
    img.addEventListener("error", () => {
      const aviso = document.createElement("div");
      aviso.className = "carta-sem-imagem";
      aviso.textContent = carta.nome;
      img.replaceWith(aviso);
    });
    return img;
  }

  function revelarAtual() {
    const item = cartasAtuais[indiceAtual];
    const raridade = Simulador.nivelRaridade(item.carta);
    const frente = document.getElementById("carta-palco-frente");

    frente.className = "carta-face carta-frente";

    const tilt = document.createElement("div");
    tilt.className = "produto-tilt carta-palco-tilt" + (raridade !== "base" ? " carta-palco-tilt--" + raridade : "");
    const inner = document.createElement("div");
    inner.className = "produto-tilt-inner";
    inner.appendChild(criarImagemCarta(item.carta));
    tilt.appendChild(inner);
    frente.appendChild(tilt);
    Tilt.ativar(tilt);

    const info = document.createElement("div");
    info.className = "carta-palco-info";
    info.innerHTML =
      "<strong>" + item.carta.nome + "</strong><span>Nº " + item.carta.numero + "</span><span class=\"carta-palco-preco\">" + item.carta.preco_brl + "</span>";
    frente.appendChild(info);

    document.getElementById("carta-palco-inner").classList.add("virada");
    item.revelada = true;
    revelada = true;

    document.getElementById("carta-dica").textContent =
      indiceAtual < cartasAtuais.length - 1 ? "Toque pra ver a próxima" : "Toque pra ver o resumo";
  }

  function avancar() {
    indiceAtual += 1;
    if (indiceAtual >= cartasAtuais.length) {
      mostrarResumo();
      return;
    }
    revelada = false;
    mostrarCartaAtual();
  }

  function avancarOuVirar() {
    if (!revelada) {
      revelarAtual();
    } else {
      avancar();
    }
  }

  function mostrarResumo() {
    document.getElementById("booster-revelacao").hidden = true;
    document.getElementById("booster-resumo").hidden = false;

    const miniaturas = document.getElementById("booster-miniaturas");
    miniaturas.innerHTML = "";
    cartasAtuais.forEach((item) => {
      const raridade = Simulador.nivelRaridade(item.carta);
      const mini = document.createElement("div");
      mini.className = "booster-miniatura" + (raridade !== "base" ? " booster-miniatura--" + raridade : "");
      mini.appendChild(criarImagemCarta(item.carta));
      miniaturas.appendChild(mini);
    });

    const total = Simulador.valorTotal(cartasAtuais.map((item) => item.carta));
    document.getElementById("booster-valor-total").textContent = Simulador.formatarPreco(total);
  }

  function abrirOutro() {
    document.getElementById("booster-resumo").hidden = true;
    abrir();
  }

  function iniciarArrastePalco(evento) {
    inicioPalcoX = evento.clientX;
  }

  function soltarArrastePalco() {
    if (inicioPalcoX === null) return;
    inicioPalcoX = null;
    avancarOuVirar();
  }

  function iniciar() {
    const corte = document.getElementById("booster-corte");
    corte.addEventListener("pointerdown", iniciarArraste);
    corte.addEventListener("pointermove", moverArraste);
    corte.addEventListener("pointerup", soltarArraste);
    corte.addEventListener("pointercancel", soltarArraste);
    corte.addEventListener("keydown", (evento) => {
      if (evento.key === "Enter" || evento.key === " ") {
        evento.preventDefault();
        rasgar();
      }
    });

    document.getElementById("botao-rasgar").addEventListener("click", rasgar);

    const palco = document.getElementById("carta-palco");
    palco.addEventListener("pointerdown", iniciarArrastePalco);
    palco.addEventListener("pointerup", soltarArrastePalco);
    palco.addEventListener("keydown", (evento) => {
      if (evento.key === "Enter" || evento.key === " ") {
        evento.preventDefault();
        avancarOuVirar();
      }
    });

    document.getElementById("booster-abrir-outro").addEventListener("click", abrirOutro);
  }

  return { abrir, fechar, estaAberto, iniciar };
})();
