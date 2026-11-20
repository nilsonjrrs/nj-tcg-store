// Renderização e interatividade do Simulador de Pacotinhos (sorteio em
// js/simulador.js). Cartas comuns mostram só a foto; cartas secretas
// (IR/FA e SIR) reaproveitam o mesmo componente de brilho/tilt dos
// produtos do catálogo (produto-tilt, ver js/tilt.js) com borda/badge
// de raridade por cima.
const SimuladorUI = (function () {
  function criarCartaVerso() {
    const verso = document.createElement("div");
    verso.className = "carta-face carta-verso";
    verso.innerHTML =
      '<svg aria-hidden="true" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><circle cx="12" cy="12" r="3" fill="currentColor" stroke="none"/></svg>';
    return verso;
  }

  function criarImagemCarta(carta) {
    const img = document.createElement("img");
    img.src = carta.imagem_url;
    img.alt = carta.nome;
    img.loading = "lazy";
    img.addEventListener("error", () => {
      const aviso = document.createElement("div");
      aviso.className = "carta-sem-imagem";
      aviso.textContent = carta.nome;
      img.replaceWith(aviso);
    });
    return img;
  }

  function criarCartaFrente(carta, raridade) {
    const frente = document.createElement("div");
    frente.className = "carta-face carta-frente";

    if (raridade === "base") {
      frente.appendChild(criarImagemCarta(carta));
      return frente;
    }

    const tilt = document.createElement("div");
    tilt.className = "produto-tilt carta-produto-tilt carta-produto-tilt--" + raridade;
    const inner = document.createElement("div");
    inner.className = "produto-tilt-inner";
    inner.appendChild(criarImagemCarta(carta));
    tilt.appendChild(inner);

    const badge = document.createElement("span");
    badge.className = "carta-preco-badge";
    badge.textContent = carta.preco_brl;
    tilt.appendChild(badge);

    frente.appendChild(tilt);
    Tilt.ativar(tilt);
    return frente;
  }

  function criarCartaFlip(carta) {
    const raridade = Simulador.nivelRaridade(carta);

    const flip = document.createElement("div");
    flip.className = "carta-flip";
    flip.setAttribute("role", "button");
    flip.setAttribute("tabindex", "0");
    flip.setAttribute("aria-pressed", "false");
    flip.setAttribute("aria-label", "Virar carta");

    const inner = document.createElement("div");
    inner.className = "carta-flip-inner";
    inner.appendChild(criarCartaVerso());
    inner.appendChild(criarCartaFrente(carta, raridade));
    flip.appendChild(inner);

    function virar() {
      if (flip.classList.contains("virada")) return;
      flip.classList.add("virada");
      flip.setAttribute("aria-pressed", "true");
      flip.setAttribute("aria-label", carta.nome);
    }

    flip.addEventListener("click", virar);
    flip.addEventListener("keydown", (evento) => {
      if (evento.key === "Enter" || evento.key === " ") {
        evento.preventDefault();
        virar();
      }
    });

    return flip;
  }

  function abrirPacote() {
    const cartas = Simulador.abrirPacote();
    const grade = document.getElementById("simulador-cartas");
    grade.innerHTML = "";
    cartas.forEach((carta) => grade.appendChild(criarCartaFlip(carta)));

    document.getElementById("simulador-valor-total").textContent = Simulador.formatarPreco(Simulador.valorTotal(cartas));
    document.getElementById("simulador-abertura").hidden = true;
    document.getElementById("simulador-resultado").hidden = false;
    document.getElementById("simulador-resultado").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function virarTodas() {
    const naoViradas = document.querySelectorAll("#simulador-cartas .carta-flip:not(.virada)");
    naoViradas.forEach((flip, indice) => {
      setTimeout(() => flip.click(), indice * 120);
    });
  }

  function abrirOutro() {
    document.getElementById("simulador-resultado").hidden = true;
    document.getElementById("simulador-abertura").hidden = false;
  }

  return { abrirPacote, virarTodas, abrirOutro };
})();
