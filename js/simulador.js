// Simulador de Pacotinhos — Reinado Delta. Sorteia um booster de 6 cartas a
// partir de js/cartas-reinado-delta.js, na ordem em que as cartas vêm num
// pacote de verdade: comuns, incomum, o slot "reverse" e, por último, o slot
// da rara.
//
// Taxas por pacote: medição da comunidade na série Megaevolução (milhares de
// pacotes abertos, cardcodex.com/blog/mega-evolution-base-set-pull-rates).
// A Pokémon não publica taxas oficiais. Nos pacotes em inglês (10 cartas) a
// Ilustração Rara, a Ilustração Rara Especial e a Mega Hiper Rara saem no
// slot reverse, e a Rara Dupla e a Ultra Rara no slot da rara — os dois são
// sorteados separadamente, então dá pra vir um hit em cada.
// shortcut: assume que o booster brasileiro de 6 cartas tem as mesmas chances
// por pacote do de 10 em inglês; trocar em TAXAS se aparecer medição do de 6.
const Simulador = (function () {
  const TAXAS = {
    slotReverse: [
      ["Mega Hiper Raro", 1 / 1260],
      ["Ilustração Rara Especial", 1 / 101],
      ["Ilustração Rara", 1 / 9],
    ],
    slotRara: [
      ["Ultra Rara", 1 / 12],
      ["Rara Dupla", 1 / 5],
    ],
  };

  const porRaridade = {};
  CARTAS_REINADO_DELTA.forEach((c) => {
    (porRaridade[c.raridade] = porRaridade[c.raridade] || []).push(c);
  });

  // Nível de efeito visual na revelação (não é a raridade em si, que está em carta.raridade).
  function nivelRaridade(carta) {
    if (carta.raridade === "Mega Hiper Raro" || carta.raridade === "Ilustração Rara Especial") return "sir";
    if (carta.raridade === "Ilustração Rara" || carta.raridade === "Ultra Rara" || carta.raridade === "Rara Dupla") return "irfa";
    return "base";
  }

  function umaDe(raridades, fora) {
    const pool = raridades.flatMap((r) => porRaridade[r] || []).filter((c) => !fora.includes(c));
    return pool[Math.floor(Math.random() * pool.length)];
  }

  // Sorteia a raridade de um slot: percorre a tabela (da mais rara pra menos) e cai no padrão se nada sair.
  function raridadeDoSlot(tabela, padrao) {
    let roll = Math.random();
    for (const [raridade, chance] of tabela) {
      if (roll < chance) return [raridade];
      roll -= chance;
    }
    return padrao;
  }

  function abrirPacote() {
    const pacote = [];
    for (let i = 0; i < 3; i++) pacote.push(umaDe(["Comum"], pacote));
    pacote.push(umaDe(["Incomum"], pacote));
    pacote.push(umaDe(raridadeDoSlot(TAXAS.slotReverse, ["Comum", "Incomum"]), pacote));
    pacote.push(umaDe(raridadeDoSlot(TAXAS.slotRara, ["Rara"]), pacote));
    return pacote;
  }

  function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  function valorTotal(cartas) {
    return cartas.reduce((soma, c) => soma + c.preco_num, 0);
  }

  return { abrirPacote, nivelRaridade, valorTotal, formatarPreco, TAXAS };
})();
