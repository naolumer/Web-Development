import React from 'react'
import Nav from './Navigation/Nav'
import Recommended from './Recommended/Recommended'
import Products from './Products/Products'
import Sidebar from './Sidebar/Sidebar'

function App() {
  return (
    <div>
    <Sidebar/>
    <Nav/>
    <Recommended/>   
    <Products/>
    
     

    </div>
  )
}

export default App