import { IBook } from '@/types/types'
import { HeartIcon } from '@heroicons/react/24/solid';
import { HeartIcon as HeartIconOutline, TrashIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import styles from '@/styles/bookcard.module.scss';
import { useState } from 'react';
import Link from 'next/link';
import useWishlistStore from '@/store/useWishlistStore';
import useBookStore from '@/store/useBookStore';
import useLogin from '@/hooks/useLogin';

interface BookCardProps {
    book: IBook,
}

const BookCard = ({
    book,
}: BookCardProps) => {
    const { addToWishlist, removeFromWishlist, isBookInWishlist } = useWishlistStore();
    const { removeBook } = useBookStore();
    const { isLogin } = useLogin();

    const handleWishlistToggle = () => {
        if (isBookInWishlist(book.id)) {
            removeFromWishlist(book.id);
        } else {
            addToWishlist(book);
        }
    };

    const handleRemoveBook = () => {
        removeBook(book.id)
    }

    const [imgSource, setImgSource] = useState(book.cover);
    const newBookLabel = book.id <= 3;
    const handleErrorImg = () => setImgSource("/images/cover-fallback.jpg");

    return (
        <div className={styles.card}>
            <Link href={`/details/${book.id}`}>
                <Image
                    src={imgSource}
                    width={150}
                    height={200}
                    alt={`book-${book.title}`}
                    style={{ borderRadius: 10 }}
                    onError={handleErrorImg}
                />
            </Link>
            <div className={styles.body}>
                <div className={`flex items-center ${newBookLabel ? "flex justify-between" : "flex justify-end"}`}>
                    {newBookLabel && <span className={styles.label}>NEW!</span>}
                    {!isLogin &&
                        <button
                            onClick={handleWishlistToggle}
                            className={styles.wishlist}
                        >
                            {isBookInWishlist(book.id) ? <HeartIcon style={{ color: 'red', width: 22, height: 22 }} /> : <HeartIconOutline style={{ color: 'red', width: 22, height: 22 }} />}

                        </button>
                    }
                    {isLogin &&
                        <button
                            onClick={handleRemoveBook}
                            className={styles.wishlist}
                        >
                            <TrashIcon color='red' width={22} />
                        </button>
                    }
                </div>
                <Link href={`/details/${book.id}`} className={styles.desc}>
                    <h1 className={styles.title}>{book.title}</h1>
                    <h5 className={styles.author}>{book.author}</h5>
                </Link>
            </div>

        </div>
    )
}

export default BookCard;