import { Link } from "react-router"
import { motion, useReducedMotion } from "motion/react"

const modules = [
  {
    number: "01",
    label: "Módulo 1",
    title: "A História",
    text: "Fernando apresenta os principais momentos de sua trajetória. Uma história real de dificuldades, quedas, recomeços e superação — criando identificação com os participantes.",
  },
  {
    number: "02",
    label: "Módulo 2",
    title: "As Estratégias",
    text: "Atitudes e estratégias desenvolvidas ao longo da vida para enfrentar situações limitantes: resiliência, perseverança, autoconhecimento, responsabilidade pessoal, otimismo e capacidade de adaptação.",
  },
  {
    number: "03",
    label: "Módulo 3",
    title: "Reflexão e Autoconscientização",
    text: "Participação direta do público com perguntas estratégicas sobre comportamento e convivência. Os participantes estabelecem metas e determinam datas para colocá-las em prática.",
  },
]

export function LectureExperience() {
  const reducedMotion = useReducedMotion()

  return (
    <section
      aria-labelledby="palestras-experiencia"
      className="overflow-hidden bg-[var(--blue-50)] px-5 py-20 text-[var(--foreground)] md:px-7 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[var(--container-max)]">
        <div data-aos="compose">
          <div data-step="0" className="mb-8 flex items-center gap-4">
            <span
              aria-hidden="true"
              className="h-px w-10 bg-[var(--brand-teal)]"
            />
            <span className="font-[family-name:var(--mono)] text-xs uppercase tracking-[0.14em] text-[var(--teal-700)]">
              Palestras
            </span>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-end lg:gap-20">
            <h2
              id="palestras-experiencia"
              data-step="1"
              className="mb-[var(--space-h2-bottom)] max-w-[740px] text-[var(--font-size-h2)] font-light leading-[var(--line-height-h2)] tracking-[var(--tracking-h2)]"
            >
              Uma experiência dividida em{" "}
              <span className="text-[var(--teal-700)]">três momentos</span>
            </h2>
            <p
              data-step="2"
              className="mb-1 max-w-[390px] text-base leading-7 text-[var(--muted-foreground)]"
            >
              As palestras podem ser adaptadas ao perfil, objetivo e
              disponibilidade de cada contratante.
            </p>
          </div>
        </div>

        <ol className="mt-12 grid list-none gap-5 p-0 md:mt-16 lg:grid-cols-3 lg:gap-6">
          {modules.map((module, index) => (
            <li key={module.number} data-aos="compose" className="min-w-0">
              <div data-step={index} className="h-full">
                <motion.article
                  whileHover={reducedMotion ? undefined : { y: -6 }}
                  transition={{ type: "spring", stiffness: 240, damping: 24 }}
                  className="group relative h-full"
                >
                  <Link
                    to="/palestras"
                    aria-label={`Saiba mais sobre ${module.title}`}
                    className="relative flex h-full min-h-[420px] flex-col overflow-hidden rounded-2xl border border-[var(--blue-200)] bg-[var(--white)] p-7 focus-visible:outline-offset-4 motion-safe:transition-[border-color,box-shadow] motion-safe:duration-300 hover:border-[var(--brand-teal)] hover:shadow-[0_16px_36px_-20px_rgba(34,51,92,0.25)] focus-visible:border-[var(--brand-teal)] md:p-8"
                  >
                    <div className="mb-9 flex items-center justify-between border-b border-[var(--border)] pb-6">
                      <span className="font-[family-name:var(--mono)] text-[11px] uppercase tracking-[0.1em] text-[var(--teal-700)]">
                        {module.label}
                      </span>
                      <span
                        aria-hidden="true"
                        className="text-5xl font-medium leading-none tracking-[-0.04em] text-[var(--blue-200)] motion-safe:transition-colors group-hover:text-[var(--brand-teal)] group-focus-within:text-[var(--brand-teal)]"
                      >
                        {module.number}
                      </span>
                    </div>
                    <h3 className="mb-[var(--space-h3-bottom)] text-[var(--font-size-h3)] font-light leading-[var(--line-height-h3)] tracking-[var(--tracking-h3)]">
                      {module.title}
                    </h3>
                    <p className="mb-9 text-[15px] leading-7 text-[var(--muted-foreground)]">
                      {module.text}
                    </p>
                    <div className="mt-auto flex min-h-11 items-center justify-between gap-4 border-t border-[var(--border)] pt-5 text-sm font-semibold text-[var(--brand-blue)]">
                      <span>Saiba mais</span>
                      <span
                        aria-hidden="true"
                        className="flex size-9 items-center justify-center rounded-full bg-[var(--teal-50)] text-xl text-[var(--teal-700)] motion-safe:transition-[background-color,transform] group-hover:translate-x-1 group-hover:bg-[var(--teal-200)] group-focus-within:bg-[var(--teal-200)]"
                      >
                        →
                      </span>
                    </div>
                  </Link>
                </motion.article>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
