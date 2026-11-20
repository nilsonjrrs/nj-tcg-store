// Efeito de brilho/tilt 3D nos cards de produto (estilo "carta holográfica").
// Só ativa em dispositivos com mouse/ponteiro fino e quando o usuário não
// pediu para reduzir movimento (prefers-reduced-motion). Em celular (toque),
// o card continua com o brilho estático, sem a inclinação.
const Tilt = (function () {
  const suportaHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const GRAUS_MAX = 14;

  function repousar(container) {
    container.style.setProperty("--rx", "0deg");
    container.style.setProperty("--ry", "0deg");
    container.style.setProperty("--gx", "50%");
    container.style.setProperty("--gy", "50%");
  }

  function ativar(container) {
    repousar(container);
    if (!suportaHover || reduzMovimento) return;

    let frameAgendado = false;
    let ultimoEvento = null;

    function aplicar() {
      frameAgendado = false;
      if (!ultimoEvento) return;
      const rect = container.getBoundingClientRect();
      const x = (ultimoEvento.clientX - rect.left) / rect.width;
      const y = (ultimoEvento.clientY - rect.top) / rect.height;
      const rotY = (x - 0.5) * GRAUS_MAX;
      const rotX = (0.5 - y) * GRAUS_MAX;
      container.style.setProperty("--rx", rotX.toFixed(2) + "deg");
      container.style.setProperty("--ry", rotY.toFixed(2) + "deg");
      container.style.setProperty("--gx", (x * 100).toFixed(1) + "%");
      container.style.setProperty("--gy", (y * 100).toFixed(1) + "%");
    }

    container.addEventListener("pointermove", (evento) => {
      if (evento.pointerType === "touch") return;
      ultimoEvento = evento;
      if (!frameAgendado) {
        frameAgendado = true;
        requestAnimationFrame(aplicar);
      }
    });

    container.addEventListener("pointerleave", () => {
      ultimoEvento = null;
      repousar(container);
    });
  }

  return { ativar };
})();
