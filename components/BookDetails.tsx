import Image from "next/image";
import styles from "@/styles/bookdetails.module.scss";
import { ArrowLeftIcon, HeartIcon, StarIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { IBook, IReview } from "@/types/types";
import { StarIcon as StarOutlineIcon, HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { mockReviews } from "@/constants/mockdata";
import { BookDetailsSkeleton } from "./Skeletons";
import useWishlistStore from "@/store/useWishlistStore";
import { useRouter } from "next/navigation";

interface BookDetailsProps {
    book: IBook,
    isLoading: boolean
}

interface StarRatingProps {
    rating: number;
}

interface WishlistProps {
    book: IBook
}

interface ReviewsProps {
    reviews: IReview[];
}

const BookDetails = ({ book, isLoading }: BookDetailsProps) => {
    const router = useRouter()

    const handleGoBack = () => router.back()

    if (isLoading) {
        return <LoadingSkeleton />
    }

    return (
        <div className={styles.section}>
            <div onClick={handleGoBack} className={styles.backNav}>
                <span><ArrowLeftIcon width={20} height={20} /></span>
                <h4 style={{ margin: 0, fontWeight: 600 }}>Details</h4>
            </div>
            <div className={styles.content}>
                <Image
                    src={book.cover}
                    width={150}
                    height={200}
                    alt={`book-${book.title}`}
                    style={{ borderRadius: 10 }}
                />
                <div className={styles.details}>
                    <div className={styles.field}>
                        <div className={styles.titleWishlist}>
                            <h4 className={styles.bookTitle}>{book.title}</h4>
                            <Wishlist book={book}/>
                        </div>
                        <div className={styles.tags}>
                            <span className={styles.author}>by {book.author}</span>
                        </div>
                        <div>
                            <StarRating rating={4} />
                        </div>
                    </div>
                    <div className={styles.field}>
                        <div className={styles.title}>Description</div>
                        <span className={styles.desc}>{book.description}</span>
                    </div>
                </div>
            </div>
            <div className={styles.reviewSection}>
                <h4 style={{ margin: 0, fontWeight: 600 }}>Reviews</h4>
                <Reviews reviews={mockReviews} />
            </div>
        </div>
    )
}


const StarRating = ({ rating }: StarRatingProps) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<StarIcon width={17} height={17} key={i} color="#ffc107" />);
        } else {
            stars.push(<StarOutlineIcon width={17} height={17} key={i} color="#ffc107" />);
        }
    }

    return (
        <div className={styles.rating}>
            {stars}
        </div>
    )
}

const Reviews = ({ reviews }: ReviewsProps) => {
    return (
        <div>
            {reviews.map(review => (
                <div key={review.id} className={styles.reviewItem}>
                    <div className={styles.profile}>
                        <UserCircleIcon color="#e74c3c" width={45} height={45} />
                        <div>
                            <div className={styles.reviewerName}>{review.name}</div>
                            <StarRating rating={review.rating} />
                        </div>
                    </div>
                    <div>
                        <div className={styles.reviewerDesc}>{review.review}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

const Wishlist = ({book}: WishlistProps) => {
    const { isBookInWishlist, addToWishlist, removeFromWishlist } = useWishlistStore();

    const handleWishlistToggle = () => {
        if (isBookInWishlist(book.id)) {
            removeFromWishlist(book.id);
        } else {
            addToWishlist(book);
        }
    }

    return (
        <button onClick={handleWishlistToggle} className={styles.wishlistButton}>
            {isBookInWishlist(book.id) ? <HeartIcon color="red" height={22} width={22} />: <HeartIconOutline color="red" height={22} width={22} />}
        </button>
    )
}

const LoadingSkeleton = () => {
    return (
        <div className={styles.section}>
            <BookDetailsSkeleton />
        </div>
    )
}

export default BookDetails;