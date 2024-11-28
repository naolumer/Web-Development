import React, { useState } from 'react'
import { UserCContext } from './LoginContext'
import { useContext } from 'react'
import style from './Login.module.css'

function Login() {
    const {Loginn,isLoggedIn} = useContext(UserCContext)
    const [name,setName] = useState("")
    const [pass,setPass] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        setName("")
        setPass("")
}
    function LogOut(){
        Loginn()
        setName("")
        setPass("")
    }
  return (
    <>
    {isLoggedIn?
    <div className={style.userDisplay}>
        <h1>Username : {name}</h1>
        <h1>Password: {pass}</h1>
        <button type='submit' onClick={LogOut}>Log Out</button>

    </div>:
    <form className={style.form} onSubmit={handleSubmit}>
         <h4>Username</h4>
        <input type="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter username...' />
        <h4>Password</h4>
        <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)} placeholder='Password' />
        <button onClick={Loginn} type='submit'>Log In</button>
    </form>
     }
    </>
    

  )
}

export default Login