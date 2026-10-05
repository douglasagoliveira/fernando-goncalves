import { useCallback, useEffect, useRef, useState } from "react"
import { testimonials } from "../../data/testimonials"

const slides = [
  { testimonial: testimonials[testimonials.length - 1], position: -1 },
  ...testimonials.map((testimonial, position) => ({ testimonial, position })),
  { testimonial: testimonials[0], position: testimonials.length },
]

const controlClass =
  "flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-[var(--on-dark-accent)] hover:bg-white/10 focus-visible:outline-[var(--on-dark-accent)] motion-reduce:transition-none"

export function Testimonials() {
  const section = useRef<HTMLElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const current = useRef(0)
  const [active, setActive] = useState(0)
  const [ready, setReady] = useState(false)
  const [playing, setPlaying] = useState(true)
  const [motionAllowed, setMotionAllowed] = useState(false)
  const [inView, setInView] = useState(false)
  const [interacting, setInteracting] = useState(false)
  const [focused, setFocused] = useState(false)
  const [visible, setVisible] = useState(true)

  const moveTo = useCallback(
    (index: number, animate = true) => {
      const container = track.current
      const card = container?.querySelector<HTMLElement>(
        `[data-position="${index}"]`,
      )
      if (!container || !card) return
      container.scrollTo({
        left: card.offsetLeft - (container.clientWidth - card.offsetWidth) / 2,
        behavior: animate && motionAllowed ? "smooth" : "instant",
      })
    },
    [motionAllowed],
  )

  useEffect(() => {
    setReady(true)
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => {
      setMotionAllowed(!preference.matches)
      if (preference.matches) {
        setPlaying(false)
        track.current?.scrollTo({
          left: track.current.scrollLeft,
          behavior: "instant",
        })
      }
    }
    const visibility = () => setVisible(!document.hidden)
    update()
    visibility()
    preference.addEventListener("change", update)
    document.addEventListener("visibilitychange", visibility)
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 },
    )
    if (section.current) observer.observe(section.current)
    return () => {
      observer.disconnect()
      preference.removeEventListener("change", update)
      document.removeEventListener("visibilitychange", visibility)
    }
  }, [])

  useEffect(() => {
    const container = track.current
    if (!container) return
    let frame = 0
    const update = () => {
      frame = 0
      const center = container.scrollLeft + container.clientWidth / 2
      const cards = Array.from(
        container.querySelectorAll<HTMLElement>("[data-testimonial]"),
      )
      let closest = 0
      let distance = Infinity
      cards.forEach((card, index) => {
        const difference = Math.abs(
          card.offsetLeft + card.offsetWidth / 2 - center,
        )
        if (difference < distance) {
          distance = difference
          closest = index
        }
      })
      for (const clone of container.querySelectorAll<HTMLElement>(
        "[data-clone]",
      )) {
        if (Math.abs(clone.offsetLeft + clone.offsetWidth / 2 - center) < 1) {
          closest =
            Number(clone.dataset.position) === -1 ? testimonials.length - 1 : 0
          moveTo(closest, false)
          break
        }
      }
      current.current = closest
      setActive(closest)
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    const resize = new ResizeObserver(() => moveTo(current.current, false))
    resize.observe(container)
    moveTo(current.current, false)
    update()
    container.addEventListener("scroll", schedule, { passive: true })
    return () => {
      resize.disconnect()
      cancelAnimationFrame(frame)
      container.removeEventListener("scroll", schedule)
    }
  }, [moveTo])

  useEffect(() => {
    if (
      !playing ||
      !motionAllowed ||
      !inView ||
      interacting ||
      focused ||
      !visible
    )
      return
    const timer = window.setInterval(() => {
      moveTo(current.current + 1)
    }, 8000)
    return () => window.clearInterval(timer)
  }, [playing, motionAllowed, inView, interacting, focused, visible, moveTo])

  const navigate = (direction: number) => {
    setPlaying(false)
    moveTo(current.current + direction)
  }

  return (
    <section
      ref={section}
      aria-labelledby="depoimentos-titulo"
      aria-roledescription="carrossel"
      className="dark overflow-hidden border-t border-white/15 bg-[image:var(--section-gradient)] py-20 text-white md:py-28"
      onMouseEnter={() => setInteracting(true)}
      onMouseLeave={() => setInteracting(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setFocused(false)
      }}
    >
      <div className="mx-auto max-w-[1296px] px-5 md:px-7" data-aos="compose">
        <div
          data-step="1"
          className="flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <h2
            id="depoimentos-titulo"
            className="mb-0 max-w-[750px] text-[var(--font-size-h2)] font-light leading-[var(--line-height-h2)] tracking-[var(--tracking-h2)]"
          >
            Quem vive a experiência
            <br />
            <i className="text-[var(--on-dark-accent)]">conta melhor.</i>
          </h2>
          <p className="mb-0 max-w-[260px] text-sm leading-6 text-[var(--on-dark-muted)]">
            Pessoas, equipes e organizações.
            <br />
            Histórias de quem esteve lá.
          </p>
        </div>
      </div>
      <div
        ref={track}
        id="depoimentos-cards"
        tabIndex={0}
        aria-label="Depoimentos dos participantes. Use as setas para navegar."
        className="relative mt-10 snap-x snap-mandatory overflow-x-auto overscroll-x-contain focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[var(--on-dark-accent)] [scrollbar-width:none] [--card-width:min(84vw,540px)] [&::-webkit-scrollbar]:hidden md:mt-14"
        onPointerDown={() => setPlaying(false)}
        onWheel={() => setPlaying(false)}
        onKeyDown={(event) => {
          if (event.altKey || event.ctrlKey || event.metaKey) return
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault()
            navigate(event.key === "ArrowRight" ? 1 : -1)
          } else if (event.key === "Home" || event.key === "End") {
            event.preventDefault()
            setPlaying(false)
            moveTo(event.key === "Home" ? 0 : testimonials.length - 1, false)
          }
        }}
      >
        <ul className="m-0 flex w-max list-none items-center gap-3 py-6 px-[calc((100%-var(--card-width))/2)] md:gap-6">
          {slides.map(({ testimonial, position }) => (
            <li
              key={`${testimonial.name}-${position}`}
              data-testimonial={
                position >= 0 && position < testimonials.length ? "" : undefined
              }
              data-clone={
                position === -1 || position === testimonials.length
                  ? ""
                  : undefined
              }
              data-position={position}
              aria-hidden={
                position === -1 || position === testimonials.length
                  ? true
                  : undefined
              }
              inert={position === -1 || position === testimonials.length}
              data-active={position === active}
              className="group flex min-h-[520px] w-[var(--card-width)] shrink-0 snap-center flex-col rounded-xl border border-white/15 bg-[var(--brand-blue)] p-6 shadow-lg transition-[transform,background-color,border-color] duration-500 ease-out data-[active=true]:scale-100 data-[active=true]:border-[var(--brand-teal)] data-[active=true]:bg-[var(--brand-indigo)] data-[active=false]:scale-[0.95] motion-reduce:scale-100! motion-reduce:transition-none md:p-9"
            >
              <figure className="m-0 flex flex-1 flex-col">
                <div className="mb-4 flex items-center justify-between">
                  <span
                    aria-hidden="true"
                    className="h-12 font-[family-name:var(--display)] text-7xl leading-none text-[var(--on-dark-accent)] transition-opacity duration-500 group-data-[active=false]:opacity-[0.5]"
                  >
                    “
                  </span>
                  <span className="font-[family-name:var(--mono)] text-[10px] tracking-[0.1em] text-[var(--on-dark-muted)] transition-opacity duration-500 group-data-[active=false]:opacity-[0.5]">
                    {String(
                      ((position + testimonials.length) % testimonials.length) +
                        1,
                    ).padStart(2, "0")}{" "}
                    / {String(testimonials.length).padStart(2, "0")}
                  </span>
                </div>
                <blockquote className="m-0 flex-1 text-base leading-[1.65] transition-opacity duration-500 group-data-[active=false]:opacity-[0.5] md:text-lg">
                  <p className="mb-0">{testimonial.quote}</p>
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-white/20 pt-6">
                  <img
                    src={testimonial.photo}
                    width={240}
                    height={240}
                    alt={`Retrato de ${testimonial.name}`}
                    loading="lazy"
                    decoding="async"
                    className="h-16 w-16 shrink-0 object-cover [mask-image:linear-gradient(to_top,transparent,black_15%)] md:h-20 md:w-20"
                  />
                  <div className="min-w-0 transition-opacity duration-500 group-data-[active=false]:opacity-[0.5]">
                    <p className="mb-1 text-base font-semibold leading-6 text-white">
                      {testimonial.name}
                    </p>
                    <p className="mb-0 text-xs leading-5 text-[var(--on-dark-muted)]">
                      {testimonial.role}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto mt-5 flex max-w-[1296px] flex-wrap items-center justify-between gap-5 px-5 md:px-7">
        <p className="mb-0 font-[family-name:var(--mono)] text-[10px] uppercase tracking-[0.08em] text-[var(--on-dark-muted)]">
          <span className="md:hidden">Deslize para explorar</span>
          <span className="hidden md:inline">
            Diferentes vozes. A mesma conexão.
          </span>
        </p>
        <div className={ready ? "flex items-center gap-3" : "hidden"}>
          <span
            className="mr-1 min-w-12 font-[family-name:var(--mono)] text-xs text-[var(--on-dark-muted)]"
            aria-live={playing ? "off" : "polite"}
            aria-atomic="true"
          >
            <span className="sr-only">Depoimento </span>
            {String(active + 1).padStart(2, "0")} / {testimonials.length}
          </span>
          <button
            type="button"
            onClick={() => navigate(-1)}
            aria-label="Depoimento anterior"
            aria-controls="depoimentos-cards"
            className={controlClass}
          >
            <span aria-hidden="true">←</span>
          </button>
          {motionAllowed && (
            <button
              type="button"
              onClick={() => setPlaying(!playing)}
              aria-label={
                playing
                  ? "Pausar passagem automática"
                  : "Ativar passagem automática"
              }
              aria-pressed={playing}
              className={controlClass}
            >
              <span aria-hidden="true">{playing ? "Ⅱ" : "▷"}</span>
            </button>
          )}
          <button
            type="button"
            onClick={() => navigate(1)}
            aria-label="Próximo depoimento"
            aria-controls="depoimentos-cards"
            className={controlClass}
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
