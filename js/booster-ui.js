// Palco de abertura do booster de Reinado Delta: gesto de rasgar o pacote
// (arraste ou botão/tecla) seguido da revelação sequencial das 6 cartas
// (sorteio em js/simulador.js). Reaproveita o componente de brilho/tilt
// dos produtos do catálogo (produto-tilt, ver js/tilt.js) nas cartas
// secretas reveladas. Os efeitos de impacto (flash, raios de luz,
// partículas, tremor de tela) são gerados aqui via JS/CSS puro — sem
// bibliotecas de animação — e desligados inteiramente quando o usuário
// pediu prefers-reduced-motion (gerar partículas pra uma animação de
// 0.01ms não serve pra nada e só desperdiça processamento).
const BoosterUI = (function () {
  const LIMIAR_RASGO = 70;
  const reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const CORES_RARIDADE = {
    sir: "#ffd166",
    irfa: "var(--color-accent-strong)",
  };

  let cartasAtuais = [];
  let indiceAtual = 0;
  let revelada = false;
  let arrastando = false;
  let inicioArrasteX = 0;
  let inicioPalcoX = null;

  function reiniciarAnimacao(el, classe) {
    el.classList.remove(classe);
    void el.offsetWidth; // força reflow pra poder reiniciar a animação em aberturas seguidas
    el.classList.add(classe);
  }

  function centroRelativo(el) {
    const palco = document.getElementById("booster-palco");
    const r1 = el.getBoundingClientRect();
    const r2 = palco.getBoundingClientRect();
    return {
      x: r1.left - r2.left + r1.width / 2,
      y: r1.top - r2.top + r1.height / 2,
    };
  }

  function criarParticulas(centro, cor, quantidade) {
    const container = document.getElementById("booster-particulas");
    for (let i = 0; i < quantidade; i++) {
      const particula = document.createElement("span");
      particula.className = "booster-particula";
      const angulo = Math.random() * Math.PI * 2;
      const distancia = 60 + Math.random() * 100;
      const tamanho = 4 + Math.random() * 5;
      const duracao = 550 + Math.random() * 350;
      particula.style.setProperty("--x", centro.x + "px");
      particula.style.setProperty("--y", centro.y + "px");
      particula.style.setProperty("--dx", Math.cos(angulo) * distancia + "px");
      particula.style.setProperty("--dy", Math.sin(angulo) * distancia + "px");
      particula.style.setProperty("--tam", tamanho + "px");
      particula.style.setProperty("--duracao", duracao + "ms");
      particula.style.setProperty("--cor", cor);
      particula.addEventListener("animationend", () => particula.remove());
      container.appendChild(particula);
    }
  }

  function dispararExplosao(centro, opcoes) {
    if (reduzMovimento) return;

    criarParticulas(centro, opcoes.cor, opcoes.particulas);

    const raios = document.getElementById("booster-raios");
    raios.style.left = centro.x + "px";
    raios.style.top = centro.y + "px";
    raios.classList.remove("booster-raios--ativo");
    void raios.offsetWidth;
    raios.classList.add("booster-raios--ativo");

    reiniciarAnimacao(document.getElementById("booster-flash"), "booster-flash--ativo");

    if (opcoes.tremer) {
      reiniciarAnimacao(document.getElementById("booster-palco"), "tremer");
    }
  }

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
    if (!reduzMovimento) reiniciarAnimacao(document.getElementById("booster-palco"), "entrando");
    document.getElementById("botao-rasgar").focus();
  }

  function fechar() {
    document.getElementById("modal-booster").hidden = true;
  }

  function estaAberto() {
    return !document.getElementById("modal-booster").hidden;
  }

  function atualizarProgressoCorte(progresso) {
    document.getElementById("booster-pacote-visual").style.setProperty("--progresso-corte", String(progresso));
  }

  function iniciarArraste(evento) {
    arrastando = true;
    inicioArrasteX = evento.clientX;
    document.getElementById("booster-pacote-visual").classList.add("sem-transicao");
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
    document.getElementById("booster-pacote-visual").classList.remove("sem-transicao");
    atualizarProgressoCorte(0);
  }

  function rasgar() {
    // Sorteia o pacote já aqui (e não só na revelação) pra saber a raridade
    // do hit e dar à explosão de abertura a cor certa — dourado se vier um
    // SIR, roxo se vier um IR/FA, laranja da marca nos demais casos.
    cartasAtuais = Simulador.abrirPacote().map((carta) => ({ carta, revelada: false }));

    document.getElementById("booster-pacote-visual").classList.remove("sem-transicao");
    document.getElementById("booster-corte-dica").hidden = true;
    atualizarProgressoCorte(1);
    document.getElementById("booster-pacote-visual").classList.add("booster-pacote--rasgado");

    const raridades = cartasAtuais.map((item) => Simulador.nivelRaridade(item.carta));
    const corExplosao = raridades.includes("sir")
      ? CORES_RARIDADE.sir
      : raridades.includes("irfa")
      ? CORES_RARIDADE.irfa
      : "var(--color-primary)";
    dispararExplosao(centroRelativo(document.getElementById("booster-pacote-visual")), {
      cor: corExplosao,
      particulas: 18,
      tremer: true,
    });

    setTimeout(iniciarRevelacao, 420);
  }

  function iniciarRevelacao() {
    indiceAtual = 0;
    document.getElementById("booster-fechado").hidden = true;
    document.getElementById("booster-pacote-visual").classList.remove("booster-pacote--rasgado");
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

    if (!reduzMovimento) reiniciarAnimacao(document.getElementById("carta-palco"), "entrando");
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

    const sheen = document.createElement("div");
    sheen.className = "carta-sheen";
    sheen.setAttribute("aria-hidden", "true");
    tilt.appendChild(sheen);

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

    // Cartas secretas ganham uma explosão de luz/partículas na revelação,
    // mais intensa nas SIR do que nas IR/FA; as cartas base só têm o brilho
    // holo/sheen de sempre, pra não cansar o usuário a cada carta comum.
    if (raridade === "sir") {
      dispararExplosao(centroRelativo(document.getElementById("carta-palco")), {
        cor: CORES_RARIDADE.sir,
        particulas: 26,
        tremer: true,
      });
    } else if (raridade === "irfa") {
      dispararExplosao(centroRelativo(document.getElementById("carta-palco")), {
        cor: CORES_RARIDADE.irfa,
        particulas: 14,
        tremer: false,
      });
    }

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

  function animarContagemValor(valorFinal) {
    const el = document.getElementById("booster-valor-total");
    if (reduzMovimento) {
      el.textContent = Simulador.formatarPreco(valorFinal);
      return;
    }
    const duracao = 700;
    const inicio = performance.now();
    function passo(agora) {
      const progresso = Math.min(1, (agora - inicio) / duracao);
      el.textContent = Simulador.formatarPreco(valorFinal * progresso);
      if (progresso < 1) requestAnimationFrame(passo);
    }
    requestAnimationFrame(passo);
  }

  function mostrarResumo() {
    document.getElementById("booster-revelacao").hidden = true;
    document.getElementById("booster-resumo").hidden = false;

    const miniaturas = document.getElementById("booster-miniaturas");
    miniaturas.innerHTML = "";
    cartasAtuais.forEach((item, indice) => {
      const raridade = Simulador.nivelRaridade(item.carta);
      const mini = document.createElement("div");
      mini.className = "booster-miniatura" + (raridade !== "base" ? " booster-miniatura--" + raridade : "");
      mini.style.setProperty("--retardo", indice * 70 + "ms");
      mini.appendChild(criarImagemCarta(item.carta));
      miniaturas.appendChild(mini);
    });

    const total = Simulador.valorTotal(cartasAtuais.map((item) => item.carta));
    animarContagemValor(total);
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
