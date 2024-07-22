import DashboardLayout from "@/layouts/DashboardLayout"

export default function Dashboard({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  )
}