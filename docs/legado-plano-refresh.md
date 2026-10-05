# Plano de Refresh Visual — Site Fernando Gonçalves

> Documento de handoff para continuidade da sessão. Situação em 25/09/2026: **Fases 1–6 APLICADAS, VERIFICADAS e APROVADAS (Checkpoints 1–6 ok) — PLANO DE REFRESH CONCLUÍDO** + revisão visual final feita (fix das setas do carrossel ≤900 aprovado). Idioma do projeto: pt-BR.

## Decisões aprovadas

- **Stack de estilos:** manter **CSS puro** (Astro 7 + CSS moderno). NÃO migrar para Tailwind/shadcn — a skill `ui-styling` (`C:\Users\Douglas\.agents\skills\ui-styling`) é usada só pelos princípios (tokens, consistência, responsivo, acessibilidade).
- **Ambição:** **refresh ousado** — composição/tipografia/ritmo de seção, preservando identidade navy+ciano.
- **Referência de direção:** `Referencias/especificacao-tecnica-site-fernando-goncalves.md` (premium, editorial, glassmorphism controlado, CSS-first, tokens centralizados).

## Restrições críticas (não quebrar)

1. **Git NÃO é opção de revert:** `src/pages/index.astro`, `src/components/`, `public/` etc. estão **untracked**. Nunca usar `git checkout`/`git restore` para reverter; **nunca apagar arquivos** (inclusive `AboutStats.astro` órfão, `Testimonials/`, PNGs de `Referencias/`).
2. **`read` de imagem serve mídia trocada** — verificação visual por imagem é **não confiável**. Verificar por:
   - Geometria DOM: injetar `<script>` marcador em `dist/*.html`, `chrome.exe --headless=new --dump-dom --window-size=W,H`, ler atributos `data-*`, depois **rebuildar para limpar** a injeção;
   - Pixels: screenshot via Chrome headless + PowerShell `System.Drawing` (funcionou bem).
3. **Screenshots são assíncronos** — checar existência do arquivo com retry/sleep; `file://` não aplica CSS (usar servidor HTTP); `--window-size` mínimo ~500px.
4. **Build:** `npm run build` em `D:\Sites\SiteFernandoGoncalves` (6 páginas). Se travar, matar `node.exe` antigos (`Get-CimInstance Win32_Process`) e retry; timeout 300000ms.
5. **Servidor dev antigo na porta 4321 (pid pode variar):** checar antes de subir outro; dev server recarrega sozinho.
6. **Regras de design:** ciano (`--cyan`) **só** em ação/foco/estado ativo — nunca em títulos/decoração. Switzer pesos 200–600 (**nunca 700+**). Sombras só `--shadow-lift`/`--shadow-deep`. Radius 8/14/20/full. Breakpoints **1100/900/640**. Sem `highlight-cyan` em títulos.
7. **Remanejos de arquivo:** só quando pedirem.
8. **Minificador de CSS colapsa pares `backdrop-filter` + `-webkit-backdrop-filter`** na mesma regra e mantém **só o `-webkit-`** → o Chrome ignora e o blur some (comprovado em 25/09). Ao declarar blur, usar **regras separadas**: propriedade padrão no seletor normal e a prefixada dentro de `@supports not (backdrop-filter: blur(1px)) { ... }`. Padrão já aplicado em `components.css` (`.glass-card--floating`), `Header.astro`, `TestimonialCarousel.tsx`.

## Estado atual verificado (24/09/2026 23:53)

- Fase 1 **não aplicada**: `package.json` ainda tem `tailwindcss` e `@tailwindcss/vite` (linhas 29/35, **fora** do `astro.config` → `npm uninstall` é seguro); `variables.css` ainda com `--radius-xl: 20px` e tokens mortos.
- `dist/index.html` de build anterior (20:23) — sem mudanças desta sessão.
- Últimas entregas validadas desta sessão (não desfazer):
  - Fix responsivo **CTA** (`src/components/CTA.astro`, media ≤900: `.cta-visual` em `flex-direction: column`, `.contact-details-box` estático em largura total);
  - Fix **borda da foto na dobra** de depoimentos (`src/pages/index.astro:65-103`, máscaras com fade à direita — salto de pixel na borda caiu 219→28);
  - Stats removidos da home; `/sobre` mantém "Números de Impacto".

---

## Fase 1 — Fundação (APLICADA e APROVADA em 25/09/2026 — Checkpoint 1 ok)

