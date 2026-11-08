import type { ReactNode } from "react"

type Props = {
    titre: string
    children: ReactNode
}

export default function Section({ titre, children }: Props) {
    return (
        <section className="py-10">
            <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold tracking-tight">
                <span className="h-6 w-1 rounded-full bg-accent" />
                {titre}
            </h2>
            {children}
        </section>
    )
}
