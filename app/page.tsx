'use client'

import styles from "@/styles/layout.module.scss";
import BookList from "@/components/BookList";
import Pagination from "@/components/Pagination";
import usePagination from "@/hooks/usePagination";
import { useBooks } from "@/hooks/useBooks";

export default function Home() {

  const { data, isFetched } = useBooks()

  const {
    currentItems,
    currentPage,
    handleNextPage,
    handlePrevPage
  } = usePagination({ items: data.data })

  return (
    <main className={styles.container}>
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
