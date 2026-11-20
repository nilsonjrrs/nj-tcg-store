# NJ TCG Store — Site Vitrine

Site vitrine da NJ TCG Store (Pokémon TCG, Curitiba). O cliente monta o pedido e finaliza pelo WhatsApp.

## Regras do projeto (não mudar sem combinar)

- Site estático: HTML, CSS e JS puros. **Sem build, sem framework, sem dependências.**
- **Sem checkout e sem pagamento online.** O fechamento do pedido é sempre via link do WhatsApp.
- Fonte sempre **Arial**.
- Cores sempre **roxo e laranja** (design tokens em `css/style.css`: `--color-bg`, `--color-surface`, `--color-primary` (laranja), `--color-accent` (roxo), `--color-ink`). Botões com fundo colorido usam texto escuro (`--color-ink`), não branco — é o que garante contraste AA; não voltar pra texto branco nesses botões.
- WhatsApp e as opções de entrega/pagamento ficam centralizadas em `js/config.js`.
- Produtos ficam centralizados em `js/produtos.js` (schema: sku, nome, categoria, colecao, idioma, preco, precoPix, estoque, img).
- JS dividido em módulos por responsabilidade (`tilt.js`, `carrinho.js`, `zoom.js`, `catalogo.js`, `pedido.js`, `app.js`) — não virar um arquivo único de novo.
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

- [ ] **Simulador de abertura de pacotes**: hoje é só um teaser "Em breve" (`#simulador` no HTML). Se o Nilson quiser construir de verdade, precisa definir as regras (quais cartas podem sair, raridades, taxas).
- [ ] **Link do Grupo VIP**: hoje o link da navbar abre uma conversa no WhatsApp perguntando sobre o grupo (ainda não existe um grupo de verdade). Trocar por um link de convite quando o grupo existir.
- [ ] **Fotos dos produtos da Celebração 30 Anos** (Blister Duplo, Triple Pack, Box com Pôster, Box Greninja, ETB, Mini Tin, Fichário): ainda sem foto. Os 5 produtos da Reinado Delta já têm foto real (ver abaixo). Mesmo processo: colocar o arquivo em `img/` e preencher o campo `img` em `js/produtos.js`.
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
- [x] Fundo decorativo (glow + grão) adicionado e depois reduzido bem mais sutil, a pedido do Nilson ("mais minimalista"). Não usa motivo de carta/foil de propósito nos cards do catálogo nem nos componentes de produto — a loja vende produtos selados, não cartas avulsas. (Exceção explícita, confirmada pelo Nilson: a foto de fundo do hero, ver linha abaixo, usa uma arte com cartas/efeito foil — é só ambientação de marca, não representa o produto vendido.)
- [x] Fotos reais adicionadas para os 5 produtos da coleção Reinado Delta (Booster Avulso, Triple Pack, Quadpack, Mini Booster Box, Booster Box) — arquivos em `img/reinado-delta-*`.
- [x] Refinamento visual + animações temáticas de TCG (60fps, via transform/opacity, respeitando `prefers-reduced-motion`): botão "Ver pedido" movido pro canto inferior direito; filtros ativos com texto branco sobre roxo vibrante (`--color-accent-strong`, contraste AA); hero com mais respiro no topo; logo flutuando suavemente com glow pulsante atrás; reflexo holográfico diagonal (foil) nos cards do catálogo, acompanhando o ponteiro, além do brilho ambiente que já existia; shimmer diagonal no hover do botão "Ver catálogo"; bounce no botão "Ver pedido" sempre que um item é adicionado; cards entram com fade + leve translateY ao carregar/filtrar (com pequeno atraso em cascata por card).
- [x] Passada de minimalismo/profissionalização: ícones emoji dos diferenciais trocados por índice numérico (01–04) com regra fina, textos de hero e diferenciais reescritos com tom mais direto/profissional, hero virou um enquadramento editorial de duas colunas no desktop (logo + texto lado a lado, alinhado à esquerda) em vez de tudo empilhado e centralizado.
- [x] Zoom da foto do produto: clicar (ou Enter/Espaço, com teclado) na foto de um produto no catálogo abre um lightbox com a imagem ampliada (`js/zoom.js` + `#modal-zoom`). Só funciona em produtos que têm foto real — sem indicador de lupa e sem comportamento de clique nos produtos ainda sem foto. Fecha com Esc, clique fora ou no X, devolve o foco pro card que abriu. Reaproveita (generalizado em `app.js`) o mesmo tratamento de foco/Tab/Esc do modal de pedido. De brinde, corrigido um bug real: `.badge-esgotado` tinha `z-index` duplicado no CSS (o segundo sobrescrevia o primeiro e tirava o selo "Esgotado" de cima da pilha de camadas).
- [x] Hero com enquadramento inspirado numa referência enviada pelo Nilson: título em duas cores (destaque laranja na frase "original e lacrado"), botões com ícone + seta e sombra colorida (glow), métricas com ícone num selo arredondado + rótulo em caixa alta.
- [x] Animação da arte de fundo refeita: a primeira versão (zoom + "estrelas cadentes") ficou ruim segundo o Nilson ("fica uma barrinha branca passando"). Removidas as estrelas cadentes. Ficou só uma deriva bem discreta e contínua (escala 1.015↔1.03 + leve translação, 34s, ease-in-out) pra dar sensação de página viva sem chamar atenção pra si mesma — respeita `prefers-reduced-motion` (herdado da regra global já existente).
- [x] Foto de fundo do hero trocada por uma versão em alta resolução (2000x1125) — a primeira (1024x576) ficava borrada ao esticar pra cobrir telas largas.
- [x] Alinhamento do hero ajustado para bater exatamente com a borda esquerda da navbar (mesmo padding, `--space-5`), em vez de ficar centralizado/flutuando — `.hero-fundo` (full-bleed, carrega a arte/gradiente/estrelas) agora é um wrapper separado de `.hero` (que só contém o texto e tem o mesmo padding horizontal da navbar).
- [x] Removida a métrica "141 cartas de Reinado Delta" do hero (o Nilson achou sem relação) — ficaram só "100% Original e lacrado" e "Envio BR". Removido também o link rápido "Reinado Delta" da navbar (e a função `Catalogo.definirFiltroColecao`, que só existia pra ele). Link "Catálogo" da navbar renomeado para "Loja" (continua apontando pra `#catalogo`; o título da seção no corpo da página continua "Catálogo").
- [x] Topo da landing page refeito inspirado no Deck Certo: navbar fixa translúcida com blur (logo + "Catálogo"/"Simulador de Pacotes"/"Reinado Delta"/"Grupo VIP" + busca rápida que filtra o catálogo por nome em tempo real; "Reinado Delta" filtra a coleção e rola até o catálogo); hero com fundo de imagem (`img/hero-bg.jpg` — arte do Gengar com cartas em destaque, enviada pelo Nilson; com gradiente escuro à esquerda pra garantir contraste AA), conteúdo alinhado à esquerda com headline, 2 botões (catálogo + "Simulador", com teaser "em breve" em `#simulador`), subtexto e 3 mini-métricas com ícone; logo com a animação de flutuar/glow (já existente) encolhida pro lockup do hero, e logo estático na navbar. Botão flutuante oficial do WhatsApp (verde, com pulso e tooltip) adicionado ao lado do "Ver pedido", ambos num único wrapper fixo que não cobre o catálogo.
