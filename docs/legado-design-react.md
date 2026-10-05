# Fernando Gonçalves — Sistema de Design

## Direção

Uma identidade **Swiss Corporate / SIMPLEX**: racional, precisa e humana. Os azuis corporativos da marca estruturam o site; ciano e teal entram como acentos, nunca como grandes campos luminosos. Fotografia humana, recortada e integrada ao fundo, sem arco, cápsula, círculo ou moldura ornamental. Glassmorphism limitado a formulário e ação secundária.

## Arquitetura do site

Quatro páginas independentes, conforme `src/imports/ESTRUTURA.md`, com rotas reais e conteúdo editorial resumido sem repetições:

- **Início (`/`):** manifesto, proposta de valor, resumo da história e chamadas para conhecer o trabalho.
- **Sobre (`/sobre`):** biografia, trajetória, experiência profissional, obras e habilidades.
- **Palestras (`/palestras`):** método SIMPLEX, três módulos, formatos, personalização, participação e FAQ.
- **Contato (`/contato`):** canais diretos e formulário completo para preparar uma proposta.

React Router em modo Data, layout compartilhado, indicação da página ativa, navegação mobile, título por página e retorno ao topo em mudanças de rota. As ofertas levam ao formulário com o formato pré-preenchido.

## Narrativa da home

1. **Manifesto:** adversidade transformada em força.
2. **Identificação:** a história torna o discurso crível.
3. **Trajetória:** resumo com acesso à página Sobre.
4. **Depoimentos:** dez falas reais, com nome, cargo e fotografia, imediatamente após Conheça Fernando.
5. **Trabalho:** impacto esperado com acesso à página Palestras.
6. **Conversão:** chamada para a página Contato, sem duplicar o formulário.

## Sistema de cores

Fonte: anexo `CORES_identidade.jpg`. Os valores RGB escritos no anexo são a referência numérica.

| Cor da identidade | Token primitivo | RGB | HEX | Uso |
|---|---|---|---|---|
| Azul principal | `--brand-blue` | 34, 51, 92 | `#22335C` | Marca, fundos e ações em superfícies claras |
| Azul secundário | `--brand-indigo` | 52, 71, 117 | `#344775` | Superfícies elevadas e degradês discretos |
| Ciano | `--brand-cyan` | 0, 204, 225 | `#00CCE1` | CTA sobre fundo escuro, foco e pequenos acentos |
| Teal | `--brand-teal` | 81, 168, 177 | `#51A8B1` | Apoio e escala de acentos |
| Cinza | `--brand-gray` | 204, 204, 204 | `#CCCCCC` | Escala neutra e bordas |
| Apoio escuro | `--brand-plum` | 40, 20, 40 | `#281428` | Primitivo preservado, sem uso em grandes superfícies |

O terceiro quadrado parece visualmente acinzentado, mas informa RGB 40/20/40. Preserva-se o valor escrito como primitivo; não se inventa um RGB para aproximar a miniatura.

Arquitetura em `src/styles/theme.css`: primitivos → escalas → semânticos → componentes. Escalas de azul (50–950), ciano (50–900), teal (50–900) e neutros (50–900); cores de sucesso, aviso e erro não dependem apenas dos acentos da marca.

| Papel semântico | Token | Referência |
|---|---|---|
| Fundo / conteúdo | `--background`, `--foreground` | Cinza 50 / azul 900 |
| Card / popover | `--card`, `--popover` | Branco com texto azul profundo |
| Ação principal clara | `--primary`, `--primary-foreground` | Azul principal / branco |
| Ação no escuro | `--accent`, `--accent-foreground` | Ciano / azul 950 |
| Texto secundário claro | `--muted-foreground` | Neutro 700 |
| Texto secundário escuro | `--on-dark-muted` | Azul 200 |
| Acento legível claro | `--on-light-accent` | Ciano 700; não usar ciano puro para texto pequeno no branco |
| Acento legível escuro | `--on-dark-accent` | Ciano 300 |
| Formulário | `--field-dark`, `--field-error`, `--input` | Campo escuro, erro claro e borda neutra |
| Estados | `--success`, `--warning`, `--destructive`, `--ring` | Cores funcionais de alto contraste |
| Vidro | `--glass`, `--glass-border` | Transparência controlada e borda visível |

