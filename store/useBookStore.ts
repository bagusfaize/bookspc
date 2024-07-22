import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { IBook } from '@/types/types';
import toast from 'react-hot-toast';

interface BookStore {
    books: IBook[],
    addNewBook: (book: IBook) => void,
    removeBook: (bookId: number) => void,
    getBookById: (bookId: number) => void;
}

const useBookStore = create<BookStore>()(
    persist(
        (set, get) => ({
            books: [],
            addNewBook: (newBook: IBook) => {
                set((state) => ({books: [...state.books, newBook]}));
                toast.success('Successfully added new book!');
            },
            removeBook: (bookId: number) => {
                set((state) => ({ books: state.books.filter((book) => book.id !== bookId) }));
                toast.success('Removed from localstorage!');
            },
            getBookById: (bookId: number) => {
                const { books } = get();
                return books.find(book => book.id === bookId);
              }
        }),
        {
            name: 'localbooks'
        }
    )
)

export default useBookStore;