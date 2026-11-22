// Alternância de tema claro/escuro (botão no cabeçalho, ícone de sol/lua).
// A escolha é lembrada no localStorage; sem nada salvo, o site começa no
// escuro (padrão original da marca). O tema salvo já é aplicado antes de
// pintar a página por um script inline em <head> (index.html) — este
// arquivo só cuida do clique no botão e de manter o ícone/aria-label certos.
const Tema = (function () {
  const CHAVE = "nj-tcg-tema";

  function salvar(tema) {
    try {
      localStorage.setItem(CHAVE, tema);
    } catch (e) {
      // localStorage indisponível (ex.: navegação privada) — só não persiste.
    }
  }

  function temaAtual() {
    return document.documentElement.dataset.theme === "light" ? "light" : "dark";
  }

  function aplicar(tema) {
    document.documentElement.dataset.theme = tema;
    const botao = document.getElementById("botao-tema");
    const claro = tema === "light";
    botao.setAttribute("aria-label", claro ? "Mudar para tema escuro" : "Mudar para tema claro");
    botao.querySelector(".tema-icone-sol").hidden = claro;
    botao.querySelector(".tema-icone-lua").hidden = !claro;
  }

  function alternar() {
    const novo = temaAtual() === "light" ? "dark" : "light";
    aplicar(novo);
    salvar(novo);
  }

  function iniciar() {
    aplicar(temaAtual());
    document.getElementById("botao-tema").addEventListener("click", alternar);
  }

  return { iniciar };
})();
