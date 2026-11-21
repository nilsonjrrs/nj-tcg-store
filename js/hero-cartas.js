// Cartas reais de Reinado Delta flutuando ao redor do vórtice de fundo do
// hero (img/hero-bg.jpg). Usa os mesmos dados do simulador
// (js/cartas-reinado-delta.js) e reaproveita o componente de brilho/tilt 3D
// dos produtos do catálogo (produto-tilt, ver js/tilt.js) — nunca distorce
// a carta: a imagem real é exibida inteira, com proporção original.
const HeroCartas = (function () {
  // Os 5 hits de maior destaque da coleção (números batem com
  // js/cartas-reinado-delta.js). Se um número não existir nos dados (ou a
  // imagem não carregar), aquele card simplesmente não aparece — nunca
  // mostramos um espaço quebrado ou texto no lugar da arte decorativa.
  const NUMEROS_DESTAQUE = ["141/103", "138/103", "136/103", "137/103", "135/103"];

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
    });
  }

  return { montar };
})();
