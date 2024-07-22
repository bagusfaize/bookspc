import { IBook } from "@/types/types";
import { useEffect, useState } from "react"

interface UseCombinedDataProps {
  isFetched: boolean,
  fetchedBooks: IBook[],
  localBooks: IBook[]
}

const useCombinedBooks = ({
  isFetched,
  fetchedBooks,
  localBooks
}: UseCombinedDataProps) => {
  const [combinedBooks, setCombinedBooks] = useState<IBook[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    if (isFetched) { 
      const combinedBooks = [...fetchedBooks, ...localBooks];
      setCombinedBooks(combinedBooks);
    }
  }, [fetchedBooks, localBooks, isFetched])
  

  // console.log('clg localBooks', localBooks);

  const totalPages = Math.ceil(combinedBooks.length / itemsPerPage);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = combinedBooks.slice(firstIndex, lastIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return {
    currentItems,
    currentPage,
    handleNextPage,
    handlePrevPage
  }

}

export default useCombinedBooks;