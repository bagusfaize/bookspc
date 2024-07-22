import ContentLoader from "react-content-loader"
import styles from '@/styles/bookcard.module.scss'

export const BookCardSkeleton = () => {
  return (
    <div className={styles.card}>
      <ContentLoader backgroundColor="#d6d6d6" viewBox="0 0 150 300" height={300} width={150}>
        <rect x="0" y="0" rx="10" ry="10" width="150" height="200" />
        <rect x="0" y="215" rx="5" ry="5" width="50" height="20" />
        <rect x="0" y="245"rx="5" ry="5" width="150" height="20" />
        <rect x="0" y="275" rx="5" ry="5" width="150" height="20" />
      </ContentLoader>
    </div>
  )
}

export const BookDetailsSkeleton = () => {
  return (
    <div>
      <ContentLoader backgroundColor="#d6d6d6" viewBox="0 0 900 500" height={500} width={900}>
        <rect x="25" y="50" rx="10" ry="10" width="150" height="200" />
        <rect x="200" y="50" rx="5" ry="5" width="200" height="23" />
        <rect x="200" y="90" rx="5" ry="5" width="100" height="23" />
        <rect x="200" y="180" rx="5" ry="5" width="700" height="23" />
        <rect x="200" y="220" rx="5" ry="5" width="700" height="23" />
        <rect x="25" y="320" rx="5" ry="5" width="120" height="23" />
        <rect x="25" y="380" rx="5" ry="5" width="900" height="23" />
        <rect x="25" y="420" rx="5" ry="5" width="900" height="23" />
      </ContentLoader>
    </div>
  )
}