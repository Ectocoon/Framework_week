type Props = {
    params: Promise<{ slug: string }>
}

export default async function PageProjet({ params }: Props) {
    const { slug } = await params

    return (
        <main className="mx-auto max-w-3xl px-6 py-16">
            <h1 className="text-4xl font-extrabold">Projet : {slug}</h1>
        </main>
    )
}
