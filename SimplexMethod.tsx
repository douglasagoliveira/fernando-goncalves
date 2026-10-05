import { Link } from "react-router"
import { Arrow } from "../ui"
import fernandoSimplex from "../../assets/fernando-goncalves-simplex.jpg"

export function SimplexMethod() {
  return (
    <section
      aria-labelledby="simplex-titulo"
      className="dark bg-[linear-gradient(90deg,var(--brand-blue),var(--brand-indigo))] px-5 text-[var(--on-dark)] py-32 md:px-7 flex items-center"
    >
      <div className="mx-auto max-w-[var(--container-max)]">
        <div className="grid gap-12 lg:items-center lg:grid-cols-[1fr_1.08fr] lg:gap-20">
          <div data-aos="rise" className="relative order-2 lg:order-1 lg:aspect-[7/6]">
            <img
              src={fernandoSimplex}
              alt="Fernando Gonçalves em selfie com uma equipe sorridente após uma palestra"
              width={700}
              height={600}
              loading="lazy"
              decoding="async"
              className="h-auto w-full mx-auto rounded-2xl object-cover lg:absolute lg:inset-0 lg:h-full"
            />
          </div>

          <div data-aos="compose" className="order-1 flex flex-col lg:order-2">
            <h2
              id="simplex-titulo"
              data-step="0"
              className="mb-[var(--space-h2-bottom)] text-[var(--font-size-h2)] font-light leading-[var(--line-height-h2)] tracking-[var(--tracking-h2)]"
            >
              Conheça a SIMPLEX<span className="text-[var(--on-dark-accent)]">.</span>
            </h2>
            <p
              data-step="1"
              className="mb-[var(--space-subtitle-bottom)] max-w-[520px] text-[var(--font-size-subtitle)] font-light leading-[var(--line-height-subtitle)] tracking-[-0.02em]"
            >
              Sistema Motivacional para Performances de{" "}
              <em className="not-italic text-[var(--on-dark-accent)]">
                Excelência.
              </em>
            </p>
            <div
              data-step="2"
              className="mt-6 max-w-[520px] space-y-3 text-sm leading-6 text-[var(--on-dark-muted)] md:text-[15px]"
            >
              <p className="m-0">
                O Simplex é uma metodologia desenvolvida para estruturar a
                experiência motivacional de acordo com as características e
                necessidades de cada contratante.
              </p>
              <p className="m-0 mb-2">
                Diferente de palestras genéricas, o Simplex considera o perfil
                da organização, o perfil da equipe, os objetivos da contratação
                e os conteúdos prioritários — do planejamento à avaliação.
              </p>
            </div>
            <div data-step="3" className="mt-4">
              <Link
                to="/palestras"
                className="group inline-flex min-h-12 items-center justify-between gap-10 border border-[var(--on-dark-accent)] bg-[var(--on-dark-accent)] px-6 py-4 text-sm font-semibold text-[var(--blue-950)]! hover:bg-[var(--cyan-100)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--on-dark-accent)] motion-safe:transition-colors [&>.arrow]:group-hover:translate-x-1 [&>.arrow]:motion-safe:transition-transform"
              >
                Conheça o método <Arrow />
              </Link>
            </div>
          </div>
        </div>
     
      </div>
    </section>
  )
}
