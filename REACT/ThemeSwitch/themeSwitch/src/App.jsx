import React from 'react'
import ThemeContextProvider from './components/ThemeContext'
import ThemeSwitcher from './components/ThemeSwitcher'

function App() {
  return (
    <div>
      <ThemeSwitcher/>
    </div>
  )
}

function AppProvider(){
  return (
    <ThemeContextProvider>
      <App/>
    </ThemeContextProvider>
  )
}

export default AppProvider