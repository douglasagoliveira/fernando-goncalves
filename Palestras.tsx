import { useEffect, useRef } from "react"
import { Link } from "react-router"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "../components/ui"
import { Portrait } from "../components/ui/Portrait"
import { BrandLogo } from "../components/ui/BrandLogo"
import "../styles/palestras.css"

const intro = {
  "headerTitle": "Motivação que começa pela identificação",
  "headerSubtitle": "Para tocar as pessoas, é preciso falar com elas e não apenas para elas. Fernando não se apresenta como alguém que possui uma fórmula mágica. Ele se apresenta como alguém que também enfrentou limitações, dificuldades e circunstâncias adversas.",
  "sectionLabel": "O Método",
  "sectionTitle": "Conexão, reflexão e atitude",
  "paragraphs": [
    "Essa identificação cria uma conexão natural com os participantes. Durante a palestra, sua história serve como ponto de partida para uma reflexão sobre escolhas, comportamento, relacionamentos, responsabilidade, resiliência e capacidade de mudança.",
    "O objetivo não é simplesmente emocionar. É provocar reflexão e transformar reflexão em atitude. A partir de situações reais vivenciadas pelo próprio palestrante, os participantes são estimulados a identificar suas próprias limitações e pensar em estratégias possíveis para melhorar sua relação consigo mesmos, com as pessoas e com os ambientes onde vivem e trabalham."
  ]
}

const modules = [
  {
    "tag": "Módulo 1",
    "title": "A História",
    "description": "Fernando apresenta os principais momentos de sua trajetória. Uma história real de dificuldades, quedas, recomeços e superação. O objetivo é criar identificação com os participantes e demonstrar, por meio de experiências concretas, que adversidades não precisam representar o ponto final de uma trajetória."
  },
  {
    "tag": "Módulo 2",
    "title": "As Estratégias",
    "description": "Depois da história, vem a reflexão: O que foi feito para mudar essa realidade? Fernando apresenta atitudes e estratégias desenvolvidas ao longo de sua vida para enfrentar situações limitantes. São trabalhados temas como:",
    "topics": [
      "Resiliência e Perseverança",
      "Autoconhecimento e Responsabilidade pessoal",
      "Paciência e Otimismo",
      "Capacidade de adaptação e Recomeços",
      "Relacionamento interpessoal",
      "Mudança de atitudes e Superação de limitações"
    ],
    "conclusion": "A proposta é levar os participantes a compreender que pequenas mudanças de comportamento podem produzir transformações significativas na vida pessoal e profissional."
  },
  {
    "tag": "Módulo 3",
    "title": "Reflexão e Autoconscientização",
    "description": "O terceiro momento é construído com a participação direta do público. Os participantes recebem um formulário com perguntas estratégicas que estimulam uma análise individual sobre comportamento e convivência. Entre as reflexões propostas:",
    "topics": [
      "Posso ser uma pessoa melhor para aqueles que fazem parte da minha vida? Família, amigos, colegas, vizinhos e demais pessoas do meu convívio.",
      "Posso contribuir para melhorar os ambientes onde vivo? Minha casa, meu trabalho, minha comunidade, minha escola, meu bairro e outros espaços de convivência.",
      "Se posso melhorar, por que ainda não fiz isso?",
      "Quais três atitudes concretas posso tomar para começar essa mudança?"
    ],
    "conclusion": "Os participantes são convidados a estabelecer metas e determinar uma data para colocá las em prática. O propósito é transformar a palestra em um compromisso pessoal com a mudança."
  }
]

const interaction = {
  "label": "Interação",
  "title": "Uma palestra para participar, não apenas assistir",
  "paragraphs": [
    "Motivação não precisa ser sinônimo de formalidade excessiva. Durante as apresentações, são utilizadas dinâmicas interativas, momentos de descontração, brincadeiras e sorteios de brindes. Esses recursos ajudam a criar um ambiente mais leve, aproximar o palestrante dos participantes e reduzir as barreiras naturais existentes em apresentações corporativas.",
    "A interação também favorece a participação do público e contribui para que os conceitos apresentados sejam vivenciados de maneira prática. O objetivo é criar conexão."
  ],
  "quote": "\"Porque uma mensagem pode ser ouvida. Mas uma experiência pode ser lembrada.\""
}

const audiences = [
  {
    "title": "Empresas",
    "description": "Indústria, comércio e serviços."
  },
  {
    "title": "Equipes profissionais",
    "description": "Colaboradores, gestores, equipes administrativas e operacionais."
  },
  {
    "title": "Equipes de vendas",
    "description": "Motivação, atitude, perseverança, relacionamento e foco em resultados."
  },
  {
    "title": "Terceiro setor",
    "description": "ONGs, associações, projetos sociais e instituições."
  },
  {
    "title": "Instituições religiosas",
    "description": "Igrejas, grupos e ministérios."
  },
  {
    "title": "Grupos familiares",
    "description": "Encontros, eventos e momentos de reflexão."
  },
  {
    "title": "Eventos",
    "description": "Congressos, convenções, encontros corporativos e eventos motivacionais."
  }
]

