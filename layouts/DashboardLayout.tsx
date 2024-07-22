'use client'
import styles from '@/styles/dashboard.module.scss';
import { CircleStackIcon, HeartIcon, InformationCircleIcon, PowerIcon, StarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const router = useRouter();
  const onLogout = () => router.push('/');

  return (
    <section>
      <div className={styles.dashboard}>
        <aside className={styles.sidebar}>
          <nav className={styles.menu}>
            <Link href={"/dashboard/local"} className={styles.menuItem}>
              <CircleStackIcon height={20} color="#e74c3c" />
              <span>Local Book</span>
            </Link>
            <Link href={"#"} className={styles.menuItem}>
              <StarIcon height={20} />
              <span>Featured Book</span>
            </Link>
            <Link href={"#"} className={styles.menuItem}>
              <HeartIcon height={20} />
              <span>Wishlist</span>
            </Link>
            <Link href={"#"} className={styles.menuItem}>
              <InformationCircleIcon height={20} />
              <span>About</span>
            </Link>
          </nav>
          <div className={styles.logoutButton}
            onClick={onLogout}
          >
            <PowerIcon height={20} />
            <span>Logout</span>
          </div>
        </aside>
        <main className={styles.content}>
          {children}
        </main>
      </div>
    </section>
  )
}

export default DashboardLayout;