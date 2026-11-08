"use client"

import { useState } from "react"
import GrilleProjets from "./grille-projets"
import type { Projet } from "@/data/projets"

type Props = {
    projets: Projet[]
}

const TOUTES = "Tous"

export default function FiltreProjets({ projets }: Props) {
    const [categorieActive, setCategorieActive] = useState(TOUTES)

    const categories = [TOUTES, ...new Set(projets.map((projet) => projet.categorie))]

    const projetsAffiches = categorieActive === TOUTES
        ? projets
        : projets.filter((projet) => projet.categorie === categorieActive)

    return (
        <div>
            <div className="mb-8 flex flex-wrap gap-3">
                {categories.map((categorie) => {
                    const style = categorie === categorieActive
                        ? "bg-accent text-white"
                        : "border border-bordure text-doux hover:border-accent hover:text-accent"

                    return (
                        <button
                            key={categorie}
                            onClick={() => setCategorieActive(categorie)}
                            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${style}`}
                        >
                            {categorie}
                        </button>
                    )
                })}
            </div>

            <GrilleProjets projets={projetsAffiches} />
        </div>
    )
}
