import Tag from "./tag"

type Props = {
    tags: string[]
}

export default function ListeTags({ tags }: Props) {
    return (
        <ul className="flex flex-wrap gap-2">
            {tags.map((tag) => (
                <Tag key={tag} label={tag} />
            ))}
        </ul>
    )
}
