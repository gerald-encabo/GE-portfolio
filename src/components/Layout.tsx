import Router from "@/routes/Router"
import ScrollToTop from '@/components/ScrollToTop'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Spinner from '@/components/Spinner';
import { Suspense } from "react"

const Layout = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar/>
        <Suspense fallback={<Spinner />}>
          <Router />
          <Footer/>
        </Suspense>
    </div>
  )
}
export default Layout