// Expositor de cartas em destaque sobre o fundo do hero (img/hero-bg.jpg):
// palco de cartas em leque 3D, com uma carta em primeiro plano e as outras
// em planos de fundo. Usa os mesmos dados do simulador
// (js/cartas-reinado-delta.js) e reaproveita o tilt/brilho holográfico de
// js/tilt.js — mas com um visual próprio (ver .expositor-* em
// css/style.css), sem nenhuma borda/anel colorido em volta da carta, só a
// imagem real (object-fit:contain, cantos ~4.5%, sombra escura sutil).
const HeroCartas = (function () {
  // Os 5 hits de maior destaque da coleção (números batem com
  // js/cartas-reinado-delta.js). Se um número não existir nos dados (ou a
  // imagem não carregar), aquela carta simplesmente não entra no palco —
  // nunca mostramos um espaço quebrado ou texto no lugar da arte.
  const NUMEROS_DESTAQUE = ["141/103", "138/103", "136/103", "137/103", "135/103"];

  const LIMIAR_ARRASTO_PX = 10;
  const LIMIAR_SWIPE_PX = 60;
  const LIMITE_ROTACAO_ARRASTO = 16;

  function montar() {
    const container = document.getElementById("hero-expositor");
    const palco = document.getElementById("expositor-palco");
    const botaoAnterior = document.getElementById("expositor-anterior");
    const botaoProximo = document.getElementById("expositor-proximo");
    const controles = document.querySelector(".expositor-controles");
    if (!container || !palco || typeof CARTAS_REINADO_DELTA === "undefined") return;

    const cartas = NUMEROS_DESTAQUE.map((numero) => CARTAS_REINADO_DELTA.find((c) => c.numero === numero)).filter(Boolean);

    if (cartas.length === 0) {
      container.hidden = true;
      return;
    }

    // "itens" é a pilha em ordem atual: itens[0] é sempre a carta da
    // frente, o resto são os planos de fundo, nessa ordem.
    let itens = cartas.map((carta) => criarItem(carta));
    let moveuBastante = false;

    function criarItem(carta) {
      const el = document.createElement("div");
      el.className = "expositor-carta";
      el.setAttribute("role", "button");
      el.setAttribute("tabindex", "0");
      el.setAttribute("aria-label", "Mostrar carta: " + carta.nome);

      const tilt = document.createElement("div");
      tilt.className = "expositor-tilt";

      const inner = document.createElement("div");
      inner.className = "expositor-tilt-inner";

      const img = document.createElement("img");
      img.src = carta.imagem_url;
      img.alt = carta.nome;
      img.loading = "lazy";
      // Sem isso, o navegador interpreta um arraste do mouse sobre a
      // imagem como "arrastar a imagem pra fora" (dragstart nativo), que
      // sequestra o gesto no meio do caminho e quebra o arraste/swipe.
      img.draggable = false;
      img.addEventListener("dragstart", (evento) => evento.preventDefault());

      const item = { carta, el, tilt, controlador: null };

      img.addEventListener("error", () => removerItem(item));

      inner.appendChild(img);
      tilt.appendChild(inner);
      el.appendChild(tilt);
      palco.appendChild(el);

      el.addEventListener("click", () => {
        if (moveuBastante) return;
        trazerParaFrente(item);
      });
      el.addEventListener("keydown", (evento) => {
        if (evento.key === "Enter" || evento.key === " ") {
          evento.preventDefault();
          trazerParaFrente(item);
        }
      });

      return item;
    }

    function atualizarTiltDaFrente() {
      itens.forEach((item) => {
        if (item.controlador) {
          item.controlador.desativar();
          item.controlador = null;
        }
      });
      const frente = itens[0];
      if (frente) frente.controlador = Tilt.ativar(frente.tilt);
    }

    function renderizar() {
      itens.forEach((item, posicao) => {
        item.el.dataset.posicao = String(Math.min(posicao, 4));
      });
      const temVarias = itens.length > 1;
      controles.hidden = !temVarias;
    }

    function trazerParaFrente(item) {
      if (itens[0] === item) return;
      itens = [item, ...itens.filter((i) => i !== item)];
      atualizarTiltDaFrente();
      renderizar();
    }

    function proximo() {
      if (itens.length < 2) return;
      itens = [...itens.slice(1), itens[0]];
      atualizarTiltDaFrente();
      renderizar();
    }

    function anterior() {
      if (itens.length < 2) return;
      itens = [itens[itens.length - 1], ...itens.slice(0, -1)];
      atualizarTiltDaFrente();
      renderizar();
    }

    function removerItem(item) {
      const eraFrente = itens[0] === item;
      itens = itens.filter((i) => i !== item);
      item.el.remove();
      if (itens.length === 0) {
        container.hidden = true;
        return;
      }
      if (eraFrente) atualizarTiltDaFrente();
      renderizar();
    }

    // Arrasto horizontal: segue o dedo/mouse na carta da frente (leve
    // rotação proporcional ao arrasto) e, ao soltar, se o movimento passou
    // do limiar, troca de carta — senão volta pro lugar. Ouve o
    // move/up no document (não setPointerCapture) pra não perder eventos
    // no meio do gesto.
    let inicioArrastoX = 0;
    let ultimoDeltaArrasto = 0;

    function aplicarArrastoVisual(delta) {
      const frente = itens[0];
      if (!frente) return;
      const limitado = Math.max(-80, Math.min(80, delta));
      frente.el.style.setProperty("--arrasto-x", limitado + "px");
      frente.el.style.setProperty("--arrasto-rot", (limitado / 80) * LIMITE_ROTACAO_ARRASTO + "deg");
    }

    function limparArrastoVisual() {
      itens.forEach((item) => {
        item.el.style.removeProperty("--arrasto-x");
        item.el.style.removeProperty("--arrasto-rot");
      });
    }

    function moverArrastoPalco(evento) {
      ultimoDeltaArrasto = evento.clientX - inicioArrastoX;
      if (Math.abs(ultimoDeltaArrasto) > LIMIAR_ARRASTO_PX) moveuBastante = true;
      aplicarArrastoVisual(ultimoDeltaArrasto);
    }

    function soltarArrastoPalco() {
      document.removeEventListener("pointermove", moverArrastoPalco);
      document.removeEventListener("pointerup", soltarArrastoPalco);
      document.removeEventListener("pointercancel", soltarArrastoPalco);
      limparArrastoVisual();
      if (ultimoDeltaArrasto <= -LIMIAR_SWIPE_PX) proximo();
      else if (ultimoDeltaArrasto >= LIMIAR_SWIPE_PX) anterior();
      // Permite clique normal de novo logo após soltar (sem swipe real).
      setTimeout(() => {
        moveuBastante = false;
      }, 0);
    }

    palco.addEventListener("pointerdown", (evento) => {
      if (evento.pointerType === "mouse" && evento.button !== 0) return;
      inicioArrastoX = evento.clientX;
      ultimoDeltaArrasto = 0;
      moveuBastante = false;
      document.addEventListener("pointermove", moverArrastoPalco);
      document.addEventListener("pointerup", soltarArrastoPalco);
      document.addEventListener("pointercancel", soltarArrastoPalco);
    });

    botaoAnterior.addEventListener("click", anterior);
    botaoProximo.addEventListener("click", proximo);

    container.addEventListener("keydown", (evento) => {
      if (evento.key === "ArrowRight") {
        evento.preventDefault();
        proximo();
      } else if (evento.key === "ArrowLeft") {
        evento.preventDefault();
        anterior();
      }
    });

    atualizarTiltDaFrente();
    renderizar();
  }

  return { montar };
})();
