// Dados das 199 cartas de Celebração 30 Anos (base 001-128, hits "Ilustração
// Especial" 129-158, 30 reprints clássicos + 3 variantes promo RGB na raridade
// "Clássica", e 8 energias básicas que não entram no simulador de pacotes).
// numero/nome/preco_brl/preco_num vêm do arquivo que o Nilson mandou
// (celebracao-30-anos-completo.json); nenhuma carta tem preço real ainda (tudo
// "Sob consulta", preco_num 0) — raridade foi inferida aqui (numeração do set),
// não vem do arquivo original. As 158 cartas numeradas (001-158/128) usam a
// imagem já hospedada no próprio site (img/cartas/c30/NNN.webp, mesmo padrão de
// Reinado Delta). Os 30 reprints clássicos (img/cartas/c30/CCn.webp), as 3 variantes
// RGB (B/G/R.webp) e as 8 energias básicas (MEEnnn.webp) também já têm imagem local.
const CARTAS_CELEBRACAO_30_ANOS = [
  {
    "numero": "152/128",
    "nome": "Mew ex",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/152.webp",
    "raridade": "Ilustração Especial"
  },
  {
    "numero": "154/128",
    "nome": "Gengar ex",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/154.webp",
    "raridade": "Ilustração Especial"
  },
  {
    "numero": "158/128",
    "nome": "Mew ex",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/158.webp",
    "raridade": "Ilustração Especial"
  },
  {
    "numero": "150/128",
    "nome": "Pikachu ex",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/150.webp",
    "raridade": "Ilustração Especial"
  },
  {
    "numero": "157/128",
    "nome": "Mewtwo ex",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/157.webp",
    "raridade": "Ilustração Especial"
  },
  {
    "numero": "151/128",
    "nome": "Mewtwo ex",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/151.webp",
    "raridade": "Ilustração Especial"
  },
  {
    "numero": "153/128",
    "nome": "Sylveon ex",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/153.webp",
    "raridade": "Ilustração Especial"
  },
  {
    "numero": "149/128",
    "nome": "Pikachu ex",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/149.webp",
    "raridade": "Ilustração Especial"
  },
  {
    "numero": "155/128",
    "nome": "Jirachi ex",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/155.webp",
    "raridade": "Ilustração Especial"
  },
  {
    "numero": "148/128",
    "nome": "Greninja ex",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/148.webp",
    "raridade": "Ilustração Especial"
  },
  {
    "numero": "147/128",
    "nome": "Fuecoco ex",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/147.webp",
    "raridade": "Ilustração Especial"
  },
  {
    "numero": "156/128",
    "nome": "Salamence ex",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/156.webp",
    "raridade": "Ilustração Especial"
  },
  {
    "numero": "144/128",
    "nome": "Meowth",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/144.webp",
    "raridade": "Ilustração Especial"
  },
  {
    "numero": "139/128",
    "nome": "Meowth de Alola",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/139.webp",
    "raridade": "Ilustração Especial"
  },
  {
    "numero": "131/128",
    "nome": "Lapras",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/131.webp",
    "raridade": "Ilustração Especial"
  },
  {
    "numero": "141/128",
    "nome": "Meowth de Galar",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/141.webp",
    "raridade": "Ilustração Especial"
  },
  {
    "numero": "130/128",
    "nome": "Moltres",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/130.webp",
    "raridade": "Ilustração Especial"
  },
  {
    "numero": "133/128",
    "nome": "Zapdos",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/133.webp",
    "raridade": "Ilustração Especial"
  },
  {
    "numero": "145/128",
    "nome": "Zorua de Hisui",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/145.webp",
    "raridade": "Ilustração Especial"
  },
  {
    "numero": "146/128",
    "nome": "Maushold",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/146.webp",
    "raridade": "Ilustração Especial"
  },
  {
    "numero": "132/128",
    "nome": "Articuno",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/132.webp",
    "raridade": "Ilustração Especial"
  },
  {
    "numero": "135/128",
    "nome": "Morpeko",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/135.webp",
    "raridade": "Ilustração Especial"
  },
  {
    "numero": "134/128",
    "nome": "Toxtricity",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/134.webp",
    "raridade": "Ilustração Especial"
  },
  {
    "numero": "066/128",
    "nome": "Mew ex",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/066.webp",
    "raridade": "Comum"
  },
  {
    "numero": "137/128",
    "nome": "Chandelure",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/137.webp",
    "raridade": "Ilustração Especial"
  },
  {
    "numero": "138/128",
    "nome": "Lycanroc",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/138.webp",
    "raridade": "Ilustração Especial"
  },
  {
    "numero": "136/128",
    "nome": "Drifloon",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/136.webp",
    "raridade": "Ilustração Especial"
  },
  {
    "numero": "129/128",
    "nome": "Exeggutor de Alola",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/129.webp",
    "raridade": "Ilustração Especial"
  },
  {
    "numero": "140/128",
    "nome": "Scraggy",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/140.webp",
    "raridade": "Ilustração Especial"
  },
  {
    "numero": "054/128",
    "nome": "Pikachu ex",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/054.webp",
    "raridade": "Comum"
  },
  {
    "numero": "090/128",
    "nome": "Gengar ex",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/090.webp",
    "raridade": "Comum"
  },
  {
    "numero": "053/128",
    "nome": "Pikachu ex",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/053.webp",
    "raridade": "Comum"
  },
  {
    "numero": "032/128",
    "nome": "Pikachu",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/032.webp",
    "raridade": "Comum"
  },
  {
    "numero": "040/128",
    "nome": "Pikachu",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/040.webp",
    "raridade": "Comum"
  },
  {
    "numero": "143/128",
    "nome": "Kommo-o",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/143.webp",
    "raridade": "Ilustração Especial"
  },
  {
    "numero": "039/128",
    "nome": "Pikachu",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/039.webp",
    "raridade": "Comum"
  },
  {
    "numero": "092/128",
    "nome": "Umbreon ex",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/092.webp",
    "raridade": "Comum"
  },
  {
    "numero": "024/128",
    "nome": "Pikachu",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/024.webp",
    "raridade": "Comum"
  },
  {
    "numero": "050/128",
    "nome": "Pikachu",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/050.webp",
    "raridade": "Comum"
  },
  {
    "numero": "021/128",
    "nome": "Greninja ex",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/021.webp",
    "raridade": "Comum"
  },
  {
    "numero": "070/128",
    "nome": "Espeon ex",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/070.webp",
    "raridade": "Comum"
  },
  {
    "numero": "028/128",
    "nome": "Pikachu",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/028.webp",
    "raridade": "Comum"
  },
  {
    "numero": "026/128",
    "nome": "Pikachu",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/026.webp",
    "raridade": "Comum"
  },
  {
    "numero": "034/128",
    "nome": "Pikachu",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/034.webp",
    "raridade": "Comum"
  },
  {
    "numero": "042/128",
    "nome": "Pikachu",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/042.webp",
    "raridade": "Comum"
  },
  {
    "numero": "142/128",
    "nome": "Gholdengo",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/142.webp",
    "raridade": "Ilustração Especial"
  },
  {
    "numero": "064/128",
    "nome": "Mewtwo ex",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/064.webp",
    "raridade": "Comum"
  },
  {
    "numero": "048/128",
    "nome": "Pikachu",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/048.webp",
    "raridade": "Comum"
  },
  {
    "numero": "047/128",
    "nome": "Pikachu",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/047.webp",
    "raridade": "Comum"
  },
  {
    "numero": "031/128",
    "nome": "Pikachu",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/031.webp",
    "raridade": "Comum"
  },
  {
    "numero": "051/128",
    "nome": "Pikachu",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/051.webp",
    "raridade": "Comum"
  },
  {
    "numero": "027/128",
    "nome": "Pikachu",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/027.webp",
    "raridade": "Comum"
  },
  {
    "numero": "037/128",
    "nome": "Pikachu",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/037.webp",
    "raridade": "Comum"
  },
  {
    "numero": "023/128",
    "nome": "Pikachu",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/023.webp",
    "raridade": "Comum"
  },
  {
    "numero": "029/128",
    "nome": "Pikachu",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/029.webp",
    "raridade": "Comum"
  },
  {
    "numero": "044/128",
    "nome": "Pikachu",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/044.webp",
    "raridade": "Comum"
  },
  {
    "numero": "071/128",
    "nome": "Sylveon ex",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/071.webp",
    "raridade": "Comum"
  },
  {
    "numero": "126/128",
    "nome": "Poké Tablet",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/126.webp",
    "raridade": "Comum"
  },
  {
    "numero": "036/128",
    "nome": "Pikachu",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/036.webp",
    "raridade": "Comum"
  },
  {
    "numero": "045/128",
    "nome": "Pikachu",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/045.webp",
    "raridade": "Comum"
  },
  {
    "numero": "038/128",
    "nome": "Pikachu",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/038.webp",
    "raridade": "Comum"
  },
  {
    "numero": "043/128",
    "nome": "Pikachu",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/043.webp",
    "raridade": "Comum"
  },
  {
    "numero": "046/128",
    "nome": "Pikachu",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/046.webp",
    "raridade": "Comum"
  },
  {
    "numero": "033/128",
    "nome": "Pikachu",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/033.webp",
    "raridade": "Comum"
  },
  {
    "numero": "030/128",
    "nome": "Pikachu",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/030.webp",
    "raridade": "Comum"
  },
  {
    "numero": "052/128",
    "nome": "Pikachu",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/052.webp",
    "raridade": "Comum"
  },
  {
    "numero": "041/128",
    "nome": "Pikachu",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/041.webp",
    "raridade": "Comum"
  },
  {
    "numero": "025/128",
    "nome": "Pikachu",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/025.webp",
    "raridade": "Comum"
  },
  {
    "numero": "035/128",
    "nome": "Pikachu",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/035.webp",
    "raridade": "Comum"
  },
  {
    "numero": "049/128",
    "nome": "Pikachu",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/049.webp",
    "raridade": "Comum"
  },
  {
    "numero": "102/128",
    "nome": "Jirachi ex",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/102.webp",
    "raridade": "Comum"
  },
  {
    "numero": "128/128",
    "nome": "Ultra Bola",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/128.webp",
    "raridade": "Comum"
  },
  {
    "numero": "109/128",
    "nome": "Salamence ex",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/109.webp",
    "raridade": "Comum"
  },
  {
    "numero": "015/128",
    "nome": "Fuecoco ex",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/015.webp",
    "raridade": "Comum"
  },
  {
    "numero": "091/128",
    "nome": "Umbreon",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/091.webp",
    "raridade": "Comum"
  },
  {
    "numero": "065/128",
    "nome": "Mew",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/065.webp",
    "raridade": "Comum"
  },
  {
    "numero": "118/128",
    "nome": "Eevee",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/118.webp",
    "raridade": "Comum"
  },
  {
    "numero": "115/128",
    "nome": "Ditto",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/115.webp",
    "raridade": "Comum"
  },
  {
    "numero": "120/128",
    "nome": "Igglybuff",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/120.webp",
    "raridade": "Comum"
  },
  {
    "numero": "117/128",
    "nome": "Eevee",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/117.webp",
    "raridade": "Comum"
  },
  {
    "numero": "017/128",
    "nome": "Lapras",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/017.webp",
    "raridade": "Comum"
  },
  {
    "numero": "018/128",
    "nome": "Articuno",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/018.webp",
    "raridade": "Comum"
  },
  {
    "numero": "116/128",
    "nome": "Eevee",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/116.webp",
    "raridade": "Comum"
  },
  {
    "numero": "020/128",
    "nome": "Palkia",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/020.webp",
    "raridade": "Comum"
  },
  {
    "numero": "011/128",
    "nome": "Moltres",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/011.webp",
    "raridade": "Comum"
  },
  {
    "numero": "055/128",
    "nome": "Zapdos",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/055.webp",
    "raridade": "Comum"
  },
  {
    "numero": "063/128",
    "nome": "Mewtwo",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/063.webp",
    "raridade": "Comum"
  },
  {
    "numero": "069/128",
    "nome": "Espeon",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/069.webp",
    "raridade": "Comum"
  },
  {
    "numero": "083/128",
    "nome": "Lucario",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/083.webp",
    "raridade": "Comum"
  },
  {
    "numero": "112/128",
    "nome": "Kommo-o",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/112.webp",
    "raridade": "Comum"
  },
  {
    "numero": "125/128",
    "nome": "Maushold",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/125.webp",
    "raridade": "Comum"
  },
  {
    "numero": "010/128",
    "nome": "Ninetales",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/010.webp",
    "raridade": "Comum"
  },
  {
    "numero": "057/128",
    "nome": "Zeraora",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/057.webp",
    "raridade": "Comum"
  },
  {
    "numero": "121/128",
    "nome": "Lugia",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/121.webp",
    "raridade": "Comum"
  },
  {
    "numero": "099/128",
    "nome": "Hydreigon",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/099.webp",
    "raridade": "Comum"
  },
  {
    "numero": "103/128",
    "nome": "Dialga",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/103.webp",
    "raridade": "Comum"
  },
  {
    "numero": "013/128",
    "nome": "Victini",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/013.webp",
    "raridade": "Comum"
  },
  {
    "numero": "016/128",
    "nome": "Slowpoke",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/016.webp",
    "raridade": "Comum"
  },
  {
    "numero": "079/128",
    "nome": "Cosmoem",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/079.webp",
    "raridade": "Comum"
  },
  {
    "numero": "085/128",
    "nome": "Lycanroc",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/085.webp",
    "raridade": "Comum"
  },
  {
    "numero": "105/128",
    "nome": "Solgaleo",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/105.webp",
    "raridade": "Comum"
  },
  {
    "numero": "106/128",
    "nome": "Zacian",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/106.webp",
    "raridade": "Comum"
  },
  {
    "numero": "108/128",
    "nome": "Gholdengo",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/108.webp",
    "raridade": "Comum"
  },
  {
    "numero": "113/128",
    "nome": "Meowth",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/113.webp",
    "raridade": "Comum"
  },
  {
    "numero": "119/128",
    "nome": "Snorlax",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/119.webp",
    "raridade": "Comum"
  },
  {
    "numero": "123/128",
    "nome": "Zoroark de Hisui",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/123.webp",
    "raridade": "Comum"
  },
  {
    "numero": "127/128",
    "nome": "Substituição",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/127.webp",
    "raridade": "Comum"
  },
  {
    "numero": "075/128",
    "nome": "Chandelure",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/075.webp",
    "raridade": "Comum"
  },
  {
    "numero": "096/128",
    "nome": "Zoroark",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/096.webp",
    "raridade": "Comum"
  },
  {
    "numero": "056/128",
    "nome": "Zekrom",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/056.webp",
    "raridade": "Comum"
  },
  {
    "numero": "101/128",
    "nome": "Meowth de Galar",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/101.webp",
    "raridade": "Comum"
  },
  {
    "numero": "002/128",
    "nome": "Exeggutor de Alola",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/002.webp",
    "raridade": "Comum"
  },
  {
    "numero": "003/128",
    "nome": "Volbeat",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/003.webp",
    "raridade": "Comum"
  },
  {
    "numero": "007/128",
    "nome": "Cherrim",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/007.webp",
    "raridade": "Comum"
  },
  {
    "numero": "060/128",
    "nome": "Toxtricity",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/060.webp",
    "raridade": "Comum"
  },
  {
    "numero": "062/128",
    "nome": "Miraidon",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/062.webp",
    "raridade": "Comum"
  },
  {
    "numero": "074/128",
    "nome": "Cresselia",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/074.webp",
    "raridade": "Comum"
  },
  {
    "numero": "012/128",
    "nome": "Ho-Oh",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/012.webp",
    "raridade": "Comum"
  },
  {
    "numero": "014/128",
    "nome": "Reshiram",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/014.webp",
    "raridade": "Comum"
  },
  {
    "numero": "019/128",
    "nome": "Kyogre",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/019.webp",
    "raridade": "Comum"
  },
  {
    "numero": "059/128",
    "nome": "Toxtricity",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/059.webp",
    "raridade": "Comum"
  },
  {
    "numero": "061/128",
    "nome": "Morpeko",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/061.webp",
    "raridade": "Comum"
  },
  {
    "numero": "072/128",
    "nome": "Unown",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/072.webp",
    "raridade": "Comum"
  },
  {
    "numero": "076/128",
    "nome": "Xerneas",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/076.webp",
    "raridade": "Comum"
  },
  {
    "numero": "078/128",
    "nome": "Cosmog",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/078.webp",
    "raridade": "Comum"
  },
  {
    "numero": "080/128",
    "nome": "Lunala",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/080.webp",
    "raridade": "Comum"
  },
  {
    "numero": "086/128",
    "nome": "Koraidon",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/086.webp",
    "raridade": "Comum"
  },
  {
    "numero": "098/128",
    "nome": "Zweilous",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/098.webp",
    "raridade": "Comum"
  },
  {
    "numero": "067/128",
    "nome": "Marill",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/067.webp",
    "raridade": "Comum"
  },
  {
    "numero": "088/128",
    "nome": "Nidorina",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/088.webp",
    "raridade": "Comum"
  },
  {
    "numero": "100/128",
    "nome": "Yveltal",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/100.webp",
    "raridade": "Comum"
  },
  {
    "numero": "068/128",
    "nome": "Azumarill",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/068.webp",
    "raridade": "Comum"
  },
  {
    "numero": "104/128",
    "nome": "Ferrothorn",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/104.webp",
    "raridade": "Comum"
  },
  {
    "numero": "107/128",
    "nome": "Zamazenta",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/107.webp",
    "raridade": "Comum"
  },
  {
    "numero": "114/128",
    "nome": "Kangaskhan",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/114.webp",
    "raridade": "Comum"
  },
  {
    "numero": "008/128",
    "nome": "Vivillon",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/008.webp",
    "raridade": "Comum"
  },
  {
    "numero": "009/128",
    "nome": "Vulpix",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/009.webp",
    "raridade": "Comum"
  },
  {
    "numero": "058/128",
    "nome": "Toxel",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/058.webp",
    "raridade": "Comum"
  },
  {
    "numero": "081/128",
    "nome": "Gimmighoul",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/081.webp",
    "raridade": "Comum"
  },
  {
    "numero": "082/128",
    "nome": "Groudon",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/082.webp",
    "raridade": "Comum"
  },
  {
    "numero": "087/128",
    "nome": "Nidoran Fêmea",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/087.webp",
    "raridade": "Comum"
  },
  {
    "numero": "089/128",
    "nome": "Meowth de Alola",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/089.webp",
    "raridade": "Comum"
  },
  {
    "numero": "111/128",
    "nome": "Hakamo-o",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/111.webp",
    "raridade": "Comum"
  },
  {
    "numero": "001/128",
    "nome": "Exeggcute",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/001.webp",
    "raridade": "Comum"
  },
  {
    "numero": "004/128",
    "nome": "Illumise",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/004.webp",
    "raridade": "Comum"
  },
  {
    "numero": "022/128",
    "nome": "Wishiwashi",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/022.webp",
    "raridade": "Comum"
  },
  {
    "numero": "073/128",
    "nome": "Drifloon",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/073.webp",
    "raridade": "Comum"
  },
  {
    "numero": "077/128",
    "nome": "Comfey",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/077.webp",
    "raridade": "Comum"
  },
  {
    "numero": "084/128",
    "nome": "Seismitoad",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/084.webp",
    "raridade": "Comum"
  },
  {
    "numero": "093/128",
    "nome": "Murkrow",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/093.webp",
    "raridade": "Comum"
  },
  {
    "numero": "094/128",
    "nome": "Scraggy",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/094.webp",
    "raridade": "Comum"
  },
  {
    "numero": "110/128",
    "nome": "Jangmo-o",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/110.webp",
    "raridade": "Comum"
  },
  {
    "numero": "122/128",
    "nome": "Zorua de Hisui",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/122.webp",
    "raridade": "Comum"
  },
  {
    "numero": "124/128",
    "nome": "Minior",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/124.webp",
    "raridade": "Comum"
  },
  {
    "numero": "097/128",
    "nome": "Deino",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/097.webp",
    "raridade": "Comum"
  },
  {
    "numero": "006/128",
    "nome": "Cherubi",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/006.webp",
    "raridade": "Comum"
  },
  {
    "numero": "095/128",
    "nome": "Zorua",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/095.webp",
    "raridade": "Comum"
  },
  {
    "numero": "005/128",
    "nome": "Tropius",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/005.webp",
    "raridade": "Comum"
  },
  {
    "numero": "4/102",
    "nome": "Charizard",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/CC2.webp",
    "raridade": "Clássica"
  },
  {
    "numero": "5/109",
    "nome": "Delcatty",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/CC8.webp",
    "raridade": "Clássica"
  },
  {
    "numero": "11/113",
    "nome": "Metagross δ",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/CC11.webp",
    "raridade": "Clássica"
  },
  {
    "numero": "11/101",
    "nome": "Genesect-EX",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/CC20.webp",
    "raridade": "Clássica"
  },
  {
    "numero": "18/132",
    "nome": "Misty",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/CC3.webp",
    "raridade": "Clássica"
  },
  {
    "numero": "19/109",
    "nome": "Tyranitar Sombrio",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/CC9.webp",
    "raridade": "Clássica"
  },
  {
    "numero": "25/111",
    "nome": "Sneasel",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/CC5.webp",
    "raridade": "Clássica"
  },
  {
    "numero": "33/181",
    "nome": "Pikachu e Zekrom-GX",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/CC25.webp",
    "raridade": "Clássica"
  },
  {
    "numero": "41/122",
    "nome": "Greninja TURBO",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/CC22.webp",
    "raridade": "Clássica"
  },
  {
    "numero": "43/146",
    "nome": "Uxie",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/CC13.webp",
    "raridade": "Clássica"
  },
  {
    "numero": "47/127",
    "nome": "Crobat G",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/CC14.webp",
    "raridade": "Clássica"
  },
  {
    "numero": "050/185",
    "nome": "Raikou",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/CC27.webp",
    "raridade": "Clássica"
  },
  {
    "numero": "57/111",
    "nome": "Buzzwole-GX",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/CC24.webp",
    "raridade": "Clássica"
  },
  {
    "numero": "58/102",
    "nome": "Pikachu",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/CC1.webp",
    "raridade": "Clássica"
  },
  {
    "numero": "69/132",
    "nome": "Jigglypuff da Érica",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/CC4.webp",
    "raridade": "Clássica"
  },
  {
    "numero": "85/124",
    "nome": "Rayquaza-EX",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/CC19.webp",
    "raridade": "Clássica"
  },
  {
    "numero": "89/149",
    "nome": "Solgaleo-GX",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/CC23.webp",
    "raridade": "Clássica"
  },
  {
    "numero": "94/102",
    "nome": "Gengar",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/CC15.webp",
    "raridade": "Clássica"
  },
  {
    "numero": "99/102",
    "nome": "Darkrai & Cresselia LENDA",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/CC16.webp",
    "raridade": "Clássica"
  },
  {
    "numero": "100/102",
    "nome": "Darkrai & Cresselia LENDA",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/CC17.webp",
    "raridade": "Clássica"
  },
  {
    "numero": "101/101",
    "nome": "N",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/CC18.webp",
    "raridade": "Clássica"
  },
  {
    "numero": "106/106",
    "nome": "Palkia LV.X",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/CC12.webp",
    "raridade": "Clássica"
  },
  {
    "numero": "106/160",
    "nome": "M Gardevoir-EX",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/CC21.webp",
    "raridade": "Clássica"
  },
  {
    "numero": "106/105",
    "nome": "Celebi Luminescente",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/CC6.webp",
    "raridade": "Clássica"
  },
  {
    "numero": "108/115",
    "nome": "Scizor ex",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/CC10.webp",
    "raridade": "Clássica"
  },
  {
    "numero": "114/264",
    "nome": "Mew-VMAX",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/CC28.webp",
    "raridade": "Clássica"
  },
  {
    "numero": "123/172",
    "nome": "Arceus-V-ASTRO",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/CC29.webp",
    "raridade": "Clássica"
  },
  {
    "numero": "138/202",
    "nome": "Zacian-V",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/CC26.webp",
    "raridade": "Clássica"
  },
  {
    "numero": "149/147",
    "nome": "Lugia",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/CC7.webp",
    "raridade": "Clássica"
  },
  {
    "numero": "203/193",
    "nome": "Magikarp",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/CC30.webp",
    "raridade": "Clássica"
  },
  {
    "numero": "MEE 009",
    "nome": "Energia de Planta Básica MEE 009",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/MEE009.webp",
    "raridade": "Energia Básica"
  },
  {
    "numero": "MEE 010",
    "nome": "Energia de Fogo Básica MEE 010",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/MEE010.webp",
    "raridade": "Energia Básica"
  },
  {
    "numero": "MEE 011",
    "nome": "Energia de Água Básica MEE 011",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/MEE011.webp",
    "raridade": "Energia Básica"
  },
  {
    "numero": "MEE 012",
    "nome": "Energia de Raio Básica MEE 012",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/MEE012.webp",
    "raridade": "Energia Básica"
  },
  {
    "numero": "MEE 013",
    "nome": "Energia Psíquica Básica MEE 013",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/MEE013.webp",
    "raridade": "Energia Básica"
  },
  {
    "numero": "MEE 014",
    "nome": "Energia de Luta Básica MEE 014",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/MEE014.webp",
    "raridade": "Energia Básica"
  },
  {
    "numero": "MEE 015",
    "nome": "Energia de Escuridão Básica MEE 015",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/MEE015.webp",
    "raridade": "Energia Básica"
  },
  {
    "numero": "MEE 016",
    "nome": "Energia de Metal Básica MEE 016",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/MEE016.webp",
    "raridade": "Energia Básica"
  },
  {
    "numero": "RGB-R",
    "nome": "Mew R/RGB",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/R.webp",
    "raridade": "Clássica"
  },
  {
    "numero": "RGB-G",
    "nome": "Mew G/RGB",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/G.webp",
    "raridade": "Clássica"
  },
  {
    "numero": "RGB-B",
    "nome": "Mew B/RGB",
    "preco_brl": "Sob consulta",
    "preco_num": 0,
    "imagem_url": "img/cartas/c30/B.webp",
    "raridade": "Clássica"
  }
];
