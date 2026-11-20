# NJ TCG Store — Site Vitrine

Site vitrine da NJ TCG Store (Pokémon TCG, Curitiba). O cliente monta o pedido e finaliza pelo WhatsApp.

## Regras do projeto (não mudar sem combinar)

- Site estático: HTML, CSS e JS puros. **Sem build, sem framework, sem dependências.**
- **Sem checkout e sem pagamento online.** O fechamento do pedido é sempre via link do WhatsApp.
- Fonte sempre **Arial**.
- Cores sempre **roxo e laranja** (design tokens em `css/style.css`: `--color-bg`, `--color-surface`, `--color-primary` (laranja), `--color-accent` (roxo), `--color-ink`). Botões com fundo colorido usam texto escuro (`--color-ink`), não branco — é o que garante contraste AA; não voltar pra texto branco nesses botões.
- WhatsApp e as opções de entrega/pagamento ficam centralizadas em `js/config.js`.
- Produtos ficam centralizados em `js/produtos.js` (schema: sku, nome, categoria, colecao, idioma, preco, precoPix, estoque, img).
- JS dividido em módulos por responsabilidade (`tilt.js`, `carrinho.js`, `catalogo.js`, `pedido.js`, `app.js`) — não virar um arquivo único de novo.
- Nunca expor custo/margem/fórmula de precificação no código do front-end (fica só em planilha/script privado — ver skill `tcg-pricing-margin`).
- Nunca inventar prova social (depoimento, avaliação, "estoque esgotando") que não seja real.

## Skills do projeto

Em `.claude/skills/`: `ecommerce-visual-designer`, `digital-marketing-tcg`, `senior-interactive-web-dev`. Existe também um conjunto equivalente (e mais skills: SEO/performance, QA, catálogo, checkout WhatsApp, precificação) no plugin de organização `anthropic-skills` — foi o que guiou o redesign da landing page. Usar essas skills ao mexer em visual, copy ou lógica do site.

## Dados atuais

- WhatsApp: `5541988686833` (41 98868-6833)
- Pagamento: Pix ou cartão (cartão com acréscimo de taxa, percentual não definido)
- Entrega: Envio protegido (Correios/motoboy) ou retirada local em Curitiba — cliente escolhe no carrinho
- Catálogo: 12 produtos das coleções Reinado Delta e Celebração 30 Anos (português e inglês importado), com preços da tabela enviada pelo Nilson. Nenhum tem `estoque` numérico ainda (controle de estoque desligado por enquanto, de propósito).
- Logo: `img/logo.webp` (arte do Gengar, já usada na tabela de preços da loja).
- Site publicado: https://nilsonjrrs.github.io/nj-tcg-store/ (repositório: github.com/nilsonjrrs/nj-tcg-store)

## Pendências

- [ ] **Fotos dos produtos**: nenhum produto tem foto ainda (Nilson vai fotografar). Quando tiver, colocar em `img/` e preencher o campo `img` de cada produto em `js/produtos.js`. O efeito de brilho/tilt já funciona nos cards e vale também pra foto real.
- [ ] **Confirmar local exato de "retirada local"** em Curitiba (bairro/ponto de referência) — hoje o texto em `js/config.js` está genérico ("combinamos pelo WhatsApp").
- [ ] **Confirmar percentual do acréscimo no cartão** — hoje só diz "com acréscimo de taxa", sem número, em `js/config.js`.
- [ ] **Números de estoque por produto**, se e quando o Nilson quiser ativar o controle (travar compra ao chegar a 0) — hoje todos os produtos têm `estoque: null`.
- [ ] Confirmar se a loja realmente embala com sleeve + toploader + embalagem reforçada — esse é o texto usado na seção "Envio protegido" da landing page; ajustar se não bater com a prática real.

## Feito

- [x] Site construído do zero: catálogo, carrinho, pedido e link do WhatsApp.
- [x] Publicado no GitHub Pages.
- [x] 3 skills de projeto criadas (`ecommerce-visual-designer`, `digital-marketing-tcg`, `senior-interactive-web-dev`).
- [x] Landing page refeita usando as 9 skills (projeto + plugin `anthropic-skills`): hero com copy orientada a conversão, seção de diferenciais, catálogo em grade com filtros combináveis (coleção/idioma/categoria), efeito de brilho/tilt 3D nos cards, escolha de entrega e pagamento no carrinho (refletida na mensagem do WhatsApp), lógica de estoque/esgotado pronta (ainda sem números reais), fallback de imagem quebrada, JSON-LD de produtos (SEO) e Open Graph/Twitter cards.
- [x] Testado em tela de celular (390px) e desktop (1280px) com Playwright: filtros (incluindo combinação sem resultado), adicionar produto, abrir pedido, escolher entrega/pagamento, total e link do WhatsApp, fechar modal com Esc, efeito tilt no hover, estoque esgotado, fallback de foto quebrada, JSON-LD presente, zero erros de console.
- [x] Corrigidos 2 bugs reais durante o teste: modal clicável mesmo escondido (`.modal[hidden]`) e cards de 2 colunas estourando a tela em 390px (catálogo passou a começar em 1 coluna no mobile).
- [x] Contraste de texto corrigido: botões com fundo laranja/roxo usam texto escuro (`--color-ink`) em vez de branco, para atingir WCAG AA (o branco sobre essas cores ficava abaixo do mínimo).
