// Cartas reais de Reinado Delta flutuando ao redor do vórtice de fundo do
// hero (img/hero-bg.jpg). Usa os mesmos dados do simulador
// (js/cartas-reinado-delta.js) e reaproveita o componente de brilho/tilt 3D
// dos produtos do catálogo (produto-tilt, ver js/tilt.js) — nunca distorce
// a carta: a imagem real é exibida inteira, com proporção original. Em
// telas com mouse (ver suportaHover abaixo), cada carta também pode ser
// arrastada livremente pelo vórtice.
const HeroCartas = (function () {
  // Os 5 hits de maior destaque da coleção (números batem com
  // js/cartas-reinado-delta.js). Se um número não existir nos dados (ou a
  // imagem não carregar), aquele card simplesmente não aparece — nunca
  // mostramos um espaço quebrado ou texto no lugar da arte decorativa.
  const NUMEROS_DESTAQUE = ["141/103", "138/103", "136/103", "137/103", "135/103"];

  const suportaHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  // Limites (em % da própria seção do hero) que impedem a carta de ser
  // arrastada pra fora da área visível durante o drag.
  const LIMITE_ESQUERDA = [8, 96];
  const LIMITE_TOPO = [8, 94];

  function tornarArrastavel(item) {
    // Ouve pointermove/pointerup no document (não em setPointerCapture) —
    // padrão clássico de drag, mais robusto entre navegadores do que
    // depender de captura de ponteiro no próprio elemento.
    let inicioX = 0;
    let inicioY = 0;
    let inicioEsquerdaPct = 0;
    let inicioTopoPct = 0;

    function mover(evento) {
      const referencia = item.offsetParent;
      if (!referencia) return;
      const retRef = referencia.getBoundingClientRect();

      const deltaXPct = ((evento.clientX - inicioX) / retRef.width) * 100;
      const deltaYPct = ((evento.clientY - inicioY) / retRef.height) * 100;

      const novaEsquerda = Math.max(LIMITE_ESQUERDA[0], Math.min(LIMITE_ESQUERDA[1], inicioEsquerdaPct + deltaXPct));
      const novoTopo = Math.max(LIMITE_TOPO[0], Math.min(LIMITE_TOPO[1], inicioTopoPct + deltaYPct));

      item.style.left = novaEsquerda + "%";
      item.style.top = novoTopo + "%";
    }

    function soltar() {
      item.classList.remove("arrastando");
      document.removeEventListener("pointermove", mover);
      document.removeEventListener("pointerup", soltar);
      document.removeEventListener("pointercancel", soltar);
    }

    item.addEventListener("pointerdown", (evento) => {
      if (evento.pointerType === "mouse" && evento.button !== 0) return;
      const referencia = item.offsetParent;
      if (!referencia) return;

      const retRef = referencia.getBoundingClientRect();
      const retItem = item.getBoundingClientRect();

      inicioX = evento.clientX;
      inicioY = evento.clientY;
      inicioEsquerdaPct = ((retItem.left + retItem.width / 2 - retRef.left) / retRef.width) * 100;
      inicioTopoPct = ((retItem.top + retItem.height / 2 - retRef.top) / retRef.height) * 100;

      item.classList.add("arrastando");
      document.addEventListener("pointermove", mover);
      document.addEventListener("pointerup", soltar);
      document.addEventListener("pointercancel", soltar);
      evento.preventDefault();
    });
  }

  function montar() {
    const container = document.getElementById("hero-cartas");
    if (!container || typeof CARTAS_REINADO_DELTA === "undefined") return;

    const cartas = NUMEROS_DESTAQUE
      .map((numero) => CARTAS_REINADO_DELTA.find((c) => c.numero === numero))
      .filter(Boolean);

    cartas.forEach((carta, indice) => {
      const item = document.createElement("div");
      item.className = "hero-carta hero-carta--" + (indice + 1);
      item.style.setProperty("--flutuar-atraso", indice * 650 + "ms");
      item.style.setProperty("--flutuar-duracao", 5200 + indice * 420 + "ms");

      const flutuante = document.createElement("div");
      flutuante.className = "hero-carta-flutuante";

      const tilt = document.createElement("div");
      tilt.className = "produto-tilt hero-carta-tilt";

      const inner = document.createElement("div");
      inner.className = "produto-tilt-inner";

      const img = document.createElement("img");
      img.src = carta.imagem_url;
      img.alt = carta.nome;
      img.loading = "lazy";
      img.addEventListener("error", () => {
        item.hidden = true;
      });

      inner.appendChild(img);
      tilt.appendChild(inner);
      flutuante.appendChild(tilt);
      item.appendChild(flutuante);
      container.appendChild(item);

      Tilt.ativar(tilt);
      if (suportaHover) tornarArrastavel(item);
    });
  }

  return { montar };
})();
