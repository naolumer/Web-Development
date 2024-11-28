import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'


export const UserCContext = createContext()

function LoginContext({children}) {
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const Loginn = ()=>{
        setIsLoggedIn((prev)=> prev===false? true:false)
    }

    
  return (
    <UserCContext.Provider value={{Loginn,isLoggedIn}}>
        {children}
    </UserCContext.Provider>
  )
}

export default LoginContext