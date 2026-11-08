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
                        ? "bg-foreground text-background"
                        : "border border-neutral-600 text-neutral-400 hover:text-foreground"

                    return (
                        <button
                            key={categorie}
                            onClick={() => setCategorieActive(categorie)}
                            className={`rounded-full px-4 py-1 text-sm ${style}`}
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
