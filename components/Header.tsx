'use client'

import { BookOpenIcon } from "@heroicons/react/24/solid";
import styles from '@/styles/header.module.scss';
import Link from "next/link";
import { useRouter } from 'next/navigation'
import Button from "./Button";
import useLogin from "@/hooks/useLogin";

const Header = () => {
    const router = useRouter();
    const { isLogin } = useLogin();

    const goToDashboard = () => router.push('/dashboard/local');

    return (
        <nav className={styles.header}>
            <Link href='/' className={styles.brand}>
                <BookOpenIcon style={{ color: 'red', width: 25, height: 25 }} />
                <h1 className={styles.logo}>
                    <span className={styles.blackAccent}>BOOK</span>
                    <span className={styles.redAccent}>SPACE</span>
                </h1>
            </Link>
            {!isLogin &&
                <Button
                    size="small"
                    onClick={goToDashboard}
                    text="Dashboard"
                />
            }
        </nav>
    )
}

export default Header;