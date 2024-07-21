import { getAllBooks } from "@/services/books"
import { BooksResponse } from "@/types/types"
import { useQuery } from "@tanstack/react-query"

export const useBooks = () => {
    return useQuery<BooksResponse>({
        queryKey: ['books'],
        queryFn: getAllBooks,
        initialData: { data: [] }
      })
}
