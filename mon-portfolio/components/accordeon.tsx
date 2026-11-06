"use client"

import { useState, type ReactNode } from "react"

type Props = {
    question: string
    children: ReactNode
}

export default function Accordeon({ question, children }: Props) {
    const [ouvert, setOuvert] = useState(false)

    return (
        <div className="border-b border-neutral-200 py-4">
            <button onClick={() => setOuvert(!ouvert)} className="font-medium">
                {question}
            </button>
            {ouvert && <p className="mt-2 text-neutral-600">{children}</p>}
        </div>
    )
}