### `src/styles/variables.css`
1. `--radius-xl: 20px` → **`28px`** (linha 109; hoje duplica `--radius-lg`).
2. Adicionar tokens de blur: `--blur-sm: 12px; --blur-md: 16px; --blur-lg: 24px;` (substituir os `blur(12/16/20/24px)` ad hoc espalhados).
3. **Remover tokens mortos** (verificados sem uso): `--cyan-glow` (L11), `--cyan-glow-strong` (L12), `--teal` (L13), `--glass-card-active` (L37).
4. Promover literal do `body` a token: `--navy-mid: #071328`.

### `src/styles/components.css`
5. `.glass-card` → base + modificadores **`.glass-card--flush`** (padding 0) e **`--plain`** (sem blur/gradiente, superfície sólida `rgba(20,43,82,.35)`), eliminando overrides locais que anulam a classe (grep `glass-card` nos blocos scoped para achar os ~6 usos).
6. Botões: `transition: all` → propriedades explícitas; adicionar `:active` (scale .98) e `:disabled` (opacity .55, cursor not-allowed). `.btn-ghost` está morto → usar (ex.: `view-all-link`) ou remover conforme resultado visual.
7. **Glass escasso (spec §6):** retirar `backdrop-filter` da maioria dos cards de conteúdo; blur real só em header/badge/flutuantes.

### `src/styles/global.css`
8. Definir **`.page-hero-content`** (usada em 5 páginas, hoje indefinida).
9. Fallback sem-JS do reveal: `@media (scripting: none) { .reveal-on-scroll { opacity:1; transform:none } }`.

### Higiene
10. `npm uninstall tailwindcss @tailwindcss/vite` + `npm run build`.
11. (Opcional, baixa prioridade) componente órfão `AboutStats.astro` — **não apagar sem pedir**.

**Checkpoint 1:** build OK + screenshots 1440/900/640 + geometria DOM → aprovação do usuário.

---

## Fase 2 — Sistemas do refresh (APLICADA e APROVADA em 25/09/2026 — Checkpoint 2 ok)

- **Tipografia ousada:** escala display com teto maior (`--text-h1-fluid` ~4.6–7rem, tracking −0.04em); ativar `--text-5xl` órfão; **eyebrows numerados** `01 — PALESTRAS` com filete; aspas de depoimento em `--text-display`.
- **Ritmo de seção:** variante **`.section--raised`** (navy ~8% mais claro) alternando com navy-deep em seções pares; espaçamento vertical via `--space-xl/2xl` (escala existe, quase não usada).
- **Cards/hover unificado:** `translateY(-4px)` + `--border-hover` + `shadow-lift` em **todo** card clicável (hoje 5 padrões de hover, 12+ cards sem affordance, `.channel-card` é link inteiro).
- **Microinterações:** amplitude única de seta (6px), underline animado em links de texto, reveal com stagger sutil.

**Verificação (25/09):** h1 73.6px/−0.04em e h2 48.8px (teto `--text-5xl`) em 1440; eyebrows numerados com filete 28×1 e `order` aplicado (offset de texto 75–77px vs 36px sem número); `section--raised` = `rgba(52,71,115,.16)` com `--tall` 128px vs 96px; `.link-underline` em view-all/action/footer/legal com `background-size` no `transition`; hover de card usa `translateY(var(--card-hover-lift))`; `.quote-mark` saiu do ciano (agora `--blue-gray`); `.carousel-eyebrow` filete horizontal unificado; `overflow-x=0` nas 6 páginas × 1440/900/640; screenshots full-page `f2-*.png` em `Temp\opencode\refresh`.

## Fase 3 — Refresh por página (piloto primeiro: HOME)

| Página | Ideias |
|---|---|
| **Home — Hero** (`Hero.astro`) | Retrato sangrando à borda direita da viewport; título maior; eyebrow numerado `01`; filete ciano decorativo fino (ação/decor permitida só como filete, não palavra) |
| **Home — Palestras** (`TalkGrid.astro`) | Grid **assimétrico**: 1º card `span 2` horizontal com número da palestra gigante em outline; eyebrow `02 — PALESTRAS`; hover unificado nos 6 `TalkCard` |
| **Home — Dobra depoimentos** (`index.astro`) | Manter máscaras atuais; citação display gigante à esquerda |
| **Home — CTA** (`CTA.astro`) | CTA tipográfico oversized (menos caixa de vidro) |
| **Sobre** | Números em `--text-5xl` gigantes; timeline com filete contínuo |
| **Palestras** | Número da palestra em outline ghost; badges mais gráficas; reorganizar em 640px |
| **Depoimentos** | Masonry com aspas display; pills de clientes mais sóbrias |
| **Contato** | Inputs mais altos, labels discretos, feedback `role="status"`, canais com hover lift |
| **Conteúdos** | Filtros com `aria-pressed` + indicador ciano animado; card destaque editorial |
| **Header/Footer** | Nav ativa com underline ciano animado; wordmark display gigante no topo do footer |

