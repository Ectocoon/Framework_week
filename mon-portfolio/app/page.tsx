import Bouton from "@/components/bouton"
import Section from "@/components/section"
import Hero from "@/components/hero"
import Carte from "@/components/carte"
import Accordeon from "@/components/accordeon"
import { PROJETS } from "@/data/projets"

type Questions = {
  id: number,
  question: string,
  children: string
}

const QUESTIONS: Questions[] = [
  { id: 1, question: "Ca va ?", children: "tg" },
  { id: 2, question: "Ca va ou pas ?", children: "taaaag" },
  { id: 3, question: "Ca azeazeva ?", children: "tgazeaz" }
]

export default function Accueil() {
  return (
    <div>

      <Hero
        titre="Des images, Des jeux, des sites"
        texte="Atemier brume est un studio de production"
      />

      <Section titre="Nos projets">

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJETS.slice(0, 3).map((projet) => (
            <Carte key={projet.slug} projet={projet} />
          ))}
        </div>

        <Bouton label="voir plus" href="/projets" variante="plein"></Bouton>
      </Section>

      <div className="mt-16">
        <Bouton label="voir les projets" href="/projets" variante="contour" />
      </div>

      {QUESTIONS.map((question) =>
        <Accordeon
          key={question.id}
          question={question.question}
        >
          {question.children}
        </Accordeon>
      )}

    </div>
  )
}