const formats = [
  {
    "title": "Palestra Essencial",
    "duration": "A partir de 2h",
    "description": "Formato indicado para eventos, encontros corporativos e grupos que desejam uma experiência motivacional objetiva e dinâmica.",
    "ideal": "Ideal para: eventos rápidos, SIPAT, reuniões de equipe"
  },
  {
    "title": "Palestra Ampliada",
    "duration": "De 3 a 4h",
    "description": "Possibilita aprofundar os conteúdos, ampliar as dinâmicas e desenvolver maior interação com os participantes.",
    "ideal": "Ideal para: convenções, treinamentos, eventos de liderança",
    "popular": {}
  },
  {
    "title": "Experiência Completa",
    "duration": "Até 6h",
    "description": "Divididas em duas ou três etapas. Para organizações que desejam uma experiência mais aprofundada, com maior tempo dedicado à reflexão e interação.",
    "ideal": "Ideal para: programas de desenvolvimento, jornadas corporativas"
  }
]

const results = [
  {
    "title": "Mais disposição",
    "description": "Colaboradores mais envolvidos e dispostos a participar."
  },
  {
    "title": "Mais consciência",
    "description": "Profissionais estimulados a refletir sobre suas atitudes e responsabilidades."
  },
  {
    "title": "Mais motivação",
    "description": "Recuperação do entusiasmo e da disposição para enfrentar desafios."
  },
  {
    "title": "Melhor relacionamento",
    "description": "Reflexão sobre convivência, comunicação e respeito."
  },
  {
    "title": "Mais produtividade",
    "description": "Pessoas mais conscientes e comprometidas podem contribuir para um ambiente profissional mais produtivo."
  },
  {
    "title": "Melhores resultados",
    "description": "Uma equipe mais engajada pode contribuir para o desempenho e os resultados da organização."
  }
]