**Piloto:** implementar Home primeiro → **aprovação do usuário** → propagar às demais.

### Piloto Home — APLICADO e verificado em 25/09/2026 (Checkpoint 3a pendente)

- `Hero.astro`: `.hero-grid 1.2fr 0.9fr`; `.hero-title {clamp(2.6rem,1.9rem+3.4vw,5.4rem)}` → **78.8px@1440**, peso 200; retrato sangrando à direita em `@media(min-width:901px)` (`margin-right: calc(-1*(var(--container-padding)+max(0px,(100vw - var(--max-width))/2)))`, frame 640 / imagem 580×700) + `.hero-rule` (filete ciano `to right, cyan → transparent`); eyebrow com flex + `::after` colado.
  - **Fix:** dots cortados pela borda → `right: 16px` num bloco `@media (min-width:901px)` **depois** da regra base (ordem importa); verificado por crop de pixels (ativo ciano + 3 inativos visíveis).
- `TalkGrid.astro`: `.talk-slot--feature {grid-column: span 2; grid-row: span 2}`; ≤1100 → 2 cols com feature full-width e `:last-child span 2`; ≤640 → 1 col; `feature={index===0}` via `class:list`.
- `TalkCard.astro`: prop `feature?: boolean`; `.talk-number-giant` (`clamp(6rem,13vw,11rem)` → **176px**, `-webkit-text-stroke: 1.5px rgba(120,144,170,.5)`, `color: transparent`); grid areas `"header body"/"header footer"`; footer `justify-content: flex-end; align-self: end` (seta no canto inferior direito).
- `index.astro`: `.fold-quote` (`“`, `clamp(9rem,17vw,16rem)` → **242px**, `rgba(120,144,170,.16)`, `left:-.06em; top:-.2em`, z-index 0) + `.fold-carousel {position:relative; z-index:1}`; máscaras mantidas.
- `CTA.astro` (componente compartilhado — afeta as 6 páginas): removidos `glass-panel`/`.cta-glow`; `.cta-card` = `border-top: 1px solid var(--hairline)` + `padding-top`, sem bg/sombra/radius; `.cta-title {clamp(2.4rem,1.7rem+3.6vw,4.8rem)}` → **76.8px**, peso 200, `max-width: 18ch`; grid `1.15fr .85fr`.

**Verificação (25/09):** `overflow-x=0` nas 6 páginas; alturas 1440 → home 6384, sobre 5407, palestras 6347, depoimentos 5673, contato 2748, conteudos 3942 (home 900=8249, 640=9025); `heroVisual.right=1417` (sangria ok); feature slot 2×2 `753×614` com grid cells exatos; giant number 176px/1.5px; foldQuote 242px; ctaTitle 76.8px/200; ctaCard transparente/sombra nenhuma. Screenshots `f3-home-{1440,900,640}.png` + crops `f3h-hero/talks/bottom`, `f3c-dots`.

### Propagação da Fase 3 — APLICADA, verificada e APROVADA (Checkpoint 3b ok)

