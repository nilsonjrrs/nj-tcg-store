// Catálogo de produtos da NJ TCG Store.
//
// Para adicionar/editar um produto, copie um bloco { ... } e ajuste os campos.
//
// Campos:
//   sku        código interno curto (livre, só pra referência/organização).
//   nome       nome exibido.
//   categoria  uma das: "Booster", "Multipack", "Mini Booster Box",
//              "Booster Box", "Box Temático", "ETB", "Acessório".
//              Usado nos filtros do catálogo.
//   colecao    nome da coleção (ex.: "Reinado Delta").
//   idioma     "Português" ou "Inglês · importado".
//   preco      preço normal, em reais (número).
//   precoPix   preço especial no Pix, se houver (número) — ou null se não tiver.
//   estoque    número de unidades disponíveis, ou null se não controla estoque.
//              Quando for um número e chegar a 0, o produto aparece como
//              esgotado e não pode ser adicionado ao carrinho.
//   img        caminho da foto dentro da pasta img/ (ex.: "img/booster-avulso.jpg").
//              Deixe "" (vazio) se ainda não tiver a foto — o site mostra um
//              espaço reservado com efeito de brilho no lugar da imagem.
const PRODUTOS = [
  {
    sku: "RD-BA",
    id: "reinado-delta-booster-avulso",
    nome: "Booster Avulso",
    categoria: "Booster",
    colecao: "Reinado Delta",
    idioma: "Português",
    preco: 14.90,
    precoPix: null,
    estoque: null,
    img: "img/reinado-delta-booster-avulso.webp"
  },
  {
    sku: "RD-TP",
    id: "reinado-delta-triple-pack",
    nome: "Triple Pack (3 boosters)",
    categoria: "Multipack",
    colecao: "Reinado Delta",
    idioma: "Português",
    preco: 42.90,
    precoPix: null,
    estoque: null,
    img: "img/reinado-delta-triple-pack.webp"
  },
  {
    sku: "RD-QP",
    id: "reinado-delta-quadpack",
    nome: "Quadpack (4 boosters)",
    categoria: "Multipack",
    colecao: "Reinado Delta",
    idioma: "Português",
    preco: 54.90,
    precoPix: null,
    estoque: null,
    img: "img/reinado-delta-quadpack.webp"
  },
  {
    sku: "RD-MBB",
    id: "reinado-delta-mini-booster-box",
    nome: "Mini Booster Box (18 boosters)",
    categoria: "Mini Booster Box",
    colecao: "Reinado Delta",
    idioma: "Português",
    preco: 229.90,
    precoPix: null,
    estoque: null,
    img: "img/reinado-delta-mini-booster-box.png"
  },
  {
    sku: "RD-BB",
    id: "reinado-delta-booster-box",
    nome: "Booster Box (36 boosters)",
    categoria: "Booster Box",
    colecao: "Reinado Delta",
    idioma: "Português",
    preco: 419.90,
    precoPix: 399.90,
    estoque: null,
    img: "img/reinado-delta-booster-box.webp"
  },
  {
    sku: "C30-BD",
    id: "celebracao30-blister-duplo",
    nome: "Blister Duplo",
    categoria: "Multipack",
    colecao: "Celebração 30 Anos",
    idioma: "Português",
    preco: 119.90,
    precoPix: null,
    estoque: null,
    img: ""
  },
  {
    sku: "C30-TP",
    id: "celebracao30-triple-pack",
    nome: "Triple Pack",
    categoria: "Multipack",
    colecao: "Celebração 30 Anos",
    idioma: "Português",
    preco: 179.90,
    precoPix: null,
    estoque: null,
    img: ""
  },
  {
    sku: "C30-BP",
    id: "celebracao30-box-poster",
    nome: "Box com Pôster",
    categoria: "Box Temático",
    colecao: "Celebração 30 Anos",
    idioma: "Português",
    preco: 209.90,
    precoPix: null,
    estoque: null,
    img: ""
  },
  {
    sku: "C30-BG",
    id: "celebracao30-box-greninja",
    nome: "Box Greninja",
    categoria: "Box Temático",
    colecao: "Celebração 30 Anos",
    idioma: "Português",
    preco: 299.90,
    precoPix: null,
    estoque: null,
    img: ""
  },
  {
    sku: "C30-ETB",
    id: "celebracao30-etb",
    nome: "Elite Trainer Box (Treinador Avançado)",
    categoria: "ETB",
    colecao: "Celebração 30 Anos",
    idioma: "Português",
    preco: 649.90,
    precoPix: null,
    estoque: null,
    img: ""
  },
  {
    sku: "C30-MT-EN",
    id: "celebracao30-mini-tin-en",
    nome: "Mini Tin",
    categoria: "Acessório",
    colecao: "Celebração 30 Anos",
    idioma: "Inglês · importado",
    preco: 219.90,
    precoPix: null,
    estoque: null,
    img: ""
  },
  {
    sku: "C30-FC-EN",
    id: "celebracao30-aglutinador-en",
    nome: "Fichário",
    categoria: "Acessório",
    colecao: "Celebração 30 Anos",
    idioma: "Inglês · importado",
    preco: 479.90,
    precoPix: null,
    estoque: null,
    img: ""
  }
];
