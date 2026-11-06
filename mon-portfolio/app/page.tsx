import Image from "next/image";
import Bouton from "@/components/bouton"
import Section from "@/components/section"
import Hero from "@/components/hero"
import Carte from "@/components/carte"
import Accordeon from "@/components/accordeon"

type Projet = {
  id: number,
  titre: string,
  resume: string,
  categorie: string
}

const PROJETS: Projet[] = [
  { id: 1, titre: "Brasserie Noue", resume: "identité visuelle", categorie: "marque" },
  { id: 2, titre: "Brasserie baba", resume: "identité visu", categorie: "marque" },
  { id: 3, titre: "Brasserie nana", resume: "identité visuelle", categorie: "marque" }
]

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
    <main className="mx-auto max-w-3xl px-6 py-16">

      <Hero
        titre="Des images, Des jeux, des sites"
        texte="Atemier brume est un studio de production"
      />

      <Section titre="Nos projets">

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJETS.map((projet) => (
            <Carte
              key={projet.id}
              titre={projet.titre}
              categorie={projet.categorie}
              resume={projet.resume}
            />
          ))}
        </div>

        <Bouton label="voir plus" href="/projet" variante="plein"></Bouton>
      </Section>

      <div className="mt-16">
        <Bouton label="voir les projets" href="/projet" variante="contour">Voir tous les projets</Bouton>
      </div>

      {QUESTIONS.map((question) =>
        <Accordeon
          key={question.id}
          question={question.question}
          children={question.children}
        />
      )}

    </main>
  )
}