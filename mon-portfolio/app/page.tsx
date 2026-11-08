import Bouton from "@/components/bouton"
import Section from "@/components/section"
import Hero from "@/components/hero"
import GrilleProjets from "@/components/grille-projets"
import { PROJETS } from "@/data/projets"

export default function Accueil() {
  return (
    <div>

      <Hero
        titre="Des images, Des jeux, des sites"
        texte="Atemier brume est un studio de production"
      />

      <Section titre="Nos projets">

        <GrilleProjets projets={PROJETS.slice(0, 3)} />

        <div className="mt-8">
          <Bouton label="Voir tous les projets" href="/projets" variante="contour" />
        </div>
      </Section>
    </div>
  )
}