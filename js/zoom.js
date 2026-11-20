// Lightbox: amplia a foto do produto ao clicar/ativar o card no catálogo.
// Só é usado quando o produto tem foto real (ver js/catalogo.js).
const Zoom = (function () {
  let ultimoFoco = null;

  function abrir(src, legenda) {
    ultimoFoco = document.activeElement;
    const modal = document.getElementById("modal-zoom");
    const img = document.getElementById("zoom-imagem");
    img.src = src;
    img.alt = legenda;
    modal.hidden = false;
    document.getElementById("fechar-zoom").focus();
  }

  function fechar() {
    document.getElementById("modal-zoom").hidden = true;
    document.getElementById("zoom-imagem").src = "";
    if (ultimoFoco) ultimoFoco.focus();
  }

  function estaAberto() {
    return !document.getElementById("modal-zoom").hidden;
  }

  return { abrir, fechar, estaAberto };
})();
