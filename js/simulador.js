// Simulador de Pacotinhos — Reinado Delta. Demonstrativo: sorteia 6 cartas
// (estilo "pacote") a partir de js/cartas-reinado-delta.js, com chances de
// hit bem maiores que num pacote real, só pra mostrar os destaques da coleção.
const Simulador = (function () {
  function numeroDaCarta(carta) {
    return parseInt(carta.numero.split("/")[0], 10);
  }

  function nivelRaridade(carta) {
    const n = numeroDaCarta(carta);
    if (n >= 135) return "sir";
    if (n >= 104) return "irfa";
    return "base";
  }

  function sortear(lista, qtd) {
    const pool = lista.slice();
    const resultado = [];
    for (let i = 0; i < qtd && pool.length > 0; i++) {
      const indice = Math.floor(Math.random() * pool.length);
      resultado.push(pool.splice(indice, 1)[0]);
    }
    return resultado;
  }

  const base = CARTAS_REINADO_DELTA.filter((c) => numeroDaCarta(c) <= 103);
  const baseEx = base.filter((c) => /\sex$/i.test(c.nome.trim()));
  const irfa = CARTAS_REINADO_DELTA.filter((c) => {
    const n = numeroDaCarta(c);
    return n >= 104 && n <= 134;
  });
  const sir = CARTAS_REINADO_DELTA.filter((c) => numeroDaCarta(c) >= 135);

  function sortearHit(jaSorteadas) {
    const roll = Math.random();
    if (roll < 0.18 && sir.length) {
      return sortear(sir, 1)[0];
    }
    if (roll < 0.55 && irfa.length) {
      return sortear(irfa, 1)[0];
    }
    const poolEx = baseEx.filter((c) => !jaSorteadas.includes(c));
    if (poolEx.length) {
      return sortear(poolEx, 1)[0];
    }
    const poolBase = base.filter((c) => !jaSorteadas.includes(c));
    return sortear(poolBase, 1)[0];
  }

  function abrirPacote() {
    const comuns = sortear(base, 5);
    const hit = sortearHit(comuns);
    return comuns.concat([hit]);
  }

  function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  function valorTotal(cartas) {
    return cartas.reduce((soma, c) => soma + c.preco_num, 0);
  }

  return { abrirPacote, nivelRaridade, valorTotal, formatarPreco };
})();
