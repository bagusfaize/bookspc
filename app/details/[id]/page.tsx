'use client'

import { useParams } from "next/navigation"
import layoutStyles from "@/styles/layout.module.scss";
import styles from "@/styles/details.module.scss";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useBookById } from "@/hooks/useBooks";
import Image from "next/image";

export default function Details() {
    const params = useParams();
    const selectedId = Number(params.id);

    const { data } = useBookById(selectedId);

    return (
        <main className={layoutStyles.container}>
            <div className={styles.section}>
                <Link href="/" className={styles.backNav}>
                    <span><ArrowLeftIcon style={{ width: 20, height: 20 }} /></span>
                    <h4 style={{ margin: 0, fontWeight: 600 }}>Details</h4>
                </Link>
                <div className={styles.content}>
                    <Image
                        src={data.cover}
                        width={150}
                        height={200}
                        alt={`book-${data.title}`}
                        style={{ borderRadius: 10 }}
                    />
                    <div className={styles.details}>
                        <div className={styles.field}>
                            <span className={styles.bookTitle}>{data.title}</span>
                            <div className={styles.tags}>
                                <span className={styles.author}>book by {data.author}</span>
                            </div>
                        </div>
                        <div className={styles.field}>
                            <div className={styles.title}>Description</div>
                            <span className={styles.desc}>{data.description}</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}