Preservados o contrato Tailwind `@theme inline`, os tokens padrão e os aliases anteriores. Variante `.dark` define texto, superfície, ação, borda e foco adequados ao fundo escuro. Espaçamento, largura máxima e raios também são centralizados.

## Tipografia

- **Display e texto:** Manrope — inspiração suíça, hierarquia por escala e peso; tracking dos títulos em −0,025em, texto normal.
- **Estrutural:** DM Mono, apenas peso 400 — numeração e metadados.
- Duas famílias, apenas pesos usados, carregamento com `display=swap`.

## Logotipo e fotografia

- Logotipo SIMPLEX **branco original**, sem filtros ou recoloração, no cabeçalho, no rodapé e no método sobre fundo escuro.
- Logotipo **bicolor original apenas sobre fundo claro**, na apresentação dos formatos.
- Manter proporção, transparência e respiro. Não redesenhar símbolo ou tipografia do logo.
- Hero: fotografia fornecida com microfone e fundo transparente, integrada diretamente ao campo azul. Sem moldura geométrica.
- Sobre: retrato fornecido com camisa azul, também recortado e integrado ao campo azul.
- Todas as imagens usadas são WebP, com `width`/`height`. Retratos e imagem editorial possuem `srcset` e `sizes`. Apenas o retrato principal tem prioridade alta; fotografias abaixo da dobra usam lazy loading.
- Arquivos PNG fornecidos ficam preservados; a aplicação utiliza derivados otimizados em `src/imports/optimized/`.

## Componentes

- **Header:** navegação entre quatro rotas com página ativa; vira menu expansível em telas pequenas.
- **Eyebrow:** número sequencial + régua; organiza as dobras sem competir com o título.
- **Button:** primário claro e secundário em vidro; ambos com ícone direcional.
- **Format row:** unidade de oferta com duração, benefício e CTA.
- **Accordion:** `details` / `summary` nativos, com navegação por teclado e funcionamento sem JavaScript; um item aberto por vez.
- **Form:** labels persistentes, dados do evento, contato, validação nativa e estado com `role=status`. Prepara mensagem para WhatsApp ou e-mail; não há integração de backend nem confirmação fictícia de recebimento.

## Movimento

### Depoimentos na home

Fonte das falas e cargos: `src/data/content.ts` do repositório original `douglasagoliveira/SiteFernandoGoncalves`, consultado em 30/09/2026 (commit `d9e1e02545b91dd19444131ff1a52f1af47e1868`). As dez pessoas com fotografias fornecidas estão em `src/data/testimonials.ts`, com os textos completos, sem inventar declarações. Vinícius Chaves e Vanilda Gomes não foram incluídos por não terem fotografias anexadas nesta solicitação.

Carrossel nativo com scroll-snap, card central em escala 1 e laterais em 0,95; superfícies azuis, filetes teal e fotos sem moldura, integradas por fade discreto. Duas cópias decorativas nas extremidades permitem o loop contínuo; ambas usam `aria-hidden` e `inert` para não duplicar conteúdo nos leitores de tela. A passagem automática ocorre a cada 8 segundos apenas com a seção visível. Hover, foco e aba oculta pausam temporariamente; swipe, roda, teclado ou setas interrompem a passagem até reativação explícita. Há controles de anterior, próximo e pausa; teclado aceita setas, Home e End. Sem dependência adicional. Com movimento reduzido, não há autoplay, escala ou transição. As dez falas continuam disponíveis no HTML estático e pela rolagem nativa sem JavaScript. Fotos JPG originais preservadas; derivados WebP de 240px, carregamento lazy e dimensões explícitas.

### Ampliação do repertório

Padrões leves inspirados em BlurText (React Bits) e CountUp (Magic UI), adaptados ao AOS existente e à renderização estática, sem instalar bibliotecas visuais completas:

