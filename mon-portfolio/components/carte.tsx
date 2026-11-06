import BoutonJaime from "./bouton-jaime"

type Props = {
    titre: string,
    categorie: string,
    resume: string
}

export default function Carte({ titre, categorie, resume }: Props) {
    return (
        <article className="rounded-xl border border-neutral-600 p-5">
            <p className="text-xs uppercase tracking-wide text-neutral-400">{categorie}</p>
            <h3 className="mt-1 text-lg font-bold">{titre}</h3>
            <p className="mt-2 text-sm text-neutral-500">{resume}</p>
            <div className="mt-4">
                <BoutonJaime label="J'aime" href="#" variante="plein" />
            </div>
        </article>
    )

}
