import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { router } from "./app/App"
import "./index.css"

function mount() {
  const root = document.getElementById("root")!
  const application = (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
  if (root.hasChildNodes()) {
    ReactDOM.hydrateRoot(root, application)
  } else {
    ReactDOM.createRoot(root).render(application)
  }
}

if (router.state.initialized) {
  mount()
} else {
  const unsubscribe = router.subscribe((state) => {
    if (state.initialized) {
      unsubscribe()
      mount()
    }
  })
}
