import { useEffect, useRef } from "react"
import { Button, PageHero } from "../components/ui"
import { Portrait } from "../components/ui/Portrait"
import { FadeContent } from "../components/ui/FadeContent"
import { BooksSection } from "../components/sections/BooksSection"
import fernandoPortrait from "../imports/fernando-goncalves-simplex-retrato.png"
import "../styles/sobre.css"

const content = {
  "intro": {
    "headerTitle": "Uma história real. Uma experiência de vida. Uma mensagem que conecta.",
    "headerSubtitle": "Fernando Gonçalves é storyteller e palestrante motivacional desde 1992. Sua experiência nasceu muito antes dos palcos nasceu de uma vida marcada por dificuldades, recomeços e pela necessidade de encontrar caminhos quando aparentemente não havia caminhos.",
    "sectionLabel": "Minha História",
    "sectionTitle": "Das dificuldades à decisão de não desistir",
    "paragraphs": [
      "Durante a infância e adolescência, enfrentou situações extremamente adversas: problemas de saúde, extrema pobreza, bullying, violência familiar, dificuldades comportamentais e emocionais relacionadas ao TDAH e experiências traumáticas durante sua formação.",
      "Filho de um homem que enfrentou a condição de andarilho e ex morador de rua e de uma mulher órfã que passou por experiências de extrema exploração durante a infância, Fernando cresceu conhecendo de perto realidades que poderiam facilmente produzir desesperança.",
      "Na adolescência, foi enviado para um internato, onde enfrentou humilhações e diferentes formas de violência. Apesar de tudo isso, decidiu não desistir. Essa decisão tornou se o ponto de partida de uma trajetória construída com resiliência, perseverança, paciência, otimismo, disposição para recomeçar e, principalmente, responsabilidade pelas próprias escolhas.",
      "Hoje, Fernando transforma essa experiência em conteúdo, reflexão e inspiração para pessoas que precisam recuperar a disposição para seguir em frente. Mais do que contar uma história, Fernando utiliza sua história para provocar novas histórias."
    ]
  },
  "timeline": [
    {
      "year": "Infância",
      "title": "Primeiros desafios",
      "description": "Problemas de saúde, extrema pobreza, bullying, violência familiar, dificuldades comportamentais e emocionais relacionadas ao TDAH e experiências traumáticas durante a formação."
    },
    {
      "year": "Adolescência",
      "title": "Internato e superação",
      "description": "Enviado para um internato, enfrentou humilhações e diferentes formas de violência. Estudou inicialmente até a antiga 6ª série. Apesar de tudo, decidiu não desistir."
    },
    {
      "year": "Retomada",
      "title": "Volta aos estudos",
      "description": "Anos mais tarde, decidiu retomar os estudos, prestou o ENEM e concluiu o ensino médio. Ingressou posteriormente em um curso superior de Marketing, mas direcionou sua carreira para a comunicação visual e para a comunicação com pessoas."
    },
    {
      "year": "1992",
      "title": "Início como palestrante",
      "description": "Foi em pequenas reuniões e encontros religiosos que começou a desenvolver sua experiência como palestrante. Até que, em determinado momento, simplesmente contou sua própria história a um grupo de pessoas. A reação foi surpreendente."
    },
    {
      "year": "Década de 1990",
      "title": "Experiência corporativa",
      "description": "Atuou como coordenador de treinamento motivacional de uma das maiores empresas de assistência médica do Brasil, desenvolvendo atividades em Belo Horizonte e em diversas cidades de Minas Gerais."
    },
    {
      "year": "Evolução",
      "title": "Os convites começaram a surgir",
      "description": "Algumas pessoas se identificaram com suas experiências e passaram a aplicar em suas próprias vidas atitudes que Fernando havia desenvolvido ao longo de sua trajetória: resiliência, perseverança, paciência, otimismo, coragem para recomeçar e responsabilidade pelas próprias escolhas."
    },
    {
      "year": "Hoje",
      "title": "+30 anos transformando vidas",
      "description": "Uma carreira construída não apenas sobre conhecimento teórico, mas sobre experiência, observação, relacionamento humano e vivência prática. Mais de três décadas dedicadas à comunicação, ao desenvolvimento humano e à motivação."
    }
  ],
  "experience": [
    {
      "title": "Palestras motivacionais",
      "description": "Para empresas da indústria, comércio e serviços."
    },
    {
      "title": "Treinamentos para equipes de vendas",
      "description": "Motivação, atitude, perseverança, relacionamento e foco em resultados."
    },
    {
      "title": "Treinamentos para cooperados",
      "description": "Grupos de cooperados e associações."
    },
    {
      "title": "Instituições religiosas e terceiro setor",
      "description": "Igrejas, grupos, ministérios, ONGs, associações e projetos sociais."
    },
    {
      "title": "Grupos familiares",
      "description": "Encontros, eventos e momentos de reflexão."
    },
    {
      "title": "Eventos motivacionais e políticos",
      "description": "Congressos, convenções, encontros corporativos e grupos ligados à atividade política."
    }
  ],
  "quote": "Conhecer os dois lados da relação profissional faz diferença. Fernando entende que motivação não acontece isoladamente. Ela está relacionada ao ambiente, às relações, à liderança, ao reconhecimento, à comunicação e, principalmente, à maneira como cada pessoa percebe seu papel dentro de um grupo.",
  "differences": [
    {
      "icon": "★",
      "title": "Uma história verdadeira",
      "description": "A principal ferramenta de Fernando é sua própria experiência de vida."
    },
    {
      "icon": "★",
      "title": "+30 anos de atuação",
      "description": "Experiência como palestrante desde 1992."
    },
    {
      "icon": "★",
      "title": "Experiência corporativa",
      "description": "Atuação junto a empresas e equipes de diferentes segmentos."
    },
    {
      "icon": "★",
      "title": "Vivência dos dois lados",
      "description": "Experiência tanto como colaborador quanto como gestor."
    },
    {
      "icon": "★",
      "title": "Identificação com o público",
      "description": "A abordagem parte da realidade de uma pessoa comum enfrentando desafios reais."
    },
    {
      "icon": "★",
      "title": "Interatividade",
      "description": "Dinâmicas, participação do público, brincadeiras e atividades práticas."
    },
    {
      "icon": "★",
      "title": "Personalização",
      "description": "O conteúdo pode ser adaptado ao perfil e aos objetivos de cada contratante."
    },
    {
      "icon": "★",
      "title": "Foco em atitude",
      "description": "A palestra não termina na inspiração. O participante é estimulado a definir atitudes concretas para começar a mudança."
    }
  ],
  "knowledge": [
    "Relações Humanas",
    "Comunicação Interpessoal",
    "Gerenciamento de Equipes",
    "Oratória",
    "Liderança Organizacional",
    "Análise Comportamental",
    "Comunicação Eleitoral",
    "Assessoria Parlamentar"
  ],
  "closing": "Além de proficiência técnica e criativa em Design Gráfico, Design Digital, Redação e Produção de Mídias."
}

