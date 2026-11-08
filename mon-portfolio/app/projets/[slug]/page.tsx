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
        <article>
            <p className="text-xs uppercase tracking-wide text-neutral-400">
                {projet.categorie} · {projet.annee}
            </p>
            <h1 className="mt-2 text-4xl font-bold">{projet.titre}</h1>
            <p className="mt-4 text-neutral-500">{projet.resume}</p>

            <div className="mt-6">
                <ListeTags tags={projet.tags} />
            </div>

            <Image
                src={projet.image}
                alt={projet.titre}
                width={800}
                height={500}
                className="mt-8 h-auto w-full rounded-xl"
            />

            <div className="mt-10">
                <Bouton label="← Retour aux projets" href="/projets" variante="contour" />
            </div>
        </article>
    )
}
