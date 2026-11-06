"use client"

import { useState } from "react";

export default function BoutonJaime({ label, href, variante }: { label: string, href: string, variante: "plein" | "vide" }) {

    const [aime, setAime] = useState(false)

    const style = aime
        ? "border-red-500 bg-red-500 text-white"
        : "border-neutral-300"

    return (
        <button onClick={() => setAime(!aime)} className={`rounded border px-3 py-1 text-sm ${style}`}>
            {aime ? "J'aime" : "J'aime pas"}
        </button>
    )
}