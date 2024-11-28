import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

export const ThemeContext = createContext();

function ThemeProvider({children}) {

    const [theme, setTheme] = useState("light")

    const toggleTheme = ()=> {
        
        setTheme((prev)=> prev==="light"? "dark": "light")
    }
    
  return (
    <ThemeContext.Provider value={{theme,setTheme,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider