import Header from "@/components/Header";

const HomeLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <section>
      <Header />
      {children}
    </section>
  )
}

export default HomeLayout;