// Catálogo de produtos da NJ TCG Store.
//
// Para adicionar/editar um produto, copie um bloco { ... } e ajuste os campos.
//
// Campos:
//   sku        código interno curto (livre, só pra referência/organização).
//   nome       nome exibido.
//   categoria  uma das: "Booster", "Multipack", "Mini Booster Box",
//              "Booster Box", "Box Temático", "ETB", "Acessório", "Kit Presente".
//              Usado nos filtros do catálogo.
//   colecao    nome da coleção (ex.: "Reinado Delta").
//   idioma     "Português" ou "Inglês · importado".
//   preco      preço no cartão, em reais (número) — é o preço "cheio".
//   precoPix   preço no Pix, se houver (número, menor que "preco") — ou null
//              se o produto só tiver um preço único (sem desconto no Pix).
//              Quando presente, o Pix aparece em destaque no card e o preço
//              do cartão abaixo, menor; e é o valor usado no carrinho/mensagem
//              do WhatsApp sempre que o cliente escolher "Pix" como pagamento.
//   estoque    número de unidades disponíveis, ou null se não controla estoque.
//              Quando for um número e chegar a 0, o produto aparece como
//              esgotado e não pode ser adicionado ao carrinho.
//   frase      frase curta opcional exibida embaixo do nome (ex.: um diferencial
//              do produto) — deixe de fora do objeto se não precisar de uma.
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
    preco: 13.90,
    precoPix: 12.90,
    estoque: 36,
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
    // PENDÊNCIA: não está na tabela de reposição de 22/11/2026 — marcado
    // esgotado em vez de removido, ver CLAUDE.md (perguntar ao Nilson antes
    // de apagar de vez ou repor estoque).
    estoque: 0,
    img: "img/reinado-delta-triple-pack.webp"
  },
  {
    sku: "RD-QP",
    id: "reinado-delta-quadpack",
    nome: "Blister Quádruplo (Quadpack)",
    categoria: "Multipack",
    colecao: "Reinado Delta",
    idioma: "Português",
    preco: 59.90,
    precoPix: 54.90,
    estoque: 8,
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
    estoque: 10,
    img: "img/reinado-delta-mini-booster-box.png"
  },
  {
    sku: "RD-BB",
    id: "reinado-delta-booster-box",
    nome: "Booster Box (36 boosters)",
    categoria: "Booster Box",
    colecao: "Reinado Delta",
    idioma: "Português",
    preco: 449.90,
    precoPix: 429.90,
    estoque: 2,
    img: "img/reinado-delta-booster-box.webp"
  },
  {
    sku: "RD-KP",
    id: "reinado-delta-kit-presente",
    nome: "Kit Presente: Quadpack + Toploader Magnético",
    categoria: "Kit Presente",
    colecao: "Reinado Delta",
    idioma: "Português",
    preco: 74.90,
    precoPix: 69.90,
    estoque: 4,
    frase: "Presente pronto para o Natal",
    img: "img/reinado-delta-kit-presente.webp"
  },
  {
    sku: "RD-CM",
    id: "reinado-delta-case-magnetico",
    nome: "Toploader Magnético 4 mm",
    categoria: "Acessório",
    colecao: "Reinado Delta",
    idioma: "Português",
    preco: 21.90,
    precoPix: 19.90,
    estoque: 6,
    frase: "Proteja o hit da sua abertura",
    img: "img/reinado-delta-toploader-magnetico.webp"
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
    img: "img/celebracao30-blister-duplo.jpg"
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
    img: "img/celebracao30-triple-pack.jpg"
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
    img: "img/celebracao30-box-poster.jpg"
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
    img: "img/celebracao30-box-greninja.jpg"
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
    img: "img/celebracao30-etb.jpg"
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
    img: "img/celebracao30-aglutinador-en.jpg"
  }
];