export default function Palestras() {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const media = gsap.matchMedia()
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".lectures-hero [data-lecture-reveal]", { y: 28, opacity: 0, stagger: 0.12, duration: 0.9, ease: "power3.out", clearProps: "all" })
      gsap.utils.toArray<HTMLElement>(".lectures-section [data-lecture-reveal]").forEach(element => {
        gsap.from(element, { y: 28, opacity: 0, duration: 0.75, ease: "power3.out", clearProps: "all", scrollTrigger: { trigger: element, start: "top 92%", once: true } })
      })
    }, root)
    media.add("(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)", () => {
      const elements = root.current?.querySelectorAll<HTMLElement>("[data-magnet]") ?? []
      const cleanups = Array.from(elements).map(element => {
        const move = (event: PointerEvent) => {
          const bounds = element.getBoundingClientRect()
          gsap.to(element, { x: (event.clientX - bounds.left - bounds.width / 2) * 0.12, y: (event.clientY - bounds.top - bounds.height / 2) * 0.16, duration: 0.3, overwrite: true })
        }
        const reset = () => gsap.to(element, { x: 0, y: 0, duration: 0.4, ease: "power3.out", overwrite: true })
        element.addEventListener("pointermove", move)
        element.addEventListener("pointerleave", reset)
        element.addEventListener("blur", reset, true)
        return () => {
          element.removeEventListener("pointermove", move)
          element.removeEventListener("pointerleave", reset)
          element.removeEventListener("blur", reset, true)
          gsap.set(element, { clearProps: "transform" })
        }
      })
      return () => cleanups.forEach(cleanup => cleanup())
    }, root)
    return () => media.revert()
  }, [])

  return (
    <div className="lectures-page" ref={root}>
      <section className="lectures-hero" aria-labelledby="lectures-title">
        <div className="lectures-container lectures-hero-grid">
          <div className="lectures-hero-copy">
            <nav className="lectures-breadcrumb" aria-label="Localização" data-lecture-reveal><Link to="/">Início</Link><span aria-hidden="true">/</span><span>Palestras</span></nav>
            <p className="lectures-label" data-lecture-reveal>Palestras</p>
            <h1 id="lectures-title" data-lecture-reveal>Motivação que começa pela <em>identificação</em></h1>
            <p data-lecture-reveal>{intro.headerSubtitle}</p>
          </div>
          <div className="lectures-portrait" data-lecture-reveal><Portrait critical className="lectures-portrait-image" /></div>
        </div>
      </section>
      <section className="lectures-section lectures-method" aria-labelledby="lecture-method-title">
        <div className="lectures-container lectures-split">
          <header data-lecture-reveal><p className="lectures-label">{intro.sectionLabel}</p><h2 id="lecture-method-title">{intro.sectionTitle}</h2><span className="lectures-rule" aria-hidden="true" /></header>
          <div data-lecture-reveal>{intro.paragraphs.map(text => <p key={text}>{text}</p>)}</div>
        </div>
      </section>
      <section className="lectures-section lectures-dark lectures-structure" aria-labelledby="lecture-structure-title">
        <div className="lectures-container lectures-split">
          <header className="lectures-sticky" data-lecture-reveal><p className="lectures-label">Estrutura</p><h2 id="lecture-structure-title">Uma experiência dividida em três momentos</h2><p>As palestras podem ser adaptadas ao perfil, objetivo e disponibilidade de cada contratante.</p><div className="lectures-stages" aria-hidden="true"><span>01</span><span>02</span><span>03</span></div></header>
          <div className="lectures-modules">{modules.map((item, index) => <article key={item.title} className="lectures-module" data-lecture-reveal><div className="lectures-module-top"><span className="lectures-label">{item.tag}</span><span className="lectures-module-number" aria-hidden="true">0{index + 1}</span></div><h3>{item.title}</h3><p>{item.description}</p>{"topics" in item && <ul>{item.topics.map(topic => <li key={topic}>{topic}</li>)}</ul>}{"conclusion" in item && <p className="lectures-conclusion">{item.conclusion}</p>}</article>)}</div>
        </div>
      </section>
      <section className="lectures-section lectures-interaction" aria-labelledby="lecture-interaction-title">
        <div className="lectures-container"><div className="lectures-split"><header data-lecture-reveal><p className="lectures-label">{interaction.label}</p><h2 id="lecture-interaction-title">{interaction.title}</h2></header><div data-lecture-reveal>{interaction.paragraphs.map(text => <p key={text}>{text}</p>)}</div></div><blockquote data-lecture-reveal><p>{interaction.quote}</p></blockquote></div>
      </section>
      <section className="lectures-section lectures-dark lectures-simplex" aria-labelledby="lecture-simplex-title">
        <div className="lectures-container lectures-split"><div className="lectures-logo" data-lecture-reveal><BrandLogo /></div><div data-lecture-reveal><p className="lectures-label">Metodologia</p><h2 id="lecture-simplex-title">SIMPLEX <span>Sistema Motivacional para Performances de Excelência</span></h2><p>Uma palestra não precisa ser igual para todas as empresas. O Simplex é uma metodologia desenvolvida para estruturar a experiência motivacional de acordo com as características e necessidades de cada contratante.</p><p>O projeto considera aspectos como: perfil da organização, perfil da equipe, objetivos da contratação, características do público, tempo disponível, conteúdos prioritários, formato da apresentação, estratégias de interação, dinâmicas e necessidades identificadas durante o processo.</p><p>A partir dessas informações, é estruturado um programa personalizado. Após a realização do trabalho, podem ser elaborados relatórios relacionados à participação, interação e aceitação da equipe, permitindo que a empresa avalie possíveis ações para fortalecer os resultados obtidos.</p><p className="lectures-emphasis">Simplex: motivação com planejamento, propósito e acompanhamento.</p></div></div>
      </section>
      <section className="lectures-section lectures-audiences" aria-labelledby="lecture-audiences-title"><div className="lectures-container"><header className="lectures-heading" data-lecture-reveal><p className="lectures-label">Público</p><h2 id="lecture-audiences-title">Diferentes públicos. Uma mesma proposta: despertar pessoas.</h2></header><div className="lectures-audience-grid">{audiences.map((item,index) => <article key={item.title} data-lecture-reveal><span className="lectures-index" aria-hidden="true">0{index+1}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></article>)}</div></div></section>
      <section className="lectures-section lectures-dark lectures-formats" aria-labelledby="lecture-formats-title"><div className="lectures-container"><header className="lectures-heading" data-lecture-reveal><p className="lectures-label">Formatos</p><h2 id="lecture-formats-title">Uma palestra adequada à sua realidade</h2><p>Cada contratação pode ser estruturada de acordo com o perfil e a disponibilidade do contratante.</p></header><div className="lectures-format-grid">{formats.map((item,index) => <article className="lectures-format-card" key={item.title} data-lecture-reveal><span className="lectures-format-number" aria-hidden="true">0{index+1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div><p className="lectures-format-note" data-lecture-reveal>Os formatos podem ser personalizados conforme os objetivos e necessidades do contratante.</p></div></section>
      <section className="lectures-section lectures-results" aria-labelledby="lecture-results-title"><div className="lectures-container"><header className="lectures-heading" data-lecture-reveal><p className="lectures-label">Resultados</p><h2 id="lecture-results-title">O que uma experiência motivacional pode despertar?</h2><p>O objetivo das palestras é estimular mudanças que possam refletir tanto no comportamento individual quanto na convivência coletiva.</p></header><div className="lectures-results-grid">{results.map(item => <article key={item.title} data-lecture-reveal><span className="lectures-result-dot" aria-hidden="true" /><h3>{item.title}</h3><p>{item.description}</p></article>)}</div><blockquote className="lectures-results-quote" data-lecture-reveal><p>"Motivação não substitui gestão, planejamento ou estratégia. Mas pode ajudar pessoas a reencontrarem o propósito necessário para colocar tudo isso em prática."</p></blockquote></div></section>
      <section className="lectures-section lectures-dark lectures-cta"><div className="lectures-container" data-lecture-reveal><h2>Convide Fernando para seu evento</h2><p>Uma apresentação que combina: História + emoção + reflexão + interação + atitude. Ideal para eventos que desejam oferecer ao público uma experiência humana, envolvente e inspiradora.</p><div className="lectures-magnet" data-magnet><Button>Solicitar Proposta</Button></div></div></section>
    </div>
  )
}

