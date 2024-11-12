import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className='w-full overflow-hidden'> 
      <Header/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
    </div>
  )
}

export default App