import Bouton from "./bouton"

export default function Accueil() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-16">
            <h1 className="text-4xl text-red-500 font-semibold">Mon portfolio</h1>
            <p className="text-4xl text-doux">Étudiant en développement web.</p>
            <Bouton label="Voir tous les projets" href="/projets" variante="plein" />
        </main>
    )
}