# Doçuras da Havs — Landing Page

Landing page em React (Vite) para o ateliê de bolos e doces artesanais
**Doçuras da Havs** (Instagram: [@docurasdahavs](https://www.instagram.com/docurasdahavs)).

## Rodando o projeto

```bash
npm install
npm run dev       # ambiente de desenvolvimento (http://localhost:5173)
npm run build     # gera a versão de produção em /dist
npm run preview   # serve a build de produção localmente
```

## Estrutura de pastas

```
src/
  assets/
    images/            → fotos reais do ateliê, já otimizadas para web
  components/           → peças reutilizáveis de UI
    Header.jsx/.css      → topo fixo com navegação e menu mobile
    Icons.jsx             → ícones SVG inline (WhatsApp, Instagram, etc.)
    PipedBorder.jsx       → divisor assinatura em SVG (borda "bico de confeitar")
  sections/              → uma seção da página = um arquivo .jsx + .css
    Hero.jsx/.css
    Marquee.jsx/.css
    Categories.jsx/.css
    About.jsx/.css
    Gallery.jsx/.css
    HowItWorks.jsx/.css
    InstagramCTA.jsx/.css
    Footer.jsx/.css
  data/
    gallery.js           → manifesto de todas as fotos (categoria, título, descrição)
    siteConfig.js         → nome, WhatsApp, Instagram, cidade, e-mail
  styles/
    variables.css          → paleta de cores, tipografia e tokens de design
  App.jsx                  → monta todas as seções na ordem final
  main.jsx / index.css     → ponto de entrada + import das fontes
```

## Antes de publicar — troque os dados de exemplo

Abra `src/data/siteConfig.js` e ajuste:

- `whatsappNumber` → número real, no formato internacional (ex: `5561999999999`)
- `email`, `city` → dados reais do ateliê
- `instagramUrl` / `instagramHandle` → já preenchidos com o perfil informado

## Personalizando a galeria

Todas as fotos e categorias (Aniversário, Casamento, Temáticos, Docinhos &
caixas) ficam em `src/data/gallery.js`. Para adicionar uma foto nova:

1. Coloque o arquivo em `src/assets/images/`
2. Importe no topo de `gallery.js`
3. Adicione um objeto no array `GALLERY` com `id`, `src`, `title`, `desc`,
   `category` (`aniversario` | `casamento` | `tematico` | `doces`) e `size`
   (`normal` | `wide` | `tall`, controla o tamanho do card na grade)

## Design

- **Paleta**: creme, vinho profundo, dourado e rosa buttercream — extraída
  das próprias fotos dos bolos do ateliê.
- **Tipografia**: Fraunces (títulos), Beau Rivage (assinatura/script, como
  escrita de confeiteiro), Work Sans (texto).
- **Elemento assinatura**: a borda ondulada (`PipedBorder`) reproduz em SVG
  o acabamento "shell/concha" feito com bico de confeitar, visto nos bolos
  reais do portfólio — usada como divisor entre seções no lugar de uma
  linha reta genérica.

Totalmente responsivo: testado nos breakpoints de desktop, tablet (980px) e
mobile (560px).
