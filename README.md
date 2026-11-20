# NJ TCG Store — Site Vitrine

Site estático (HTML, CSS e JS puros, sem build) da NJ TCG Store, loja de Pokémon TCG em Curitiba.

O cliente monta o pedido no catálogo e finaliza pelo WhatsApp. **Não há checkout nem pagamento online** — e é para continuar assim.

## Estrutura

```
index.html        página única do site
css/style.css      visual (roxo e laranja, fonte Arial)
js/config.js       WhatsApp, texto de pagamento e de entrega
js/produtos.js     catálogo de produtos (nome, coleção, idioma, preço, foto)
js/app.js          lógica: catálogo, carrinho e mensagem do WhatsApp
img/               fotos dos produtos e logo
```

## Como editar

- **Trocar o WhatsApp, pagamento ou entrega**: edite `js/config.js`.
- **Adicionar/editar um produto**: edite `js/produtos.js` (copie um bloco e ajuste os campos). Preço em `precoPix` é opcional — só preencha se o produto tiver preço especial no Pix.
- **Adicionar foto de um produto**: coloque o arquivo em `img/` e preencha o campo `img` do produto em `produtos.js` com o caminho (ex.: `"img/booster-avulso.jpg"`).

## Como testar localmente

Não precisa de instalação. Qualquer servidor estático simples funciona, por exemplo:

```bash
cd nj-tcg-store
python3 -m http.server 8000
```

Depois abra `http://localhost:8000` no navegador.

## Publicação

Ver pendências e passo a passo de publicação no `CLAUDE.md`.
