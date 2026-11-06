import type { ReactNode } from "react"

type Props = {
    titre: string
    children: ReactNode
}

export default function Section({ titre, children }: Props) {
    return (
        <section className="py-10">
            <h2 className="mb-6 text-2xl font-semibold">{titre}</h2>
            {children}
        </section>
    )
}
