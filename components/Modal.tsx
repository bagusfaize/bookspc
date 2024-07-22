import { Modal as ReactModal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import styles from '@/styles/modal.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IBook } from '@/types/types';
import Button from './Button';
import useBookStore from '@/store/useBookStore';

interface ModalProps {
    isOpen: boolean,
    onSubmit?: () => void,
    onClose: () => void

}

const Modal = ({ isOpen, onSubmit, onClose }: ModalProps) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IBook>();
    const { addNewBook } = useBookStore();

    const handleFormSubmit: SubmitHandler<IBook> = (data) => {
        const newBook = {
            id: Date.now(),
            title: data.title,
            cover: data.cover,
            description: data.description,
            publicationDate: data.publicationDate,
            author: data.author,

        }
        addNewBook(newBook);
        onClose();
        reset();
    };

    const validateUrl = (value: string) => {
        const urlPattern = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/;
        if (!urlPattern.test(value)) {
          return 'Invalid URL format';
        }
        return true;
      };

    return (
        <ReactModal
            open={isOpen}
            onClose={onClose}
            center
            classNames={{
                modal: styles.customModal,
            }}
        >
            <h3>Add New Book</h3>
            <form>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="title">Title</label>
                    <input className={styles.input} id="title" {...register('title', { required: true })} />
                    {errors.title && <span className={styles.errorMessage}>This field is required</span>}
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="cover">Cover URL</label>
                    <input className={styles.input} type='url' id="cover" {...register('cover', { required: true, validate: validateUrl })} />
                    {errors.cover && <span className={styles.errorMessage}>{errors.cover.message || 'This field is required'}</span>}
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="author">Author</label>
                    <input className={styles.input} id="author" {...register('author', { required: true })} />
                    {errors.author && <span className={styles.errorMessage}>This field is required</span>}
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="publicationDate">Publication Date</label>
                    <input type='date' className={styles.input} id="publicationDate" {...register('publicationDate', { required: true })} />
                    {errors.publicationDate && <span className={styles.errorMessage}>This field is required</span>}
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="description">Description</label>
                    <textarea className={styles.textarea} id="description" {...register('description', { required: true })}></textarea>
                    {errors.description && <span className={styles.errorMessage}>This field is required</span>}
                </div>
                <div className={styles.footer}>
                    <Button text='Submit' onClick={handleSubmit(handleFormSubmit)}/>
                </div>
            </form>
        </ReactModal>
    )
}

export default Modal;