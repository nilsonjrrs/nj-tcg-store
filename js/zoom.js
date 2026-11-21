// Lightbox: amplia a foto do produto ao clicar/ativar o card no catálogo
// (só quando o produto tem foto real, ver js/catalogo.js) e as cartas do
// simulador. No modo carta ela inclina em 3D acompanhando o ponteiro (ou o
// dedo arrastando), com um reflexo de luz que segue o movimento — dá pra
// "girar" a carta na mão pra analisar.
const Zoom = (function () {
  const reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const GRAUS = 24;
  let ultimoFoco = null;
  let modoCarta = false;

  const el = (id) => document.getElementById(id);

  // carta: omitido para foto de produto; "base", "irfa" ou "sir" para carta do simulador
  function abrir(src, legenda, carta) {
    ultimoFoco = document.activeElement;
    modoCarta = !!carta;
    const img = el("zoom-imagem");
    img.src = src;
    img.alt = legenda;
    const palco = el("zoom-carta-3d");
    palco.classList.toggle("zoom-carta", modoCarta);
    palco.style.transform = "";
    el("zoom-holo").hidden = !carta || carta === "base";
    el("modal-zoom").hidden = false;
    if (modoCarta && !reduzMovimento) {
      palco.classList.remove("entrando");
      void palco.offsetWidth;
      palco.classList.add("entrando");
    }
    el("fechar-zoom").focus();
  }

  function fechar() {
    el("modal-zoom").hidden = true;
    el("zoom-imagem").src = "";
    if (ultimoFoco) ultimoFoco.focus();
  }

  function estaAberto() {
    return !el("modal-zoom").hidden;
  }

  function inclinar(evento) {
    if (!modoCarta || reduzMovimento) return;
    const palco = el("zoom-carta-3d");
    const r = palco.getBoundingClientRect();
    const x = (evento.clientX - r.left) / r.width;
    const y = (evento.clientY - r.top) / r.height;
    if (x < -0.3 || x > 1.3 || y < -0.3 || y > 1.3) {
      palco.style.transform = "";
      return;
    }
    palco.style.transform = "rotateY(" + (x - 0.5) * GRAUS + "deg) rotateX(" + (0.5 - y) * GRAUS + "deg)";
    palco.style.setProperty("--mx", x * 100 + "%");
    palco.style.setProperty("--my", y * 100 + "%");
  }

  function repousar() {
    el("zoom-carta-3d").style.transform = "";
  }

  document.addEventListener("DOMContentLoaded", () => {
    const modal = el("modal-zoom");
    modal.addEventListener("pointermove", inclinar);
    modal.addEventListener("pointerleave", repousar);
    modal.addEventListener("pointerup", (evento) => {
      if (evento.pointerType === "touch") repousar(); // no toque, a carta volta ao soltar o dedo
    });
  });

  return { abrir, fechar, estaAberto };
})();
