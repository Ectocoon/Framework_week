import Carte from "./carte"
import type { Projet } from "@/data/projets"

type Props = {
    projets: Projet[]
}

export default function GrilleProjets({ projets }: Props) {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projets.map((projet) => (
                <Carte key={projet.slug} projet={projet} />
            ))}
        </div>
    )
}
