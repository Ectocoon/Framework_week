import CarteContact from "@/components/carte-contact"
import { CONTACT } from "@/data/contact"

const LIENS = [
    { titre: "Email", valeur: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { titre: "LinkedIn", valeur: CONTACT.nom, href: `https://www.linkedin.com/in/${CONTACT.linkedin}` },
    { titre: "GitHub", valeur: CONTACT.github, href: `https://github.com/${CONTACT.github}` }
]

export default function Contact() {
    return (
        <div className="mx-auto max-w-3xl py-8">
            <p className="text-xs font-medium uppercase tracking-wider text-accent">Contact</p>
            <h1 className="mt-3 bg-gradient-to-r from-foreground to-accent bg-clip-text text-5xl font-bold tracking-tight text-transparent">
                Travaillons ensemble
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-doux">
                Je m&apos;appelle {CONTACT.nom}, étudiant à {CONTACT.ecole} à {CONTACT.ville}.
                Un projet, un stage ou une simple question ? Écris-moi, je réponds vite.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {LIENS.map((lien) => (
                    <CarteContact key={lien.titre} titre={lien.titre} valeur={lien.valeur} href={lien.href} />
                ))}

                <div className="rounded-2xl border border-bordure bg-carte p-6">
                    <p className="text-xs font-medium uppercase tracking-wider text-doux">École</p>
                    <p className="mt-2 text-lg font-bold">{CONTACT.ecole}</p>
                    <p className="text-doux">{CONTACT.ville}</p>
                </div>
            </div>
        </div>
    )
}