- **Sobre** (`sobre.astro`, `AboutTimeline.astro`): `.stat-box` saiu do `glass-card` → editorial `border-top: hairline`, número gigante `clamp(2.75rem,2rem+3vw,4.5rem)` peso 200 (**72px@1440**, `+100` + `mil` em `.stat-unit` 0.42em; todos `fits=true`); timeline com **filete contínuo por item** (`.timeline-item::before` `top:24px; bottom:-60px`, some no `:last-child` — fecha exatamente no centro do 1º e do último ponto; a regra global com fade foi removida).
- **Palestras** (`palestras.astro`): número da palestra em **outline ghost** (`clamp(3.5rem,6vw,6.5rem)` → 85px, `-webkit-text-stroke:1.5px`); `.badge-duration` virou pill outline com `uppercase`+tracking 0.12em (sem bg ciano); formatos em chip `radius-sm`; media **640** novo (padding 1.75/1.25, número/título menores).
- **Depoimentos** (`depoimentos.astro`): grid → **masonry real** `columns:2` + `break-inside: avoid` (alturas alternadas verificadas: 268/268/268/349 vs 322/322/240/268); aspas display `clamp(14rem,26vw,22rem)` absolutas a 18% atrás do texto (ink medido ≈65×52px via pixels); `.client-pill` sóbrio (transparente + hairline, sem glass).
- **Contato** (`contato.astro`, `components.css`): inputs `padding 1.05rem` (57px), textarea 150px; labels `--text-xs` uppercase tracking 0.1em em `--text-dim`; `#formFeedback` com `role="status" aria-live="polite"`; canais mantêm `glass-card-interactive` (lift −4px, herdado da Fase 2).
- **Conteúdos** (`conteudos.astro`): filtros → tabs com `aria-pressed` (JS alterna junto com `is-active`), base `border-bottom` hairline e **indicador ciano animado** (`::after` `scaleX(0→1)`, `transition: transform`); sem pill ciano cheio e sem blur. Destaque editorial saiu do `glass-panel` → `border-top` hairline + título `clamp(2.1rem,1.5rem+3vw,3.6rem)` peso 200 (57.6px).
- **Header/Footer**: nav ativa ganhou **underline ciano animado** (`::after` `scaleX(0→1)`, também no hover + `:focus-visible`); footer ganhou **wordmark display** `clamp(1.6rem,5.4vw,5rem)` (77px@1440, `fits=true` em 1440/640) no topo, com hairline — o logo pequeno foi removido do `.footer-brand` (evita link duplicado).

**Verificação (25/09):** build 6 páginas; geometria DOM (`d7-*.json`) em **1440 e 640 (6 páginas) + 900 (home, depoimentos)** → `overflow-x=0` em todos; alturas 1440 → home 6574, sobre 5575, palestras 6798, depoimentos 5560, contato 2975, conteudos 4073; screenshots `f3b-*.png` + crops `f3p-*` (stats, timeline, card palestra, masonry, pills, form, tabs, destaque, header ativo, footer 1440/640, palestras 640).

## Fase 4 — Responsivo (mobile com composição própria)

**APLICADA, verificada e APROVADA em 25/09/2026 (Checkpoint 4 ok).**

- **Footer** (`Footer.astro`): media **640** (`.footer-top`/`.footer-nav-group` gap 2rem) e **400** (`.footer-nav-group` empilha em coluna, gap 1.75rem).
- **Sobre** (`sobre.astro`): princípios ganharam degrau intermediário **≤1100 → 2 colunas** (antes 3→1 direto; ≤640 → 1); `.portrait-caption` com MQ 640 (inset 12px, padding 0.75/1, título 0.95rem).
- **CTA badge 901–1240**: medido em todas as 6 páginas nas larguras reais 901/1000/1100/1241 (com imagem lazy carregada, janela alta) → **sem colisão com o título e sem sair da viewport** (folga mínima 45px em vw901) — nenhuma mudança necessária.
- **Hero dots ≤900**: já resolvido (`.hero-dots-indicator { display:none }` no bloco ≤900; `right:16px` só ≥901) — sem mudança.
- **ContentGrid** (`ContentGrid.astro`): `.content-header-split` deixou de depender de `flex-wrap` → `grid 1fr auto` (≤640 vira 1 coluna + botão à esquerda), sem sobreposição verificada.
- **AboutIntro** (`AboutIntro.astro`): removidos `min-height:380/320px` (conflitavam com `aspect-ratio:4/5`); imagem agora só `height:100%` + `object-fit:cover`.
- **`.btn` <400px** (`components.css`): media novo → `white-space:normal`, padding 0.8/1.4, `--text-sm` (botões quebram linha em vez de estourar).
- **Contato** (bug real achado na verificação 360): `.channel-value` (e-mail longo sem quebra) + track `1fr` com min-content = colunas de **444px** estourando a 360 → fix com `overflow-wrap:anywhere` + `grid-template-columns: minmax(0,1fr)` em ≤900. `.contact-text` do CTA: `word-break:break-all` → `overflow-wrap:anywhere` (quebras mais naturais).

