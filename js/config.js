// Configurações da loja NJ TCG Store.
// Edite este arquivo para mudar WhatsApp, opções de entrega e de pagamento.
const CONFIG = {
  // Número do WhatsApp no formato 55 + DDD + número, só dígitos.
  whatsappNumero: "5541988686833",

  instagram: "@njtcgstore",

  // URL pública do site (usada nas tags de SEO/compartilhamento).
  siteUrl: "https://nilsonjrrs.github.io/nj-tcg-store/",

  // Opções de entrega que o cliente escolhe no carrinho.
  // "detalhe" aparece no resumo do pedido e na mensagem do WhatsApp.
  entregaOpcoes: [
    {
      id: "envio",
      nome: "Envio protegido",
      detalhe: "Sleeve, toploader e embalagem reforçada. Correios ou motoboy para todo o Brasil."
    },
    {
      id: "retirada",
      nome: "Retirada local",
      // PENDÊNCIA: confirmar bairro/ponto exato de retirada em Curitiba.
      detalhe: "Retirada em Curitiba — combinamos o local exato pelo WhatsApp."
    }
  ],

  // Opções de pagamento que o cliente escolhe no carrinho.
  pagamentoOpcoes: [
    { id: "pix", nome: "Pix" },
    // PENDÊNCIA: confirmar percentual exato do acréscimo no cartão.
    { id: "cartao", nome: "Cartão (com acréscimo de taxa)" }
  ],

  avisoPrecos: "Preços sujeitos a alteração e à disponibilidade de estoque. Consulte antes de pagar."
};
