// @ts-check
import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  site: "https://www.fernandosimplex.com.br",
  trailingSlash: "never",
  integrations: [sitemap({ lastmod: new Date() })],
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
  build: { inlineStylesheets: "auto", format: "file" },
  image: {
    // AVIF/WebP são gerados em tempo de build pelo serviço sharp.
    responsiveStyles: true,
  },
  server: { host: true, port: 4321 },
  vite: {
    server: {
      allowedHosts: [".e2b.app", "localhost"],
    },
    build: {
      cssMinify: "lightningcss",
    },
  },
})
