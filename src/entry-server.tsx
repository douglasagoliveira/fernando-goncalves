import { renderToString } from "react-dom/server"
import { Route, Routes, StaticRouter } from "react-router"
import { SiteLayout } from "./components/layout/SiteLayout"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Palestras from "./pages/Palestras"
import Contato from "./pages/Contato"

export { getPageMetadata, personSchema } from "./data/site"

export function renderPage(path: string) {
  return renderToString(
    <StaticRouter location={path}>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="palestras" element={<Palestras />} />
          <Route path="contato" element={<Contato />} />
        </Route>
      </Routes>
    </StaticRouter>,
  )
}
