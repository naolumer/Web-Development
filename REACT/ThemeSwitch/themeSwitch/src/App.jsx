import React from 'react'
import ThemeContextProvider from './components/ThemeContext'
import ThemeSwitcher from './components/ThemeSwitcher'
import CounterUsingUseReducer from './components/CounterUsingUseReducer'

function App() {
  return (
    <div>
      <ThemeSwitcher/>
      <CounterUsingUseReducer/>
      
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