import { lazy } from "react"
import { Routes, Route, Navigate } from 'react-router-dom'

const About = lazy(() => 
  import("@/pages/About")
    .then(module => { return { default: module.About } 
}));
const Resume = lazy(() => 
  import("@/pages/Resume")
    .then(module => { return { default: module.Resume } 
}));
const Project = lazy(() => 
  import("@/pages/Project")
    .then(module => { return { default: module.Project } 
}));
const Contact = lazy(() => 
  import("@/pages/Contact")
    .then(module => { return { default: module.Contact } 
}));

const Router = () => {
  return (
    <>
      <Routes>
          <Route path='/' element={ <About /> } />
          <Route path='/resume' element={ <Resume /> } />
          <Route path='/project' element={ <Project /> }/>
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/*' element={ <Navigate to="/" /> }/>
      </Routes>
    </>
  )
}
export default Router