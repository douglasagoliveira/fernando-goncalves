import { Link } from "react-router"
import stage from "../imports/optimized/fernando-profissional-1280.webp"
import stageSmall from "../imports/optimized/fernando-profissional-640.webp"
import { Portrait } from "../components/ui/Portrait"
import { Arrow, Button, FinalCta } from "../components/ui"
import { principles } from "../data/content"
import { AnimatedText, CountUp } from "../components/ui/AnimatedText"
import { Testimonials } from "../components/sections/Testimonials"
import { TeamChallenge } from "../components/sections/TeamChallenge"
import { HighlightsStrip } from "../components/sections/HighlightsStrip"
import { SimplexMethod } from "../components/sections/SimplexMethod"
import { LectureExperience } from "../components/sections/LectureExperience"
import { HiringJourney } from "../components/sections/HiringJourney"
import { LectureFormats } from "../components/sections/LectureFormats"

export default function Home() {
  return (
    <>
      <section className="hero section-grid">
        <div className="hero-copy">
          <h1>
            <span className="line">
              <span>Transforme</span>
            </span>
            <span className="line">
              <span>
                <i>adversidades</i> em força.
              </span>
            </span>
          </h1>
          <h2 className="hero-subtitle">
            Transforme pessoas em <span>protagonistas</span>.
          </h2>
          <p className="hero-lead">
            Há mais de três décadas, Fernando Gonçalves transforma histórias de
            vida em novos caminhos para pessoas e equipes.
          </p>
          <div className="actions">
            <Button href="/palestras">Conheça o trabalho</Button>
            <Button secondary>Solicite uma palestra</Button>
          </div>
          <div className="hero-foot">
            <span>
              Desde
              <br />
              <strong>1992</strong>
            </span>
            <p>
              Histórias que despertam
              <br />
              atitude e protagonismo.
            </p>
          </div>
        </div>
        <div
          className="hero-portrait"
          data-parallax="0.14"
          data-parallax-anchor="top"
        >
          <Portrait critical className="hero-cutout" />
        </div>
      </section>
      <HighlightsStrip />
      <TeamChallenge />
      <SimplexMethod />
      <LectureExperience />
      <HiringJourney />
      <section className="story section-grid">
        <div className="story-image" data-aos="mask">
          <img
            src={stage}
            srcSet={`${stageSmall} 640w, ${stage} 1280w`}
            sizes="(max-width: 900px) 100vw, 50vw"
            width={1280}
            height={853}
            alt="Fernando Gonçalves em ambiente profissional"
            loading="lazy"
            data-parallax="0.04"
          />
          <span>UMA VOZ QUE COMEÇA PELA ESCUTA</span>
        </div>
        <div className="story-copy" data-aos="compose">
          <div data-step="1">
            <h2>
              <AnimatedText text="Quando a experiência vira" />{" "}
              <i>propósito.</i>
            </h2>
          </div>
          <p data-step="2">
            Uma história de dificuldades, recomeços e responsabilidade pelas
            próprias escolhas. Desde 1992, Fernando compartilha essa vivência
            com pessoas e equipes. 
          </p>
          <Link to="/sobre" className="text-link" data-step="3">
            Conheça a trajetória <Arrow />
          </Link>
        </div>
      </section>
      <LectureFormats />
      <Testimonials />
      <section className="statement section-grid">
        <div data-aos="compose" className="statement-intro">
          <div data-step="1" className="statement-copy">
            <h2>
              Você não escolhe todas as circunstâncias.
              <br />
              <em>
                Mas escolhe como{" "}
                <span className="whitespace-nowrap">enfrentá-las.</span>
              </em>
            </h2>
            <p>
              A vida de Fernando foi atravessada por dificuldades. A decisão de
              não permitir que elas definissem seu destino tornou-se o ponto de
              partida de uma carreira dedicada ao desenvolvimento humano.
            </p>
          </div>
        </div>
        <div className="principles" data-aos="compose">
          {principles.map(([number, title, text], index) => (
            <article key={number} className="principle" data-step={index + 1}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="impact section-grid">
        <div data-aos="compose">
          <div data-step="1" className="impact-main">
            <h2>
              Não é apenas uma palestra.
              <br />É um ponto de <i>virada.</i>
            </h2>
            <div>
              <p>
                Uma experiência humana, envolvente e preparada para inspirar
                atitudes no ambiente que sua equipe constrói todos os dias.
              </p>
              <Link to="/palestras" className="text-link">
                Explore o método e os formatos <Arrow />
              </Link>
            </div>
          </div>
        </div>
        <div className="impact-stats" data-aos="compose">
          <p data-step="1">
            <strong>
              <CountUp value={30} prefix="+" />
            </strong>
            <span>
              anos de
              <br />
              atuação
            </span>
          </p>
          <p data-step="2">
            <strong>3</strong>
            <span>
              momentos para
              <br />a reflexão
            </span>
          </p>
          <p data-step="3">
            <strong>1</strong>
            <span>
              história real,
              <br />
              muitos recomeços
            </span>
          </p>
        </div>
      </section>
      <FinalCta />
    </>
  )
}
