import { useEffect, useState } from 'react'
import { IBook } from '@/types/types'

const WISHLIST_KEY = 'wishlist';

const useWishlist = () => {

    const getInitialWishlist = () => {
        if (typeof localStorage !== 'undefined') {
            const storedWishlist = localStorage.getItem(WISHLIST_KEY);
            return storedWishlist ? JSON.parse(storedWishlist) : [];
        } else {
            return [];
        }
    }

    const [wishlist, setWishlist] = useState<IBook[]>(getInitialWishlist());
    
    useEffect(() => {
        localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
    }, [wishlist]);

    const addToWishlist = (newBook: IBook) => {
        setWishlist((prevWishlist) => {
            const updatedWishlist = [...prevWishlist, { ...newBook }];
            return updatedWishlist;
        });
    }

    const removeFromWishlist = (bookId: number) => {
        setWishlist((prevWishlist) => prevWishlist.filter((book) => book.id !== bookId));
    };

    const isBookInWishlist = (bookId: number): boolean => {
        return wishlist.some((book) => book.id === bookId);
    };

    return {
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isBookInWishlist,
    }
}

export default useWishlist;