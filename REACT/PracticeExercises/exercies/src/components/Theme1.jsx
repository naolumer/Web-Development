import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function Theme1() {
    const {toggleTheme,theme,setTheme} = useContext(ThemeContext)
  return (
    <div className={theme}>
        <button onClick={toggleTheme} style={{border:"2px solid black",borderRadius:"8px",padding:"5px 12px"}} >CHANGE THEME</button>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ea.</h1>
        <div style={{border:"1px solid white"}}>
            <ol>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere deleniti labore alias.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere deleniti labore alias.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere deleniti labore alias.</li>
            </ol>
            <input style={{padding:"10px 30px"}} type="text" placeholder='Enter What You Want' />
            <button style={{padding:"6px 25px"}}>Submit</button>

        </div>

    </div>
  )
}

export default Theme1