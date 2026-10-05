import { useEffect, useRef, useState } from "react"
import { Link, NavLink, Outlet, useLocation } from "react-router"
import { Arrow } from "../ui"
import { BrandLogo } from "../ui/BrandLogo"
import { getPageMetadata } from "../../data/site"
import { useSiteMotion } from "./useSiteMotion"

const navigation = [
  ["/", "Início"],
  ["/sobre", "Sobre"],
  ["/palestras", "Palestras"],
  ["/contato", "Contato"],
]

export function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const mainRef = useRef<HTMLElement>(null)
  const previousPath = useRef(location.pathname)
  useSiteMotion(location.pathname)

  useEffect(() => {
    const metadata = getPageMetadata(location.pathname)
    document.title = metadata.title
    for (const [attribute, name, value] of [
      ["name", "description", metadata.description],
      ["property", "og:title", metadata.title],
      ["property", "og:description", metadata.description],
      ["property", "og:url", metadata.url],
      ["property", "og:image", metadata.image],
      ["name", "twitter:title", metadata.title],
      ["name", "twitter:description", metadata.description],
      ["name", "twitter:image", metadata.image],
    ]) {
      let element = document.head.querySelector<HTMLMetaElement>(
        `meta[${attribute}="${name}"]`,
      )
      if (!element) {
        element = document.createElement("meta")
        element.setAttribute(attribute, name)
        document.head.append(element)
      }
      element.content = value
    }
    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    )
    if (!canonical) {
      canonical = document.createElement("link")
      canonical.rel = "canonical"
      document.head.append(canonical)
    }
    canonical.href = metadata.url
    setMenuOpen(false)
    if (previousPath.current !== location.pathname) {
      window.scrollTo({ top: 0, behavior: "instant" })
      mainRef.current?.focus({ preventScroll: true })
      previousPath.current = location.pathname
    }
  }, [location.pathname])

  return (
    <>
      <a
        href="#conteudo"
        className="fixed left-4 top-4 z-50 -translate-y-24 rounded bg-white p-3 text-sm focus:translate-y-0"
      >
        Pular para o conteúdo
      </a>
      <header
        className={`site-header${menuOpen ? " is-menu-open" : ""}`}
      >
        <div className="flex items-center gap-4 md:gap-6">
          <Link
            to="/"
            className="brand"
            aria-label="Fernando Gonçalves — início"
          >
            <b>FERNANDO</b>
            <span>GONÇALVES</span>
          </Link>
          <Link
            to="/palestras"
            className="border-l border-white/25 pl-4 md:pl-6"
            aria-label="Conheça o método SIMPLEX"
          >
            <span className="header-logo-switch" aria-hidden="true">
              <BrandLogo
                className="header-logo header-logo--light h-14 w-14 md:h-16 md:w-16"
              />
              <BrandLogo
                variant="color"
                className="header-logo header-logo--color h-14 w-14 md:h-16 md:w-16"
              />
            </span>
          </Link>
        </div>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          onKeyDown={(event) => {
            if (event.key === "Escape") setMenuOpen(false)
          }}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
        >
          {menuOpen ? "Fechar" : "Menu"}
        </button>
        <nav
          id="main-nav"
          aria-label="Navegação principal"
          className={menuOpen ? "is-open" : ""}
          onKeyDown={(event) => {
            if (event.key === "Escape") setMenuOpen(false)
          }}
        >
          {navigation.map(([path, label]) => (
            <NavLink
              key={path}
              to={path}
              end
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-white underline underline-offset-8 decoration-[var(--on-dark-accent)]"
                  : ""
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <Link to="/contato" className="header-cta">
          Solicitar proposta <Arrow />
        </Link>
        <noscript>
          <div className="flex flex-wrap gap-3 text-xs">
            {navigation.map(([path, label]) => (
              <a key={path} href={path}>
                {label}
              </a>
            ))}
          </div>
        </noscript>
      </header>
      <main
        key={location.pathname}
        id="conteudo"
        ref={mainRef}
        tabIndex={-1}
        className="route-surface outline-none"
      >
        <Outlet />
      </main>
      <footer>
        <div className="footer-brand">
          <Link to="/palestras" aria-label="Conheça o método SIMPLEX">
            <BrandLogo className="w-28 md:w-36" />
          </Link>
          <h2>
            Fernando
            <br />
            Gonçalves
          </h2>
        </div>
        <div>
          <p>Storyteller e Palestrante Motivacional</p>
          <a href="mailto:contato@fernandosimplex.com.br">
            contato@fernandosimplex.com.br
          </a>
          <p>
            <a href="https://wa.me/5531998475453">(31) 99847–5453</a>
          </p>
        </div>
        <div
          className="col-span-full flex flex-wrap gap-x-7 gap-y-3 text-xs"
          aria-label="Links do rodapé"
        >
          {navigation.map(([path, label]) => (
            <Link key={path} to={path} className="hover:text-white">
              {label}
            </Link>
          ))}
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} · Fernando Gonçalves · Todos os direitos
          reservados
        </p>
      </footer>
    </>
  )
}
