import Hero from "@/components/hero"
import FiltreProjets from "@/components/filtre-projets"
import { PROJETS } from "@/data/projets"

export default function Projets() {
    return (
        <div>
            <Hero
                titre="Mon portfolio"
                texte="Découvrez mes projets et réalisations à travers ce portfolio. Explorez mon univers créatif et plongez dans mes travaux les plus récents."
                avecBouton={false}
            />

            <FiltreProjets projets={PROJETS} />
        </div>
    )
}
