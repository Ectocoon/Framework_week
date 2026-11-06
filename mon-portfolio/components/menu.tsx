import Link from "next/link"

const LIENS = [
    { href: "/", label: "Accueil" },
    { href: "/projets", label: "Projets" },
    { href: "/contact", label: "Contact" },
]

export default function Menu() {
    return (
        <nav className="flex items-center justify-between border-b border-neutral-200 py-4">
            <Link href="/" className="font-semibold">Decret Lucas</Link>
            <ul className="flex gap-6 text-sm text-neutral-600">
                {LIENS.map((lien) => (
                    <li key={lien.href}>
                        <Link href={lien.href}>{lien.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}