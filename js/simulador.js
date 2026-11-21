// Simulador de Pacotinhos. Sorteia um booster de 6 cartas de uma das coleções
// abaixo, na ordem em que as cartas vêm num pacote de verdade: comuns
// primeiro e os slots que podem trazer hit por último.
//
// Cada coleção tem os seus "slots". Um slot é uma lista fixa de raridades
// (ex.: ["Comum"]) ou um sorteio { tabela, padrao }: percorre a tabela (da
// mais rara pra menos, com a chance por pacote) e cai no padrão se nada sair.
// Os slots são sorteados separadamente, então dá pra vir um hit em cada.
//
// Reinado Delta: taxas medidas pela comunidade na série Megaevolução
// (milhares de pacotes, cardcodex.com/blog/mega-evolution-base-set-pull-rates).
// A Pokémon não publica taxas oficiais.
// shortcut: assume que o booster brasileiro de 6 cartas tem as mesmas chances
// por pacote do de 10 em inglês; trocar aqui se aparecer medição do de 6.
// shortcut: a Celebração de 30 Anos não tem medição nenhuma; reaproveita as
// chances da Megaevolução e chuta 1 em 3 pra "Pikachu Rare". Trocar quando houver dado.
const Simulador = (function () {
  const colecoes = [
    {
      id: "reinado-delta",
      nome: "Reinado Delta",
      cartas: CARTAS_REINADO_DELTA,
      artes: [1, 2, 3, 4].map((n) => "img/booster-reinado-delta-" + n + ".webp"),
      produtoId: "reinado-delta-booster-avulso",
      temPreco: true,
      aviso: "Simulação com a ordem das cartas e as chances de raridade estimadas pela comunidade para a série Megaevolução. A Pokémon não divulga taxas oficiais.",
      slots: [
        ["Comum"],
        ["Comum"],
        ["Comum"],
        ["Incomum"],
        {
          tabela: [
            ["Mega Hiper Raro", 1 / 1260],
            ["Ilustração Rara Especial", 1 / 101],
            ["Ilustração Rara", 1 / 9],
          ],
          padrao: ["Comum", "Incomum"],
        },
        {
          tabela: [
            ["Ultra Rara", 1 / 12],
            ["Rara Dupla", 1 / 5],
          ],
          padrao: ["Rara"],
        },
      ],
    },
    {
      id: "celebracao-30",
      nome: "Celebração de 30 Anos",
      cartas: CARTAS_CELEBRACAO_30,
      artes: ["img/booster-celebracao-30.webp"],
      produtoId: "celebracao30-blister-duplo",
      temPreco: false,
      aviso: "Ainda não existe medição das chances desta coleção: a simulação usa as estimativas da série Megaevolução como aproximação. A Pokémon não divulga taxas oficiais.",
      slots: [
        ["Comum"],
        ["Comum"],
        ["Comum"],
        ["Comum"],
        {
          tabela: [
            ["Futuristic Rare", 1 / 1260],
            ["Ilustração Rara Especial", 1 / 101],
            ["Ilustração Rara", 1 / 9],
            ["Pikachu Rare", 1 / 3],
          ],
          padrao: ["Comum"],
        },
        {
          tabela: [["Rara Dupla", 1 / 5]],
          padrao: ["Rara"],
        },
      ],
    },
  ];

  colecoes.forEach((colecao) => {
    colecao.porRaridade = {};
    colecao.cartas.forEach((c) => {
      (colecao.porRaridade[c.raridade] = colecao.porRaridade[c.raridade] || []).push(c);
    });
  });

  function colecao(id) {
    return colecoes.find((c) => c.id === id);
  }

  // Nível de efeito visual na revelação (não é a raridade em si, que está em carta.raridade).
  const NIVEL = {
    "Mega Hiper Raro": "sir",
    "Ilustração Rara Especial": "sir",
    "Futuristic Rare": "sir",
    "Ilustração Rara": "irfa",
    "Ultra Rara": "irfa",
    "Rara Dupla": "irfa",
    "Pikachu Rare": "irfa",
  };

  function nivelRaridade(carta) {
    return NIVEL[carta.raridade] || "base";
  }

  function raridadesDoSlot(slot) {
    if (Array.isArray(slot)) return slot;
    let roll = Math.random();
    for (const [raridade, chance] of slot.tabela) {
      if (roll < chance) return [raridade];
      roll -= chance;
    }
    return slot.padrao;
  }

  function abrirPacote(idColecao) {
    const c = colecao(idColecao);
    const pacote = [];
    c.slots.forEach((slot) => {
      const pool = raridadesDoSlot(slot)
        .flatMap((r) => c.porRaridade[r] || [])
        .filter((carta) => !pacote.includes(carta));
      pacote.push(pool[Math.floor(Math.random() * pool.length)]);
    });
    return pacote;
  }

  function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  function valorTotal(cartas) {
    return cartas.reduce((soma, c) => soma + (c.preco_num || 0), 0);
  }

  return { colecoes, colecao, abrirPacote, nivelRaridade, valorTotal, formatarPreco };
})();
