import { getAllBooks, getBookById } from "@/services/books"
import { BooksResponse, IBook } from "@/types/types"
import { useQuery } from "@tanstack/react-query"

export const useBooks = () => {
    return useQuery<BooksResponse>({
        queryKey: ['books'],
        queryFn: getAllBooks,
        initialData: { data: [] }
    })
}

export const useBookById = (id: number) => {
    return useQuery({
        queryKey: ['book', id],
        queryFn: () => getBookById(id),
        enabled: !!id,
        initialData: {}
    })
}