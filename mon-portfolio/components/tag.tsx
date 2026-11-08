type Props = {
    label: string
}

export default function Tag({ label }: Props) {
    return (
        <li className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
            {label}
        </li>
    )
}
