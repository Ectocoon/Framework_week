export type Projet = {
    slug: string
    titre: string
    resume: string
    categorie: string
    annee: number
    image: string
    tags: string[]
    description?: string[] // un élément = un paragraphe
    fonctionnalites?: Fonctionnalite[]
    apprentissages?: string[]
}

export type Fonctionnalite = {
    titre: string
    texte: string
}

export const PROJETS: Projet[] = [
    {
        slug: "seed",
        titre: "Seed",
        resume: "Site de sensibilisation à la déforestation, réalisé en projet transversal",
        categorie: "Dev",
        annee: 2026,
        image: "/projets/seed.png",
        tags: ["HTML", "CSS", "JavaScript", "Swiper JS", "Projet transversal"],
        description: [
            "Chaque année, le Projet Transversal réunit les étudiants de première année autour d'un enjeu de société. En 2026, le thème était la protection de la biodiversité, en lien avec les ODD 13, 14 et 15.",
            "Avec mon groupe d'une dizaine d'étudiants, nous avons créé Seed, un site qui alerte sur la déforestation et la surconsommation. Le groupe était réparti en trois divisions (agence créa-com-tech, studio film, studio jeu vidéo) qui partageaient la même charte graphique et le même message, pour toucher des publics différents.",
            "J'étais le seul développeur web de l'équipe : j'ai développé tout le site, de l'intégration de la charte graphique à l'interactivité (carrousel Swiper JS, quiz de sensibilisation).",
            "Nous avons suivi toutes les étapes d'un vrai projet : idéation, planification, production, semaine de sprint, puis soutenance devant un jury de professionnels, où nous jouions une agence qui défend son projet."
        ],
        fonctionnalites: [
            { titre: "Charte graphique", texte: "Intégration de la charte commune aux trois divisions du projet" },
            { titre: "Carrousel", texte: "Défilement de contenus avec Swiper JS" },
            { titre: "Quiz de sensibilisation", texte: "Questions interactives sur la déforestation et la surconsommation" }
        ]
    },
    {
        slug: "pokecollect",
        titre: "PokeCollect",
        resume: "Site de cartes Pokémon à collectionner : boosters, collection et API",
        categorie: "Dev",
        annee: 2025,
        image: "/projets/pokecollect.png",
        tags: ["HTML", "CSS", "JavaScript", "API"],
        description: [
            "Pour mon projet de première année, j'ai conçu un site de cartes à collectionner autour de l'univers Pokémon. On y ouvre des boosters, on découvre ses cartes et on construit sa collection. Les données de chaque Pokémon viennent d'une API, et le site propose un dark mode pour le confort de lecture."
        ],
        fonctionnalites: [
            { titre: "Boosters", texte: "Ouverture de packs avec tirage de cartes" },
            { titre: "API", texte: "Récupération des informations des Pokémon (noms, types, images…)" },
            { titre: "Compte utilisateur", texte: "Inscription et connexion" },
            { titre: "Collection", texte: "Toutes mes cartes au même endroit, avec filtres et favoris" },
            { titre: "Dark mode", texte: "Bascule entre thème clair et sombre" }
        ]
    },
    {
        slug: "nextrep",
        titre: "NextRep",
        resume: "Web app mobile pour accompagner mes séances de sport",
        categorie: "Dev",
        annee: 2026,
        image: "/projets/nextrep.png",
        tags: ["HTML", "CSS", "JavaScript", "Mobile-first", "API navigateur"],
        description: [
            "Une web app mobile pour accompagner mes séances de sport.",
            "Je m'entraîne avec mon téléphone à la main, alors j'ai créé l'outil dont j'avais besoin : une appli simple, rapide et pensée pour être utilisée entre deux séries."
        ],
        fonctionnalites: [
            { titre: "Séances personnalisables", texte: "Exercices présentés en tableau, à cocher au fil de l'entraînement, avec un mode édition pour les modifier" },
            { titre: "Chrono de repos automatique", texte: "Je pose mon téléphone pendant la série, et le repos se lance dès que je le reprends, grâce à l'accéléromètre. Vibration et son à la fin" },
            { titre: "Écran toujours allumé", texte: "L'écran reste allumé pendant toute la séance" },
            { titre: "Sauvegarde locale", texte: "Les données restent sur l'appareil, sans compte à créer" }
        ],
        apprentissages: [
            "Une approche mobile-first : gros boutons, navigation au pouce, thème sombre.",
            "Les API du navigateur : DeviceMotion, Wake Lock, Vibration, Web Audio, localStorage.",
            "Une architecture CSS modulaire et un JavaScript sans framework.",
            "Un logo et une identité en SVG.",
            "Le déploiement sur Render, nécessaire pour accéder aux capteurs."
        ]
    },
    {
        slug: "amazon",
        titre: "Amazon",
        resume: "La petite librairie en ligne que j'ai lancée dans mon garage",
        categorie: "Dev",
        annee: 1994,
        image: "/projets/amazon-sourire.png",
        tags: ["E-commerce", "Logistique", "Cloud"],
        description: [
            "En 1994, j'ai lancé Amazon depuis mon garage avec une idée simple : vendre des livres sur Internet. Pas de magasin, pas de vendeurs, juste un site web et beaucoup d'ambition.",
            "Très vite, la librairie s'est transformée en « magasin de tout » : électronique, vêtements, jouets… Aujourd'hui, Amazon livre des millions de colis chaque jour, et je continue de penser qu'on n'en est qu'au début."
        ],
        fonctionnalites: [
            { titre: "Marketplace", texte: "Des millions de produits vendus par Amazon et par des vendeurs du monde entier" },
            { titre: "Livraison express", texte: "Un réseau logistique pensé pour livrer en un jour, parfois moins" },
            { titre: "Amazon Web Services", texte: "Le cloud qui fait tourner une bonne partie d'Internet" }
        ]
    },
    {
        slug: "wall-e",
        titre: "Wall-E",
        resume: "Modélisation 3D du robot Wall-E dans Blender",
        categorie: "3D",
        annee: 2026,
        image: "/projets/wall-e.png",
        tags: ["Blender", "Modélisation", "Hard surface"],
        description: [
            "Modélisation du célèbre robot du film Pixar, réalisée dans Blender. Le projet m'a permis de travailler la modélisation d'objets mécaniques : chenilles, bras articulés, tête et yeux, en respectant les proportions du personnage."
        ]
    },
    {
        slug: "chambre-isometrique",
        titre: "Chambre isométrique",
        resume: "Une chambre en vue isométrique, modélisée et éclairée dans Blender",
        categorie: "3D",
        annee: 2026,
        image: "/projets/chambre-isometrique.png",
        tags: ["Blender", "Modélisation", "Éclairage", "Rendu"],
        description: [
            "Une chambre modélisée en vue isométrique, comme une maison de poupée ouverte sur deux côtés. Bureau avec setup gaming, panneaux lumineux hexagonaux, lit, plante, skateboard : chaque objet a été modélisé dans Blender.",
            "J'ai surtout travaillé l'ambiance : la lumière du soleil qui passe à travers les stores, l'éclairage des panneaux LED et les matériaux (parquet, tissus, bois) pour donner une scène chaleureuse."
        ]
    }
]

export function trouverProjet(slug: string): Projet | undefined {
    return PROJETS.find((projet) => projet.slug === slug)
}
