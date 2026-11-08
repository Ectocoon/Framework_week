import Bouton from "@/components/bouton"
import Section from "@/components/section"
import Hero from "@/components/hero"
import GrilleProjets from "@/components/grille-projets"
import { PROJETS } from "@/data/projets"

const DOMAINES = [
  {
    categorie: "Dev",
    titre: "Développement web",
    texte: "Sites et applications avec HTML, CSS, JavaScript, React et Next.js."
  },
  {
    categorie: "3D",
    titre: "Création 3D",
    texte: "Modélisation et rendu de scènes avec Blender."
  }
]

export default function Accueil() {
  return (
    <div>
      <Hero
        titre="Salut, moi c'est Lucas, développeur web"
        texte="Étudiant en développement web, je conçois des sites et des applications, et j'explore aussi la 3D. Voici une sélection de mes projets."
      />

      <Section titre="Ce que je fais">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {DOMAINES.map((domaine) => {
            const nombreProjets = PROJETS.filter((projet) => projet.categorie === domaine.categorie).length

            return (
              <div key={domaine.categorie} className="rounded-2xl border border-bordure bg-carte p-6">
                <p className="text-xs font-medium uppercase tracking-wider text-accent">
                  {nombreProjets} projets
                </p>
                <h3 className="mt-2 text-xl font-bold">{domaine.titre}</h3>
                <p className="mt-2 text-doux">{domaine.texte}</p>
              </div>
            )
          })}
        </div>
      </Section>

      <Section titre="Derniers projets">
        <GrilleProjets projets={PROJETS.slice(0, 3)} />

        <div className="mt-8">
          <Bouton label="Voir tous les projets" href="/projets" variante="contour" />
        </div>
      </Section>
    </div>
  )
}
