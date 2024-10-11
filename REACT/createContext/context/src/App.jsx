import { createContext } from "react"
import { useState } from "react"
import CheckOut from "./CheckOut.jsx";
import Login from "./Login.jsx";
 
export const userContext = createContext();
function App() {
 
  const [user, setUser] = useState("guess");
    
  return (
    <div>
      
      <userContext.Provider value={{user ,setUser}}>
         <Login/>
         <CheckOut />
        
      
      </userContext.Provider>



    </div>
  )
}

export default App
