/**
 * Conteúdo editorial do site, distribuído pelas quatro páginas a partir do
 * briefing (docs/briefing-estrutura-conteudo.md e docs/briefing-complemento.md).
 * Os textos foram reduzidos para evitar repetição entre páginas.
 */

/* ---------------------------------------------------------------- INÍCIO */

export const heroStats = [
  { value: "1992", label: "primeira palestra" },
  { value: "+30", label: "anos de atuação" },
  { value: "3", label: "momentos por palestra" },
]

export const audiences = [
  {
    title: "Empresas",
    text: "Indústria, comércio e serviços que querem equipes mais conscientes do próprio papel.",
  },
  {
    title: "Equipes profissionais",
    text: "Colaboradores, gestores e times administrativos ou operacionais.",
  },
  {
    title: "Equipes de vendas",
    text: "Atitude, perseverança, relacionamento e foco em resultados.",
  },
  {
    title: "Terceiro setor",
    text: "ONGs, associações, projetos sociais e instituições.",
  },
  {
    title: "Instituições religiosas",
    text: "Igrejas, grupos e ministérios que buscam reflexão e acolhimento.",
  },
  {
    title: "Grupos familiares",
    text: "Encontros, eventos e momentos de reflexão sobre convivência.",
  },
  {
    title: "Cooperados",
    text: "Treinamentos para grupos de cooperados e associações profissionais.",
  },
  {
    title: "Eventos",
    text: "Congressos, convenções, encontros corporativos e eventos motivacionais.",
  },
]

export const results = [
  {
    title: "Mais disposição",
    text: "Colaboradores mais envolvidos e dispostos a participar.",
  },
  {
    title: "Mais consciência",
    text: "Profissionais estimulados a refletir sobre atitudes e responsabilidades.",
  },
  {
    title: "Mais motivação",
    text: "Recuperação do entusiasmo e da disposição para enfrentar desafios.",
  },
  {
    title: "Melhor relacionamento",
    text: "Reflexão sobre convivência, comunicação e respeito.",
  },
  {
    title: "Mais produtividade",
    text: "Pessoas conscientes e comprometidas constroem ambientes mais produtivos.",
  },
  {
    title: "Melhores resultados",
    text: "Uma equipe engajada contribui para o desempenho da organização.",
  },
]

/* ----------------------------------------------------------------- SOBRE */

export const timeline = [
  {
    phase: "Origem",
    title: "Uma infância de adversidades",
    text: "Problemas de saúde, extrema pobreza, bullying, violência familiar e dificuldades relacionadas ao TDAH. Filho de um ex-morador de rua e de uma mulher órfã, cresceu conhecendo de perto realidades que poderiam produzir desesperança.",
  },
  {
    phase: "Decisão",
    title: "O internato e a escolha de não desistir",
    text: "Na adolescência foi enviado para um internato, onde enfrentou humilhações e diferentes formas de violência. A decisão de seguir em frente tornou-se o ponto de partida de tudo o que veio depois.",
  },
  {
    phase: "Recomeço",
    title: "De volta aos estudos",
    text: "Estudou inicialmente até a antiga 6ª série. Anos mais tarde retomou os estudos, prestou o ENEM e concluiu o ensino médio. Ingressou em um curso superior de Marketing e direcionou a carreira para a comunicação.",
  },
  {
    phase: "Descoberta",
    title: "A história contada em voz alta",
    text: "Foi em pequenas reuniões e encontros religiosos que começou a falar em público. Até que, em determinado momento, contou a própria história a um grupo de pessoas. A reação foi surpreendente.",
  },
  {
    phase: "Carreira",
    title: "Dos convites à profissão",
    text: "Primeiro vieram convites para conversar com pessoas que enfrentavam problemas semelhantes. Depois, para falar com equipes profissionais. Nasceu uma carreira construída sobre experiência, observação e vivência prática.",
  },
]

export const experiences = [
  "Palestras motivacionais para empresas",
  "Treinamentos para equipes de vendas",
  "Palestras para indústria, comércio e serviços",
  "Treinamentos para grupos de cooperados",
  "Palestras para instituições religiosas",
  "Eventos do terceiro setor",
  "Palestras para grupos familiares",
  "Participação em eventos motivacionais",
  "Treinamentos para grupos ligados à atividade política",
  "Atuação como colaborador e como gestor",
]

export const books = [
  {
    title: "O Desafio Conjugal",
    tag: "Relacionamentos",
    text: "Direcionada a casais, apresenta estratégias práticas e reflexões para o aprimoramento da convivência, com ferramentas para fortalecer e motivar relacionamentos.",
    cover: "livro-desafio-conjugal",
  },
  {
    title: "Meu Degrau de Hoje",
    tag: "Leitura diária",
    text: "Leitura matinal inspiradora que compila 365 diretrizes práticas em frases curtas de conscientização, com atitudes simples para um desenvolvimento gradativo.",
    cover: "livro-meu-degrau",
  },
  {
    title: "Um Mendigo, Uma Órfã e Eu",
    tag: "Autobiografia",
    text: "Narrativa autobiográfica sobre os episódios mais desafiadores da trajetória do autor, a superação de traumas e orientações para quem busca redefinir o próprio caminho.",
    cover: "livro-um-mendigo",
  },
]

export const skills = [
  "Relações Humanas",
  "Comunicação Interpessoal",
  "Gerenciamento de Equipes",
  "Oratória",
  "Liderança Organizacional",
  "Comunicação Eleitoral",
  "Assessoria Parlamentar",
  "Análise Comportamental",
  "Design Gráfico e Digital",
  "Redação e Produção de Mídias",
]

