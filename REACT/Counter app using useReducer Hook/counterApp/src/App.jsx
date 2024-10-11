import { useState } from 'react'
import Counter from './Counter'
import Counter2 from './Counter2'
import BankAccount from './BankAccount'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Dashboard from './pages/Dashboard'
import PageNotFound from './pages/PageNotFound'
import Home from './pages/Home'
import Nav from './Nav'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Products from './pages/Products'



function App() {
  

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:id' element={<Products/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}>
            <Route path='profile' element={<Profile/>}/>
            <Route path='settings' element={<Settings/>}/>
        </Route>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='/BankAccount' element={<BankAccount/>}/>
      </Routes>
    
    
    </BrowserRouter>
    


      
      
  )
}

export default App
