// Abas do site: Loja, Simulador e Fichário dividem a mesma página, mas só
// uma fica visível por vez — e o fichário só é montado na primeira vez que
// alguém abre. A aba vem do endereço (#simulador, #colecao; qualquer
// outro # é uma âncora dentro da Loja), então links, voltar do navegador e
// endereço compartilhado continuam funcionando.
const Vistas = (function () {
  const VISTAS = {
    loja: { secoes: ["#inicio", "#catalogo", "#como-comprar"] },
    simulador: { secoes: ["#simulador"] },
    colecao: { secoes: ["#colecao"], aoAbrir: () => Colecao.iniciar() },
  };
  const montadas = new Set();
  let atual = null;

  // ancora: id de um elemento dentro da aba pra rolar até ele (opcional)
  function abrir(nome, ancora) {
    const vista = VISTAS[nome];
    if (!vista) return;
    const trocou = nome !== atual;
    if (trocou) {
      atual = nome;
      Object.entries(VISTAS).forEach(([chave, v]) => {
        v.secoes.forEach((seletor) => {
          document.querySelector(seletor).hidden = chave !== nome;
        });
      });
      if (vista.aoAbrir && !montadas.has(nome)) {
        montadas.add(nome);
        vista.aoAbrir();
      }
      document.querySelectorAll("[data-vista]").forEach((link) => {
        if (link.dataset.vista === nome) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
      });
    }

    const destino = "#" + (ancora || (nome === "loja" ? "inicio" : nome));
    if (location.hash !== destino) history.replaceState(null, "", destino);
    const alvo = ancora && document.getElementById(ancora);
    if (alvo) alvo.scrollIntoView({ block: "start" });
    else if (trocou) window.scrollTo(0, 0);
  }

  function abrirPeloEndereco() {
    const id = location.hash.slice(1);
    if (VISTAS[id]) abrir(id);
    else abrir("loja", id && document.getElementById(id) ? id : null);
  }

  function iniciar() {
    abrirPeloEndereco();
    window.addEventListener("hashchange", abrirPeloEndereco);
  }

  return { iniciar, abrir };
})();
