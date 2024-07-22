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
            <div className="flex justify-start gap-md">
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

const LoadingSkeleton = () => {
    return (
        <div className="flex justify-start gap-md">
            {Array.from({ length: 5 }).map((_, index) => (
                <BookCardSkeleton key={index} />
            ))}
        </div>
    )
}

export default BookList;