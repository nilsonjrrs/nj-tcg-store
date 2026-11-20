# NJ TCG Store — Site Vitrine

Site estático (HTML, CSS e JS puros, sem build) da NJ TCG Store, loja de Pokémon TCG em Curitiba.

O cliente monta o pedido no catálogo e finaliza pelo WhatsApp. **Não há checkout nem pagamento online** — e é para continuar assim.

A página é uma landing page completa: hero com a marca, seção de diferenciais da loja, catálogo com filtros (coleção/idioma/categoria) em cards com efeito de brilho 3D (holo/tilt), e o pedido com escolha de entrega e pagamento antes de ir pro WhatsApp.

## Estrutura

```
index.html         página única do site
css/style.css       visual (design tokens, roxo e laranja, fonte Arial)
js/config.js        WhatsApp, opções de entrega e de pagamento
js/produtos.js      catálogo de produtos (sku, nome, categoria, coleção, idioma, preço, estoque, foto)
js/tilt.js          efeito de brilho/inclinação 3D nos cards de produto
js/carrinho.js       estado do carrinho (quantidade por produto, persistência, limite de estoque)
js/catalogo.js       renderização do catálogo, filtros e JSON-LD (SEO)
js/pedido.js         modal do pedido, opções de entrega/pagamento e mensagem do WhatsApp
js/app.js           liga tudo: contador, rodapé, acessibilidade do modal (Esc, foco)
img/                fotos dos produtos e logo
.claude/skills/      skills do projeto usadas para design, marketing e desenvolvimento
```

## Como editar

- **Trocar o WhatsApp**: edite `whatsappNumero` em `js/config.js`.
- **Opções de entrega/pagamento**: edite os arrays `entregaOpcoes`/`pagamentoOpcoes` em `js/config.js` — aparecem automaticamente como escolha no carrinho e na mensagem do WhatsApp.
- **Adicionar/editar um produto**: edite `js/produtos.js` (copie um bloco e ajuste os campos). `precoPix` é opcional (só se tiver preço especial no Pix). `estoque` fica `null` enquanto não há controle de estoque; vire um número para a loja passar a travar a compra quando chegar a 0.
- **Adicionar foto de um produto**: coloque o arquivo em `img/` e preencha o campo `img` do produto em `produtos.js` com o caminho (ex.: `"img/booster-avulso.jpg"`). Sem foto, o card mostra um espaço reservado com o mesmo efeito de brilho.

## Como testar localmente

Não precisa de instalação. Qualquer servidor estático simples funciona, por exemplo:

```bash
cd nj-tcg-store
python3 -m http.server 8000
```

Depois abra `http://localhost:8000` no navegador.

## Publicação

Ver pendências e passo a passo de publicação no `CLAUDE.md`.
