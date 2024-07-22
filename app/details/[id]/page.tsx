'use client'

import { useParams } from "next/navigation"
import layoutStyles from "@/styles/layout.module.scss";
import { useBookById } from "@/hooks/useBooksQuery";
import BookDetails from "@/components/BookDetails";
import useBookStore from "@/store/useBookStore";

export default function Details() {
    const params = useParams();
    const selectedId = Number(params.id);

    const isLocalBook = selectedId.toString().length > 5;
    const getBookById = useBookStore((state) => state.getBookById);
    const localBookData = getBookById(selectedId);

    const { data: fetchedData, isFetched } = useBookById(selectedId, !isLocalBook);
    const selectedBookData = isLocalBook ?  localBookData : fetchedData;

    return (
        <main className={layoutStyles.container}>
            <BookDetails 
                book={selectedBookData}
                isLoading={!isLocalBook && !isFetched}
            />
        </main>
    )
}