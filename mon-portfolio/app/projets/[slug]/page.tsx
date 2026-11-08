import Image from "next/image"
import { notFound } from "next/navigation"
import Bouton from "@/components/bouton"
import ListeTags from "@/components/liste-tags"
import { PROJETS, trouverProjet } from "@/data/projets"

type Props = {
    params: Promise<{ slug: string }>
}

export function generateStaticParams() {
    return PROJETS.map((projet) => ({ slug: projet.slug }))
}

export const dynamicParams = false

export default async function PageProjet({ params }: Props) {
    const { slug } = await params
    const projet = trouverProjet(slug)

    if (!projet) {
        notFound()
    }

    return (
        <article className="mx-auto max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-wider text-accent">
                {projet.categorie} · {projet.annee}
            </p>
            <h1 className="mt-3 text-5xl font-bold tracking-tight">{projet.titre}</h1>
            <p className="mt-4 text-lg text-doux">{projet.resume}</p>

            <div className="mt-6">
                <ListeTags tags={projet.tags} />
            </div>

            {/* w-auto + h-auto : le contour suit la taille de l'image, qu'elle soit en paysage ou en portrait */}
            <Image
                src={projet.image}
                alt={projet.titre}
                width={1600}
                height={1000}
                sizes="(max-width: 768px) 100vw, 768px"
                preload
                className="mx-auto mt-10 block h-auto max-h-[70vh] w-auto max-w-full rounded-2xl border border-bordure shadow-xl"
            />

            {projet.description && (
                <div className="mt-10 space-y-5 text-lg leading-relaxed">
                    {projet.description.map((paragraphe) => (
                        <p key={paragraphe}>{paragraphe}</p>
                    ))}
                </div>
            )}

            {projet.fonctionnalites && (
                <section className="mt-10">
                    <h2 className="text-2xl font-bold tracking-tight">Fonctionnalités clés</h2>
                    <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {projet.fonctionnalites.map((fonctionnalite) => (
                            <li key={fonctionnalite.titre} className="rounded-2xl border border-bordure bg-carte p-5">
                                <h3 className="font-bold text-accent">{fonctionnalite.titre}</h3>
                                <p className="mt-1 text-sm text-doux">{fonctionnalite.texte}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {projet.apprentissages && (
                <section className="mt-10">
                    <h2 className="text-2xl font-bold tracking-tight">Ce que j&apos;ai travaillé</h2>
                    <ul className="mt-6 space-y-3">
                        {projet.apprentissages.map((apprentissage) => (
                            <li key={apprentissage} className="flex gap-3 text-doux">
                                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                {apprentissage}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            <div className="mt-10">
                <Bouton label="← Retour aux projets" href="/projets" variante="contour" />
            </div>
        </article>
    )
}
