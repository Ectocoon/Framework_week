import Hero from "@/components/hero"
import Carte from "@/components/carte"
import { PROJETS } from "@/data/projets"

export default function Projets() {
    return (
        <div>
            <Hero
                titre="Mon portfolio"
                texte="Découvrez mes projets et réalisations à travers ce portfolio. Explorez mon univers créatif et plongez dans mes travaux les plus récents."
            />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {PROJETS.map((projet) => (
                    <Carte key={projet.slug} projet={projet} />
                ))}
            </div>
        </div>
    )
}
