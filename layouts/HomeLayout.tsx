import Header from "@/components/Header";
import styles from "@/styles/layout.module.scss";

const HomeLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <section className={styles.container}>
      <Header />
      {children}
    </section>
  )
}

export default HomeLayout;