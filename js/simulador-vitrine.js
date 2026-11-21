// Vitrine dos boosters na seção do simulador: um pacote por coleção, o da
// frente em destaque e os outros atrás, de lado. Arrastar o da frente pro
// lado (ou tocar num de trás) gira a pilha e troca a coleção; tocar no da
// frente abre o simulador daquela coleção (js/booster-ui.js).
const SimuladorVitrine = (function () {
  const LIMIAR_TROCA = 60; // px de arraste pra girar
  const LIMIAR_CLIQUE = 6; // abaixo disso o gesto conta como toque, não arraste

  let botoes = [];
  let frente = 0; // índice em Simulador.colecoes
  let arraste = null;
  let engolirClique = false;

  function desenhar() {
    const total = botoes.length;
    botoes.forEach((botao, i) => {
      const posicao = (i - frente + total) % total; // 0 = frente, 1 = logo atrás...
      botao.classList.toggle("pacote-virtual--frente", posicao === 0);
      botao.classList.toggle("pacote-virtual--tras", posicao !== 0);
      botao.style.setProperty("--posicao", String(posicao));
      const nome = Simulador.colecoes[i].nome;
      botao.setAttribute("aria-label", posicao === 0 ? "Abrir booster de " + nome : "Trazer o booster de " + nome + " pra frente");
    });
    const atual = Simulador.colecoes[frente];
    // a coleção atual aparece pela logo (não pelo nome); clicar nela leva ao fichário da coleção
    const logo = document.getElementById("simulador-logo");
    logo.querySelector("img").src = atual.logo;
    logo.querySelector("img").alt = atual.nome;
    logo.setAttribute("aria-label", "Ver todas as cartas de " + atual.nome);
    document.getElementById("simulador-legenda").textContent = atual.aviso;
  }

  function soltar(botao) {
    botao.classList.remove("arrastando");
    botao.style.removeProperty("--dx");
    botao.style.removeProperty("--giro");
  }

  function ligar(botao, indice) {
    botao.addEventListener("pointerdown", (evento) => {
      if (indice !== frente) return;
      arraste = { x: evento.clientX, dx: 0 };
      botao.setPointerCapture(evento.pointerId);
    });
    botao.addEventListener("pointermove", (evento) => {
      if (!arraste || indice !== frente) return;
      arraste.dx = evento.clientX - arraste.x;
      if (Math.abs(arraste.dx) < LIMIAR_CLIQUE) return;
      botao.classList.add("arrastando");
      botao.style.setProperty("--dx", arraste.dx + "px");
      botao.style.setProperty("--giro", arraste.dx / 14 + "deg");
    });
    const fim = () => {
      if (!arraste) return;
      const dx = Math.abs(arraste.dx);
      arraste = null;
      soltar(botao);
      if (dx >= LIMIAR_CLIQUE) engolirClique = true; // foi arraste: o click que vem em seguida não abre o booster
      if (dx >= LIMIAR_TROCA) {
        frente = (frente + 1) % botoes.length;
        desenhar();
      }
    };
    botao.addEventListener("pointerup", fim);
    botao.addEventListener("pointercancel", fim);
    botao.addEventListener("click", () => {
      if (engolirClique) {
        engolirClique = false;
        return;
      }
      if (indice === frente) {
        BoosterUI.abrir(Simulador.colecoes[indice].id);
      } else {
        frente = indice;
        desenhar();
      }
    });
  }

  function iniciar() {
    const vitrine = document.getElementById("simulador-vitrine");
    botoes = Simulador.colecoes.map((colecao, i) => {
      const botao = document.createElement("button");
      botao.type = "button";
      botao.className = "pacote-virtual";
      const img = document.createElement("img");
      img.src = colecao.artes[0];
      img.alt = "";
      img.width = 780;
      img.height = 1426;
      img.draggable = false;
      botao.appendChild(img);
      vitrine.appendChild(botao);
      ligar(botao, i);
      return botao;
    });
    desenhar();
    document.getElementById("simulador-logo").addEventListener("click", () => {
      Colecao.irPara(Simulador.colecoes[frente].id);
    });
    document.getElementById("botao-abrir-pacote").addEventListener("click", () => {
      BoosterUI.abrir(Simulador.colecoes[frente].id);
    });
  }

  return { iniciar };
})();
