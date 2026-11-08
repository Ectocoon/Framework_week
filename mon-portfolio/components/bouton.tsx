import Link from "next/link";

type Props = {
    label: string,
    href: string,
    variante?: "plein" | "contour"
}

export default function Bouton({ label, href, variante = "plein" }: Props) {

    const style =
        variante === "plein"
            ? "bg-accent text-white hover:opacity-90" //la variante plein
            : "border border-bordure hover:border-accent hover:text-accent" //la variante contour

    return (
        <Link href={href} className={`inline-block rounded-full px-6 py-2.5 text-sm font-medium transition ${style}`}>
            {label}
        </Link>
    )
}
