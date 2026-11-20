# NJ TCG Store — Site Vitrine

Site vitrine da NJ TCG Store (Pokémon TCG, Curitiba). O cliente monta o pedido e finaliza pelo WhatsApp.

## Regras do projeto (não mudar sem combinar)

- Site estático: HTML, CSS e JS puros. **Sem build, sem framework, sem dependências.**
- **Sem checkout e sem pagamento online.** O fechamento do pedido é sempre via link do WhatsApp.
- Fonte sempre **Arial**.
- Cores sempre **roxo e laranja** (tokens definidos em `css/style.css`: `--bg`, `--card`, `--laranja`, `--roxo`).
- WhatsApp, texto de pagamento e de entrega ficam centralizados em `js/config.js`.
- Produtos ficam centralizados em `js/produtos.js`.

## Dados atuais

- WhatsApp: `5541988686833` (41 98868-6833)
- Pagamento: Pix ou cartão (cartão com acréscimo de taxa)
- Entrega: Correios, motoboy ou retirada em mãos em Curitiba
- Catálogo inicial: 12 produtos das coleções Reinado Delta e Celebração 30 Anos (português e inglês importado), com preços da tabela enviada pelo Nilson.
- Logo: `img/logo.webp` (arte do Gengar, já usada na tabela de preços da loja).

## Pendências

- [ ] **Fotos dos produtos**: nenhum produto tem foto ainda (Nilson vai fotografar). Quando tiver as fotos, colocar em `img/` e preencher o campo `img` de cada produto em `js/produtos.js`.
- [ ] **Confirmar local exato de "retirada em mãos"** em Curitiba (bairro/ponto de referência) — hoje o texto está genérico.
- [ ] **Confirmar texto do acréscimo no cartão**: hoje está "cartão com acréscimo de taxa", sem percentual. Se quiser, pode incluir o valor (ex.: "+4% no cartão").
- [ ] **Publicar o site**: GitHub ainda não está conectado nesta sessão (precisa conectar em claude.ai/connect-github). Repositório local já iniciado (git init + commit inicial) em `nj-tcg-store/`, pronto para criar o repo remoto e dar push assim que a conexão estiver ativa, e então ativar o GitHub Pages.

## Feito

- [x] Site construído do zero: catálogo, carrinho, pedido e link do WhatsApp.
- [x] Testado em tela de celular (390px) com Playwright: adicionar produto, abrir pedido, total e link do WhatsApp conferidos e corretos.
- [x] Corrigido bug de CSS em que o modal de pedido ficava clicável mesmo escondido (`.modal[hidden]`).
