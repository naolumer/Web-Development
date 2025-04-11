import { useState } from 'react'
import './index.css'

function App() {
  const [user,setUser] = useState("")
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")

  const [userColor,setUserColor] = useState("")
  const [passColor,setPassColor] = useState("")
  const [emailColor,setEmailColor] = useState("")
  const [confirmPassColor,setConfirmPassColor] = useState("")

  const [userError,setUserError] = useState("")
  const [passwordError,setPasswordError] = useState("")
  const [emailError,setEmailError] = useState("")
  const [confirmPassError,setConfirmPassError] = useState("")

  const validate = (e)=> {
    e.preventDefault()

    if (user.length >=8) {
      setUserError("")
      setUserColor("green")
    } else {
      setUserError("Username must be 8 characters or above!")
      setUserColor("red")
    }
    if (password.length >=8) {
      setPasswordError("")
      setPassColor("green")
    } else {
      setPasswordError("Password must contain 8 characters or above!")
      setPassColor("red")
    }
    if (email.includes("@gmail")) {
      setEmailError("")
      setEmailColor("green")
    } else {
      setEmailError("Please enter a valid email address!")
      setEmailColor("red")
    }
    if (confirmPassword===password && password!=="") {
      setConfirmPassError("")
      setConfirmPassColor("green")
    } else {
      setConfirmPassError("Passwords Do not match!")
      setConfirmPassColor("red")
    }
  }

  return (
    
    <div className='container'>
      <div className='img-container'>
        <img  src="" alt="" />
      </div>
      <form className='form'>
        <input 
        type="text"
        style={{borderColor: userColor}}
        placeholder='Username..'
        value={user}
        onChange={(e)=>setUser(e.target.value)} />
        <p>{userError}</p>
        
        <input 
        type="email"
        style={{borderColor: emailColor}}
        placeholder='Email address..'
        value={email}
        onChange={(e)=>setEmail(e.target.value)} />
        <p>{emailError}</p>

        <input 
        type="password"
        style={{borderColor: passColor}}
        placeholder='Password..'
        value={password}
        onChange={(e)=> setPassword(e.target.value)} />
        <p>{passwordError}</p>

        <input 
        type="password"
        style={{borderColor: confirmPassColor}}
        placeholder='Enter password again..'
        value={confirmPassword}
        onChange={(e)=>setConfirmPassword(e.target.value)} />
        <p>{confirmPassError}</p>

        <button type='submit' onClick={validate}>Submit</button>
      </form>
    </div>
  )
}

export default App