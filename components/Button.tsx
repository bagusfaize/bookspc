import styles from '@/styles/button.module.scss';

interface ButtonProps {
    onClick: () => void;
    text: string;
    type?: 'primary' | 'secondary';
    size?: 'small' | 'normal';
}

const Button = ({ onClick, text, type = 'primary', size = 'normal' }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`${styles.button} ${type === 'primary' ? styles.primary : styles.secondary} ${size === 'small' ? styles.small : styles.normal}`}

        >
            {text}
        </button>
    )
}

export default Button;