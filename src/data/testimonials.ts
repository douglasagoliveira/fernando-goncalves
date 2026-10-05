import adelmo from "../assets/depoimento-adelmo.webp"
import daniella from "../assets/depoimento-daniella.webp"
import dea from "../assets/depoimento-dea.webp"
import eugenio from "../assets/depoimento-eugenio.webp"
import fabiana from "../assets/depoimento-fabiana.webp"
import isac from "../assets/depoimento-isac.webp"
import lair from "../assets/depoimento-lair.webp"
import mario from "../assets/depoimento-mario.webp"
import paulo from "../assets/depoimento-paulo.webp"
import renato from "../assets/depoimento-renato.webp"

export type Testimonial = {
  quote: string
  name: string
  role: string
  photo: ImageMetadata
}

/** Depoimentos reais, com autorização e fotografia fornecidas pelo cliente. */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Nossa equipe ficou motivada e proativa após participar da palestra do Fernando. A forma como ele interage com os colaboradores atua como um propulsor profissional e pessoal. Melhoramos nossa produtividade, atendimento e relacionamento entre os colaboradores.",
    name: "Isac Vieira",
    role: "Diretor da CME Eventos",
    photo: isac,
  },
  {
    quote:
      "Uma palestra leve, mas profunda, que levanta a equipe. A abordagem do Fernando foi de uma precisão cirúrgica ao relatar suas adversidades profissionais e pessoais. Houve comoção, conscientização, reflexão e ótimos resultados. Nossos colaboradores se tornaram mais conscientes, responsáveis, motivados e produtivos.",
    name: "Fabiana Guimarães",
    role: "Proprietária da Pérolas Recreações Infantis",
    photo: fabiana,
  },
  {
    quote:
      "Fernando Gonçalves é um comunicador nato. Persuasivo e influente, faz de suas palestras uma verdadeira sessão de conexão entre as pessoas. Após sua palestra o ambiente fica leve e os colaboradores se relacionam mais conscientemente com os colegas e superiores.",
    name: "José Adelmo de Matos",
    role: "Diretor Executivo da CotaPet",
    photo: adelmo,
  },
  {
    quote:
      "Conhecer o Projeto SIMPLEX e participar das palestras conduzidas por Fernando representou um importante diferencial para o desenvolvimento e a motivação de nossa equipe. Uma abordagem inovadora, que proporcionou nova perspectiva sobre empatia, colaboração, resiliência e valorização profissional.",
    name: "Paulo Matos",
    role: "CEO da Imperium Global Group",
    photo: paulo,
  },
  {
    quote:
      "Acompanho a trajetória de Fernando Gonçalves há mais de 20 anos. Um exímio palestrante que desenvolveu seu próprio método de explanar, interagir e cativar o público. Nenhuma de suas ministrações é igual à outra: cada uma é única.",
    name: "Dea Lúcia Maia Teixeira",
    role: "Diretora da G7 Consultoria",
    photo: dea,
  },
  {
    quote:
      "Tive o prazer de conhecer Fernando em 2018. Suas palestras são excepcionais, com um método diferenciado que cativa o público, fazendo-o refletir sobre mudanças simples que podem surtir grandes resultados. Além de carismático, tem uma técnica diferenciada de abordar seus conteúdos.",
    name: "Eugênio Pinto",
    role: "Ex-prefeito de Itaúna — MG",
    photo: eugenio,
  },
  {
    quote:
      "A metodologia utilizada por Fernando Gonçalves, através do método SIMPLEX, contribui para que os colaboradores ampliem a percepção sobre seu próprio valor, suas competências e a importância de sua contribuição para os resultados coletivos.",
    name: "Renato G. Ferreira",
    role: "Professor da ENT Pampulha — BH",
    photo: renato,
  },
  {
    quote:
      "O trabalho que Fernando desenvolve para o Sindicato tem surtido grande efeito. Nossos associados recebem informação de alto nível numa linguagem simples, como lhe é peculiar. Suas orientações têm ajudado associados, colaboradores e as famílias das zonas rurais.",
    name: "Mário Sotero Borges",
    role: "Presidente do Sindicato dos Trabalhadores Rurais — MG",
    photo: mario,
  },
  {
    quote:
      "Recomendamos o Projeto SIMPLEX e as palestras de Fernando Gonçalves com grande satisfação, especialmente às organizações que buscam fortalecer suas equipes e promover uma cultura de valorização das pessoas.",
    name: "Daniella Cardoso",
    role: "CEO da Vivara Corretora de Seguros",
    photo: daniella,
  },
  {
    quote:
      "Fernando tem sua expertise fundamentada em experiências diversas ao longo de sua ampla trajetória. Recebo consultoria no mandato e suporte para minha equipe através de suas palestras e dicas fundamentais. Recomendo seu excelente trabalho.",
    name: "Lair Lopes",
    role: "Vereador de Itatiaiuçu — MG",
    photo: lair,
  },
]
