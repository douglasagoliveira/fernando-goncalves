export const site = {
  url: "https://www.fernandosimplex.com.br",
  name: "Fernando Gonçalves",
  role: "Storyteller e Palestrante Motivacional",
  since: 1992,
  email: "contato@fernandosimplex.com.br",
  phoneLabel: "(31) 99847-5453",
  phoneRaw: "5531998475453",
  whatsapp: "https://wa.me/5531998475453",
  ogImage: "/og-fernando.webp",
} as const

export const social = [
  { label: "Instagram", handle: "@fernandosimplex", href: "https://instagram.com/fernandosimplex" },
  { label: "Facebook", handle: "Fernando Simplex", href: "https://facebook.com/fernandosimplex" },
  { label: "TikTok", handle: "@fernandosimplex", href: "https://tiktok.com/@fernandosimplex" },
  { label: "YouTube", handle: "@FernandoSimplexCanal", href: "https://youtube.com/@FernandoSimplexCanal" },
] as const

export const navigation = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/palestras", label: "Palestras" },
  { href: "/contato", label: "Contato" },
] as const

export const pageSeo = {
  "/": {
    title: "Fernando Gonçalves | Storyteller e Palestrante Motivacional",
    description:
      "Desde 1992, Fernando Gonçalves transforma sua história de vida em reflexão e novas atitudes. Palestras motivacionais para empresas, equipes e eventos.",
  },
  "/sobre": {
    title: "Sobre Fernando Gonçalves | Trajetória, experiência e livros",
    description:
      "A história real por trás das palestras: infância difícil, recomeços, três décadas de atuação em comunicação e desenvolvimento humano, além das obras publicadas.",
  },
  "/palestras": {
    title: "Palestras e método SIMPLEX | Fernando Gonçalves",
    description:
      "Os três momentos da palestra, dinâmicas de interação, o método SIMPLEX e os formatos de 2 a 6 horas, personalizados para cada contratante.",
  },
  "/contato": {
    title: "Solicite uma proposta de palestra | Fernando Gonçalves",
    description:
      "Informe os dados do seu evento e receba uma proposta personalizada de palestra motivacional com Fernando Gonçalves. WhatsApp (31) 99847-5453.",
  },
} as const

export type PagePath = keyof typeof pageSeo

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  alternateName: "Fernando Simplex",
  url: site.url,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  telephone: "+55-31-99847-5453",
  image: `${site.url}${site.ogImage}`,
  description:
    "Storyteller e palestrante motivacional desde 1992. Criador do SIMPLEX — Sistema Motivacional para Performances de Excelência.",
  knowsAbout: [
    "Motivação",
    "Resiliência",
    "Relações humanas",
    "Comunicação interpessoal",
    "Liderança organizacional",
    "Desenvolvimento humano",
  ],
  sameAs: social.map((item) => item.href),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Belo Horizonte",
    addressRegion: "MG",
    addressCountry: "BR",
  },
}
