import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Projects from './pages/Projects'
import Testimonials from "./pages/Testimonials"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Navbar from './components/Navbar'


function App() {

  return (
    <div className="App">
       <h1 className='text-red-500'>react</h1>
       <Navbar/>
       <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/projects' element={<Projects/>} />
         <Route path='/testimonials' element={<Testimonials/>} />
         <Route path='/contact' element={<Contact/>} />
       </Routes>
    </div>
  )
}

export default App
