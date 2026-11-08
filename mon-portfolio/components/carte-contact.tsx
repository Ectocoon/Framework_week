type Props = {
    titre: string
    valeur: string
    href: string
}

export default function CarteContact({ titre, valeur, href }: Props) {
    // Les liens vers un autre site s'ouvrent dans un nouvel onglet
    const lienExterne = href.startsWith("http")

    return (
        <a
            href={href}
            target={lienExterne ? "_blank" : undefined}
            rel={lienExterne ? "noopener noreferrer" : undefined}
            className="group block rounded-2xl border border-bordure bg-carte p-6 transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl"
        >
            <p className="text-xs font-medium uppercase tracking-wider text-doux">{titre}</p>
            <p className="mt-2 break-all text-lg font-bold transition-colors group-hover:text-accent">
                {valeur} <span aria-hidden="true">→</span>
            </p>
        </a>
    )
}
