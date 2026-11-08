import Bouton from "@/components/bouton"

export default function PageIntrouvable() {
    return (
        <div className="py-16 text-center">
            <p className="text-6xl font-bold">404</p>
            <h1 className="mt-4 text-2xl font-semibold">Page introuvable</h1>
            <p className="mt-2 text-neutral-500">Ce projet ou cette page n&apos;existe pas.</p>
            <div className="mt-8">
                <Bouton label="Voir les projets" href="/projets" />
            </div>
        </div>
    )
}
