import { IBook } from "@/types/types";
import BookCard from "./BookCard"
import Title from "./Title";

interface BookListProps {
    books: IBook[]
}

const BookList = ({ books }: BookListProps) => {
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
        </>
    )
}

export default BookList;