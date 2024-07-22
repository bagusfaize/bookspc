'use client'

import BookList from "@/components/BookList";
import Pagination from "@/components/Pagination";
import useCombinedData from "@/hooks/useCombinedData";
import { useBooks } from "@/hooks/useBooksQuery";
import useBookStore from "@/store/useBookStore";

export default function Home() {

  const { data, isFetched } = useBooks();
  const { books: localBooks } = useBookStore();

  const {
    currentItems,
    currentPage,
    handleNextPage,
    handlePrevPage
  } = useCombinedData({ fetchedBooks: data.data, localBooks, isFetched })

  return (
    <main>
      <BookList 
        books={currentItems}
        isLoading={!isFetched}
      />
      <Pagination
        currentPage={currentPage}
        onPrev={handlePrevPage}
        onNext={handleNextPage}
      />
    </main>
  );
}
