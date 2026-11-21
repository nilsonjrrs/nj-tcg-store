// Dados das 141 cartas de Reinado Delta, usados só pelo Simulador de Pacotinhos.
// numero: ex. "104/103" (acima de 103 = secretas). preco_num em reais (tabela do Nilson).
// raridade vem do TCGdex, coleção me06 em português (api.tcgdex.net). As imagens (736x1024, do CDN do
// Limitless TCG, coleção DLR em português) ficam no próprio site, em img/cartas/NNN.webp, com miniatura
// de 300px em img/cartas/p/NNN.webp.
const CARTAS_REINADO_DELTA = [
  {
    "numero": "141/103",
    "nome": "Mega Rayquaza ex",
    "preco_brl": "R$ 1.099,89",
    "preco_num": 1099.89,
    "imagem_url": "img/cartas/141.webp",
    "raridade": "Mega Hiper Raro"
  },
  {
    "numero": "138/103",
    "nome": "Mega Rayquaza ex",
    "preco_brl": "R$ 850,00",
    "preco_num": 850,
    "imagem_url": "img/cartas/138.webp",
    "raridade": "Ilustração Rara Especial"
  },
  {
    "numero": "136/103",
    "nome": "Raikou ex",
    "preco_brl": "R$ 269,90",
    "preco_num": 269.9,
    "imagem_url": "img/cartas/136.webp",
    "raridade": "Ilustração Rara Especial"
  },
  {
    "numero": "140/103",
    "nome": "Confiança da Zínia",
    "preco_brl": "R$ 240,00",
    "preco_num": 240,
    "imagem_url": "img/cartas/140.webp",
    "raridade": "Ilustração Rara Especial"
  },
  {
    "numero": "135/103",
    "nome": "Mega Golisopod ex",
    "preco_brl": "R$ 188,99",
    "preco_num": 188.99,
    "imagem_url": "img/cartas/135.webp",
    "raridade": "Ilustração Rara Especial"
  },
  {
    "numero": "139/103",
    "nome": "Arão",
    "preco_brl": "R$ 155,00",
    "preco_num": 155,
    "imagem_url": "img/cartas/139.webp",
    "raridade": "Ilustração Rara Especial"
  },
  {
    "numero": "137/103",
    "nome": "Mega Golurk ex",
    "preco_brl": "R$ 123,84",
    "preco_num": 123.84,
    "imagem_url": "img/cartas/137.webp",
    "raridade": "Ilustração Rara Especial"
  },
  {
    "numero": "114/103",
    "nome": "Eevee",
    "preco_brl": "R$ 76,50",
    "preco_num": 76.5,
    "imagem_url": "img/cartas/114.webp",
    "raridade": "Ilustração Rara"
  },
  {
    "numero": "116/103",
    "nome": "Altaria",
    "preco_brl": "R$ 46,50",
    "preco_num": 46.5,
    "imagem_url": "img/cartas/116.webp",
    "raridade": "Ilustração Rara"
  },
  {
    "numero": "117/103",
    "nome": "Kecleon",
    "preco_brl": "R$ 43,50",
    "preco_num": 43.5,
    "imagem_url": "img/cartas/117.webp",
    "raridade": "Ilustração Rara"
  },
  {
    "numero": "124/103",
    "nome": "Talonflame ex",
    "preco_brl": "R$ 40,00",
    "preco_num": 40,
    "imagem_url": "img/cartas/124.webp",
    "raridade": "Ultra Rara"
  },
  {
    "numero": "105/103",
    "nome": "Sprigatito",
    "preco_brl": "R$ 35,50",
    "preco_num": 35.5,
    "imagem_url": "img/cartas/105.webp",
    "raridade": "Ilustração Rara"
  },
  {
    "numero": "106/103",
    "nome": "Growlithe",
    "preco_brl": "R$ 33,75",
    "preco_num": 33.75,
    "imagem_url": "img/cartas/106.webp",
    "raridade": "Ilustração Rara"
  },
  {
    "numero": "111/103",
    "nome": "Groudon",
    "preco_brl": "R$ 31,90",
    "preco_num": 31.9,
    "imagem_url": "img/cartas/111.webp",
    "raridade": "Ilustração Rara"
  },
  {
    "numero": "112/103",
    "nome": "Zorua",
    "preco_brl": "R$ 31,50",
    "preco_num": 31.5,
    "imagem_url": "img/cartas/112.webp",
    "raridade": "Ilustração Rara"
  },
  {
    "numero": "131/103",
    "nome": "Confiança da Zínia",
    "preco_brl": "R$ 29,50",
    "preco_num": 29.5,
    "imagem_url": "img/cartas/131.webp",
    "raridade": "Ultra Rara"
  },
  {
    "numero": "088/103",
    "nome": "Talonflame ex",
    "preco_brl": "R$ 28,99",
    "preco_num": 28.99,
    "imagem_url": "img/cartas/088.webp",
    "raridade": "Rara Dupla"
  },
  {
    "numero": "129/103",
    "nome": "Pegador de Pokémon",
    "preco_brl": "R$ 25,00",
    "preco_num": 25,
    "imagem_url": "img/cartas/129.webp",
    "raridade": "Ultra Rara"
  },
  {
    "numero": "122/103",
    "nome": "Mega Golurk ex",
    "preco_brl": "R$ 24,50",
    "preco_num": 24.5,
    "imagem_url": "img/cartas/122.webp",
    "raridade": "Ultra Rara"
  },
  {
    "numero": "115/103",
    "nome": "Azurill",
    "preco_brl": "R$ 22,75",
    "preco_num": 22.75,
    "imagem_url": "img/cartas/115.webp",
    "raridade": "Ilustração Rara"
  },
  {
    "numero": "084/103",
    "nome": "Mega Rayquaza ex",
    "preco_brl": "R$ 21,50",
    "preco_num": 21.5,
    "imagem_url": "img/cartas/084.webp",
    "raridade": "Rara Dupla"
  },
  {
    "numero": "109/103",
    "nome": "Pincurchin",
    "preco_brl": "R$ 17,49",
    "preco_num": 17.49,
    "imagem_url": "img/cartas/109.webp",
    "raridade": "Ilustração Rara"
  },
  {
    "numero": "125/103",
    "nome": "Arão",
    "preco_brl": "R$ 17,00",
    "preco_num": 17,
    "imagem_url": "img/cartas/125.webp",
    "raridade": "Ultra Rara"
  },
  {
    "numero": "127/103",
    "nome": "Colete Customizado",
    "preco_brl": "R$ 16,75",
    "preco_num": 16.75,
    "imagem_url": "img/cartas/127.webp",
    "raridade": "Ultra Rara"
  },
  {
    "numero": "130/103",
    "nome": "Treinamento de Tate e Liza",
    "preco_brl": "R$ 16,25",
    "preco_num": 16.25,
    "imagem_url": "img/cartas/130.webp",
    "raridade": "Ultra Rara"
  },
  {
    "numero": "118/103",
    "nome": "Mega Golisopod ex",
    "preco_brl": "R$ 16,00",
    "preco_num": 16,
    "imagem_url": "img/cartas/118.webp",
    "raridade": "Ultra Rara"
  },
  {
    "numero": "133/103",
    "nome": "Energia G Crescente",
    "preco_brl": "R$ 14,50",
    "preco_num": 14.5,
    "imagem_url": "img/cartas/133.webp",
    "raridade": "Ultra Rara"
  },
  {
    "numero": "134/103",
    "nome": "Energia F Nitro",
    "preco_brl": "R$ 14,49",
    "preco_num": 14.49,
    "imagem_url": "img/cartas/134.webp",
    "raridade": "Ultra Rara"
  },
  {
    "numero": "108/103",
    "nome": "Electivire",
    "preco_brl": "R$ 14,25",
    "preco_num": 14.25,
    "imagem_url": "img/cartas/108.webp",
    "raridade": "Ilustração Rara"
  },
  {
    "numero": "128/103",
    "nome": "Hype da Emcee",
    "preco_brl": "R$ 13,00",
    "preco_num": 13,
    "imagem_url": "img/cartas/128.webp",
    "raridade": "Ultra Rara"
  },
  {
    "numero": "121/103",
    "nome": "Raikou ex",
    "preco_brl": "R$ 12,75",
    "preco_num": 12.75,
    "imagem_url": "img/cartas/121.webp",
    "raridade": "Ultra Rara"
  },
  {
    "numero": "132/103",
    "nome": "Energia A Borbulhante",
    "preco_brl": "R$ 11,90",
    "preco_num": 11.9,
    "imagem_url": "img/cartas/132.webp",
    "raridade": "Ultra Rara"
  },
  {
    "numero": "113/103",
    "nome": "Inkay",
    "preco_brl": "R$ 11,89",
    "preco_num": 11.89,
    "imagem_url": "img/cartas/113.webp",
    "raridade": "Ilustração Rara"
  },
  {
    "numero": "110/103",
    "nome": "Enamorus",
    "preco_brl": "R$ 10,00",
    "preco_num": 10,
    "imagem_url": "img/cartas/110.webp",
    "raridade": "Ilustração Rara"
  },
  {
    "numero": "126/103",
    "nome": "Lanterna de Aventura",
    "preco_brl": "R$ 9,50",
    "preco_num": 9.5,
    "imagem_url": "img/cartas/126.webp",
    "raridade": "Ultra Rara"
  },
  {
    "numero": "104/103",
    "nome": "Masquerain",
    "preco_brl": "R$ 8,00",
    "preco_num": 8,
    "imagem_url": "img/cartas/104.webp",
    "raridade": "Ilustração Rara"
  },
  {
    "numero": "107/103",
    "nome": "Magmortar",
    "preco_brl": "R$ 8,00",
    "preco_num": 8,
    "imagem_url": "img/cartas/107.webp",
    "raridade": "Ilustração Rara"
  },
  {
    "numero": "119/103",
    "nome": "Rotom Calor ex",
    "preco_brl": "R$ 7,99",
    "preco_num": 7.99,
    "imagem_url": "img/cartas/119.webp",
    "raridade": "Ultra Rara"
  },
  {
    "numero": "123/103",
    "nome": "Mega Malamar ex",
    "preco_brl": "R$ 6,50",
    "preco_num": 6.5,
    "imagem_url": "img/cartas/123.webp",
    "raridade": "Ultra Rara"
  },
  {
    "numero": "120/103",
    "nome": "Wishiwashi ex",
    "preco_brl": "R$ 5,99",
    "preco_num": 5.99,
    "imagem_url": "img/cartas/120.webp",
    "raridade": "Ultra Rara"
  },
  {
    "numero": "033/103",
    "nome": "Raikou ex",
    "preco_brl": "R$ 4,69",
    "preco_num": 4.69,
    "imagem_url": "img/cartas/033.webp",
    "raridade": "Rara Dupla"
  },
  {
    "numero": "011/103",
    "nome": "Mega Golisopod ex",
    "preco_brl": "R$ 3,99",
    "preco_num": 3.99,
    "imagem_url": "img/cartas/011.webp",
    "raridade": "Rara Dupla"
  },
  {
    "numero": "067/103",
    "nome": "Zoroark ex",
    "preco_brl": "R$ 3,99",
    "preco_num": 3.99,
    "imagem_url": "img/cartas/067.webp",
    "raridade": "Rara Dupla"
  },
  {
    "numero": "014/103",
    "nome": "Meowscarada ex",
    "preco_brl": "R$ 3,80",
    "preco_num": 3.8,
    "imagem_url": "img/cartas/014.webp",
    "raridade": "Rara Dupla"
  },
  {
    "numero": "047/103",
    "nome": "Mega Golurk ex",
    "preco_brl": "R$ 3,70",
    "preco_num": 3.7,
    "imagem_url": "img/cartas/047.webp",
    "raridade": "Rara Dupla"
  },
  {
    "numero": "069/103",
    "nome": "Mega Malamar ex",
    "preco_brl": "R$ 2,99",
    "preco_num": 2.99,
    "imagem_url": "img/cartas/069.webp",
    "raridade": "Rara Dupla"
  },
  {
    "numero": "029/103",
    "nome": "Wishiwashi ex",
    "preco_brl": "R$ 2,80",
    "preco_num": 2.8,
    "imagem_url": "img/cartas/029.webp",
    "raridade": "Rara Dupla"
  },
  {
    "numero": "023/103",
    "nome": "Rotom Calor ex",
    "preco_brl": "R$ 1,00",
    "preco_num": 1,
    "imagem_url": "img/cartas/023.webp",
    "raridade": "Rara Dupla"
  },
  {
    "numero": "095/103",
    "nome": "Tubo de Lava Lendário",
    "preco_brl": "R$ 0,35",
    "preco_num": 0.35,
    "imagem_url": "img/cartas/095.webp",
    "raridade": "Incomum"
  },
  {
    "numero": "045/103",
    "nome": "Giratina",
    "preco_brl": "R$ 0,34",
    "preco_num": 0.34,
    "imagem_url": "img/cartas/045.webp",
    "raridade": "Rara"
  },
  {
    "numero": "082/103",
    "nome": "Altaria",
    "preco_brl": "R$ 0,30",
    "preco_num": 0.3,
    "imagem_url": "img/cartas/082.webp",
    "raridade": "Rara"
  },
  {
    "numero": "053/103",
    "nome": "Groudon",
    "preco_brl": "R$ 0,26",
    "preco_num": 0.26,
    "imagem_url": "img/cartas/053.webp",
    "raridade": "Rara"
  },
  {
    "numero": "057/103",
    "nome": "Nidoqueen",
    "preco_brl": "R$ 0,26",
    "preco_num": 0.26,
    "imagem_url": "img/cartas/057.webp",
    "raridade": "Rara"
  },
  {
    "numero": "019/103",
    "nome": "Arcanine",
    "preco_brl": "R$ 0,25",
    "preco_num": 0.25,
    "imagem_url": "img/cartas/019.webp",
    "raridade": "Rara"
  },
  {
    "numero": "026/103",
    "nome": "Kyogre",
    "preco_brl": "R$ 0,25",
    "preco_num": 0.25,
    "imagem_url": "img/cartas/026.webp",
    "raridade": "Rara"
  },
  {
    "numero": "094/103",
    "nome": "Tubo de Lava Lendário",
    "preco_brl": "R$ 0,25",
    "preco_num": 0.25,
    "imagem_url": "img/cartas/094.webp",
    "raridade": "Incomum"
  },
  {
    "numero": "096/103",
    "nome": "Pico Lendário",
    "preco_brl": "R$ 0,25",
    "preco_num": 0.25,
    "imagem_url": "img/cartas/096.webp",
    "raridade": "Incomum"
  },
  {
    "numero": "097/103",
    "nome": "Pico Lendário",
    "preco_brl": "R$ 0,25",
    "preco_num": 0.25,
    "imagem_url": "img/cartas/097.webp",
    "raridade": "Incomum"
  },
  {
    "numero": "052/103",
    "nome": "Steelix",
    "preco_brl": "R$ 0,24",
    "preco_num": 0.24,
    "imagem_url": "img/cartas/052.webp",
    "raridade": "Rara"
  },
  {
    "numero": "021/103",
    "nome": "Magmortar",
    "preco_brl": "R$ 0,23",
    "preco_num": 0.23,
    "imagem_url": "img/cartas/021.webp",
    "raridade": "Rara"
  },
  {
    "numero": "075/103",
    "nome": "Kommo-o",
    "preco_brl": "R$ 0,23",
    "preco_num": 0.23,
    "imagem_url": "img/cartas/075.webp",
    "raridade": "Rara"
  },
  {
    "numero": "089/103",
    "nome": "Arão",
    "preco_brl": "R$ 0,23",
    "preco_num": 0.23,
    "imagem_url": "img/cartas/089.webp",
    "raridade": "Incomum"
  },
  {
    "numero": "009/103",
    "nome": "Virizion",
    "preco_brl": "R$ 0,20",
    "preco_num": 0.2,
    "imagem_url": "img/cartas/009.webp",
    "raridade": "Incomum"
  },
  {
    "numero": "100/103",
    "nome": "Chapéu de Mega Rayquaza",
    "preco_brl": "R$ 0,20",
    "preco_num": 0.2,
    "imagem_url": "img/cartas/100.webp",
    "raridade": "Incomum"
  },
  {
    "numero": "103/103",
    "nome": "Confiança da Zínia",
    "preco_brl": "R$ 0,20",
    "preco_num": 0.2,
    "imagem_url": "img/cartas/103.webp",
    "raridade": "Incomum"
  },
  {
    "numero": "005/103",
    "nome": "Cacturne",
    "preco_brl": "R$ 0,19",
    "preco_num": 0.19,
    "imagem_url": "img/cartas/005.webp",
    "raridade": "Rara"
  },
  {
    "numero": "008/103",
    "nome": "Shaymin",
    "preco_brl": "R$ 0,19",
    "preco_num": 0.19,
    "imagem_url": "img/cartas/008.webp",
    "raridade": "Incomum"
  },
  {
    "numero": "012/103",
    "nome": "Sprigatito",
    "preco_brl": "R$ 0,19",
    "preco_num": 0.19,
    "imagem_url": "img/cartas/012.webp",
    "raridade": "Comum"
  },
  {
    "numero": "013/103",
    "nome": "Floragato",
    "preco_brl": "R$ 0,19",
    "preco_num": 0.19,
    "imagem_url": "img/cartas/013.webp",
    "raridade": "Incomum"
  },
  {
    "numero": "090/103",
    "nome": "Lanterna de Aventura",
    "preco_brl": "R$ 0,19",
    "preco_num": 0.19,
    "imagem_url": "img/cartas/090.webp",
    "raridade": "Incomum"
  },
  {
    "numero": "091/103",
    "nome": "Colete Customizado",
    "preco_brl": "R$ 0,19",
    "preco_num": 0.19,
    "imagem_url": "img/cartas/091.webp",
    "raridade": "Incomum"
  },
  {
    "numero": "093/103",
    "nome": "Grisham",
    "preco_brl": "R$ 0,19",
    "preco_num": 0.19,
    "imagem_url": "img/cartas/093.webp",
    "raridade": "Incomum"
  },
  {
    "numero": "098/103",
    "nome": "Abismo Lendário",
    "preco_brl": "R$ 0,19",
    "preco_num": 0.19,
    "imagem_url": "img/cartas/098.webp",
    "raridade": "Incomum"
  },
  {
    "numero": "099/103",
    "nome": "Abismo Lendário",
    "preco_brl": "R$ 0,19",
    "preco_num": 0.19,
    "imagem_url": "img/cartas/099.webp",
    "raridade": "Incomum"
  },
  {
    "numero": "007/103",
    "nome": "Vespiquen",
    "preco_brl": "R$ 0,18",
    "preco_num": 0.18,
    "imagem_url": "img/cartas/007.webp",
    "raridade": "Comum"
  },
  {
    "numero": "016/103",
    "nome": "Dolliv",
    "preco_brl": "R$ 0,18",
    "preco_num": 0.18,
    "imagem_url": "img/cartas/016.webp",
    "raridade": "Comum"
  },
  {
    "numero": "017/103",
    "nome": "Arboliva",
    "preco_brl": "R$ 0,18",
    "preco_num": 0.18,
    "imagem_url": "img/cartas/017.webp",
    "raridade": "Incomum"
  },
  {
    "numero": "020/103",
    "nome": "Magmar",
    "preco_brl": "R$ 0,18",
    "preco_num": 0.18,
    "imagem_url": "img/cartas/020.webp",
    "raridade": "Incomum"
  },
  {
    "numero": "024/103",
    "nome": "Heatmor",
    "preco_brl": "R$ 0,18",
    "preco_num": 0.18,
    "imagem_url": "img/cartas/024.webp",
    "raridade": "Comum"
  },
  {
    "numero": "035/103",
    "nome": "Thundurus",
    "preco_brl": "R$ 0,18",
    "preco_num": 0.18,
    "imagem_url": "img/cartas/035.webp",
    "raridade": "Incomum"
  },
  {
    "numero": "039/103",
    "nome": "Pawmot",
    "preco_brl": "R$ 0,18",
    "preco_num": 0.18,
    "imagem_url": "img/cartas/039.webp",
    "raridade": "Incomum"
  },
  {
    "numero": "044/103",
    "nome": "Hypno",
    "preco_brl": "R$ 0,18",
    "preco_num": 0.18,
    "imagem_url": "img/cartas/044.webp",
    "raridade": "Comum"
  },
  {
    "numero": "050/103",
    "nome": "Sandslash",
    "preco_brl": "R$ 0,18",
    "preco_num": 0.18,
    "imagem_url": "img/cartas/050.webp",
    "raridade": "Comum"
  },
  {
    "numero": "051/103",
    "nome": "Onix",
    "preco_brl": "R$ 0,18",
    "preco_num": 0.18,
    "imagem_url": "img/cartas/051.webp",
    "raridade": "Comum"
  },
  {
    "numero": "054/103",
    "nome": "Landorus",
    "preco_brl": "R$ 0,18",
    "preco_num": 0.18,
    "imagem_url": "img/cartas/054.webp",
    "raridade": "Incomum"
  },
  {
    "numero": "063/103",
    "nome": "Darkrai",
    "preco_brl": "R$ 0,18",
    "preco_num": 0.18,
    "imagem_url": "img/cartas/063.webp",
    "raridade": "Incomum"
  },
  {
    "numero": "071/103",
    "nome": "Zarude",
    "preco_brl": "R$ 0,18",
    "preco_num": 0.18,
    "imagem_url": "img/cartas/071.webp",
    "raridade": "Incomum"
  },
  {
    "numero": "076/103",
    "nome": "Cyclizar",
    "preco_brl": "R$ 0,18",
    "preco_num": 0.18,
    "imagem_url": "img/cartas/076.webp",
    "raridade": "Comum"
  },
  {
    "numero": "001/103",
    "nome": "Heracross",
    "preco_brl": "R$ 0,17",
    "preco_num": 0.17,
    "imagem_url": "img/cartas/001.webp",
    "raridade": "Comum"
  },
  {
    "numero": "004/103",
    "nome": "Cacnea",
    "preco_brl": "R$ 0,17",
    "preco_num": 0.17,
    "imagem_url": "img/cartas/004.webp",
    "raridade": "Comum"
  },
  {
    "numero": "006/103",
    "nome": "Combee",
    "preco_brl": "R$ 0,17",
    "preco_num": 0.17,
    "imagem_url": "img/cartas/006.webp",
    "raridade": "Comum"
  },
  {
    "numero": "010/103",
    "nome": "Wimpod",
    "preco_brl": "R$ 0,17",
    "preco_num": 0.17,
    "imagem_url": "img/cartas/010.webp",
    "raridade": "Comum"
  },
  {
    "numero": "015/103",
    "nome": "Smoliv",
    "preco_brl": "R$ 0,17",
    "preco_num": 0.17,
    "imagem_url": "img/cartas/015.webp",
    "raridade": "Comum"
  },
  {
    "numero": "022/103",
    "nome": "Torkoal",
    "preco_brl": "R$ 0,17",
    "preco_num": 0.17,
    "imagem_url": "img/cartas/022.webp",
    "raridade": "Comum"
  },
  {
    "numero": "031/103",
    "nome": "Electivire",
    "preco_brl": "R$ 0,17",
    "preco_num": 0.17,
    "imagem_url": "img/cartas/031.webp",
    "raridade": "Incomum"
  },
  {
    "numero": "038/103",
    "nome": "Pawmo",
    "preco_brl": "R$ 0,17",
    "preco_num": 0.17,
    "imagem_url": "img/cartas/038.webp",
    "raridade": "Comum"
  },
  {
    "numero": "040/103",
    "nome": "Wattrel",
    "preco_brl": "R$ 0,17",
    "preco_num": 0.17,
    "imagem_url": "img/cartas/040.webp",
    "raridade": "Comum"
  },
  {
    "numero": "043/103",
    "nome": "Drowzee",
    "preco_brl": "R$ 0,17",
    "preco_num": 0.17,
    "imagem_url": "img/cartas/043.webp",
    "raridade": "Comum"
  },
  {
    "numero": "046/103",
    "nome": "Golett",
    "preco_brl": "R$ 0,17",
    "preco_num": 0.17,
    "imagem_url": "img/cartas/046.webp",
    "raridade": "Comum"
  },
  {
    "numero": "048/103",
    "nome": "Enamorus",
    "preco_brl": "R$ 0,17",
    "preco_num": 0.17,
    "imagem_url": "img/cartas/048.webp",
    "raridade": "Incomum"
  },
  {
    "numero": "058/103",
    "nome": "Spinarak",
    "preco_brl": "R$ 0,17",
    "preco_num": 0.17,
    "imagem_url": "img/cartas/058.webp",
    "raridade": "Comum"
  },
  {
    "numero": "060/103",
    "nome": "Sableye",
    "preco_brl": "R$ 0,17",
    "preco_num": 0.17,
    "imagem_url": "img/cartas/060.webp",
    "raridade": "Comum"
  },
  {
    "numero": "061/103",
    "nome": "Carvanha",
    "preco_brl": "R$ 0,17",
    "preco_num": 0.17,
    "imagem_url": "img/cartas/061.webp",
    "raridade": "Comum"
  },
  {
    "numero": "062/103",
    "nome": "Sharpedo",
    "preco_brl": "R$ 0,17",
    "preco_num": 0.17,
    "imagem_url": "img/cartas/062.webp",
    "raridade": "Comum"
  },
  {
    "numero": "065/103",
    "nome": "Liepard",
    "preco_brl": "R$ 0,17",
    "preco_num": 0.17,
    "imagem_url": "img/cartas/065.webp",
    "raridade": "Comum"
  },
  {
    "numero": "068/103",
    "nome": "Inkay",
    "preco_brl": "R$ 0,17",
    "preco_num": 0.17,
    "imagem_url": "img/cartas/068.webp",
    "raridade": "Comum"
  },
  {
    "numero": "072/103",
    "nome": "Druddigon",
    "preco_brl": "R$ 0,17",
    "preco_num": 0.17,
    "imagem_url": "img/cartas/072.webp",
    "raridade": "Incomum"
  },
  {
    "numero": "078/103",
    "nome": "Eevee",
    "preco_brl": "R$ 0,17",
    "preco_num": 0.17,
    "imagem_url": "img/cartas/078.webp",
    "raridade": "Comum"
  },
  {
    "numero": "079/103",
    "nome": "Delibird",
    "preco_brl": "R$ 0,17",
    "preco_num": 0.17,
    "imagem_url": "img/cartas/079.webp",
    "raridade": "Incomum"
  },
  {
    "numero": "081/103",
    "nome": "Swablu",
    "preco_brl": "R$ 0,17",
    "preco_num": 0.17,
    "imagem_url": "img/cartas/081.webp",
    "raridade": "Comum"
  },
  {
    "numero": "085/103",
    "nome": "Tornadus",
    "preco_brl": "R$ 0,17",
    "preco_num": 0.17,
    "imagem_url": "img/cartas/085.webp",
    "raridade": "Incomum"
  },
  {
    "numero": "086/103",
    "nome": "Fletchling",
    "preco_brl": "R$ 0,17",
    "preco_num": 0.17,
    "imagem_url": "img/cartas/086.webp",
    "raridade": "Comum"
  },
  {
    "numero": "087/103",
    "nome": "Fletchinder",
    "preco_brl": "R$ 0,17",
    "preco_num": 0.17,
    "imagem_url": "img/cartas/087.webp",
    "raridade": "Comum"
  },
  {
    "numero": "101/103",
    "nome": "Onigiri Saboroso",
    "preco_brl": "R$ 0,17",
    "preco_num": 0.17,
    "imagem_url": "img/cartas/101.webp",
    "raridade": "Comum"
  },
  {
    "numero": "018/103",
    "nome": "Growlithe",
    "preco_brl": "R$ 0,16",
    "preco_num": 0.16,
    "imagem_url": "img/cartas/018.webp",
    "raridade": "Comum"
  },
  {
    "numero": "025/103",
    "nome": "Mantine",
    "preco_brl": "R$ 0,16",
    "preco_num": 0.16,
    "imagem_url": "img/cartas/025.webp",
    "raridade": "Comum"
  },
  {
    "numero": "027/103",
    "nome": "Frillish",
    "preco_brl": "R$ 0,16",
    "preco_num": 0.16,
    "imagem_url": "img/cartas/027.webp",
    "raridade": "Comum"
  },
  {
    "numero": "028/103",
    "nome": "Jellicent",
    "preco_brl": "R$ 0,16",
    "preco_num": 0.16,
    "imagem_url": "img/cartas/028.webp",
    "raridade": "Incomum"
  },
  {
    "numero": "036/103",
    "nome": "Pincurchin",
    "preco_brl": "R$ 0,16",
    "preco_num": 0.16,
    "imagem_url": "img/cartas/036.webp",
    "raridade": "Comum"
  },
  {
    "numero": "037/103",
    "nome": "Pawmi",
    "preco_brl": "R$ 0,16",
    "preco_num": 0.16,
    "imagem_url": "img/cartas/037.webp",
    "raridade": "Comum"
  },
  {
    "numero": "041/103",
    "nome": "Kilowattrel",
    "preco_brl": "R$ 0,16",
    "preco_num": 0.16,
    "imagem_url": "img/cartas/041.webp",
    "raridade": "Incomum"
  },
  {
    "numero": "042/103",
    "nome": "Miraidon",
    "preco_brl": "R$ 0,16",
    "preco_num": 0.16,
    "imagem_url": "img/cartas/042.webp",
    "raridade": "Incomum"
  },
  {
    "numero": "059/103",
    "nome": "Ariados",
    "preco_brl": "R$ 0,16",
    "preco_num": 0.16,
    "imagem_url": "img/cartas/059.webp",
    "raridade": "Comum"
  },
  {
    "numero": "064/103",
    "nome": "Purrloin",
    "preco_brl": "R$ 0,16",
    "preco_num": 0.16,
    "imagem_url": "img/cartas/064.webp",
    "raridade": "Comum"
  },
  {
    "numero": "066/103",
    "nome": "Zorua",
    "preco_brl": "R$ 0,16",
    "preco_num": 0.16,
    "imagem_url": "img/cartas/066.webp",
    "raridade": "Comum"
  },
  {
    "numero": "070/103",
    "nome": "Morpeko",
    "preco_brl": "R$ 0,16",
    "preco_num": 0.16,
    "imagem_url": "img/cartas/070.webp",
    "raridade": "Incomum"
  },
  {
    "numero": "073/103",
    "nome": "Jangmo-o",
    "preco_brl": "R$ 0,16",
    "preco_num": 0.16,
    "imagem_url": "img/cartas/073.webp",
    "raridade": "Comum"
  },
  {
    "numero": "077/103",
    "nome": "Tauros",
    "preco_brl": "R$ 0,16",
    "preco_num": 0.16,
    "imagem_url": "img/cartas/077.webp",
    "raridade": "Comum"
  },
  {
    "numero": "080/103",
    "nome": "Azurill",
    "preco_brl": "R$ 0,16",
    "preco_num": 0.16,
    "imagem_url": "img/cartas/080.webp",
    "raridade": "Comum"
  },
  {
    "numero": "092/103",
    "nome": "Hype da Emcee",
    "preco_brl": "R$ 0,16",
    "preco_num": 0.16,
    "imagem_url": "img/cartas/092.webp",
    "raridade": "Comum"
  },
  {
    "numero": "002/103",
    "nome": "Surskit",
    "preco_brl": "R$ 0,15",
    "preco_num": 0.15,
    "imagem_url": "img/cartas/002.webp",
    "raridade": "Comum"
  },
  {
    "numero": "003/103",
    "nome": "Masquerain",
    "preco_brl": "R$ 0,15",
    "preco_num": 0.15,
    "imagem_url": "img/cartas/003.webp",
    "raridade": "Comum"
  },
  {
    "numero": "030/103",
    "nome": "Electabuzz",
    "preco_brl": "R$ 0,15",
    "preco_num": 0.15,
    "imagem_url": "img/cartas/030.webp",
    "raridade": "Comum"
  },
  {
    "numero": "032/103",
    "nome": "Jolteon",
    "preco_brl": "R$ 0,15",
    "preco_num": 0.15,
    "imagem_url": "img/cartas/032.webp",
    "raridade": "Incomum"
  },
  {
    "numero": "034/103",
    "nome": "Rotom",
    "preco_brl": "R$ 0,15",
    "preco_num": 0.15,
    "imagem_url": "img/cartas/034.webp",
    "raridade": "Comum"
  },
  {
    "numero": "049/103",
    "nome": "Sandshrew",
    "preco_brl": "R$ 0,15",
    "preco_num": 0.15,
    "imagem_url": "img/cartas/049.webp",
    "raridade": "Comum"
  },
  {
    "numero": "055/103",
    "nome": "Nidoran Fêmea",
    "preco_brl": "R$ 0,15",
    "preco_num": 0.15,
    "imagem_url": "img/cartas/055.webp",
    "raridade": "Comum"
  },
  {
    "numero": "056/103",
    "nome": "Nidorina",
    "preco_brl": "R$ 0,15",
    "preco_num": 0.15,
    "imagem_url": "img/cartas/056.webp",
    "raridade": "Comum"
  },
  {
    "numero": "074/103",
    "nome": "Hakamo-o",
    "preco_brl": "R$ 0,15",
    "preco_num": 0.15,
    "imagem_url": "img/cartas/074.webp",
    "raridade": "Comum"
  },
  {
    "numero": "083/103",
    "nome": "Kecleon",
    "preco_brl": "R$ 0,15",
    "preco_num": 0.15,
    "imagem_url": "img/cartas/083.webp",
    "raridade": "Comum"
  },
  {
    "numero": "102/103",
    "nome": "Treinamento de Tate e Liza",
    "preco_brl": "R$ 0,10",
    "preco_num": 0.1,
    "imagem_url": "img/cartas/102.webp",
    "raridade": "Incomum"
  }
];