**Verificação (25/09):** build 6 páginas; geometria DOM **28 dumps** (`d8-*.json`: 6 páginas × 1440/640/vw500 + home/sobre/contato/conteudos em 1100/901/900) + **6 dumps em 360px reais** (`d360-*.json`, via iframe de 360px — headless tem janela mínima de 500px) → **0 falhas**: `overflow-x=0` em todas as larguras, 0 botões fora da viewport, footerNav/wordmark `fits=true`, caption contida, CTA sem colisão, princípios 3→2→1 colunas. Screenshots `f4-{home,sobre,contato}-1117.png` + `f4-{home,sobre,contato,palestras}-360.png` com crops `f4c-*` revisados (CTA 1117 sem colisão, princípios/stats 1117, header grid da home, contato 360 com e-mail quebrado dentro da caixa, hero/botões/footer 360, palestras 360).

## Fase 5 — Acessibilidade & interação

**APLICADA, verificada e APROVADA em 25/09/2026 (Checkpoint 5 ok).**

1. **Skip link** (`MainLayout.astro`, `global.css`): `<a class="skip-link" href="#main-content">Pular para o conteúdo principal</a>` antes do Header; CSS `position:fixed; top:-100%` → `:focus { top:1rem }` (z-index 2000, cyan/navy-deep, `transition: top 150ms`). Verificado via CDP com `Page.bringToFront`+focus emulation: `matches(':focus')=true`, `top=16px`, alvo `#main-content` existe (sem focus emulation o `:focus` não casa em headless → artefato, não bug).
2. **Menu mobile** (`Header.astro`): `inert` no markup do `#mobileNav`; fechado → `visibility:hidden` + `transition: visibility 0s linear .4s`; JS refatorado em `setMenu(open, refocus)` (alterna `is-open`/`is-active`/`aria-expanded`/`aria-hidden`/`inert`); **Escape fecha e devolve foco ao botão**. Verificado em home/depoimentos/contato: inicial `{inert:true, aria-hidden:true, visibility:hidden, expanded:false}` → abre → Escape `{closed, inert:true, visibility:hidden, focusOnBtn:true}`.
3. **Carrossel** (`TestimonialCarousel.tsx`): removido listener global `window.keydown` → `handleKeyDown` no container (`React.KeyboardEvent`, `preventDefault`, ignora inputs/textareas); `<p class="sr-only" aria-live="polite">Depoimento N de T: nome</p>` atualiza na troca; painel `id="testimonial-panel"` + `aria-labelledby="testimonial-tab-{idx}"`; dots `id="testimonial-tab-{idx}"` + `aria-controls="testimonial-panel"`. Verificado pós-hidratação (CDP, home + depoimentos): **tecla na janela IGNORADA** (label 1→1), **seta no container funciona** (1→2), `aria-live` atualiza, dot 6 → `aria-selected=true/false` + `aria-labelledby=testimonial-tab-5`.
4. **Form/filtros** (sem mudança, já existiam): `:disabled` no submit (JS `setAttribute('disabled','true')` + CSS `.btn:disabled`), `role="status"` no `#formFeedback`, `aria-pressed` nos filtros (8× no markup da Conteúdos). `.sr-only` utilitário criado no `global.css`.

**Verificação (25/09):** `npm run build` 6 páginas; scripts CDP `cdp-verify.mjs` (`v-home7/v-dep2/v-contato.json`) — skip link, menu (Escape/foco), carrossel (teclado/aria) tudo verde nas 3 páginas com teste. **Erro React #425/#423 na hidratação do carrossel é PREEXISTENTE** (reproduzido com a variante pré-Fase-5, sem as mudanças): React cai para client rendering e as interações funcionam; DOM final == SSR — **candidato a Fase 6**. Notas de harness: `astro-island` tem `display:contents` (retângulo vazio → `scrollIntoView` nele é no-op; rolar `.testimonial-carousel-container`); hidratação `client:visible` exige scroll real (IO não dispara em `--dump-dom`).

## Fase 6 — Correções pontuais

**APLICADA, verificada e APROVADA em 25/09/2026 (Checkpoint 6 ok).**

