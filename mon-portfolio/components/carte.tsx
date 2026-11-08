import Image from "next/image"
import Link from "next/link"
import ListeTags from "./liste-tags"
import type { Projet } from "@/data/projets"

type Props = {
    projet: Projet
}

export default function Carte({ projet }: Props) {
    return (
        <article className="group relative overflow-hidden rounded-2xl border border-bordure bg-carte transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl">
            <div className="overflow-hidden">
                <Image
                    src={projet.image}
                    alt={projet.titre}
                    width={800}
                    height={500}
                    className="aspect-[8/5] w-full object-cover transition duration-500 group-hover:scale-105"
                />
            </div>
            <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-doux">
                    {projet.categorie} · {projet.annee}
                </p>
                <h3 className="mt-1 text-lg font-bold transition-colors group-hover:text-accent">
                    {/* Le lien couvre toute la carte grâce à after:absolute */}
                    <Link href={`/projets/${projet.slug}`} className="after:absolute after:inset-0">
                        {projet.titre}
                    </Link>
                </h3>
                <p className="mt-2 text-sm text-doux">{projet.resume}</p>
                <div className="mt-4">
                    <ListeTags tags={projet.tags} />
                </div>
            </div>
        </article>
    )
}
