import React from 'react'
import Home from './Pages/Home/Home'
import {Routes, Route} from 'react-router-dom'
import Login from './Pages/Login/Login'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
      

    </div>
  )
}

export default App
