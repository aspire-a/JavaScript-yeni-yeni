'use client';

interface Props {
    params: {
        slug: string
    }
}
export default function Home({params}: Props) {

    return (
        <h1>Hello {params.slug}</h1>

    )
}
