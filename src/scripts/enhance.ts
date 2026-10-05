/**
 * Melhoria progressiva — o site funciona sem este arquivo.
 * Responsabilidades: revelação por scroll, estado do cabeçalho, menu mobile,
 * contadores, navegação do mural de depoimentos e envio do formulário.
 */

const root = document.documentElement
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")

root.classList.add("js-ready")

/* ----------------------------------------------- revelação por scroll */

const revealTargets = document.querySelectorAll<HTMLElement>("[data-reveal]")

if (revealTargets.length) {
  if (reduceMotion.matches || !("IntersectionObserver" in window)) {
    revealTargets.forEach((element) => element.classList.add("is-visible"))
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add("is-visible")
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.1 },
    )

    revealTargets.forEach((element, index) => {
      // escalonamento sutil entre irmãos declarados em sequência
      if (!element.style.getPropertyValue("--reveal-delay")) {
        const siblingIndex = element.dataset.revealIndex
        if (siblingIndex) {
          element.style.setProperty(
            "--reveal-delay",
            `${Math.min(Number(siblingIndex), 6) * 70}ms`,
          )
        }
      }
      // o que já está na primeira dobra aparece imediatamente
      if (index < 2 && element.getBoundingClientRect().top < window.innerHeight)
        element.classList.add("is-visible")
      else observer.observe(element)
    })
  }
}

/* --------------------------------------------------- estado do cabeçalho */

const sentinel = document.getElementById("top-sentinel")

if (sentinel && "IntersectionObserver" in window) {
  const headerObserver = new IntersectionObserver(
    ([entry]) => {
      root.classList.toggle("header-pinned", !entry.isIntersecting)
    },
    { threshold: 0 },
  )
  headerObserver.observe(sentinel)
}

/* -------------------------------------------------------- menu mobile */

const toggle = document.getElementById("menu-toggle")
const nav = document.getElementById("primary-nav")

if (toggle && nav) {
  const setMenu = (open: boolean, refocus = false) => {
    nav.classList.toggle("is-open", open)
    toggle.setAttribute("aria-expanded", String(open))
    const label = toggle.querySelector(".menu-toggle__label")
    if (label) label.textContent = open ? "Fechar" : "Menu"
    if (refocus) toggle.focus()
  }

  toggle.addEventListener("click", () => {
    setMenu(toggle.getAttribute("aria-expanded") !== "true")
  })

  nav.addEventListener("click", (event) => {
    if ((event.target as HTMLElement).closest("a")) setMenu(false)
  })

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open"))
      setMenu(false, true)
  })

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900 && nav.classList.contains("is-open"))
      setMenu(false)
  })
}

/* ------------------------------------------------------------ contadores */

const counters = document.querySelectorAll<HTMLElement>("[data-count]")

if (counters.length && !reduceMotion.matches && "IntersectionObserver" in window) {
  const counterObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const element = entry.target as HTMLElement
        counterObserver.unobserve(element)

        const target = Number(element.dataset.count)
        const prefix = element.dataset.countPrefix ?? ""
        if (!Number.isFinite(target)) continue

        const duration = 1100
        const start = performance.now()

        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          element.textContent = prefix + Math.round(target * eased)
          if (progress < 1) requestAnimationFrame(step)
        }

        element.textContent = prefix + "0"
        requestAnimationFrame(step)
      }
    },
    { threshold: 0.6 },
  )

  counters.forEach((element) => counterObserver.observe(element))
}

/* -------------------------------------------- navegação dos depoimentos */

const strip = document.querySelector<HTMLElement>("[data-testimonials]")

if (strip) {
  const controls = document.querySelectorAll<HTMLButtonElement>(
    "[data-testimonials-control]",
  )

  const amount = () => {
    const card = strip.querySelector<HTMLElement>(".testimonial")
    return card ? card.getBoundingClientRect().width + 24 : strip.clientWidth
  }

  const syncControls = () => {
    const max = strip.scrollWidth - strip.clientWidth - 4
    controls.forEach((button) => {
      const back = button.dataset.testimonialsControl === "prev"
      button.disabled = back ? strip.scrollLeft <= 4 : strip.scrollLeft >= max
    })
  }

  controls.forEach((button) => {
    button.hidden = false
    button.addEventListener("click", () => {
      const direction = button.dataset.testimonialsControl === "prev" ? -1 : 1
      strip.scrollBy({
        left: direction * amount(),
        behavior: reduceMotion.matches ? "auto" : "smooth",
      })
    })
  })

  strip.addEventListener("scroll", syncControls, { passive: true })
  window.addEventListener("resize", syncControls)
  syncControls()
}

/* ------------------------------------------------------- formulário */

const form = document.querySelector<HTMLFormElement>("#form-proposta")

if (form) {
  const feedback = document.getElementById("form-feedback")

  form.addEventListener("submit", (event) => {
    event.preventDefault()
    if (!form.reportValidity()) return

    const data = new FormData(form)
    const value = (name: string) => String(data.get(name) ?? "").trim()

    const lines = [
      "Olá, Fernando! Gostaria de solicitar uma proposta de palestra.",
      "",
      `Nome: ${value("nome")}`,
      `Empresa/Instituição: ${value("empresa")}`,
      `Cidade: ${value("cidade")}`,
      `Participantes: ${value("participantes")}`,
      `Tipo de evento: ${value("tipo")}`,
      `Data desejada: ${value("data")}`,
      `Tempo disponível: ${value("tempo")}`,
      `Formato de interesse: ${value("formato")}`,
      "",
      `Objetivo: ${value("objetivo")}`,
      value("email") ? `E-mail para resposta: ${value("email")}` : "",
    ].filter(Boolean)

    const message = lines.join("\n")
    const whatsapp = `https://wa.me/5531998475453?text=${encodeURIComponent(message)}`

    if (feedback) {
      feedback.textContent =
        "Abrindo o WhatsApp com os dados preenchidos. Se a janela não abrir, use o botão de e-mail abaixo."
      feedback.hidden = false
    }

    window.open(whatsapp, "_blank", "noopener")
  })

  // pré-seleciona o formato quando a pessoa chega de /palestras#formatos
  const requested = new URLSearchParams(window.location.search).get("formato")
  if (requested) {
    const select = form.querySelector<HTMLSelectElement>("[name='formato']")
    if (select) {
      const option = Array.from(select.options).find(
        (item) => item.value === requested,
      )
      if (option) select.value = requested
    }
  }
}
