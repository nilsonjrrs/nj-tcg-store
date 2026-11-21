// Cartas da Celebração de 30 Anos, usadas pelo Simulador de Pacotinhos e pelo fichário.
// 001 a 158: nome, número e raridade do TCGdex (coleção "30th" em português, api.tcgdex.net).
// B, G e R (Mew "RGB Rare") e a Coleção Clássica (30 reimpressões, arquivos CC1..CC30): imagens do Limitless TCG
// (limitlesstcg.com/cards/30C); nome e número impresso de cada clássica vêm de js/cartas-celebracao-30-anos.js.
// 8 energias básicas (MEE 009 a 016): dados e imagem do arquivo do Nilson. Total: 199 cartas.
// Imagens (736x1024, do CDN do Limitless TCG, coleção 30C em português) em img/cartas/c30/, com miniatura
// de 300px em img/cartas/p/c30/. Sem preço: a tabela do Nilson só cobre Reinado Delta.
const CARTAS_CELEBRACAO_30 = [
  {
    "numero": "001/128",
    "nome": "Exeggcute",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/001.webp"
  },
  {
    "numero": "002/128",
    "nome": "Exeggutor de Alola",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/002.webp"
  },
  {
    "numero": "003/128",
    "nome": "Volbeat",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/003.webp"
  },
  {
    "numero": "004/128",
    "nome": "Illumise",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/004.webp"
  },
  {
    "numero": "005/128",
    "nome": "Tropius",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/005.webp"
  },
  {
    "numero": "006/128",
    "nome": "Cherubi",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/006.webp"
  },
  {
    "numero": "007/128",
    "nome": "Cherrim",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/007.webp"
  },
  {
    "numero": "008/128",
    "nome": "Vivillon",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/008.webp"
  },
  {
    "numero": "009/128",
    "nome": "Vulpix",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/009.webp"
  },
  {
    "numero": "010/128",
    "nome": "Ninetales",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/010.webp"
  },
  {
    "numero": "011/128",
    "nome": "Moltres",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/011.webp"
  },
  {
    "numero": "012/128",
    "nome": "Ho-Oh",
    "raridade": "Rara",
    "imagem_url": "img/cartas/c30/012.webp"
  },
  {
    "numero": "013/128",
    "nome": "Victini",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/013.webp"
  },
  {
    "numero": "014/128",
    "nome": "Reshiram",
    "raridade": "Rara",
    "imagem_url": "img/cartas/c30/014.webp"
  },
  {
    "numero": "015/128",
    "nome": "Fuecoco ex",
    "raridade": "Rara Dupla",
    "imagem_url": "img/cartas/c30/015.webp"
  },
  {
    "numero": "016/128",
    "nome": "Slowpoke",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/016.webp"
  },
  {
    "numero": "017/128",
    "nome": "Lapras",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/017.webp"
  },
  {
    "numero": "018/128",
    "nome": "Articuno",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/018.webp"
  },
  {
    "numero": "019/128",
    "nome": "Kyogre",
    "raridade": "Rara",
    "imagem_url": "img/cartas/c30/019.webp"
  },
  {
    "numero": "020/128",
    "nome": "Palkia",
    "raridade": "Rara",
    "imagem_url": "img/cartas/c30/020.webp"
  },
  {
    "numero": "021/128",
    "nome": "Greninja ex",
    "raridade": "Rara Dupla",
    "imagem_url": "img/cartas/c30/021.webp"
  },
  {
    "numero": "022/128",
    "nome": "Wishiwashi",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/022.webp"
  },
  {
    "numero": "023/128",
    "nome": "Pikachu",
    "raridade": "Pikachu Rare",
    "imagem_url": "img/cartas/c30/023.webp"
  },
  {
    "numero": "024/128",
    "nome": "Pikachu",
    "raridade": "Pikachu Rare",
    "imagem_url": "img/cartas/c30/024.webp"
  },
  {
    "numero": "025/128",
    "nome": "Pikachu",
    "raridade": "Pikachu Rare",
    "imagem_url": "img/cartas/c30/025.webp"
  },
  {
    "numero": "026/128",
    "nome": "Pikachu",
    "raridade": "Pikachu Rare",
    "imagem_url": "img/cartas/c30/026.webp"
  },
  {
    "numero": "027/128",
    "nome": "Pikachu",
    "raridade": "Pikachu Rare",
    "imagem_url": "img/cartas/c30/027.webp"
  },
  {
    "numero": "028/128",
    "nome": "Pikachu",
    "raridade": "Pikachu Rare",
    "imagem_url": "img/cartas/c30/028.webp"
  },
  {
    "numero": "029/128",
    "nome": "Pikachu",
    "raridade": "Pikachu Rare",
    "imagem_url": "img/cartas/c30/029.webp"
  },
  {
    "numero": "030/128",
    "nome": "Pikachu",
    "raridade": "Pikachu Rare",
    "imagem_url": "img/cartas/c30/030.webp"
  },
  {
    "numero": "031/128",
    "nome": "Pikachu",
    "raridade": "Pikachu Rare",
    "imagem_url": "img/cartas/c30/031.webp"
  },
  {
    "numero": "032/128",
    "nome": "Pikachu",
    "raridade": "Pikachu Rare",
    "imagem_url": "img/cartas/c30/032.webp"
  },
  {
    "numero": "033/128",
    "nome": "Pikachu",
    "raridade": "Pikachu Rare",
    "imagem_url": "img/cartas/c30/033.webp"
  },
  {
    "numero": "034/128",
    "nome": "Pikachu",
    "raridade": "Pikachu Rare",
    "imagem_url": "img/cartas/c30/034.webp"
  },
  {
    "numero": "035/128",
    "nome": "Pikachu",
    "raridade": "Pikachu Rare",
    "imagem_url": "img/cartas/c30/035.webp"
  },
  {
    "numero": "036/128",
    "nome": "Pikachu",
    "raridade": "Pikachu Rare",
    "imagem_url": "img/cartas/c30/036.webp"
  },
  {
    "numero": "037/128",
    "nome": "Pikachu",
    "raridade": "Pikachu Rare",
    "imagem_url": "img/cartas/c30/037.webp"
  },
  {
    "numero": "038/128",
    "nome": "Pikachu",
    "raridade": "Pikachu Rare",
    "imagem_url": "img/cartas/c30/038.webp"
  },
  {
    "numero": "039/128",
    "nome": "Pikachu",
    "raridade": "Pikachu Rare",
    "imagem_url": "img/cartas/c30/039.webp"
  },
  {
    "numero": "040/128",
    "nome": "Pikachu",
    "raridade": "Pikachu Rare",
    "imagem_url": "img/cartas/c30/040.webp"
  },
  {
    "numero": "041/128",
    "nome": "Pikachu",
    "raridade": "Pikachu Rare",
    "imagem_url": "img/cartas/c30/041.webp"
  },
  {
    "numero": "042/128",
    "nome": "Pikachu",
    "raridade": "Pikachu Rare",
    "imagem_url": "img/cartas/c30/042.webp"
  },
  {
    "numero": "043/128",
    "nome": "Pikachu",
    "raridade": "Pikachu Rare",
    "imagem_url": "img/cartas/c30/043.webp"
  },
  {
    "numero": "044/128",
    "nome": "Pikachu",
    "raridade": "Pikachu Rare",
    "imagem_url": "img/cartas/c30/044.webp"
  },
  {
    "numero": "045/128",
    "nome": "Pikachu",
    "raridade": "Pikachu Rare",
    "imagem_url": "img/cartas/c30/045.webp"
  },
  {
    "numero": "046/128",
    "nome": "Pikachu",
    "raridade": "Pikachu Rare",
    "imagem_url": "img/cartas/c30/046.webp"
  },
  {
    "numero": "047/128",
    "nome": "Pikachu",
    "raridade": "Pikachu Rare",
    "imagem_url": "img/cartas/c30/047.webp"
  },
  {
    "numero": "048/128",
    "nome": "Pikachu",
    "raridade": "Pikachu Rare",
    "imagem_url": "img/cartas/c30/048.webp"
  },
  {
    "numero": "049/128",
    "nome": "Pikachu",
    "raridade": "Pikachu Rare",
    "imagem_url": "img/cartas/c30/049.webp"
  },
  {
    "numero": "050/128",
    "nome": "Pikachu",
    "raridade": "Pikachu Rare",
    "imagem_url": "img/cartas/c30/050.webp"
  },
  {
    "numero": "051/128",
    "nome": "Pikachu",
    "raridade": "Pikachu Rare",
    "imagem_url": "img/cartas/c30/051.webp"
  },
  {
    "numero": "052/128",
    "nome": "Pikachu",
    "raridade": "Pikachu Rare",
    "imagem_url": "img/cartas/c30/052.webp"
  },
  {
    "numero": "053/128",
    "nome": "Pikachu ex",
    "raridade": "Rara Dupla",
    "imagem_url": "img/cartas/c30/053.webp"
  },
  {
    "numero": "054/128",
    "nome": "Pikachu ex",
    "raridade": "Rara Dupla",
    "imagem_url": "img/cartas/c30/054.webp"
  },
  {
    "numero": "055/128",
    "nome": "Zapdos",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/055.webp"
  },
  {
    "numero": "056/128",
    "nome": "Zekrom",
    "raridade": "Rara",
    "imagem_url": "img/cartas/c30/056.webp"
  },
  {
    "numero": "057/128",
    "nome": "Zeraora",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/057.webp"
  },
  {
    "numero": "058/128",
    "nome": "Toxel",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/058.webp"
  },
  {
    "numero": "059/128",
    "nome": "Toxtricity",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/059.webp"
  },
  {
    "numero": "060/128",
    "nome": "Toxtricity",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/060.webp"
  },
  {
    "numero": "061/128",
    "nome": "Morpeko",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/061.webp"
  },
  {
    "numero": "062/128",
    "nome": "Miraidon",
    "raridade": "Rara",
    "imagem_url": "img/cartas/c30/062.webp"
  },
  {
    "numero": "063/128",
    "nome": "Mewtwo",
    "raridade": "Rara",
    "imagem_url": "img/cartas/c30/063.webp"
  },
  {
    "numero": "064/128",
    "nome": "Mewtwo ex",
    "raridade": "Rara Dupla",
    "imagem_url": "img/cartas/c30/064.webp"
  },
  {
    "numero": "065/128",
    "nome": "Mew",
    "raridade": "Rara",
    "imagem_url": "img/cartas/c30/065.webp"
  },
  {
    "numero": "066/128",
    "nome": "Mew ex",
    "raridade": "Rara Dupla",
    "imagem_url": "img/cartas/c30/066.webp"
  },
  {
    "numero": "067/128",
    "nome": "Marill",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/067.webp"
  },
  {
    "numero": "068/128",
    "nome": "Azumarill",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/068.webp"
  },
  {
    "numero": "069/128",
    "nome": "Espeon",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/069.webp"
  },
  {
    "numero": "070/128",
    "nome": "Espeon ex",
    "raridade": "Rara Dupla",
    "imagem_url": "img/cartas/c30/070.webp"
  },
  {
    "numero": "071/128",
    "nome": "Sylveon ex",
    "raridade": "Rara Dupla",
    "imagem_url": "img/cartas/c30/071.webp"
  },
  {
    "numero": "072/128",
    "nome": "Unown",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/072.webp"
  },
  {
    "numero": "073/128",
    "nome": "Drifloon",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/073.webp"
  },
  {
    "numero": "074/128",
    "nome": "Cresselia",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/074.webp"
  },
  {
    "numero": "075/128",
    "nome": "Chandelure",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/075.webp"
  },
  {
    "numero": "076/128",
    "nome": "Xerneas",
    "raridade": "Rara",
    "imagem_url": "img/cartas/c30/076.webp"
  },
  {
    "numero": "077/128",
    "nome": "Comfey",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/077.webp"
  },
  {
    "numero": "078/128",
    "nome": "Cosmog",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/078.webp"
  },
  {
    "numero": "079/128",
    "nome": "Cosmoem",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/079.webp"
  },
  {
    "numero": "080/128",
    "nome": "Lunala",
    "raridade": "Rara",
    "imagem_url": "img/cartas/c30/080.webp"
  },
  {
    "numero": "081/128",
    "nome": "Gimmighoul",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/081.webp"
  },
  {
    "numero": "082/128",
    "nome": "Groudon",
    "raridade": "Rara",
    "imagem_url": "img/cartas/c30/082.webp"
  },
  {
    "numero": "083/128",
    "nome": "Lucario",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/083.webp"
  },
  {
    "numero": "084/128",
    "nome": "Seismitoad",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/084.webp"
  },
  {
    "numero": "085/128",
    "nome": "Lycanroc",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/085.webp"
  },
  {
    "numero": "086/128",
    "nome": "Koraidon",
    "raridade": "Rara",
    "imagem_url": "img/cartas/c30/086.webp"
  },
  {
    "numero": "087/128",
    "nome": "Nidoran♀",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/087.webp"
  },
  {
    "numero": "088/128",
    "nome": "Nidorina",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/088.webp"
  },
  {
    "numero": "089/128",
    "nome": "Meowth de Alola",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/089.webp"
  },
  {
    "numero": "090/128",
    "nome": "Gengar ex",
    "raridade": "Rara Dupla",
    "imagem_url": "img/cartas/c30/090.webp"
  },
  {
    "numero": "091/128",
    "nome": "Umbreon",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/091.webp"
  },
  {
    "numero": "092/128",
    "nome": "Umbreon ex",
    "raridade": "Rara Dupla",
    "imagem_url": "img/cartas/c30/092.webp"
  },
  {
    "numero": "093/128",
    "nome": "Murkrow",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/093.webp"
  },
  {
    "numero": "094/128",
    "nome": "Scraggy",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/094.webp"
  },
  {
    "numero": "095/128",
    "nome": "Zorua",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/095.webp"
  },
  {
    "numero": "096/128",
    "nome": "Zoroark",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/096.webp"
  },
  {
    "numero": "097/128",
    "nome": "Deino",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/097.webp"
  },
  {
    "numero": "098/128",
    "nome": "Zweilous",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/098.webp"
  },
  {
    "numero": "099/128",
    "nome": "Hydreigon",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/099.webp"
  },
  {
    "numero": "100/128",
    "nome": "Yveltal",
    "raridade": "Rara",
    "imagem_url": "img/cartas/c30/100.webp"
  },
  {
    "numero": "101/128",
    "nome": "Meowth de Galar",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/101.webp"
  },
  {
    "numero": "102/128",
    "nome": "Jirachi ex",
    "raridade": "Rara Dupla",
    "imagem_url": "img/cartas/c30/102.webp"
  },
  {
    "numero": "103/128",
    "nome": "Dialga",
    "raridade": "Rara",
    "imagem_url": "img/cartas/c30/103.webp"
  },
  {
    "numero": "104/128",
    "nome": "Ferrothorn",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/104.webp"
  },
  {
    "numero": "105/128",
    "nome": "Solgaleo",
    "raridade": "Rara",
    "imagem_url": "img/cartas/c30/105.webp"
  },
  {
    "numero": "106/128",
    "nome": "Zacian",
    "raridade": "Rara",
    "imagem_url": "img/cartas/c30/106.webp"
  },
  {
    "numero": "107/128",
    "nome": "Zamazenta",
    "raridade": "Rara",
    "imagem_url": "img/cartas/c30/107.webp"
  },
  {
    "numero": "108/128",
    "nome": "Gholdengo",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/108.webp"
  },
  {
    "numero": "109/128",
    "nome": "Salamence ex",
    "raridade": "Rara Dupla",
    "imagem_url": "img/cartas/c30/109.webp"
  },
  {
    "numero": "110/128",
    "nome": "Jangmo-o",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/110.webp"
  },
  {
    "numero": "111/128",
    "nome": "Hakamo-o",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/111.webp"
  },
  {
    "numero": "112/128",
    "nome": "Kommo-o",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/112.webp"
  },
  {
    "numero": "113/128",
    "nome": "Meowth",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/113.webp"
  },
  {
    "numero": "114/128",
    "nome": "Kangaskhan",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/114.webp"
  },
  {
    "numero": "115/128",
    "nome": "Ditto",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/115.webp"
  },
  {
    "numero": "116/128",
    "nome": "Eevee",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/116.webp"
  },
  {
    "numero": "117/128",
    "nome": "Eevee",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/117.webp"
  },
  {
    "numero": "118/128",
    "nome": "Eevee",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/118.webp"
  },
  {
    "numero": "119/128",
    "nome": "Snorlax",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/119.webp"
  },
  {
    "numero": "120/128",
    "nome": "Igglybuff",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/120.webp"
  },
  {
    "numero": "121/128",
    "nome": "Lugia",
    "raridade": "Rara",
    "imagem_url": "img/cartas/c30/121.webp"
  },
  {
    "numero": "122/128",
    "nome": "Zorua de Hisui",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/122.webp"
  },
  {
    "numero": "123/128",
    "nome": "Zoroark de Hisui",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/123.webp"
  },
  {
    "numero": "124/128",
    "nome": "Minior",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/124.webp"
  },
  {
    "numero": "125/128",
    "nome": "Maushold",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/125.webp"
  },
  {
    "numero": "126/128",
    "nome": "Poké Tablet",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/126.webp"
  },
  {
    "numero": "127/128",
    "nome": "Substituição",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/127.webp"
  },
  {
    "numero": "128/128",
    "nome": "Ultra Bola",
    "raridade": "Comum",
    "imagem_url": "img/cartas/c30/128.webp"
  },
  {
    "numero": "129/128",
    "nome": "Exeggutor de Alola",
    "raridade": "Ilustração Rara",
    "imagem_url": "img/cartas/c30/129.webp"
  },
  {
    "numero": "130/128",
    "nome": "Moltres",
    "raridade": "Ilustração Rara",
    "imagem_url": "img/cartas/c30/130.webp"
  },
  {
    "numero": "131/128",
    "nome": "Lapras",
    "raridade": "Ilustração Rara",
    "imagem_url": "img/cartas/c30/131.webp"
  },
  {
    "numero": "132/128",
    "nome": "Articuno",
    "raridade": "Ilustração Rara",
    "imagem_url": "img/cartas/c30/132.webp"
  },
  {
    "numero": "133/128",
    "nome": "Zapdos",
    "raridade": "Ilustração Rara",
    "imagem_url": "img/cartas/c30/133.webp"
  },
  {
    "numero": "134/128",
    "nome": "Toxtricity",
    "raridade": "Ilustração Rara",
    "imagem_url": "img/cartas/c30/134.webp"
  },
  {
    "numero": "135/128",
    "nome": "Morpeko",
    "raridade": "Ilustração Rara",
    "imagem_url": "img/cartas/c30/135.webp"
  },
  {
    "numero": "136/128",
    "nome": "Drifloon",
    "raridade": "Ilustração Rara",
    "imagem_url": "img/cartas/c30/136.webp"
  },
  {
    "numero": "137/128",
    "nome": "Chandelure",
    "raridade": "Ilustração Rara",
    "imagem_url": "img/cartas/c30/137.webp"
  },
  {
    "numero": "138/128",
    "nome": "Lycanroc",
    "raridade": "Ilustração Rara",
    "imagem_url": "img/cartas/c30/138.webp"
  },
  {
    "numero": "139/128",
    "nome": "Meowth de Alola",
    "raridade": "Ilustração Rara",
    "imagem_url": "img/cartas/c30/139.webp"
  },
  {
    "numero": "140/128",
    "nome": "Scraggy",
    "raridade": "Ilustração Rara",
    "imagem_url": "img/cartas/c30/140.webp"
  },
  {
    "numero": "141/128",
    "nome": "Meowth de Galar",
    "raridade": "Ilustração Rara",
    "imagem_url": "img/cartas/c30/141.webp"
  },
  {
    "numero": "142/128",
    "nome": "Gholdengo",
    "raridade": "Ilustração Rara",
    "imagem_url": "img/cartas/c30/142.webp"
  },
  {
    "numero": "143/128",
    "nome": "Kommo-o",
    "raridade": "Ilustração Rara",
    "imagem_url": "img/cartas/c30/143.webp"
  },
  {
    "numero": "144/128",
    "nome": "Meowth",
    "raridade": "Ilustração Rara",
    "imagem_url": "img/cartas/c30/144.webp"
  },
  {
    "numero": "145/128",
    "nome": "Zorua de Hisui",
    "raridade": "Ilustração Rara",
    "imagem_url": "img/cartas/c30/145.webp"
  },
  {
    "numero": "146/128",
    "nome": "Maushold",
    "raridade": "Ilustração Rara",
    "imagem_url": "img/cartas/c30/146.webp"
  },
  {
    "numero": "147/128",
    "nome": "Fuecoco ex",
    "raridade": "Ilustração Rara Especial",
    "imagem_url": "img/cartas/c30/147.webp"
  },
  {
    "numero": "148/128",
    "nome": "Greninja ex",
    "raridade": "Ilustração Rara Especial",
    "imagem_url": "img/cartas/c30/148.webp"
  },
  {
    "numero": "149/128",
    "nome": "Pikachu ex",
    "raridade": "Ilustração Rara Especial",
    "imagem_url": "img/cartas/c30/149.webp"
  },
  {
    "numero": "150/128",
    "nome": "Pikachu ex",
    "raridade": "Ilustração Rara Especial",
    "imagem_url": "img/cartas/c30/150.webp"
  },
  {
    "numero": "151/128",
    "nome": "Mewtwo ex",
    "raridade": "Ilustração Rara Especial",
    "imagem_url": "img/cartas/c30/151.webp"
  },
  {
    "numero": "152/128",
    "nome": "Mew ex",
    "raridade": "Ilustração Rara Especial",
    "imagem_url": "img/cartas/c30/152.webp"
  },
  {
    "numero": "153/128",
    "nome": "Sylveon ex",
    "raridade": "Ilustração Rara Especial",
    "imagem_url": "img/cartas/c30/153.webp"
  },
  {
    "numero": "154/128",
    "nome": "Gengar ex",
    "raridade": "Ilustração Rara Especial",
    "imagem_url": "img/cartas/c30/154.webp"
  },
  {
    "numero": "155/128",
    "nome": "Jirachi ex",
    "raridade": "Ilustração Rara Especial",
    "imagem_url": "img/cartas/c30/155.webp"
  },
  {
    "numero": "156/128",
    "nome": "Salamence ex",
    "raridade": "Ilustração Rara Especial",
    "imagem_url": "img/cartas/c30/156.webp"
  },
  {
    "numero": "157/128",
    "nome": "Mewtwo ex",
    "raridade": "Futuristic Rare",
    "imagem_url": "img/cartas/c30/157.webp"
  },
  {
    "numero": "158/128",
    "nome": "Mew ex",
    "raridade": "Futuristic Rare",
    "imagem_url": "img/cartas/c30/158.webp"
  },
  {
    "numero": "B",
    "nome": "Mew",
    "raridade": "RGB Rare",
    "imagem_url": "img/cartas/c30/B.webp",
    "codigo": "30C RGB-B"
  },
  {
    "numero": "G",
    "nome": "Mew",
    "raridade": "RGB Rare",
    "imagem_url": "img/cartas/c30/G.webp",
    "codigo": "30C RGB-G"
  },
  {
    "numero": "R",
    "nome": "Mew",
    "raridade": "RGB Rare",
    "imagem_url": "img/cartas/c30/R.webp",
    "codigo": "30C RGB-R"
  },
  {
    "numero": "58/102",
    "nome": "Pikachu",
    "raridade": "Coleção Clássica",
    "imagem_url": "img/cartas/c30/CC1.webp",
    "codigo": "Clássica 58/102"
  },
  {
    "numero": "4/102",
    "nome": "Charizard",
    "raridade": "Coleção Clássica",
    "imagem_url": "img/cartas/c30/CC2.webp",
    "codigo": "Clássica 4/102"
  },
  {
    "numero": "18/132",
    "nome": "Misty",
    "raridade": "Coleção Clássica",
    "imagem_url": "img/cartas/c30/CC3.webp",
    "codigo": "Clássica 18/132"
  },
  {
    "numero": "69/132",
    "nome": "Jigglypuff da Érica",
    "raridade": "Coleção Clássica",
    "imagem_url": "img/cartas/c30/CC4.webp",
    "codigo": "Clássica 69/132"
  },
  {
    "numero": "25/111",
    "nome": "Sneasel",
    "raridade": "Coleção Clássica",
    "imagem_url": "img/cartas/c30/CC5.webp",
    "codigo": "Clássica 25/111"
  },
  {
    "numero": "106/105",
    "nome": "Celebi Luminescente",
    "raridade": "Coleção Clássica",
    "imagem_url": "img/cartas/c30/CC6.webp",
    "codigo": "Clássica 106/105"
  },
  {
    "numero": "149/147",
    "nome": "Lugia",
    "raridade": "Coleção Clássica",
    "imagem_url": "img/cartas/c30/CC7.webp",
    "codigo": "Clássica 149/147"
  },
  {
    "numero": "5/109",
    "nome": "Delcatty",
    "raridade": "Coleção Clássica",
    "imagem_url": "img/cartas/c30/CC8.webp",
    "codigo": "Clássica 5/109"
  },
  {
    "numero": "19/109",
    "nome": "Tyranitar Sombrio",
    "raridade": "Coleção Clássica",
    "imagem_url": "img/cartas/c30/CC9.webp",
    "codigo": "Clássica 19/109"
  },
  {
    "numero": "108/115",
    "nome": "Scizor ex",
    "raridade": "Coleção Clássica",
    "imagem_url": "img/cartas/c30/CC10.webp",
    "codigo": "Clássica 108/115"
  },
  {
    "numero": "11/113",
    "nome": "Metagross δ",
    "raridade": "Coleção Clássica",
    "imagem_url": "img/cartas/c30/CC11.webp",
    "codigo": "Clássica 11/113"
  },
  {
    "numero": "106/106",
    "nome": "Palkia LV.X",
    "raridade": "Coleção Clássica",
    "imagem_url": "img/cartas/c30/CC12.webp",
    "codigo": "Clássica 106/106"
  },
  {
    "numero": "43/146",
    "nome": "Uxie",
    "raridade": "Coleção Clássica",
    "imagem_url": "img/cartas/c30/CC13.webp",
    "codigo": "Clássica 43/146"
  },
  {
    "numero": "47/127",
    "nome": "Crobat G",
    "raridade": "Coleção Clássica",
    "imagem_url": "img/cartas/c30/CC14.webp",
    "codigo": "Clássica 47/127"
  },
  {
    "numero": "94/102",
    "nome": "Gengar",
    "raridade": "Coleção Clássica",
    "imagem_url": "img/cartas/c30/CC15.webp",
    "codigo": "Clássica 94/102"
  },
  {
    "numero": "99/102",
    "nome": "Darkrai & Cresselia LENDA",
    "raridade": "Coleção Clássica",
    "imagem_url": "img/cartas/c30/CC16.webp",
    "codigo": "Clássica 99/102"
  },
  {
    "numero": "100/102",
    "nome": "Darkrai & Cresselia LENDA",
    "raridade": "Coleção Clássica",
    "imagem_url": "img/cartas/c30/CC17.webp",
    "codigo": "Clássica 100/102"
  },
  {
    "numero": "101/101",
    "nome": "N",
    "raridade": "Coleção Clássica",
    "imagem_url": "img/cartas/c30/CC18.webp",
    "codigo": "Clássica 101/101"
  },
  {
    "numero": "85/124",
    "nome": "Rayquaza-EX",
    "raridade": "Coleção Clássica",
    "imagem_url": "img/cartas/c30/CC19.webp",
    "codigo": "Clássica 85/124"
  },
  {
    "numero": "11/101",
    "nome": "Genesect-EX",
    "raridade": "Coleção Clássica",
    "imagem_url": "img/cartas/c30/CC20.webp",
    "codigo": "Clássica 11/101"
  },
  {
    "numero": "106/160",
    "nome": "M Gardevoir-EX",
    "raridade": "Coleção Clássica",
    "imagem_url": "img/cartas/c30/CC21.webp",
    "codigo": "Clássica 106/160"
  },
  {
    "numero": "41/122",
    "nome": "Greninja TURBO",
    "raridade": "Coleção Clássica",
    "imagem_url": "img/cartas/c30/CC22.webp",
    "codigo": "Clássica 41/122"
  },
  {
    "numero": "89/149",
    "nome": "Solgaleo-GX",
    "raridade": "Coleção Clássica",
    "imagem_url": "img/cartas/c30/CC23.webp",
    "codigo": "Clássica 89/149"
  },
  {
    "numero": "57/111",
    "nome": "Buzzwole-GX",
    "raridade": "Coleção Clássica",
    "imagem_url": "img/cartas/c30/CC24.webp",
    "codigo": "Clássica 57/111"
  },
  {
    "numero": "33/181",
    "nome": "Pikachu e Zekrom-GX",
    "raridade": "Coleção Clássica",
    "imagem_url": "img/cartas/c30/CC25.webp",
    "codigo": "Clássica 33/181"
  },
  {
    "numero": "138/202",
    "nome": "Zacian-V",
    "raridade": "Coleção Clássica",
    "imagem_url": "img/cartas/c30/CC26.webp",
    "codigo": "Clássica 138/202"
  },
  {
    "numero": "050/185",
    "nome": "Raikou",
    "raridade": "Coleção Clássica",
    "imagem_url": "img/cartas/c30/CC27.webp",
    "codigo": "Clássica 050/185"
  },
  {
    "numero": "114/264",
    "nome": "Mew-VMAX",
    "raridade": "Coleção Clássica",
    "imagem_url": "img/cartas/c30/CC28.webp",
    "codigo": "Clássica 114/264"
  },
  {
    "numero": "123/172",
    "nome": "Arceus-V-ASTRO",
    "raridade": "Coleção Clássica",
    "imagem_url": "img/cartas/c30/CC29.webp",
    "codigo": "Clássica 123/172"
  },
  {
    "numero": "203/193",
    "nome": "Magikarp",
    "raridade": "Coleção Clássica",
    "imagem_url": "img/cartas/c30/CC30.webp",
    "codigo": "Clássica 203/193"
  },
  {
    "numero": "MEE 009",
    "nome": "Energia de Planta Básica",
    "raridade": "Energia Básica",
    "imagem_url": "img/cartas/c30/MEE009.webp",
    "codigo": "MEE 009"
  },
  {
    "numero": "MEE 010",
    "nome": "Energia de Fogo Básica",
    "raridade": "Energia Básica",
    "imagem_url": "img/cartas/c30/MEE010.webp",
    "codigo": "MEE 010"
  },
  {
    "numero": "MEE 011",
    "nome": "Energia de Água Básica",
    "raridade": "Energia Básica",
    "imagem_url": "img/cartas/c30/MEE011.webp",
    "codigo": "MEE 011"
  },
  {
    "numero": "MEE 012",
    "nome": "Energia de Raio Básica",
    "raridade": "Energia Básica",
    "imagem_url": "img/cartas/c30/MEE012.webp",
    "codigo": "MEE 012"
  },
  {
    "numero": "MEE 013",
    "nome": "Energia Psíquica Básica",
    "raridade": "Energia Básica",
    "imagem_url": "img/cartas/c30/MEE013.webp",
    "codigo": "MEE 013"
  },
  {
    "numero": "MEE 014",
    "nome": "Energia de Luta Básica",
    "raridade": "Energia Básica",
    "imagem_url": "img/cartas/c30/MEE014.webp",
    "codigo": "MEE 014"
  },
  {
    "numero": "MEE 015",
    "nome": "Energia de Escuridão Básica",
    "raridade": "Energia Básica",
    "imagem_url": "img/cartas/c30/MEE015.webp",
    "codigo": "MEE 015"
  },
  {
    "numero": "MEE 016",
    "nome": "Energia de Metal Básica",
    "raridade": "Energia Básica",
    "imagem_url": "img/cartas/c30/MEE016.webp",
    "codigo": "MEE 016"
  }
];
