import Image from "next/image"
import Link from "next/link"
import ListeTags from "./liste-tags"
import type { Projet } from "@/data/projets"

type Props = {
    projet: Projet
}

export default function Carte({ projet }: Props) {
    return (
        <article className="overflow-hidden rounded-xl border border-neutral-600">
            <Image
                src={projet.image}
                alt={projet.titre}
                width={800}
                height={500}
                className="h-auto w-full"
            />
            <div className="p-5">
                <p className="text-xs uppercase tracking-wide text-neutral-400">
                    {projet.categorie} · {projet.annee}
                </p>
                <h3 className="mt-1 text-lg font-bold">
                    <Link href={`/projets/${projet.slug}`} className="hover:underline">
                        {projet.titre}
                    </Link>
                </h3>
                <p className="mt-2 text-sm text-neutral-500">{projet.resume}</p>
                <div className="mt-3">
                    <ListeTags tags={projet.tags} />
                </div>
            </div>
        </article>
    )
}
