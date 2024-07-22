'use client'

import { useParams } from "next/navigation"
import layoutStyles from "@/styles/layout.module.scss";
import { useBookById } from "@/hooks/useBooks";
import BookDetails from "@/components/BookDetails";

export default function Details() {
    const params = useParams();
    const selectedId = Number(params.id);

    const { data, isFetched } = useBookById(selectedId);

    return (
        <main className={layoutStyles.container}>
            <BookDetails 
                book={data}
                isLoading={!isFetched}
            />
        </main>
    )
}