- Texto palavra a palavra, com desfoque curto de 3px e defasagem de 45ms, em títulos selecionados.
- Revelação por máscara nos títulos internos, além das linhas do manifesto inicial.
- Trajetória em linha do tempo: trilho teal desenhado por etapa, título sequencial e corpo com atraso de 200ms. Cada etapa entra uma única vez ao chegar ao viewport.
- Contagem de 0 a +30 na estatística da home; o HTML estático e leitores de tela recebem sempre o valor final.
- Entrada lateral dos módulos SIMPLEX e zoom discreto nas obras, com defasagem de até 200ms.
- Transição de opacidade curta na mudança de página, sem atrasar os links nem retirar conteúdo do HTML.

Lenis é a única dependência nova: importação dinâmica, suavização da roda com interpolação de 0,12, toque nativo (sem inércia artificial), teclado nativo, zoom do navegador preservado e campos de formulário excluídos da suavização. Mudanças de rota cancelam a inércia e voltam imediatamente ao topo. O parallax é limitado a 60px e reduzido em telas pequenas. Alterações em `prefers-reduced-motion` são acompanhadas em tempo real: Lenis é destruído, entradas e contadores são desativados e o conteúdo permanece visível. Sem WebGL, partículas ou animações decorativas contínuas.

Um só vocabulário, em `src/styles/motion.css` + `useSiteMotion`: réguas desenham da esquerda para a direita (eyebrow, linha dos princípios, máscara da foto na home) e o conteúdo sobe ~28px abaixo delas. AOS (carregado sob demanda) só dispara a entrada no viewport, uma vez; as transições são CSS próprias. Composições (`data-aos="compose"` + `data-step`) revelam título → conteúdo → imagem → CTA, com passos de 110ms. Heróis animam por CSS no carregamento, com título revelado por linha apenas na home. Parallax discreto no retrato do herói e nas fotos das histórias. O header vira uma barra compacta fixa ao rolar para cima, com indicador de progresso em ciano. Hover apenas em elementos clicáveis. Tudo passa pela classe `html.motion`: desativada com `prefers-reduced-motion` e removida se o JS falhar, então o HTML pré-renderizado continua visível.

## Regras de layout e responsividade

- Grade central de 1240px, com margens fluidas.
- O desktop usa assimetria entre conteúdo e retrato; abaixo de 900px, as colunas se tornam uma narrativa vertical.
- Cards de vidro apenas onde há sobreposição sobre fundo escuro (formulário e CTA secundário). O restante usa linhas finas, não caixas repetidas.
- Alvos interativos possuem contraste, foco visível e movimento curto (até 250ms).

## Especificação técnica e limites

O PDF recomenda **Astro + TypeScript / Islands**. Este ambiente exige uma implementação **React + Vite**; portanto não houve migração para Astro e não se declara conformidade com Astro Islands.

Aplicações concretas das demais diretrizes:

- `scripts/build.mjs` gera HTML pré-renderizado das quatro páginas em `dist/`, com conteúdo acessível sem JavaScript. React hidrata o HTML após a resolução da rota inicial, sem substituir a página por uma tela vazia.
- Sobre, Palestras e Contato têm bundles separados, carregados por rota. O runtime React continua existindo: isso não equivale ao JavaScript mínimo de uma arquitetura Islands.
- SEO estático por página: título, descrição, canonical, Open Graph, Twitter Card e dados estruturados Person. O domínio usado é o fornecido nos documentos: `www.fernandosimplex.com.br`.
- Idioma `pt-BR`, sitemap das quatro URLs, robots com indexação permitida, favicon e imagem social otimizada. O domínio e a política de indexação devem ser confirmados antes de uma publicação em domínio diferente.
- Links, semântica de formulário, foco visível, FAQ nativo e `prefers-reduced-motion`. Estados de erro de campo usam a validação nativa do navegador.
- O build estático segue compatível com o fluxo de deploy existente. CDN, cache de hospedagem, HTTPS, backend e migração para Astro não são configurados por esta alteração.
- Nenhuma pontuação de Lighthouse ou aprovação de Core Web Vitals é presumida; essas métricas dependem de medição no ambiente publicado.