/* ------------------------------------------------------------- PALESTRAS */

export const modules = [
  {
    number: "01",
    title: "A história",
    text: "Fernando apresenta os principais momentos de sua trajetória: dificuldades, quedas, recomeços e superação. O objetivo é criar identificação e demonstrar, por experiências concretas, que adversidades não precisam representar o ponto final.",
    topics: [],
  },
  {
    number: "02",
    title: "As estratégias",
    text: "Depois da história vem a reflexão: o que foi feito para mudar essa realidade? São apresentadas atitudes desenvolvidas ao longo da vida para enfrentar situações limitantes.",
    topics: [
      "Resiliência",
      "Perseverança",
      "Autoconhecimento",
      "Responsabilidade pessoal",
      "Paciência",
      "Otimismo",
      "Capacidade de adaptação",
      "Recomeços",
      "Relacionamento interpessoal",
      "Mudança de atitudes",
    ],
  },
  {
    number: "03",
    title: "Reflexão e autoconscientização",
    text: "O terceiro momento é construído com a participação do público. Cada participante recebe um formulário com perguntas estratégicas sobre comportamento e convivência, define metas e determina uma data para colocá-las em prática.",
    topics: [],
  },
]

export const reflectionQuestions = [
  "Posso ser uma pessoa melhor para aqueles que fazem parte da minha vida?",
  "Posso contribuir para melhorar os ambientes onde vivo e trabalho?",
  "Se posso melhorar, por que ainda não fiz isso?",
  "Quais três atitudes concretas posso tomar para começar essa mudança?",
]

export const companyBenefits = [
  "Motivação",
  "Comprometimento",
  "Proatividade",
  "Responsabilidade",
  "Consciência profissional",
  "Relacionamento interpessoal",
  "Cooperação",
  "Melhoria do ambiente de trabalho",
  "Disposição para mudanças",
  "Busca por melhores resultados",
]

export const simplexInputs = [
  "Perfil da organização",
  "Perfil da equipe",
  "Objetivos da contratação",
  "Características do público",
  "Tempo disponível",
  "Conteúdos prioritários",
  "Formato da apresentação",
  "Estratégias de interação",
  "Dinâmicas",
  "Necessidades identificadas no processo",
]

export const formats = [
  {
    name: "Palestra essencial",
    duration: "A partir de 2 horas",
    text: "Formato indicado para eventos, encontros corporativos e grupos que desejam uma experiência motivacional objetiva e dinâmica.",
    slug: "essencial",
  },
  {
    name: "Palestra ampliada",
    duration: "De 3 a 4 horas",
    text: "Possibilita aprofundar os conteúdos, ampliar as dinâmicas e desenvolver maior interação com os participantes.",
    slug: "ampliada",
  },
  {
    name: "Experiência completa",
    duration: "Até 6 horas · 2 ou 3 etapas",
    text: "Para organizações que desejam mais tempo dedicado à reflexão, à interação, à aplicação de questionários e às atividades propostas.",
    slug: "completa",
  },
]

export const differentials = [
  {
    title: "Uma história verdadeira",
    text: "A principal ferramenta de Fernando é a própria experiência de vida.",
  },
  {
    title: "Mais de três décadas",
    text: "Experiência como palestrante desde 1992, em contextos muito diferentes.",
  },
  {
    title: "Vivência corporativa",
    text: "Atuação junto a empresas e equipes de diversos segmentos.",
  },
  {
    title: "Os dois lados",
    text: "Experiência tanto como colaborador quanto como gestor.",
  },
  {
    title: "Identificação",
    text: "A abordagem parte da realidade de uma pessoa comum diante de desafios reais.",
  },
  {
    title: "Interatividade",
    text: "Dinâmicas, participação do público, brincadeiras e atividades práticas.",
  },
  {
    title: "Personalização",
    text: "O conteúdo é adaptado ao perfil e aos objetivos de cada contratante.",
  },
  {
    title: "Foco em atitude",
    text: "A palestra não termina na inspiração: o participante define atitudes concretas.",
  },
]

export const faqs = [
  {
    question: "As palestras podem ser personalizadas?",
    answer:
      "Sim. O SIMPLEX considera o perfil da organização, os objetivos da contratação, as características do público e o tempo disponível para estruturar um programa específico para cada contratante.",
  },
  {
    question: "Qual é a duração ideal?",
    answer:
      "O formato essencial parte de 2 horas, o ampliado dura de 3 a 4 horas e a experiência completa pode chegar a 6 horas, divididas em duas ou três etapas. A escolha depende dos objetivos do encontro.",
  },
  {
    question: "Existe algum material depois da palestra?",
    answer:
      "Sim. Após a realização do trabalho podem ser elaborados relatórios relacionados à participação, interação e aceitação da equipe, úteis para identificar necessidades e oportunidades de desenvolvimento.",
  },
  {
    question: "Fernando participa de eventos abertos?",
    answer:
      "Sim. Além das contratações corporativas, Fernando participa como palestrante em eventos motivacionais, encontros empresariais, convenções, treinamentos e atividades institucionais.",
  },
  {
    question: "O que é preciso informar para receber uma proposta?",
    answer:
      "Nome e instituição, cidade, número estimado de participantes, tipo de evento, data desejada, tempo disponível e o objetivo da palestra. Com esses dados é possível estruturar uma proposta personalizada.",
  },
]

/* --------------------------------------------------------------- CONTATO */

export const proposalFields = [
  "Nome e empresa ou instituição",
  "Cidade do evento",
  "Número estimado de participantes",
  "Tipo de evento e data desejada",
  "Tempo disponível",
  "Objetivo da palestra",
]