export default function Sobre() {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let cancelled = false
    let dispose: (() => void) | undefined
    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([{ gsap }, { ScrollTrigger }]) => {
      if (cancelled || !pageRef.current) return
      gsap.registerPlugin(ScrollTrigger)
      const root = pageRef.current
      const media = gsap.matchMedia()
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(root.querySelectorAll(".about-opening .page-hero-inner > *"), { y: 24, opacity: 0, duration: 0.9, stagger: 0.12, ease: "power3.out", clearProps: "opacity,transform" })
        root.querySelectorAll<HTMLElement>("[data-about-reveal]").forEach((element) => {
          gsap.from(element, { y: 24, opacity: 0, duration: 0.85, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 94%", once: true } })
        })
        gsap.fromTo(root.querySelector("[data-about-progress]"), { scaleY: 0 }, { scaleY: 1, ease: "none", scrollTrigger: { trigger: root.querySelector(".about-timeline"), start: "top 65%", end: "bottom 65%", scrub: 0.5 } })
      }, root)
      dispose = () => media.revert()
      document.fonts.ready.then(() => { if (!cancelled) ScrollTrigger.refresh() })
    }).catch(() => {})
    return () => { cancelled = true; dispose?.() }
  }, [])

  return (
    <div ref={pageRef} className="about-page">
      <div className="about-opening">
        <PageHero label="Sobre" title={content.intro.headerTitle}>{content.intro.headerSubtitle}</PageHero>
        <FadeContent className="about-hero-portrait">
          <Portrait variant="portrait" critical src={fernandoPortrait} srcSet={undefined} width={1024} height={1536} alt="Fernando Gonçalves sentado em um cubo, em retrato de corpo inteiro com os dois sapatos visíveis" className="about-hero-photo" />
        </FadeContent>
      </div>
      <section className="about-section about-journey" aria-labelledby="about-journey-title">
        <div className="about-container about-split">
          <header className="about-sticky-heading">
            <p className="about-label">Trajetória</p>
            <h2 id="about-journey-title" data-about-reveal>De uma infância de dificuldades a uma carreira dedicada a pessoas</h2>
          </header>
          <div className="about-timeline">
            <div className="about-timeline-track" aria-hidden="true"><span data-about-progress /></div>
            {content.timeline.map((item) => <article key={item.year} data-about-reveal className="about-timeline-item"><p className="about-label">{item.year}</p><h3>{item.title}</h3><p>{item.description}</p></article>)}
          </div>
        </div>
      </section>
      <section className="about-section about-experience" aria-labelledby="about-experience-title">
        <div className="about-container">
          <header className="about-section-heading" data-about-reveal><p className="about-label">Experiência</p><h2 id="about-experience-title">Décadas de experiência falando com pessoas e equipes</h2><p>Ao longo de sua trajetória, Fernando Gonçalves acumulou experiência em diferentes ambientes e contextos.</p></header>
          <div className="about-experience-grid">{content.experience.map((item) => <article key={item.title} data-about-reveal><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
          <blockquote className="about-quote" data-about-reveal><p>{content.quote}</p></blockquote>
        </div>
      </section>
      <BooksSection />
      <section className="about-section about-differences" aria-labelledby="about-differences-title">
        <div className="about-container">
          <header className="about-section-heading" data-about-reveal><p className="about-label">Diferenciais</p><h2 id="about-differences-title">Por que contratar Fernando Gonçalves?</h2></header>
          <div className="about-differences-grid">{content.differences.map((item) => <article key={item.title} data-about-reveal><span className="about-star" aria-hidden="true">{item.icon}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></article>)}</div>
        </div>
      </section>
      <section className="about-section about-knowledge" aria-labelledby="about-knowledge-title">
        <div className="about-container about-split">
          <header data-about-reveal><p className="about-label">Conhecimentos</p><h2 id="about-knowledge-title">Áreas de atuação e estudo</h2><p>Em constante busca por aprimoramento, Fernando possui conhecimento em áreas estratégicas do desenvolvimento humano e corporativo.</p></header>
          <div>
            <div className="about-knowledge-list" role="list">
              {content.knowledge.map((item) => (
                <div
                  key={item}
                  data-about-reveal
                  role="listitem"
                  tabIndex={0}
                  className="about-knowledge-item"
                >
                  <h3 className="text-inherit m-0 font-light">{item}</h3>
                </div>
              ))}
            </div>
            <p className="about-knowledge-note" data-about-reveal>{content.closing}</p>
          </div>
        </div>
      </section>
      <section className="about-section about-cta">
        <div className="about-container" data-about-reveal><h2>Conheça as palestras de Fernando Gonçalves</h2><p>Uma apresentação que combina história + emoção + reflexão + interação + atitude.</p><Button href="/palestras">Ver Palestras</Button></div>
      </section>
    </div>
  )
}
