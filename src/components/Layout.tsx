interface LayoutProps {
    children: React.ReactNode
}
const Layout = ({children}: LayoutProps) => {
  return (
    <div className="twflex min-h-screen w-screen text-3xl text-amber-500">
        {children}
    </div>
  )
}

export default Layout