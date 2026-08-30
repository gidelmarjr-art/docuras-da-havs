// Configurações centrais do site — troque os valores de exemplo
// pelos dados reais do ateliê antes de publicar.
export const SITE = {
  name: 'Doçuras da Havs',
  tagline: 'Ateliê de bolos e doces artesanais',
  instagramUrl: 'https://www.instagram.com/docurasdahavs',
  instagramHandle: '@docurasdahavs',
  // Link oficial de mensagens do WhatsApp Business (com o app_absent/autoload
  // e a mensagem padrão já configurados do lado do WhatsApp). Não anexar
  // ?text= extra aqui, pois entra em conflito com o template já definido.
  whatsappUrl: 'https://api.whatsapp.com/message/YU7JTIPK4T4ZK1?autoload=1&app_absent=0',
  city: 'Brasília, DF',
  email: 'contato@docurasdahavs.com.br',
};

export function whatsappLink() {
  return SITE.whatsappUrl;
}
