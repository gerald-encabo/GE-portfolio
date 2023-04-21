import Router from "@/routes/Router"
import ScrollToTop from '@/components/ScrollToTop'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Spinner from '@/components/Spinner';
import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";

const Layout = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar/>
        <ErrorBoundary 
          FallbackComponent={ErrorFallback} 
          onError={() => console.log("Error happened!")}
        >
          <Suspense fallback={<Spinner />}>
            <Router />
            <Footer/>
          </Suspense>
        </ErrorBoundary>
    </div>
  )
}
export default Layout