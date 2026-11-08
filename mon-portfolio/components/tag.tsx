type Props = {
    label: string
}

export default function Tag({ label }: Props) {
    return (
        <li className="rounded-full border border-neutral-600 px-2 py-0.5 text-xs text-neutral-400">
            {label}
        </li>
    )
}