1. **Âncora `/conteudos#{id}` quebrada** (`conteudos.astro`): o grid agora renderiza `id={article.id}` em cada `.article-catalog-item` (6 ids slug ok) + `scroll-margin-top: 6rem` (header sticky 78px) + destaque `:target` com `outline: 2px solid var(--cyan)`. Verificado: 6/6 alvos existem, 3 links vindo da home.
2. **Literais → tokens** (23 trocas, 0 restantes): novos tokens em `variables.css` — `--tracking-label: 0.05em`, `--tracking-caps: 0.12em`, `--tracking-brand: 0.16em`, `--transition-reveal: 0.6s` (curva já usada no reveal). Substituídos: `letter-spacing` literais em AboutTimeline/TalkCard/Footer/Header/Hero/contato/depoimentos/palestras/sobre/components.css (deltas ≤0.02em); `font-size` `1rem`→`--text-base` (TalkCard, sobre), `0.95rem`→`--text-base` (caption sobre), `0.9rem`→`--text-sm` (carrossel); `transition: all 0.2/0.25/0.3s`→`--transition-fast/normal` (Header, carrossel); reveal `0.6s`→`--transition-reveal` (global.css). Mantidos: `font-size: 0.42em` do `.stat-unit` (relativo em, não é escalar).
3. **CSS global do TestimonialCarousel**: decisão — **manter global** (escopar = refatoração de risco desproporcional, item de baixa prioridade no plano), mas ver item 4 (correção do escaping).
4. **Erros React #425/#423 — CAUSA RAIZ ENCONTRADA E CORRIGIDA**: `renderToString` do React escapa `"` → `&quot;` no texto de `<style>{css}</style>`; como `<style>` é elemento de **raw text**, o navegador NÃO decodifica entidades → o DOM ficava com `content: &quot;&quot;` (CSS inválido: o filete do eyebrow pré-hidratação não renderizava) enquanto o client renderizava `content: ""` → mismatch de texto → hidratação abortada (#425) e fallback para client rendering (#423). **Fix**: `<style dangerouslySetInnerHTML={{ __html: css }} />` (React não escapa texto via innerHTML). Verificação: dev server (`astro dev`, erros sem minificação) = **0 mensagens**; prod CDP home+depoimentos = **0 logs**, hidratação e interações OK; HTML do build com `content: "";` cru (sem `&quot;`).

**Verificação (25/09):** `npm run build` 6 páginas; **26 dumps de geometria** (`run-diag4.ps1`, `d8-*.json`: 6 páginas × 1440/640/360 + home/sobre/contato 1100/901/900 + extras) → **0 falhas** (overflow-x ok, sem colisão CTA, sem sobreposição, footer/wordmark `fits`); CDP prod pós-fix (v6-home/v6-dep2): carrossel teclado/dots/aria + menu Escape/foco + skip link verdes; medida pontual em sobre 624px: `.caption-title` 16px sem overflow, `.timeline-phase` tracking 1.44px (= 0.12em). Dist limpo (injeções de diag restauradas, sem baks, dev server parado).

## Revisão visual final (pós-Checkpoint 6)

**FEITA em 25/09/2026:** 12 full-pages (6 páginas × 1440/640) + 46 crops revisados (`Temp\opencode\refresh\rev\`). Layout consistente em todas as páginas, sem overflow/cut-off; contatos longos e formulários ok em 640. **1 defeito corrigido com aprovação:**

1. **Setas do carrossel sobrepunham o texto do quote em ≤900** (`.nav-circle` `left:0/right:0` com 50px→42px vs `.testimonial-card` padding 24px → ~18px de sobreposição). **Fix** (`TestimonialCarousel.tsx`): `@media ≤900` padding lateral `3.75rem`; `@media ≤640` `3.25rem`. Verificação CDP pós-fix: gap texto×seta **+11px** (prev) / **+37px** (next) em 640 e **+11px** / **+43px** em 900; screenshots `rev\fix-arrows-{640,900}.png` sem sobreposição. Desktop (>900) inalterado (setas fora do card).

Observação (não-bug, design aprovado na Fase 3b): watermark de aspas gigante do masonry de depoimentos cai entre texto e régua do autor.

---

## Verificação (ao final de cada fase/checkpoint)

1. `npm run build` → 6 páginas.
2. Screenshots Chrome headless em **1440 / 900 / 640** via servidor HTTP.
3. Validação por **geometria DOM** (injeção + dump-dom + rebuild) e/ou **análise de pixels** (System.Drawing) — nunca pela ferramenta `read` de imagem.
4. Checklist da spec §25 (contraste, foco, sem scroll horizontal).
5. **Checkpoint com o usuário entre fases** — só avança com aprovação.

## O que NÃO muda

Paleta navy+ciano (ciano só em ação/foco/ativo), Switzer 200–600, arquitetura Astro islands, URLs/SEO, máscara da dobra de depoimentos já corrigida, fix do CTA já validado.

## Ordem de execução

`Fase 1 (fundação + uninstall + build) → Fase 2 → Fase 3 (piloto Home → aprovar → demais páginas) → Fase 4 → Fase 5 → Fase 6`, com checkpoint visual a cada fase.
