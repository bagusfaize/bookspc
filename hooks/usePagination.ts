import { IBook } from "@/types/types";
import { useState } from "react"

interface UsePaginationProps {
    items: IBook[]
}

const usePagination = ({
    items,
}: UsePaginationProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    const totalPages = Math.ceil(items.length/itemsPerPage);

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentItems = items.slice(firstIndex, lastIndex);

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

export default usePagination;