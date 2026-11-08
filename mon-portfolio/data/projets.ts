export type Projet = {
    slug: string
    titre: string
    resume: string
    categorie: string
    annee: number
    image: string
    tags: string[]
}

export const PROJETS: Projet[] = [
    {
        slug: "seed",
        titre: "Seed",
        resume: "Projet transversal",
        categorie: "Dev",
        annee: 2026,
        image: "/projets/seed.svg",
        tags: ["Projet transversal", "Équipe", "Web"]
    },
    {
        slug: "pokecollect",
        titre: "PokeCollect",
        resume: "Projet année 1",
        categorie: "Dev",
        annee: 2025,
        image: "/projets/pokecollect.svg",
        tags: ["HTML", "CSS", "JavaScript"]
    },
    {
        slug: "jeu-de-plateau",
        titre: "Jeu de plateau",
        resume: "Site permettant de jouer au jeu",
        categorie: "Dev",
        annee: 2025,
        image: "/projets/jeu-de-plateau.svg",
        tags: ["JavaScript", "Jeu"]
    },
    {
        slug: "nextrep",
        titre: "NextRep",
        resume: "Application pour assister à la salle",
        categorie: "Dev",
        annee: 2026,
        image: "/projets/nextrep.svg",
        tags: ["Application", "Sport"]
    },
    {
        slug: "jsp-1",
        titre: "Jsp 1",
        resume: "Ptet jvais trouver",
        categorie: "3D",
        annee: 2026,
        image: "/projets/jsp-1.svg",
        tags: ["Blender", "Modélisation"]
    },
    {
        slug: "jsp-2",
        titre: "Jsp 2",
        resume: "Ou peut être pas",
        categorie: "3D",
        annee: 2026,
        image: "/projets/jsp-2.svg",
        tags: ["Blender", "Rendu"]
    }
]

export function trouverProjet(slug: string): Projet | undefined {
    return PROJETS.find((projet) => projet.slug === slug)
}
