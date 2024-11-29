import React from 'react'
import { useContext } from 'react'
import { ThemeCContext } from './ThemeContext'

function ThemeSwitcher() {
    const {toggleTheme,theme} = useContext(ThemeCContext)
  return (
    <div>
        <h1>Theme Switcher</h1>
        <h3>Current Theme : {theme}</h3>
        <button type='submit' onClick={toggleTheme}> Switch to {theme==="light"?"darkMode":"LightMode"}</button>
    </div>
  )
}

export default ThemeSwitcher