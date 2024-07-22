'use client'

import BookCard from '@/components/BookCard';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import useBookStore from '@/store/useBookStore';
import styles from '@/styles/dashboard.module.scss';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const LocalBook = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { books: localBooks } = useBookStore();

    const handleOpenModal = () => setIsOpen(true);
    const handleCloseModal = () => setIsOpen(false);

    return (
        <section>
            <div>
                <h3 className={styles.sectionTitle}>Local Book</h3>
                <p className={styles.sectionDesc}>Manage your books in localstorage</p>
            </div>
            <div className={styles.sectionContent}>
                <Button size='small' onClick={handleOpenModal} text='Add Book' />
            </div>
            <div className={styles.bookWrapper}>
                {localBooks.length === 0 ? (
                    <EmptyState />
                ) : (
                    localBooks.map(book => (
                        <BookCard
                            key={book.id}
                            book={book}
                        />
                    ))
                )}
            </div>
            <Modal
                isOpen={isOpen}
                onClose={handleCloseModal}
            />
        </section>
    )
}

const EmptyState = () => {
    return (
        <div className={styles.emptyState}>
            <InformationCircleIcon width={25} />
            <span>No books available</span>
        </div>
    )
}

export default LocalBook;