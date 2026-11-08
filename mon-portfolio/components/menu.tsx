import Link from "next/link"
import BoutonTheme from "./bouton-theme"

const LIENS = [
    { href: "/", label: "Accueil" },
    { href: "/projets", label: "Projets" },
    { href: "/contact", label: "Contact" },
]

export default function Menu() {
    return (
        <nav className="sticky top-4 z-10 mt-4 flex items-center justify-between rounded-2xl border border-bordure bg-carte/80 px-6 py-3 shadow-lg backdrop-blur">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
                <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                Decret Lucas
            </Link>
            <div className="flex items-center gap-6">
                <ul className="flex gap-6 text-sm text-doux">
                    {LIENS.map((lien) => (
                        <li key={lien.href}>
                            <Link href={lien.href} className="transition-colors hover:text-accent">
                                {lien.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <BoutonTheme />
            </div>
        </nav>
    )
}
