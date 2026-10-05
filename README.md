# Fernando Gonçalves — site institucional

Site institucional de **Fernando Gonçalves**, storyteller e palestrante
motivacional desde 1992. Construído conforme a
[Especificação Técnica](docs/especificacao-tecnica.pdf): Astro + TypeScript,
CSS moderno, arquitetura de ilhas e **JavaScript mínimo**.

- Domínio previsto: `https://www.fernandosimplex.com.br`
- Idioma: `pt-BR`
- Páginas: **Início**, **Sobre**, **Palestras**, **Contato** (+ 404)

## Stack

| Camada            | Escolha                                                      |
| ----------------- | ------------------------------------------------------------ |
| Framework         | Astro 7 (saída estática) + TypeScript                         |
| Estilo            | CSS moderno com design tokens (sem framework de CSS)          |
| Animações         | CSS (keyframes, `@supports animation-timeline`), IO mínimo    |
| Transição de rota | View Transitions nativas do CSS (`@view-transition`), sem JS  |
| Imagens           | `astro:assets` → AVIF + WebP, `srcset`/`sizes`, lazy loading  |
| Fontes            | Switzer (5 pesos, woff2, `font-display: swap`, preload)       |
| Sitemap           | `@astrojs/sitemap`                                            |
| Deploy            | Vercel (estático, `vercel.json` com cache e headers)          |

**JavaScript enviado ao navegador: ~2,4 kB** (um único módulo de melhoria
progressiva + prefetch do Astro). Nada do conteúdo depende dele.

## Comandos

```bash
npm install
npm run dev       # servidor de desenvolvimento
npm run build     # build estático em dist/
npm run preview   # serve o build
npm run check     # diagnóstico de tipos (astro check)
```

## Estrutura

```text
src/
├── assets/            imagens processadas no build (AVIF/WebP)
├── components/        BaseHead, Header, Footer, SectionHeader,
│                      Testimonials, CtaBanner, Arrow
├── data/              site.ts (SEO, contatos), content.ts (textos),
│                      testimonials.ts (depoimentos reais)
├── layouts/MainLayout.astro
├── pages/             index, sobre, palestras, contato, 404
├── scripts/enhance.ts melhoria progressiva (único JS do site)
└── styles/            tokens.css · global.css · animations.css

public/                favicon, imagem social, robots.txt, fontes
docs/                  briefing de conteúdo, especificação técnica e
                       documentos da implementação anterior (React/Vite)
midia-original/        fotos e logos em alta resolução (não entram no build)
```

## Decisões de implementação

### Conteúdo

O briefing (`docs/briefing-estrutura-conteudo.md`, 18 abas, e
`docs/briefing-complemento.md`) foi **distribuído pelas quatro páginas**, com
redução de texto e sem repetição entre elas:

| Página       | Conteúdo                                                                             |
| ------------ | ------------------------------------------------------------------------------------ |
| `/`          | Manifesto, identificação, resumo do SIMPLEX, públicos, depoimentos, resultados, CTA   |
| `/sobre`     | Biografia, trajetória em linha do tempo, experiência profissional, obras, habilidades |
| `/palestras` | Método, três módulos, dinâmicas, empresas, SIMPLEX, formatos, diferenciais, eventos, FAQ |
| `/contato`   | Canais diretos, formulário de proposta e próximos passos                              |

Os depoimentos são reais, com nome, cargo e fotografia fornecidos pelo cliente.

### Sistema visual

- Paleta da identidade (`docs/referencias/cores-identidade.jpg`): navy
  `#22335C` / `#344775`, ciano `#00CCE1`, teal `#51A8B1`, cinza `#CCCCCC`.
- **Ciano apenas em ação, foco, estado ativo e numeração** — nunca em títulos.
- Tipografia Switzer em pesos leves (300–600), escala fluida com `clamp()`.
- **Glassmorphism controlado**: só no cabeçalho fixo ao rolar, no selo do hero,
  no painel de reflexão e no formulário. O restante usa filetes e superfícies
  sólidas discretas.
- Breakpoints de conteúdo: 1100 / 1000 / 900 / 640 / 560 px. O mobile tem
  composição própria (hero com texto antes da imagem, menu recolhível,
  listas em coluna).

### Performance

- HTML estático pré-renderizado das 5 páginas; `dist/` ≈ 2 MB no total.
- Imagem principal do hero: `fetchpriority="high"`, `loading="eager"` e
  dimensões explícitas; demais imagens com `loading="lazy"`.
- AVIF primeiro, WebP como fallback — sem PNG/JPEG no caminho crítico.
- CSS crítico embutido pelo Astro; fontes com `preload` + `swap`.

### Acessibilidade

- HTML semântico, um `<h1>` por página, hierarquia de headings consistente.
- Skip link, foco visível em todos os alvos, alvos de toque ≥ 44 px.
- Menu mobile com `aria-expanded`, fechamento por `Esc` e devolução do foco.
- FAQ em `<details>/<summary>` nativo (funciona sem JavaScript).
- Carrossel de depoimentos é uma lista com rolagem nativa; as setas são apenas
  um reforço opcional.
- `prefers-reduced-motion` desativa animações, parallax e contadores.
- Sem JavaScript, **todo** o conteúdo permanece visível e navegável.

### SEO

- `title`, `description`, canonical, Open Graph e Twitter Card por página.
- Dados estruturados `Person` (JSON-LD), `sitemap-index.xml`, `robots.txt`.
- URLs limpas sem barra final; página 404 com `noindex`.

## Formulário de contato

Não há backend. O formulário usa validação nativa e, ao enviar, monta a
mensagem com os dados do evento e abre o **WhatsApp** com o texto pronto para
conferência. Há sempre um caminho alternativo por e-mail, que funciona mesmo
sem JavaScript. Para trocar por um endpoint real, basta substituir o
`submit` em `src/scripts/enhance.ts`.

## Deploy (Vercel)

Projeto estático: _framework preset_ **Astro**, build `npm run build`, saída
`dist`. O `vercel.json` já define `cleanUrls`, cache imutável para
`/_astro/*` e `/fonts/*` e headers de segurança. Antes de publicar, confirme o
domínio em `astro.config.mjs` e em `src/data/site.ts`.
