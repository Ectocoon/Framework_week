"use client"

import { useState } from "react"

type Theme = "clair" | "sombre"

function themeDuSysteme(): Theme {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "sombre" : "clair"
}

export default function BoutonTheme() {
    // null = le site suit le thème du système tant qu'on n'a pas cliqué
    const [theme, setTheme] = useState<Theme | null>(null)

    function changerTheme() {
        const themeActuel = theme ?? themeDuSysteme()
        const nouveauTheme = themeActuel === "sombre" ? "clair" : "sombre"

        document.documentElement.dataset.theme = nouveauTheme
        setTheme(nouveauTheme)
    }

    const icone = theme === null ? "◐" : theme === "sombre" ? "☾" : "☀"

    return (
        <button
            onClick={changerTheme}
            aria-label="Changer de thème"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-bordure text-sm transition hover:border-accent hover:text-accent"
        >
            {icone}
        </button>
    )
}
