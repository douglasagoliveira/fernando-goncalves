import { RouterProvider, createBrowserRouter } from "react-router"
import { SiteLayout } from "../components/layout/SiteLayout"
import Home from "../pages/Home"

export const router = createBrowserRouter([
  {
    Component: SiteLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "sobre",
        lazy: async () => ({
          Component: (await import("../pages/Sobre")).default,
        }),
      },
      {
        path: "palestras",
        lazy: async () => ({
          Component: (await import("../pages/Palestras")).default,
        }),
      },
      {
        path: "contato",
        lazy: async () => ({
          Component: (await import("../pages/Contato")).default,
        }),
      },
      { path: "*", Component: Home },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
