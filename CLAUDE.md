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
- [ ] **Publicar o site**: GitHub ainda não está conectado nesta sessão. Para publicar no GitHub Pages, falta: (1) conectar a conta do GitHub em claude.ai/connect-github, (2) criar o repositório, (3) subir o código, (4) ativar o GitHub Pages nas configurações do repositório.
- [ ] Testar o site no navegador em tela de celular (390px): adicionar produto, abrir o pedido, conferir o link do WhatsApp.
