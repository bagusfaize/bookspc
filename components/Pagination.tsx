import styles from '@/styles/pagination.module.scss';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface PaginationProps {
    currentPage?: number,
    onNext: () => void,
    onPrev: () => void
}

const Pagination = ({
    currentPage,
    onNext,
    onPrev
}: PaginationProps) => {
    return (
        <nav className={styles.pagination}>
            <button className={styles.button} onClick={onPrev}><ChevronLeftIcon /></button>
            <button className={styles.button} onClick={onNext}><ChevronRightIcon /></button>
        </nav>
    )
}

export default Pagination;