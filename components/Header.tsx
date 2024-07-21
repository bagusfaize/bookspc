'use client'

import { HeartIcon } from "@heroicons/react/24/outline";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import styles from '@/styles/header.module.scss';
import layoutStyles from "@/styles/layout.module.scss";
import Link from "next/link";

const Header = () => {
    return (
        <div className={layoutStyles.container}>
            <nav className={styles.header}>
                <Link href='#' className={styles.brand}>
                    <BookOpenIcon style={{ color: 'red', width: 25, height: 25 }} />
                    <h1 className={styles.logo}>
                        <span className={styles.blackAccent}>BOOK</span>
                        <span className={styles.redAccent}>SPACE</span>
                    </h1>
                </Link>
                <div>
                    <div className={styles.wishlistBtn}>
                        <HeartIcon style={{ width: 30, height: 30 }} />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;