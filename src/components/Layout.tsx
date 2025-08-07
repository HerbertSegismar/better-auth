import Footer from "./Footer"
import Navbar from "./Navbar";

interface LayoutProps {
    children: React.ReactNode
}
const Layout = ({children}: LayoutProps) => {
  return (
    <div className="twflex relative flex-col min-h-screen w-screen">
      <nav className="absolute top-0">
        <Navbar />
      </nav>
      <main>{children}</main>
      <footer className="absolute bottom-0">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout