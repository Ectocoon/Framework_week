import Hero from "@/components/hero"
import Carte from "@/components/carte"

type Projet = {
    id: number,
    titre: string,
    resume: string,
    categorie: string
}

const PROJETS: Projet[] = [
    { id: 1, titre: "Seed", resume: "PProjet Transversal", categorie: "Dev" },
    { id: 2, titre: "PokeCollect", resume: "Projet Année 1", categorie: "Dev" },
    { id: 3, titre: "Jeu de plateau", resume: "Site permettant de jouer au jeu", categorie: "Dev" },
    { id: 4, titre: "NextRep", resume: "Application pour assister a la salle", categorie: "Dev" },
    { id: 5, titre: "Jsp 1", resume: "Ptet jvais trouver", categorie: "3D" },
    { id: 6, titre: "Jsp 2", resume: "Ou peut etre pas", categorie: "3D" }
]

export default function Projets() {
    return (
        <div>
            <Hero
                titre="Mon portfolio"
                texte="Découvrez mes projets et réalisations à travers ce portfolio. Explorez mon univers créatif et plongez dans mes travaux les plus récents."
            />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {PROJETS.map((projet) => (
                    <Carte
                        key={projet.id}
                        titre={projet.titre}
                        categorie={projet.categorie}
                        resume={projet.resume}
                    />
                ))}
            </div>
        </div>
    )
}
