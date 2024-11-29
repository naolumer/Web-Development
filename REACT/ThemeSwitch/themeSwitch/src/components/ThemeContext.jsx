import React, { useEffect } from 'react'
import { createContext } from 'react'
import { useState } from 'react'

export const ThemeCContext =createContext()


function ThemeContextProvider({children}) {
    const prevTheme=localStorage.getItem("theme")

    const [theme,setTheme] = useState(prevTheme || "light")

    const toggleTheme = ()=> {
        const newTheme = theme ==="light"?"dark":"light"
        setTheme(newTheme)
        localStorage.setItem("theme",newTheme) 
    }

    useEffect(()=>{
        document.body.className = theme==="light"?"dark-theme": "light-theme"

    },[theme])

    
  return (
    <ThemeCContext.Provider value={{toggleTheme,setTheme,theme}}>
        {children}
    </ThemeCContext.Provider>
  )
}

export default ThemeContextProvider