import React from 'react'
import ThemeContextProvider from './components/ThemeContext'
import ThemeSwitcher from './components/ThemeSwitcher'
import CounterUsingUseReducer from './components/CounterUsingUseReducer'
import UseRefHook from './components/UseRefHook'
import UseRefTimer from './components/UseRefTimer'

function App() {
  return (
    <div>
      {/* <ThemeSwitcher/>
      <CounterUsingUseReducer/>
      <UseRefHook/> */}
      <UseRefTimer/>
      
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