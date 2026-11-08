import Bouton from "./bouton"

type Props = {
    titre: string
    texte: string
    avecBouton?: boolean
}

export default function Hero({ titre, texte, avecBouton = true }: Props) {
    return (
        <div className="py-16">
            <h1 className="max-w-2xl bg-gradient-to-r from-foreground to-accent bg-clip-text text-5xl font-bold tracking-tight text-transparent">
                {titre}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-doux">{texte}</p>
            {avecBouton && (
                <div className="mt-8">
                    <Bouton label="Voir les projets" href="/projets" />
                </div>
            )}
        </div>
    )
}
