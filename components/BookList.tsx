import { IBook } from "@/types/types";
import BookCard from "./BookCard"
import Title from "./Title";
import { BookCardSkeleton } from "./Skeletons";

interface BookListProps {
    books: IBook[],
    isLoading: boolean
}

const BookList = ({ books, isLoading }: BookListProps) => {

    return (
        <>
            <Title text="All Books" />
            <div className="flex justify-between">
                {books.map(book => (
                    <BookCard
                        key={book.id}
                        book={book}
                    />
                ))}
            </div>
            {isLoading && <LoadingSkeleton />}
        </>
    )
}

export default BookList;

const LoadingSkeleton = () => {
    return (
        <div className="flex justify-between">
            {Array.from({ length: 5 }).map((_, index) => (
                <BookCardSkeleton key={index} />
            ))}
        </div>
    )
}