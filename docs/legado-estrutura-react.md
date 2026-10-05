# Estrutura Completa do Projeto

## 📁 Árvore de Arquivos

```
SiteFernandoGoncalves/
│
├── 📄 index.html                    # HTML principal
├── 📄 package.json                  # Dependências e scripts
├── 📄 tsconfig.json                 # Configuração TypeScript
├── 📄 vite.config.js                # Configuração Vite
├── 📄 .gitignore                    # Ignorar arquivos no Git
├── 📄 README.md                     # Documentação principal
├── 📄 GUIDE.md                      # Guia de edição via terminal
│
├── 📁 public/                       # Assets públicos
│   └── (imagens, favicons, etc.)
│
├── 📁 src/                          # Código fonte
│   │
│   ├── 📄 main.tsx                  # Entry point da aplicação
│   ├── 📄 App.tsx                   # Componente raiz com rotas
│   ├── 📄 index.css                 # Import de estilos CSS
│   │
│   ├── 📁 components/               # Componentes React
│   │   │
│   │   ├── 📁 layout/               # Componentes de layout
│   │   │   ├── Header.tsx           # Cabeçalho com navegação
│   │   │   ├── Footer.tsx           # Rodapé do site
│   │   │   └── Breadcrumb.tsx       # Navegação hierárquica
│   │   │
│   │   ├── 📁 ui/                   # Componentes UI base
│   │   │   └── index.tsx            # Button, Card, Section, etc.
│   │   │
│   │   └── 📁 sections/             # Seções reutilizáveis
│   │       └── index.tsx            # Hero, Stats, Modules, etc.
│   │
│   ├── 📁 pages/                    # Páginas do site
│   │   ├── Home.tsx                 # Página inicial (15 dobras)
│   │   ├── Sobre.tsx                # Página sobre
│   │   ├── Palestras.tsx            # Página de palestras
│   │   └── Contato.tsx              # Página de contato
│   │
│   ├── 📁 data/                     # Dados e conteúdo
│   │   └── content.ts               # Todo conteúdo textual
│   │
│   ├── 📁 types/                    # Tipos TypeScript
│   │   └── index.ts                 # Interfaces e tipos
│   │
│   └── 📁 styles/                   # Estilos CSS organizados
│       ├── base.css                 # Reset e variáveis globais
│       ├── components.css           # Estilos de componentes
│       └── responsive.css           # Media queries
│
└── 📁 dist/                         # Build de produção (gerado)
    ├── index.html
    └── assets/
        ├── *.js
        └── *.css
```

## 🎯 Organização por Responsabilidade

### Componentes de Layout (`src/components/layout/`)
Componentes que definem a estrutura visual do site:
- **Header** - Navegação principal
- **Footer** - Rodapé com links e informações
- **Breadcrumb** - Navegação hierárquica

### Componentes UI (`src/components/ui/`)
Componentes atômicos reutilizáveis:
- **Button** - Botões com variantes (primary/secondary)
- **Card** - Cards com conteúdo
- **Section** - Seções com padding
- **Container** - Container com largura máxima
- **SectionHeader** - Cabeçalho de seção (label + title + subtitle)
- **ImagePlaceholder** - Placeholder para imagens

### Componentes de Seção (`src/components/sections/`)
Seções completas e reutilizáveis:
- **HeroSection** - Hero com título, subtítulo e CTAs
- **StatsSection** - Números de credibilidade
- **PainPointsSection** - Pontos de dor/problemas
- **AboutSummarySection** - Resumo sobre o palestrante
- **MethodSection** - Metodologia (SIMPLEX)
- **ModulesSection** - Módulos das palestras
- **StepsSection** - Passos (como funciona)
- **BenefitsSection** - Benefícios para empresas
- **FormatsSection** - Formatos disponíveis
- **TestimonialsSection** - Depoimentos
- **BooksSection** - Livros publicados
- **FAQSection** - Perguntas frequentes
- **UrgencySection** - Urgência/escassez
- **FinalCtaSection** - CTA final

### Dados (`src/data/content.ts`)
Todo o conteúdo textual do site centralizado em um único arquivo para fácil edição e manutenção.

### Tipos (`src/types/index.ts`)
Definições TypeScript para todos os dados e componentes.

### Estilos (`src/styles/`)
CSS organizado em arquivos separados por responsabilidade:
- **base.css** - Reset, tipografia, variáveis globais
- **components.css** - Estilos de todos os componentes
- **responsive.css** - Media queries para responsividade

## 🔄 Fluxo de Dados

```
content.ts (dados)
    ↓
pages/*.tsx (páginas)
    ↓
components/sections/*.tsx (seções)
    ↓
components/ui/*.tsx (componentes base)
    ↓
styles/*.css (estilos)
```

## 📝 Convenções

### Nomenclatura
- Componentes: PascalCase (ex: `HeroSection`)
- Arquivos: PascalCase para componentes, camelCase para dados
- Classes CSS: prefixo `wf-` (wireframe)
- Variáveis: camelCase

### Estrutura de Componentes
```tsx
// Props interface
interface ComponentProps {
  // ...
}

// Componente
export function Component({ prop1, prop2 }: ComponentProps) {
  return (
    <div className="wf-component">
      {/* ... */}
    </div>
  );
}
```

### Estrutura de Páginas
```tsx
// Imports
import { Component1, Component2 } from '../components/sections';
import { data1, data2 } from '../data/content';

// Página
export default function Page() {
  return (
    <div>
      <Component1 {...data1} />
      <Component2 {...data2} />
    </div>
  );
}
```

## 🚀 Próximos Passos

### Fase 1: Aprovação do Cliente ✅
- [x] Estrutura do site
- [x] Conteúdo textual
- [x] Wireframe em escala de cinza

### Fase 2: Design Visual
- [ ] Definir paleta de cores
- [ ] Escolher tipografia
- [ ] Criar variáveis CSS de cores
- [ ] Aplicar cores aos componentes

### Fase 3: Imagens e Assets
- [ ] Adicionar fotos reais
- [ ] Criar/otimizar imagens
- [ ] Adicionar ícones
- [ ] Criar favicon

### Fase 4: Funcionalidades
- [ ] Implementar formulário de contato funcional
- [ ] Integrar com serviço de email
- [ ] Adicionar analytics
- [ ] Otimizar SEO

### Fase 5: Deploy
- [ ] Configurar domínio
- [ ] Deploy para servidor
- [ ] Configurar SSL
- [ ] Testes finais

## 💻 Comandos Essenciais

```bash
# Desenvolvimento
npm run dev          # Rodar em modo desenvolvimento

# Build
npm run build        # Build para produção
npm run preview      # Preview do build

# Qualidade
npx tsc --noEmit     # Verificar tipos TypeScript

# Git
git add .
git commit -m "mensagem"
git push
```

## 📚 Documentação Adicional

- **README.md** - Visão geral do projeto
- **GUIDE.md** - Guia de edição via terminal
- **ESTRUTURA.md** - Este arquivo (estrutura completa)

---

**Projeto organizado e pronto para manutenção e evolução!** 🚀
