import Bouton from "@/components/bouton"

export default function PageIntrouvable() {
    return (
        <div className="py-24 text-center">
            <p className="bg-gradient-to-r from-foreground to-accent bg-clip-text text-8xl font-bold tracking-tight text-transparent">
                404
            </p>
            <h1 className="mt-6 text-2xl font-bold">Page introuvable</h1>
            <p className="mt-2 text-doux">Ce projet ou cette page n&apos;existe pas.</p>
            <div className="mt-8">
                <Bouton label="Voir les projets" href="/projets" />
            </div>
        </div>
    )
}
