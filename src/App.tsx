import '@/styles/global-style.scss';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ScrollToTop from '@/components/ScrollToTop'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import About from '@/pages/About';
import Resume from '@/pages/Resume';
import Project from '@/pages/Project';
import Contact from '@/pages/Contact';

function App() {

  return (
    <div className="App">
      <Router>
          <ScrollToTop />
          <Navbar/>
          <Routes>
              <Route path='/' element={ <About /> } />
              <Route path='/resume' element={ <Resume /> } />
              <Route path='/project' element={ <Project /> }/>
              <Route path='/contact' element={ <Contact /> } />
              <Route path='/*' element={ <Navigate to="/" /> }/>
          </Routes>
          <Footer/>
      </Router>
    </div>
  )
}

export default App
