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

  // Retorna um controlador com desativar() pra quem precisa ligar/desligar
  // o tilt dinamicamente (ex.: expositor de cartas do hero, que só deixa
  // o efeito ativo na carta que está em primeiro plano). Quem não precisa
  // disso (cards do catálogo, cartas do booster) simplesmente ignora o
  // retorno — ativar() sempre liga o efeito imediatamente como antes.
  function ativar(container) {
    repousar(container);
    if (!suportaHover || reduzMovimento) {
      return { desativar() {} };
    }

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

    function aoMover(evento) {
      if (evento.pointerType === "touch") return;
      ultimoEvento = evento;
      if (!frameAgendado) {
        frameAgendado = true;
        requestAnimationFrame(aplicar);
      }
    }

    function aoSair() {
      ultimoEvento = null;
      repousar(container);
    }

    container.addEventListener("pointermove", aoMover);
    container.addEventListener("pointerleave", aoSair);

    return {
      desativar() {
        container.removeEventListener("pointermove", aoMover);
        container.removeEventListener("pointerleave", aoSair);
        repousar(container);
      },
    };
  }

  return { ativar };
})();
