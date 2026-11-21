// Palco de abertura do booster de Reinado Delta: gesto de rasgar o pacote
// (arraste ou botão/tecla) seguido da revelação sequencial das 6 cartas
// (sorteio em js/simulador.js). Reaproveita o componente de brilho/tilt
// dos produtos do catálogo (produto-tilt, ver js/tilt.js) nas cartas
// reveladas. Sequência: o pacote chacoalha e brilha na cor do melhor hit,
// rasga, as cartas sobem em pilha já de frente, como num booster de verdade;
// cada toque manda a carta do topo pra bandeja e mostra a de trás (os hits
// ganham explosão e raios girando); no fim, o resumo.
// Tudo em JS/CSS puro (Web Animations API), sem biblioteca. Os efeitos de
// impacto são pulados inteiros quando o usuário pediu prefers-reduced-motion.
const BoosterUI = (function () {
  const LIMIAR_RASGO = 70;
  const reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const COR = { sir: "#ffd166", irfa: "#a97ee2", base: "#ff7c38" };

  let cartasAtuais = [];
  let indiceAtual = 0;
  let ocupado = false; // uma animação está em curso: ignora toques até acabar
  let geracao = 0; // muda a cada abrir/fechar/pular: sequências antigas param sozinhas
  let arrastando = false;
  let inicioArrasteX = 0;
  let inicioPalcoX = null;
  let ultimoPonteiro = null; // onde o mouse está sobre a carta, pra próxima já nascer inclinada

  const el = (id) => document.getElementById(id);
  const esperar = (ms) => new Promise((resolver) => setTimeout(resolver, ms));

  // .finished rejeita quando a animação é cancelada (ex.: fechou o modal no meio)
  async function terminar(animacao) {
    try {
      await animacao.finished;
    } catch (e) {}
  }

  function cancelarAnimacoes(elemento) {
    elemento.getAnimations().forEach((a) => a.cancel());
  }

  function reiniciarAnimacao(elemento, classe) {
    elemento.classList.remove(classe);
    void elemento.offsetWidth; // força reflow pra poder reiniciar a animação em aberturas seguidas
    elemento.classList.add(classe);
  }

  function centroRelativo(elemento) {
    const r1 = elemento.getBoundingClientRect();
    const r2 = el("booster-palco").getBoundingClientRect();
    return {
      x: r1.left - r2.left + r1.width / 2,
      y: r1.top - r2.top + r1.height / 2,
    };
  }

  function criarParticulas(centro, cor, quantidade, alcance) {
    const container = el("booster-particulas");
    for (let i = 0; i < quantidade; i++) {
      const particula = document.createElement("span");
      particula.className = "booster-particula";
      const angulo = Math.random() * Math.PI * 2;
      const distancia = alcance * (0.4 + Math.random() * 0.6);
      particula.style.setProperty("--x", centro.x + "px");
      particula.style.setProperty("--y", centro.y + "px");
      particula.style.setProperty("--dx", Math.cos(angulo) * distancia + "px");
      particula.style.setProperty("--dy", Math.sin(angulo) * distancia + "px");
      particula.style.setProperty("--tam", 4 + Math.random() * 6 + "px");
      particula.style.setProperty("--duracao", 600 + Math.random() * 500 + "ms");
      particula.style.setProperty("--cor", cor);
      particula.addEventListener("animationend", () => particula.remove());
      container.appendChild(particula);
    }
  }

  function dispararExplosao(centro, opcoes) {
    if (reduzMovimento) return;

    criarParticulas(centro, opcoes.cor, opcoes.particulas, opcoes.alcance || 160);

    const raios = el("booster-raios");
    raios.style.left = centro.x + "px";
    raios.style.top = centro.y + "px";
    reiniciarAnimacao(raios, "booster-raios--ativo");
    reiniciarAnimacao(el("booster-flash"), "booster-flash--ativo");

    if (opcoes.tremer) reiniciarAnimacao(el("booster-palco"), "tremer");
  }

  // Raios girando atrás da carta enquanto uma secreta está na tela.
  function raiosDeFundo(cor) {
    const raios = el("booster-raios-fundo");
    if (!cor || reduzMovimento) {
      raios.classList.remove("booster-raios-fundo--ativo");
      return;
    }
    const centro = centroRelativo(el("carta-palco"));
    raios.style.left = centro.x + "px";
    raios.style.top = centro.y + "px";
    raios.style.setProperty("--cor-raio", cor + "55");
    raios.classList.add("booster-raios-fundo--ativo");
  }

  function abrir() {
    geracao += 1;
    ocupado = false;
    cartasAtuais = [];
    indiceAtual = 0;
    const pacote = el("booster-pacote-visual");
    cancelarAnimacoes(pacote);
    // cada abertura sorteia uma das 4 artes do booster de Reinado Delta
    // (URL absoluta: url() relativa numa custom property seria resolvida a partir do css/)
    pacote.style.setProperty("--arte-pacote", 'url("' + new URL("img/booster-reinado-delta-" + (1 + Math.floor(Math.random() * 4)) + ".webp", document.baseURI).href + '")');
    cancelarAnimacoes(el("carta-palco"));
    raiosDeFundo(null);
    el("booster-resumo").hidden = true;
    el("booster-revelacao").hidden = true;
    el("booster-fechado").hidden = false;
    el("booster-corte-dica").hidden = false;
    el("booster-pacote-visual").classList.remove("booster-pacote--rasgado");
    atualizarProgressoCorte(0);
    el("modal-booster").hidden = false;
    if (!reduzMovimento) reiniciarAnimacao(el("booster-palco"), "entrando");
    el("botao-rasgar").focus();
  }

  function fechar() {
    geracao += 1;
    el("modal-booster").hidden = true;
  }

  function estaAberto() {
    return !el("modal-booster").hidden;
  }

  function atualizarProgressoCorte(progresso) {
    el("booster-pacote-visual").style.setProperty("--progresso-corte", String(progresso));
  }

  function iniciarArraste(evento) {
    if (ocupado) return;
    arrastando = true;
    inicioArrasteX = evento.clientX;
    el("booster-pacote-visual").classList.add("sem-transicao");
    el("booster-corte").setPointerCapture(evento.pointerId);
  }

  function moverArraste(evento) {
    if (!arrastando) return;
    const delta = evento.clientX - inicioArrasteX;
    atualizarProgressoCorte(Math.max(0, Math.min(1, delta / LIMIAR_RASGO)));
    if (delta >= LIMIAR_RASGO) {
      arrastando = false;
      rasgar();
    }
  }

  function soltarArraste() {
    if (!arrastando) return;
    arrastando = false;
    el("booster-pacote-visual").classList.remove("sem-transicao");
    atualizarProgressoCorte(0);
  }

  async function rasgar() {
    if (ocupado) return;
    ocupado = true;
    const minha = geracao;

    // Sorteia o pacote já aqui (e não só na revelação) pra saber a raridade
    // do melhor hit e dar ao brilho e à explosão de abertura a cor certa.
    cartasAtuais = Simulador.abrirPacote().map((carta) => ({ carta }));
    const raridades = cartasAtuais.map((item) => Simulador.nivelRaridade(item.carta));
    const cor = COR[raridades.includes("sir") ? "sir" : raridades.includes("irfa") ? "irfa" : "base"];

    // baixa as 6 cartas (e as miniaturas) enquanto o pacote chacoalha; a revelação
    // só começa com elas prontas, pra nenhuma carta aparecer carregando pela metade
    const prontas = Promise.all(
      cartasAtuais.map((item) => {
        new Image().src = item.carta.imagem_url.replace("cartas/", "cartas/p/");
        const img = new Image();
        img.src = item.carta.imagem_url;
        return img.decode().catch(() => {});
      })
    );

    const pacote = el("booster-pacote-visual");
    pacote.classList.remove("sem-transicao");
    el("booster-corte-dica").hidden = true;

    // 1) suspense: o pacote chacoalha com o brilho crescendo
    if (!reduzMovimento) {
      atualizarProgressoCorte(0.25);
      pacote.style.setProperty("--cor-hit", cor);
      pacote.animate(
        [{ filter: "drop-shadow(0 10px 24px rgba(124, 58, 237, 0.55))" }, { filter: "drop-shadow(0 0 36px " + cor + ")" }],
        { duration: 750, fill: "forwards" }
      );
      await terminar(
        pacote.animate(
          [
            { transform: "rotate(0)" },
            { transform: "rotate(-4deg) scale(1.02)" },
            { transform: "rotate(4deg) scale(1.03)" },
            { transform: "rotate(-5deg) scale(1.04)" },
            { transform: "rotate(5deg) scale(1.05)" },
            { transform: "rotate(-3deg) scale(1.05)" },
            { transform: "rotate(0) scale(1.05)" },
          ],
          { duration: 750, easing: "ease-in-out", fill: "forwards" }
        )
      );
      if (minha !== geracao) return;
    }

    // 2) rasga: as duas metades voam, com a explosão na cor do hit
    atualizarProgressoCorte(1);
    pacote.classList.add("booster-pacote--rasgado");
    dispararExplosao(centroRelativo(pacote), { cor, particulas: 26, tremer: true });

    await esperar(600);
    await Promise.race([prontas, esperar(2500)]); // conexão ruim: segue mesmo assim depois de 2,5 s
    if (minha !== geracao) return;
    iniciarRevelacao();
  }

  function iniciarRevelacao() {
    indiceAtual = 0;
    const pacote = el("booster-pacote-visual");
    el("booster-fechado").hidden = true;
    cancelarAnimacoes(pacote);
    pacote.classList.remove("booster-pacote--rasgado");

    const bandeja = el("booster-bandeja");
    bandeja.innerHTML = "";
    cartasAtuais.forEach(() => {
      const vaga = document.createElement("div");
      vaga.className = "booster-bandeja-vaga";
      bandeja.appendChild(vaga);
    });

    el("booster-revelacao").hidden = false;
    mostrarCartaAtual();

    // 3) as cartas sobem de dentro do pacote, em pilha
    if (!reduzMovimento) {
      el("carta-palco-area").animate(
        [
          { transform: "translateY(90px) scale(0.7)", opacity: 0 },
          { transform: "translateY(-14px) scale(1.03)", opacity: 1, offset: 0.7 },
          { transform: "none", opacity: 1 },
        ],
        { duration: 520, easing: "cubic-bezier(0.3, 0.7, 0.3, 1)" }
      );
    }
    ocupado = false;
    el("carta-palco").focus();
  }

  // As cartas vêm de frente, empilhadas como saem do booster: a de cima é a
  // atual e as próximas ficam logo atrás, já com a própria arte. Quando a de
  // cima voa pra bandeja, a seguinte já está ali — não existe virada.
  function desenharPilha() {
    const pilha = el("carta-pilha");
    pilha.innerHTML = "";
    for (let i = cartasAtuais.length - 1; i > indiceAtual; i--) {
      const d = i - indiceAtual;
      const proxima = document.createElement("div");
      proxima.className = "carta-pilha-item";
      proxima.style.backgroundImage = 'url("' + cartasAtuais[i].carta.imagem_url + '")';
      proxima.style.transform =
        "translate(" + d * 3 + "px," + d * -3 + "px) rotate(" + (d % 2 ? 1 : -1) * d * 0.8 + "deg)";
      pilha.appendChild(proxima);
    }
  }

  // pequena: miniatura de 240px (bandeja e resumo); sem isso, a imagem cheia de 600x825
  function criarImagemCarta(carta, pequena) {
    const img = document.createElement("img");
    img.src = pequena ? carta.imagem_url.replace("cartas/", "cartas/p/") : carta.imagem_url;
    img.alt = carta.nome;
    img.addEventListener("error", () => {
      const aviso = document.createElement("div");
      aviso.className = "carta-sem-imagem";
      aviso.textContent = carta.nome;
      img.replaceWith(aviso);
    });
    return img;
  }

  function criarCamada(classe) {
    const camada = document.createElement("div");
    camada.className = classe;
    camada.setAttribute("aria-hidden", "true");
    return camada;
  }

  // Monta a carta do topo da pilha (já de frente) e dispara os efeitos se for um hit.
  function mostrarCartaAtual() {
    const minha = geracao;
    const item = cartasAtuais[indiceAtual];
    const raridade = Simulador.nivelRaridade(item.carta);
    const secreta = raridade !== "base";
    const cor = COR[raridade];
    const palco = el("carta-palco");

    el("booster-progresso").textContent = "Carta " + (indiceAtual + 1) + " de " + cartasAtuais.length;
    el("carta-dica").textContent =
      indiceAtual < cartasAtuais.length - 1 ? "Toque pra ver a próxima" : "Toque pra ver o resumo";
    raiosDeFundo(null);
    desenharPilha();

    const frente = el("carta-palco-frente");
    frente.innerHTML = "";

    const tilt = document.createElement("div");
    tilt.className = "produto-tilt carta-palco-tilt" + (secreta ? " carta-palco-tilt--" + raridade : "");
    const tiltInner = document.createElement("div");
    tiltInner.className = "produto-tilt-inner";
    tiltInner.appendChild(criarImagemCarta(item.carta));
    tilt.appendChild(tiltInner);
    tilt.appendChild(criarCamada("carta-sheen"));

    // acabamento holográfico contínuo nos hits; estrelinhas só nos mais raros
    if (secreta) tilt.appendChild(criarCamada("carta-holo"));
    if (raridade === "sir") {
      const estrelas = criarCamada("carta-estrelas");
      for (let i = 0; i < 10; i++) {
        const estrela = document.createElement("i");
        estrela.style.left = 8 + Math.random() * 84 + "%";
        estrela.style.top = 6 + Math.random() * 74 + "%";
        estrela.style.animationDelay = (Math.random() * 1.8).toFixed(2) + "s";
        estrelas.appendChild(estrela);
      }
      tilt.appendChild(estrelas);
    }

    frente.appendChild(tilt);
    Tilt.ativar(tilt);
    if (ultimoPonteiro) {
      tilt.dispatchEvent(new PointerEvent("pointermove", { clientX: ultimoPonteiro.x, clientY: ultimoPonteiro.y, pointerType: "mouse" }));
    }

    // nome, raridade, número e preço ficam embaixo da carta, sem cobrir a arte
    el("carta-legenda").innerHTML =
      "<strong>" + item.carta.nome + "</strong><span>" + item.carta.raridade + " · Nº " + item.carta.numero + " · <span class=\"carta-palco-preco\">" + item.carta.preco_brl + "</span></span>";
    el("carta-ampliar").hidden = false;

    const rotulo = el("booster-raridade");
    rotulo.textContent = secreta ? item.carta.raridade : "";
    if (!secreta) return;

    rotulo.style.setProperty("--cor", cor);
    if (!reduzMovimento) reiniciarAnimacao(rotulo, "entrando");
    raiosDeFundo(cor);

    const centro = centroRelativo(palco);
    if (raridade === "sir") {
      dispararExplosao(centro, { cor, particulas: 30, alcance: 200, tremer: true });
      // segunda onda, maior, só nos mais raros
      setTimeout(() => {
        if (minha !== geracao || reduzMovimento) return;
        criarParticulas(centro, "#ffffff", 24, 220);
        criarParticulas(centro, cor, 34, 300);
      }, 350);
    } else {
      dispararExplosao(centro, { cor, particulas: 18, tremer: false });
    }
  }

  // A carta do topo voa até a sua vaga na bandeja e a de trás passa a ser a atual.
  async function avancar() {
    if (ocupado) return;
    ocupado = true;
    const minha = geracao;
    const item = cartasAtuais[indiceAtual];
    const raridade = Simulador.nivelRaridade(item.carta);
    const palco = el("carta-palco");
    const vaga = el("booster-bandeja").children[indiceAtual];
    raiosDeFundo(null);
    el("booster-raridade").textContent = "";
    el("carta-ampliar").hidden = true;

    let voo = null;
    if (!reduzMovimento) {
      const a = palco.getBoundingClientRect();
      const b = vaga.getBoundingClientRect();
      const dx = b.left + b.width / 2 - (a.left + a.width / 2);
      const dy = b.top + b.height / 2 - (a.top + a.height / 2);
      voo = palco.animate(
        [
          { transform: "none", opacity: 1 },
          { transform: "translate(" + dx + "px," + dy + "px) scale(" + b.width / a.width + ")", opacity: 0.5 },
        ],
        { duration: 380, easing: "cubic-bezier(0.5, 0, 0.3, 1)", fill: "forwards" }
      );
      await terminar(voo);
      if (minha !== geracao) return;
    }

    vaga.className = "booster-bandeja-vaga booster-bandeja-mini" + (raridade !== "base" ? " booster-bandeja-mini--" + raridade : "");
    vaga.appendChild(criarImagemCarta(item.carta, true));

    indiceAtual += 1;
    ocupado = false;
    if (indiceAtual >= cartasAtuais.length) {
      mostrarResumo();
    } else {
      mostrarCartaAtual();
      if (!reduzMovimento) {
        el("carta-palco-inner").animate(
          [{ transform: "translate(3px, -3px) rotate(0.8deg)" }, { transform: "none" }],
          { duration: 260, easing: "ease-out" }
        );
      }
    }
    if (voo) voo.cancel();
  }

  function pular() {
    geracao += 1;
    ocupado = false;
    cancelarAnimacoes(el("carta-palco"));
    mostrarResumo();
  }

  function animarContagemValor(valorFinal) {
    const alvo = el("booster-valor-total");
    if (reduzMovimento) {
      alvo.textContent = Simulador.formatarPreco(valorFinal);
      return;
    }
    const duracao = 700;
    const inicio = performance.now();
    function passo(agora) {
      const progresso = Math.min(1, (agora - inicio) / duracao);
      alvo.textContent = Simulador.formatarPreco(valorFinal * progresso);
      if (progresso < 1) requestAnimationFrame(passo);
    }
    requestAnimationFrame(passo);
  }

  function mostrarResumo() {
    raiosDeFundo(null);
    el("booster-revelacao").hidden = true;
    el("booster-resumo").hidden = false;

    const miniaturas = el("booster-miniaturas");
    miniaturas.innerHTML = "";
    cartasAtuais.forEach((item, indice) => {
      const raridade = Simulador.nivelRaridade(item.carta);
      const mini = document.createElement("button");
      mini.type = "button";
      mini.className = "booster-miniatura" + (raridade !== "base" ? " booster-miniatura--" + raridade : "");
      mini.style.setProperty("--retardo", indice * 90 + "ms");
      mini.setAttribute("aria-label", "Ampliar " + item.carta.nome);
      mini.appendChild(criarImagemCarta(item.carta, true));
      if (raridade !== "base") mini.appendChild(criarCamada("carta-holo"));
      mini.addEventListener("click", () => Zoom.abrir(item.carta.imagem_url, item.carta.nome, raridade));
      miniaturas.appendChild(mini);
    });

    animarContagemValor(Simulador.valorTotal(cartasAtuais.map((item) => item.carta)));
    el("booster-abrir-outro").focus();
  }

  function iniciarArrastePalco(evento) {
    inicioPalcoX = evento.clientX;
  }

  function soltarArrastePalco() {
    if (inicioPalcoX === null) return;
    inicioPalcoX = null;
    avancar();
  }

  function iniciar() {
    const corte = el("booster-corte");
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

    el("botao-rasgar").addEventListener("click", rasgar);

    const palco = el("carta-palco");
    palco.addEventListener("pointerdown", iniciarArrastePalco);
    palco.addEventListener("pointerup", soltarArrastePalco);
    palco.addEventListener("pointermove", (evento) => {
      if (evento.pointerType !== "touch") ultimoPonteiro = { x: evento.clientX, y: evento.clientY };
    });
    palco.addEventListener("pointerleave", () => {
      ultimoPonteiro = null;
    });
    palco.addEventListener("keydown", (evento) => {
      if (evento.key === "Enter" || evento.key === " ") {
        evento.preventDefault();
        avancar();
      }
    });

    el("carta-ampliar").addEventListener("click", () => {
      const carta = cartasAtuais[indiceAtual].carta;
      Zoom.abrir(carta.imagem_url, carta.nome, Simulador.nivelRaridade(carta));
    });
    el("booster-pular").addEventListener("click", pular);
    el("booster-abrir-outro").addEventListener("click", abrir);
  }

  return { abrir, fechar, estaAberto, iniciar };
})();
