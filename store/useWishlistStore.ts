import { IBook } from "@/types/types";
import toast from "react-hot-toast";
import { create } from "zustand";
import { persist } from "zustand/middleware";


interface WishlistProps {
    wishlist: IBook[],
    addToWishlist: (book: IBook) => void,
    removeFromWishlist: (bookId: number) => void,
    isBookInWishlist: (bookId: number) => boolean,
}

const useWishlistStore = create<WishlistProps>()(
    persist(
        (set, get) => ({
            wishlist: [],
            addToWishlist: (book: IBook) => {
                set((state) => {
                    if (!state.wishlist.some((item) => item.id === book.id)) {
                        return { wishlist: [...state.wishlist, book] };
                    }
                    return state;
                });
                toast.success('Added to wishlist!');
            },
            removeFromWishlist: (bookId) => {
                set((state) => ({ wishlist: state.wishlist.filter((book) => book.id !== bookId) }));
                toast.success('Removed from wishlist!');
            },
            isBookInWishlist: (bookId) => get().wishlist.some((book) => book.id === bookId),
        }),
        {
            name: 'wishlist'
        }
    )

)

export default useWishlistStore;
