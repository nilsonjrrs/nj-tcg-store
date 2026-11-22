// Estado do carrinho: quantidade por produto, com persistência em localStorage
// e respeito ao campo "estoque" de cada produto (quando ele for um número).
const Carrinho = (function () {
  const CHAVE = "nj-tcg-carrinho";
  let estado = {};

  function carregar() {
    try {
      estado = JSON.parse(localStorage.getItem(CHAVE) || "{}");
    } catch (e) {
      estado = {};
    }
  }

  function salvar() {
    try {
      localStorage.setItem(CHAVE, JSON.stringify(estado));
    } catch (e) {
      // localStorage indisponível (ex.: navegação privada) — segue sem persistir.
    }
  }

  function obterQuantidade(produtoId) {
    return estado[produtoId] || 0;
  }

  function definirQuantidade(produtoId, quantidade) {
    const produto = PRODUTOS.find((p) => p.id === produtoId);
    let novaQtd = Math.max(0, quantidade);
    if (produto && typeof produto.estoque === "number") {
      novaQtd = Math.min(novaQtd, Math.max(0, produto.estoque));
    }
    if (novaQtd === 0) {
      delete estado[produtoId];
    } else {
      estado[produtoId] = novaQtd;
    }
    salvar();
  }

  function alterar(produtoId, delta) {
    definirQuantidade(produtoId, obterQuantidade(produtoId) + delta);
  }

  function itens() {
    return Object.keys(estado)
      .map((id) => {
        const produto = PRODUTOS.find((p) => p.id === id);
        if (!produto) return null;
        return { produto, quantidade: estado[id] };
      })
      .filter(Boolean);
  }

  function totalItens() {
    return Object.values(estado).reduce((a, b) => a + b, 0);
  }

  carregar();

  return { obterQuantidade, definirQuantidade, alterar, itens, totalItens };
})();
